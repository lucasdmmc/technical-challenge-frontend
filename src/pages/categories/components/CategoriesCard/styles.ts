import styled from "styled-components";
export const Container = styled.div`
  width: 250px;
  height: 150px;
  /* border: 1px solid ${({ theme }) => theme["GREEN-500"]}; */
  background: ${({ theme }) => theme["GRAY-800"]};
  border-radius: 4px;
  padding: 20px;
  border: none;
  
  strong {
    color: ${({ theme }) => theme["GRAY-200"]};
    font-size: 23px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  svg {
    fill: ${({ theme }) => theme["GREEN-600"]};
    cursor: pointer;
  }
`
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
  
  button {
    height: 20px;
    border: none;
    border-radius: 2px;
    color: ${({ theme }) => theme["GRAY-200"]};
    background: ${({ theme }) => theme["RED-600"]};
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
    transition: filter 0.4s;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    :hover {
      filter: brightness(0.9);
    }

  }
`