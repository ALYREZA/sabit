import { Box, BoxProps } from "../kits/Box";

type ColProps = BoxProps & {
  children: React.ReactNode;
};

export function Col({ children, ...props }: ColProps) {
  return (
    <Box {...props} flexDirection="column" display="flex">
      {children}
    </Box>
  );
}
