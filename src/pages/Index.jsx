import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, SimpleGrid, Heading } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering" },
  { id: 2, title: "Product Manager", category: "Product" },
  { id: 3, title: "UI/UX Designer", category: "Design" },
  { id: 4, title: "Backend Developer", category: "Engineering" },
  { id: 5, title: "Project Coordinator", category: "Product" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">Remote Tech Jobs</Heading>
        <Text fontSize="lg">Find your next remote job in tech. Filter by category to narrow down your search.</Text>
        <HStack spacing={4}>
          <Button onClick={() => setFilter("All")} colorScheme={filter === "All" ? "blue" : "gray"}>All</Button>
          <Button onClick={() => setFilter("Product")} colorScheme={filter === "Product" ? "blue" : "gray"}>Product</Button>
          <Button onClick={() => setFilter("Design")} colorScheme={filter === "Design" ? "blue" : "gray"}>Design</Button>
          <Button onClick={() => setFilter("Engineering")} colorScheme={filter === "Engineering" ? "blue" : "gray"}>Engineering</Button>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
          {filteredJobs.map(job => (
            <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">{job.title}</Heading>
              <Text mt={4}>{job.category}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;