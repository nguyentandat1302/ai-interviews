"use client"

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react"
import { useRouter } from "next/navigation"

export default function PackageCompany() {
  const router = useRouter()

  return (
    <Flex
      direction="column"
      minH="100vh"
      border="2px solid"
      borderColor="blue.300"
      p={4}
      align="center"
    >
      {/* Logo + Title */}
      <HStack
        spacing={3}
        cursor="pointer"
        mb={4}
        onClick={() => router.push("/auth/dashboard")}
      >
        <Image src="/logo.png" alt="logo" boxSize="50px" borderRadius="full" />
        <Text fontSize="2xl" fontWeight="bold">
          AI-Interview
        </Text>
      </HStack>

      <Box w="100%" borderBottom="1px solid black" mb={6}></Box>

      {/* What's cool section */}
      <Box
        border="1px solid"
        borderColor="blue.200"
        p={6}
        borderRadius="md"
        maxW="700px"
        mb={10}
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          What's cool?
        </Text>
        <Text mb={4} color="gray.600">
          Company*****@Gmail.com
        </Text>

        <VStack spacing={3} align="start">
          <HStack>
            <Text fontSize="2xl" color="green.500">✔</Text>
            <Text>
              Create all company specific questions, and have them regularly
              edited and updated by the company.
            </Text>
          </HStack>

          <HStack>
            <Text fontSize="2xl" color="green.500">✔</Text>
            <Text>
              The company reserves the right to add the candidate&apos;s email
              to the qualifying interview.
            </Text>
          </HStack>
        </VStack>
      </Box>

      {/* Packages */}
      <Flex justify="center" gap={10}>
        <Box
          border="1px solid"
          borderColor="blue.200"
          p={6}
          w="250px"
          textAlign="center"
          borderRadius="md"
        >
          <Text fontWeight="bold" fontSize="lg" color="blue.700">
            3 Month
          </Text>
          <Text fontSize="sm" color="gray.600" mb={2}>
            (90 days)
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            $1000
          </Text>
          <Button
            colorScheme="blue"
            w="full"
            onClick={() => router.push("/purchase")}
          >
            Buy Vip
          </Button>
        </Box>

        <Box
          border="1px solid"
          borderColor="blue.200"
          p={6}
          w="250px"
          textAlign="center"
          borderRadius="md"
        >
          <Text fontWeight="bold" fontSize="lg" color="blue.700">
            6 Month
          </Text>
          <Text fontSize="sm" color="gray.600" mb={2}>
            (180 days)
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            $1850
          </Text>
          <Button
            colorScheme="blue"
            w="full"
            onClick={() => router.push("/purchase")}
          >
            Buy Vip
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}
