import React from "react";
import {createGlobalStyle} from "styled-components";

import Morty from "./services/apirick";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
export default class App extends React.Component{
 
  render(){
    return(
      <div>
        <GlobalStyle/>
        <Morty/>
      </div>
    )
  }
}
