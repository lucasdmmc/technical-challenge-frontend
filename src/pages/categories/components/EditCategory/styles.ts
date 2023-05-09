import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme["GRAY-900"]};
  border-radius: 6px;
  width: 400px;
  height: 180px;
  padding: 12px 20px;
`

export const Title = styled(Dialog.Title)`
  color: ${({ theme }) => theme["GRAY-200"]};
  margin-top: 20px;
  font-size: 20px;
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["GRAY-400"]};
  }
` 

export const CurrentCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  gap: 16px;
  /* justify-content: space-between; */

  span {
    color: ${({ theme }) => theme["GRAY-400"]};
    font-size: 12px;
  }

  a {
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

export const EditCategoryWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 0 16px;
    background: none;
    border: 1px solid ${({ theme }) => theme["GRAY-700"]};
    color: ${({ theme }) => theme["GRAY-200"]};

  }

  button {
    width: 80px;
    height: 40px;
    background: none;
    border: 1px solid ${({ theme }) => theme["GREEN-600"]};
    border-radius: 4px;
    color: ${({ theme }) => theme["GRAY-200"]};
    cursor: pointer;

    transition: background 0.4s;

    :hover {
      background: ${({ theme }) => theme["GREEN-600"]};
      color: ${({ theme }) => theme["GRAY-100"]}
    }
  }
` 