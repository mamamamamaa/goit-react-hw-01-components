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
