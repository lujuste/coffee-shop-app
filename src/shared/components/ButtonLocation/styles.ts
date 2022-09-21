import styled from "styled-components";

export const Button = styled.button`
  width: 143px;
  display: flex;
  align-items: center;
  height: 38px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.lightPurple};
  border: none;

  img {
    margin: 0 7.44px 0 12.44px;
  }

  span {
    font-size: 14px;
  }
`;
