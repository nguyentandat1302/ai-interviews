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
  useToast,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/app/lib/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toast = useToast()
  const router = useRouter()

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      setError(null)
      setLoading(true)

      await createUserWithEmailAndPassword(auth, email, password)

      toast({
        title: "Account created",
        description: "You can now log in with your account",
        status: "success",
        duration: 3000,
        isClosable: true,
      })

      router.push("/auth/login")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

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
        <Image src="/logo.png" alt="AI-Interview Logo" boxSize="50px" mr={2} />
        <Text fontSize="2xl" fontWeight="semibold">
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
          <Image src="/logo.png" alt="avatar" boxSize="80px" mb={4} />
        </Center>

        <Text fontSize="lg" fontWeight="medium" mb={1}>
          Create Your Account
        </Text>
        <Text fontSize="sm" color="gray.600" mb={6}>
          Set your password for AI-Interview
        </Text>

        {/* Form */}
        <VStack spacing={4} textAlign="left">
          <FormControl>
            <FormLabel>Email address*</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password*</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Re-enter password*</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
        </VStack>

        {error && (
          <Text color="red.500" fontSize="sm" mt={2}>
            {error}
          </Text>
        )}

        <Button
          w="full"
          colorScheme="cyan"
          mt={6}
          onClick={handleSignup}
          isLoading={loading}
        >
          Continue
        </Button>

        <Text fontSize="sm" mt={4}>
          Already have an account?{" "}
          <Link as={NextLink} href="/auth/login" fontWeight="bold">
            Log in
          </Link>
        </Text>
      </Box>
    </Center>
  )
}
