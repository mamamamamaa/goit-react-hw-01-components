// import { Stats } from 'components/Stats/Stats';
import { Marks } from 'components/Marks/Marks';

import { Box, Title } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Box>
      {title && <Title>{title}</Title>}
      <Marks stats={stats} />
    </Box>
  );
};
