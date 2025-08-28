import { ReactNode } from "react";
import { Box } from "./Box";

export function Background({ children }: { children: ReactNode }) {
  return (
    <Box as="div" backgroundColor="red" height="100%">
      {children}
    </Box>
  );
}
