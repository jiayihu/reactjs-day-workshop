import { Box, Heading } from 'theme-ui';
import { useSignedInUser } from '../auth/AuthContext';

export function Budgets() {
  const user = useSignedInUser();

  return (
    <Box>
      <Heading as="h2">Budgets</Heading>
    </Box>
  );
}
