import styled from "styled-components";

export const Button = styled.button`
  width: 177px;
  height: 51px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;
