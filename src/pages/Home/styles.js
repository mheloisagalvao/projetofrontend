import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: #dfe6e9;
`;

export const Title = styled.h1`
    font-size: 2.2rem;
    color: ${(props) => props.theme.colors.text};
    margin-top: 5%;
    margin-bottom: 5%;

`
export const BoxRow = styled.section`
    display: flex;
    align-items: center;
  justify-content: center;
  height: 80vh;
  width: 70vw;
`

export const Box = styled.div`
    background-color: #74b9ff;
    min-height: 80vh;
    min-width: 50%;
`
export const Sidebar = styled.aside`
    min-height: 80vh;
    min-width: 50%;
    background-color: #fdcb6e;
    padding: 3%;
    justify-content: center;
`
export const StyledForm = styled.form`
display: flex;
align-items: center;
  justify-content: center;
flex-direction: row;
align-items: center;
margin-bottom: 5%;
`;

export const StyledInput = styled.input`
    padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 5%;

  ::placeholder {
    color: #ccc;
    font-style: italic;
  }

`


export const Button = styled.button`
display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
    background-color: #74b9ff;
    border-radius: 4px;
    color: white;
    padding: 5px;
    border-style: none;

    :hover {
    background-color: #2892ff;
    cursor: pointer;
  }
`
export const LiList = styled.li`
width: 350px;
max-width: 100%;

  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  list-style: none;
  word-wrap: break-word;


`

export const UlList = styled.ul`
      display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`