import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 150px;
  /* border: 1px solid ${({ theme }) => theme["GREEN-500"]}; */
  background: ${({ theme }) => theme["GRAY-800"]};
  border-radius: 4px;
  padding: 20px;
  border: none;
  position: relative;
  
  span {
    color: ${({ theme }) => theme["GRAY-200"]};
    font-size: 14px;
  }

  svg {
    position: absolute;
    top: 15px;
    right: 15px;
    color: ${({ theme }) => theme["GREEN-500"]};
    cursor: pointer;
  }
`;

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  span {
    color: ${({ theme }) => theme["GRAY-200"]};
  }

  svg {
    fill: ${({ theme }) => theme["GREEN-600"]};
    cursor: pointer;
  }

  button {
    border: none;
    background: ${({ theme }) => theme["RED-600"]};
    color: ${({ theme }) => theme["GRAY-200"]};
    padding: 2px 15px;
    border-radius: 2px;

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
