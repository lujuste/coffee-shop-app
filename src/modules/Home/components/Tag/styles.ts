import styled from "styled-components";

export const TagWrapper = styled.div`
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;
  margin-bottom: 0.5rem;

  div {
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 4px 10px;
    border-radius: 20px;
  }

  span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.goldDark};
    font-family: "Roboto", sans-serif;
  }
`;
