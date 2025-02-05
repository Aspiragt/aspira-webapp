const colors = {
  forest: '#2C4A3B',    // Verde Bosque - Color principal
  sand: '#E8E4D9',      // Beige Arena - Color base/fondo
  terra: '#C17F59',     // Terracota - Acentos y CTAs
  white: '#FFFFFF',     // Blanco - Texto y detalles
  
  // Variantes con transparencia
  overlay: {
    forest: 'rgba(44, 74, 59, 0.9)',
    terra: 'rgba(193, 127, 89, 0.1)',
    white: 'rgba(255, 255, 255, 0.1)',
  },

  // Asignación semántica de colores
  base: {
    primary: '#E8E4D9',    // sand
    secondary: '#2C4A3B',  // forest
    tertiary: '#C17F59',   // terra
  },
  content: {
    primary: '#FFFFFF',    // white
    secondary: '#2C4A3B',  // forest
    tertiary: '#C17F59',   // terra
  },
  accent: {
    primary: '#C17F59',    // terra
    hover: '#B37152',      // terra más oscuro
    active: '#A66549',     // terra aún más oscuro
    light: '#E8E4D9',      // sand
  },
  text: {
    light: '#FFFFFF',      // white
    dark: '#2C4A3B',       // forest
  },
  status: {
    success: '#2C4A3B',    // forest
    error: '#C17F59',      // terra
    warning: '#C17F59',    // terra
    info: '#2C4A3B',       // forest
  },
  background: {
    light: '#E8E4D9',      // sand
    dark: '#2C4A3B',       // forest
    overlay: 'rgba(44, 74, 59, 0.5)', // forest con transparencia
  }
};

const typography = {
  fontFamily: {
    display: '"Playfair Display", serif',
    body: '"Inter", sans-serif',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    xxl: '1.5rem',    // 24px
    xxxl: '2rem',     // 32px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  xxl: '3rem',     // 48px
};

const shadows = {
  sm: '0 1px 2px 0 rgba(81, 81, 85, 0.05)',
  md: '0 4px 6px -1px rgba(81, 81, 85, 0.1), 0 2px 4px -1px rgba(81, 81, 85, 0.06)',
  lg: '0 10px 15px -3px rgba(81, 81, 85, 0.1), 0 4px 6px -2px rgba(81, 81, 85, 0.05)',
  xl: '0 20px 25px -5px rgba(81, 81, 85, 0.1), 0 10px 10px -5px rgba(81, 81, 85, 0.04)',
};

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  default: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  xxl: '1rem',
  full: '9999px',
};

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
  breakpoints,
  transitions,
  borderRadius,
};
