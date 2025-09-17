"use client"

import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react"
import NextLink from "next/link"

export default function SignupPage() {
  return (
    <Center minH="100vh" bg="gray.50" flexDirection="column">
      {/* Header */}
      <Flex
        w="100%"
        px={8}
        py={4}
        alignItems="center"
        borderBottom="1px solid"
        borderColor="gray.300"
        mb={8}
      >
        <Image
          src="/logo.png"
          alt="AI-Interview Logo"
          boxSize="50px"
          mr={3}
        />
        <Text fontSize="3xl" fontWeight="semibold">
          AI-Interview
        </Text>
      </Flex>

      {/* Signup Box */}
      <Box
        bg="gray.100"
        w="full"
        maxW="md"
        p={8}
        borderRadius="md"
        boxShadow="sm"
        textAlign="center"
      >
        <Center>
          <Image
            src="/logo.png"
            alt="avatar"
            boxSize="80px"
            mb={4}
          />
        </Center>

        <Text fontSize="lg" fontWeight="medium" mb={1}>
          Create Your Account
        </Text>
        <Text fontSize="sm" color="gray.600" mb={6}>
          Set your password for jinda to continue AI-Interview
        </Text>

        {/* Form */}
        <VStack spacing={4} textAlign="left">
          <FormControl>
            <FormLabel>Email address*</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password*</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormLabel>Re-enter password*</FormLabel>
            <Input type="password" />
          </FormControl>
        </VStack>

        <Button w="full" colorScheme="cyan" mt={6}>
          Continue
        </Button>

        <Text fontSize="sm" mt={4}>
          Don&apos;t have an account?{" "}
          <Link as={NextLink} href="/auth/login" fontWeight="bold">
            Log in
          </Link>
        </Text>
      </Box>
    </Center>
  )
}
