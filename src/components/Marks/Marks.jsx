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
