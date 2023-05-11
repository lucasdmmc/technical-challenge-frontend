import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

 > header {
  width: 850px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
  /* background: ${({ theme }) => theme["GRAY-900"]} */
  h1 {
    color: ${({ theme }) => theme["GRAY-100"]};
  }
  button {
    width: 100px;
    border: none;
    background: none;
    border: 1px solid ${({ theme }) => theme["GREEN-500"]};
    color: ${({ theme }) => theme["GRAY-100"]};
    font-weight: bold;
    border-radius: 4px;
    padding: 16px;
    transition: background 0.4s;
    cursor: pointer;

    :hover {
      background: ${({ theme }) => theme["GREEN-500"]};
    }
  }
}
`

export const Wrapper = styled.div`
  width: 850px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`