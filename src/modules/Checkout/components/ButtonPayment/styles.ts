import styled from "styled-components";

export const Button = styled.button<{ isActive: boolean }>`
  width: 177px;
  height: 51px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  font-size: 12px;
  padding: 0 1rem;
  border: ${({ isActive }) => (isActive ? "1px solid #8047F8" : "none")};
  background-color: ${({ theme, isActive }) =>
    isActive ? "#EBE5F9" : theme.colors.darkGray};
`;
