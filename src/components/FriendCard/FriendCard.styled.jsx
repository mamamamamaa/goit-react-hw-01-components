import styled from '@emotion/styled';

function isOnline({ isOnline }) {
  return isOnline ? 'green' : 'red';
}

export const IsOnline = styled.span`
  display: inline-flex;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${isOnline};
`;

export const Name = styled.p`
  font-weight: 500;
`;
