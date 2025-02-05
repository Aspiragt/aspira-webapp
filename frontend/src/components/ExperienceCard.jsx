import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import { FiMapPin, FiClock } from 'react-icons/fi';
import ExperienceModal from './ExperienceModal';

const ExperienceCard = ({ experience }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        transition="transform 0.2s"
        _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
        cursor="pointer"
        onClick={onOpen}
      >
        <Image
          src={experience.images[0]?.url}
          alt={experience.title}
          h="200px"
          w="full"
          objectFit="cover"
        />

        <VStack p={4} align="stretch" spacing={3}>
          <Badge
            colorScheme="green"
            alignSelf="flex-start"
            textTransform="capitalize"
          >
            {experience.category}
          </Badge>

          <Text
            fontWeight="bold"
            fontSize="lg"
            noOfLines={2}
          >
            {experience.title}
          </Text>

          <Text
            color="gray.600"
            noOfLines={2}
            fontSize="sm"
          >
            {experience.description}
          </Text>

          <HStack spacing={4} color="gray.600" fontSize="sm">
            <HStack>
              <FiMapPin />
              <Text>{experience.location.city}</Text>
            </HStack>
            <HStack>
              <FiClock />
              <Text>{experience.duration.value} {experience.duration.unit}</Text>
            </HStack>
          </HStack>

          <Text
            fontWeight="bold"
            fontSize="xl"
            color="brand.green"
          >
            ${experience.price.amount.toLocaleString()} {experience.price.currency}
          </Text>

          <Button
            variant="outline"
            colorScheme="brand"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            Ver Detalles
          </Button>
        </VStack>
      </Box>

      <ExperienceModal
        experience={experience}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ExperienceCard;
