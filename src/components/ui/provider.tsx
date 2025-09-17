"use client"

import * as React from "react"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from "@/theme" // nếu bạn có file theme.ts, không thì xoá

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {/* Cho phép Chakra nhận biết light/dark mode */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  )
}
