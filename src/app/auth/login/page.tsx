"use client"

import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  Image,
  HStack,
  Flex,
} from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import NextLink from "next/link"

export default function LoginPage() {
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

      {/* Login Box */}
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
          Welcome
        </Text>
        <Text fontSize="sm" color="gray.600" mb={6}>
          Log in jinda to continue to AI-Interview
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
        </VStack>

        <Box textAlign="left" mt={2} mb={4}>
          <Link color="cyan.500" fontSize="sm">
            Forgot password?
          </Link>
        </Box>

        <Button w="full" colorScheme="cyan" mb={4}>
          Continue
        </Button>

        <Text fontSize="sm" mb={4}>
          Don&apos;t have an account?{" "}
          <Link as={NextLink} href="/auth/signup" fontWeight="bold">
            Sign up
          </Link>
        </Text>

        <HStack my={4} align="center">
          <Divider />
          <Text fontSize="sm" color="gray.500">
            OR
          </Text>
          <Divider />
        </HStack>

        <Button
          w="full"
          variant="outline"
          leftIcon={<FcGoogle />}
          bg="gray.200"
        >
          Continue with Google
        </Button>
      </Box>
    </Center>
  )
}
