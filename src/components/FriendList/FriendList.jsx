import { FriendCard } from 'components/FriendCard/FriendCard';
import { Item, List } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(data => (
        <Item key={data.id}>
          <FriendCard
            avatar={data.avatar}
            name={data.name}
            isOnline={data.isOnline}
          />
        </Item>
      ))}
    </List>
  );
};
