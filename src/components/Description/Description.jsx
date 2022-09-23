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
