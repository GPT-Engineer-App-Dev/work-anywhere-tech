import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Text, Image } from "@chakra-ui/react";
import headerImage from "../../public/images/job-board-header.jpg";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering" },
  { id: 2, title: "Product Manager", category: "Product" },
  { id: 3, title: "UX Designer", category: "Design" },
  { id: 4, title: "Backend Developer", category: "Engineering" },
  { id: 5, title: "UI Designer", category: "Design" },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Image src={headerImage} alt="Remote Tech Jobs" borderRadius="md" mb={4} />
        <Text fontSize="3xl" fontWeight="bold">
          Remote Tech Jobs
        </Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          Find your next remote job in tech. Filter by category to find the perfect match for your skills and interests.
        </Text>
        <HStack spacing={4}>
          <Button onClick={() => setSelectedCategory("")} colorScheme={selectedCategory === "" ? "blue" : "gray"}>
            All
          </Button>
          <Button onClick={() => setSelectedCategory("Product")} colorScheme={selectedCategory === "Product" ? "blue" : "gray"}>
            Product
          </Button>
          <Button onClick={() => setSelectedCategory("Design")} colorScheme={selectedCategory === "Design" ? "blue" : "gray"}>
            Design
          </Button>
          <Button onClick={() => setSelectedCategory("Engineering")} colorScheme={selectedCategory === "Engineering" ? "blue" : "gray"}>
            Engineering
          </Button>
        </HStack>
        <VStack spacing={4} width="100%">
          {filteredJobs.map((job) => (
            <Box key={job.id} p={4} borderWidth="1px" borderRadius="md" width="100%" bg="gray.50">
              <Text fontSize="xl" fontWeight="bold">{job.title}</Text>
              <Text color="gray.600">{job.category}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;