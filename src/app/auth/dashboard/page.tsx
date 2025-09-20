"use client"

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Select,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { FaHome, FaBicycle, FaRegFileAlt, FaUser } from "react-icons/fa"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { auth } from "@/app/lib/firebase"
import { signOut } from "firebase/auth"
import { useEffect, useState } from "react"

const generateData = (year: number) => {
  const data: Record<string, boolean> = {}
  const start = new Date(year, 0, 1)
  const end = new Date(year, 11, 31)

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    data[d.toISOString().split("T")[0]] = Math.random() > 0.8
  }
  return data
}

export default function DashboardPage() {
  const router = useRouter()
  const [year, setYear] = useState<number>(2025)
  const [contributions, setContributions] = useState<Record<string, boolean>>(
    {}
  )

  useEffect(() => {
    setContributions(generateData(year))
  }, [year])

  const handleLogout = async () => {
    await signOut(auth)
    router.push("/auth/login")
  }

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  return (
    <Flex h="100vh" border="1px solid" borderColor="gray.300">
      {/* Sidebar */}
      <Box
        w="250px"
        borderRight="1px solid"
        borderColor="gray.300"
        p={4}
        display="flex"
        flexDirection="column"
      >
        <HStack spacing={3} mb={6}>
          <Image src="/logo.png" alt="logo" boxSize="50px" borderRadius="full" />
          <Text fontSize="2xl" fontWeight="bold">
            AI-Interview
          </Text>
        </HStack>

        {/* Menu */}
        <VStack align="start" spacing={4} fontSize="lg" mb="auto">
          <Button
            as={Link}
            href="/auth/dashboard"
            variant="ghost"
            leftIcon={<FaHome />}
            justifyContent="flex-start"
            w="full"
            color="blue.500"
          >
            Home
          </Button>
          <Button
            as={Link}
            href="/components/specialized"
            variant="ghost"
            leftIcon={<FaBicycle />}
            justifyContent="flex-start"
            w="full"
          >
            Specialized Practice
          </Button>
          <Button
            as={Link}
            href="/components/mocktest"
            variant="ghost"
            leftIcon={<FaRegFileAlt />}
            justifyContent="flex-start"
            w="full"
          >
            Mock Test
          </Button>
        
        </VStack>
        <Button
          as={Link}
          href="/premium"
          variant="ghost"
          justifyContent="flex-start"
          w="full"
          mb={2}
        >
          Premium Package Company
        </Button>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<FaUser />}
              rightIcon={<ChevronDownIcon />}
              w="full"
              justifyContent="space-between"
            >
              Account
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} href="/components/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Box flex="1" p={6} bg="gray.50" overflow="auto">
        {/* Top Section */}
        <Flex justify="space-between" align="start" mb={8}>
          <Box maxW="lg">
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              Practice Mock Interview Everyday
            </Text>
            <Text color="gray.600">
              Regularly practicing your subject automatically increases your
              speed and improves your interview performance.
            </Text>
          </Box>

          <Box>
            <Flex justify="flex-end" mb={2}>
              <Select
                size="sm"
                w="100px"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
              >
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
              </Select>
            </Flex>
            <Flex direction="row" gap={2}>
              {months.map((month, mIdx) => (
                <Box key={mIdx}>
                  <Text fontSize="xs" mb={1} textAlign="center">
                    {month}
                  </Text>
                  <Flex direction="row" gap={1}>
                    {[0, 1, 2, 3].map((week) => (
                      <Flex direction="column" gap={1} key={week}>
                        {Array.from({ length: 7 }).map((_, day) => {
                          const dateKey = new Date(
                            year, mIdx, week * 7 + day + 1
                          )
                            .toISOString()
                            .split("T")[0]
                          const active = contributions[dateKey]
                          return (
                            <Box
                              key={day}
                              w="10px"
                              h="10px"
                              borderRadius="2px"
                              bg={active ? "green.400" : "gray.200"}
                            />
                          )
                        })}
                      </Flex>
                    ))}
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>

        <Flex direction="column" align="center" mt={150}>
          <Flex align="center" mb={65} w="full" justify="center">
            <Divider flex="1" borderWidth="2px" />
            <Text mx={3} fontSize="lg" fontWeight="bold" whiteSpace="nowrap">
              Feature
            </Text>
            <Divider flex="1" borderWidth="2px" />
          </Flex>

          <Flex justify="center" gap={6} wrap="wrap">
            {["/f1.png", "/f2.png", "/f3.png", "/f4.png", "/f5.png"].map((src, i) => (
                <Box
                key={i}
                w="200px"
                h="250px"
                bg="white"
                border="10px solid"
                borderColor="gray.300"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                >
                <Image src={src} alt={`Feature ${i + 1}`} objectFit="cover" w="100%" h="100%" />
                </Box>
            ))}
            </Flex>

        </Flex>
      </Box>
    </Flex>
  )
}
