import { Box } from 'theme-ui';
import { useSignedInUser } from '../../auth/AuthContext';

export function Requisition() {
  const user = useSignedInUser();

  return <Box>Requisition</Box>;
}
