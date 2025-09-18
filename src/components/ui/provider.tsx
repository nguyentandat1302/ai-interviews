"use client"

import * as React from "react"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from "@/theme" 

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  )
}
