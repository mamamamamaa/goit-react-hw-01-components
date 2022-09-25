import PropTypes from 'prop-types';
import { List, Item, Text } from './Stats.styled';

export const Stats = ({ stats }) => {
  return (
    <List>
      {Object.entries(stats).map((state, index) => (
        <Item key={index}>
          <Text>{state[0]}</Text>
          <Text>{state[1]}</Text>
        </Item>
      ))}
    </List>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
