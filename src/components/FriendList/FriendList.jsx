import PropTypes from 'prop-types';

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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
