import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  /*body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: Poppins,
    font-weight: 400;
    line-height: 1.666;
     color: #555;

  },*/
  body {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.666;
  background: #c0d2d4;
  color: #555;
}

h1 {
  font-weight: 900;
  font-size: 500%;
  text-align: center;
  margin-top: 4rem;
  color: #fff;
  line-height: 1.2;
}

h1 span {
  padding: 5px 15px;
  background: #2ec2b0;
}

.dictionary {
  display: flex;
  flex-wrap: wrap;
  margin: 4rem auto;
  max-width: 50%;
 // max-width: 90%;
}

.dictionary > .term {
  margin-top: 3rem;
  margin-right: 10px;
  text-align: center;
  max-width: 20rem;
  //margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 100ms ease-in-out;
  width: 300px;
  height: 300px;
  ///width: 400px;
 // height: 400px;
}

.dictionary > .term > dt {
  margin-bottom: 1rem;
}

dt {
  color: #2ec2b0;
  line-height: 1;
}

dt span {
  font-size: 200%;
  font-weight: 900;
}

.emoji {
  margin: 0 auto 20px;
  display: block;
  font-size: 400%;
}

dd {
  font-size: 92.5%;
  margin-left: 0;
}

dd dt {
  margin-top: 1rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
  font-size: inherit;
}

dd dl {
  font-size: 90%;
  margin: 1rem auto 0 auto;
  letter-spacing: 0.33px;
  max-width: 15rem;
}

dd dl .term {
  margin-bottom: 1rem;
}
.footer{
 background-color: #2ec2b0;
 color: white;
 padding: 15px;
 text-align: center;

}

`

export default GlobalStyle;

//box-sizing: border-box serve para que possamos não se preocupar com as medidas, ou seja, height e width sempre serão os mesmo, independente do padding ou margin. Se você tiver um componente com 100px de largura (width), e ele receber 10px de padding, ele irá diminuir os elementos filhos para poder manter esses 100px totais na largura!