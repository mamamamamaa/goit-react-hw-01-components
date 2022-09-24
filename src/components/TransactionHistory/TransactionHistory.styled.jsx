import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 500px;

  margin-top: 50px;
  margin-left: 20px;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background-color: #ddd;
  }
`;

export const TableHead = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #2462d6;
  color: white;
`;

export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
