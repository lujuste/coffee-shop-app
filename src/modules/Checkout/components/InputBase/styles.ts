import styled from "styled-components";

export const Input = styled.input<{ width?: string }>`
  width: ${({ width }) => (width ? width : "100%")};
  height: 42px;
  border: none;
  background-color: #ededed;
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  padding: 14px;
  font-size: "Roboto", sans-serif;
  font-size: 14px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.boldText};
  }
`;
