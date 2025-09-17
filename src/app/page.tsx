import Link from "next/link";
import { Button, VStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <VStack gap={4} mt={20}>
      <Link href="/auth/login">
        <Button colorScheme="teal">Login</Button>
      </Link>
      <Link href="/auth/signup">
        <Button colorScheme="blue">Sign Up</Button>
      </Link>
    </VStack>
  );
}
