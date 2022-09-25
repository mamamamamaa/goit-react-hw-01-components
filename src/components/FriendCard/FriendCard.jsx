import PropTypes from 'prop-types';
import { IsOnline, Name } from './FriendCard.styled';
export const FriendCard = ({ avatar, name, isOnline }) => {
  return (
    <>
      <IsOnline isOnline={isOnline}></IsOnline>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
