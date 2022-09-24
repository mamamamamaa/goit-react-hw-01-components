import PropTypes from 'prop-types';

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

Marks.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
