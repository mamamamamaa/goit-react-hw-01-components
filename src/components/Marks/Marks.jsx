import PropTypes from 'prop-types';
import { List, Item, Text } from 'components/Stats/Stats.styled';

export const Marks = ({ stats }) => {
  return (
    <List>
      {stats.map(state => (
        <Item key={state.id}>
          <Text>{state.label}</Text>
          <Text>{state.percentage}</Text>
        </Item>
      ))}
    </List>
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
