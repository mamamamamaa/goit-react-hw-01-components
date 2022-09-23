import styled from '@emotion/styled';
export const List = styled.ul`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  list-style: none;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  background-color: #398282;
`;

export const Item = styled.li`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px;

  &:not(:last-child) {
    border-right: 1px solid #0a3737;
  }
`;

export const Text = styled.span`
  color: #d7d7d7;
`;
