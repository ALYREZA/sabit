import { Box, BoxProps } from "../kits/Box";

type RowProps = BoxProps & {
  children: React.ReactNode;
};

export function Row({ children, ...props }: RowProps) {
  return (
    <Box {...props} flexDirection="row" display="flex">
      {children}
    </Box>
  );
}
