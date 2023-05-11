import styled from "styled-components";

export const Form = styled.form`
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  position: relative;
  margin-top: 20px;

  p {
    font-size: 12px;
    margin-top: 4px;
    color: ${({ theme }) => theme["RED-500"]}
  }

  button {
    width: 100%;
    height: 50px;
    background: none;
    border: none;
    background: ${({ theme }) => theme["GREEN-500"]};
    position: absolute;
    bottom: 0;
    border-radius: 4px;
    color: ${({ theme }) => theme["GRAY-800"]};
    font-weight: bold;
    cursor: pointer;
    transition: background 0.4s;

    :hover {
      background: ${({ theme }) => theme["GREEN-600"]};
    }
  }
` 

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Field = styled.div`

  label {
    color: ${({ theme }) => theme["GRAY-200"]};
    font-size: 14px;
    line-height: 30px;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 0 10px;
    background: none;
    border: 1px solid ${({ theme }) => theme["GRAY-700"]};
    color: ${({ theme }) => theme["GRAY-200"]};
  }
`