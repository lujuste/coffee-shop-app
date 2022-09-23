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
  position: relative;
`;

export const Baloon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gold};
  position: absolute;
  display: flex;
  align-items: center;
  top: -8px;
  right: -9px;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  color: white;
  font-weight: 700;
  justify-content: center;
`;
