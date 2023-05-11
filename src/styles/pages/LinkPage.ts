import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100vh;
`

export const Button = styled(Link)`
  width: 250px;
  height: 400px;

  border: none;
  border-radius: 4px;

  color: ${({ theme }) => theme["GRAY-200"]};
  background: ${({ theme }) => theme["GRAY-800"]};

  
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme["PURPLE-700"]};
  }
`