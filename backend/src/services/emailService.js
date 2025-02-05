const nodemailer = require('nodemailer');

// Configurar el transporter (para desarrollo usaremos ethereal.email)
const createTestAccount = async () => {
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};

// En producción, usar un servicio real como SendGrid o Gmail
const createProdTransport = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const getTransporter = async () => {
  return process.env.NODE_ENV === 'production'
    ? createProdTransport()
    : await createTestAccount();
};

const sendBookingConfirmation = async (booking) => {
  const transporter = await getTransporter();

  const mailOptions = {
    from: '"Aspira Guatemala" <noreply@aspira.life>',
    to: booking.customer.email,
    subject: 'Confirmación de Reserva - Aspira',
    html: `
      <h1>¡Gracias por tu reserva!</h1>
      <p>Tu reserva para ${booking.experience.title} ha sido confirmada.</p>
      <h2>Detalles de la reserva:</h2>
      <ul>
        <li>Fecha: ${new Date(booking.bookingDate).toLocaleDateString()}</li>
        <li>Número de personas: ${booking.numberOfPeople}</li>
        ${booking.specialRequests ? `<li>Solicitudes especiales: ${booking.specialRequests}</li>` : ''}
      </ul>
      <p>Estado de pago: <strong>${booking.paymentStatus}</strong></p>
      ${booking.giftCode ? `<p>Código de regalo: <strong>${booking.giftCode.code}</strong></p>` : ''}
      <p>Para cualquier consulta, no dudes en contactarnos.</p>
    `
  };

  const info = await transporter.sendMail(mailOptions);
  
  if (process.env.NODE_ENV !== 'production') {
    console.log('Vista previa del email:', nodemailer.getTestMessageUrl(info));
  }

  return info;
};

const sendGiftEmail = async (booking) => {
  if (!booking.recipient || !booking.recipient.email) return;

  const transporter = await getTransporter();

  const mailOptions = {
    from: '"Aspira Guatemala" <noreply@aspira.life>',
    to: booking.recipient.email,
    subject: '¡Te han regalado una experiencia Aspira!',
    html: `
      <h1>¡Has recibido un regalo especial!</h1>
      <p>${booking.customer.name} te ha regalado una experiencia única:</p>
      <h2>${booking.experience.title}</h2>
      <p>${booking.experience.description}</p>
      <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; text-align: center;">
        <h3>Tu código de regalo es:</h3>
        <div style="font-size: 24px; font-weight: bold; color: #2b6cb0; padding: 10px;">
          ${booking.giftCode.code}
        </div>
      </div>
      <p>Para canjear tu regalo, visita:</p>
      <p><a href="https://aspira.life/redeem/${booking.giftCode.code}">aspira.life/redeem/${booking.giftCode.code}</a></p>
      <p>¡Esperamos que disfrutes de esta experiencia única!</p>
    `
  };

  const info = await transporter.sendMail(mailOptions);

  if (process.env.NODE_ENV !== 'production') {
    console.log('Vista previa del email de regalo:', nodemailer.getTestMessageUrl(info));
  }

  return info;
};

module.exports = {
  sendBookingConfirmation,
  sendGiftEmail
};
