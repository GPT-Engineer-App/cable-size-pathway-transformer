import React from "react";
import { Box, Heading, Text, VStack, Image, Divider } from "@chakra-ui/react";
import { FaIndustry } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading as="h1" size="xl" textAlign="center">
            Transformer Details <FaIndustry />
          </Heading>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg">
            Cable Size
          </Heading>
          <Text fontSize="md">The cable size for the transformer is typically determined based on the current carrying capacity and the voltage drop over the length of the cable. For example, a 1000 kVA transformer might use cables that are 500 mm² in cross-sectional area.</Text>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg">
            Pathway
          </Heading>
          <Text fontSize="md">The pathway for the cables from the transformer to the distribution panel is usually designed to minimize interference and losses. This might include underground conduits or overhead cable trays, depending on the installation environment.</Text>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg">
            Transformer Image
          </Heading>
          <Image src="https://images.unsplash.com/photo-1624535793654-a88b4a1abc8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdHJhbnNmb3JtZXJ8ZW58MHx8fHwxNzE0MTQxMDA4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Electrical Transformer" />
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
