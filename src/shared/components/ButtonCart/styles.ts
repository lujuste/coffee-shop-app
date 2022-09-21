import styled from "styled-components";

export const Button = styled.button`
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 0.5rem;
`;
