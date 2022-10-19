import { CalendarDatum, ResponsiveTimeRange } from '@nivo/calendar';
import { endOfMonth, startOfMonth } from 'date-fns';
import { Box, Heading } from 'theme-ui';
import { useSignedInUser } from '../auth/AuthContext';

export function Transactions() {
  const user = useSignedInUser();

  const usedAmountForEachDay: CalendarDatum[] = [];

  const now = new Date();

  return (
    <Box>
      <Heading as="h2">Expenses</Heading>

      <Box sx={{ height: '16rem' }}>
        <ResponsiveTimeRange
          data={usedAmountForEachDay}
          from={startOfMonth(now)}
          to={endOfMonth(now)}
          emptyColor="#eeeeee"
          colors={['#D2DDAF', '#B3C824', '#79834E']}
          margin={{ top: 40, right: 0, bottom: 40, left: 40 }}
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
        />
      </Box>
    </Box>
  );
}
