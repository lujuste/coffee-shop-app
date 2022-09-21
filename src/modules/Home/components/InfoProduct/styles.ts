import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;

  .icon-radius {
    width: 32px;
    height: 32px;
    margin-right: 0.5rem;
  }

  span {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.boldText};
  }
`;
