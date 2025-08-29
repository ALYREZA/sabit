import { ReactNode } from "react";
import { Box } from "./Box";

export function Background({ children }: { children: ReactNode }) {
  return (
    <Box px="5" as="div" height="100%">
      {children}
    </Box>
  );
}
