import PropTypes from 'prop-types';
import { Pic, Name, DescriptionBox } from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <DescriptionBox>
      <Pic src={avatar} alt={username} />
      <Name>{username}</Name>
      <p>@{tag}</p>
      <p>{location}</p>
    </DescriptionBox>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
