import { Box } from 'theme-ui';
import { useSignedInUser } from '../auth/AuthContext';

export function Accounts() {
  const user = useSignedInUser();

  return <Box>Accounts</Box>;
}
