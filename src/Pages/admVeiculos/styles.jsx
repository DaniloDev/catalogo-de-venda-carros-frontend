import styled, { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`;


export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Search = styled.input.attrs({
  placeholder: "Pesquisar",
  marginHorizontal: 20
})`
border-color: #000;
border-width: 1px;
border-radius: 25px;
height: 40px;
padding-left: 10px;
margin-top: 5px;
`
export const Title = styled.h2``;

export default Styles;