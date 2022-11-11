import './App.css';
import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Basement = styled.div`
  display: flex;
`
const Block1 = styled.div`
  --color1: green;
  --color2: blue;
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  margin: 100px;
  color: #61dafb;
  background: linear-gradient(var(--color2), var(--color1));
  transition: --color1 3s, --color2 3s;
  ::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        to bottom,
        hsl(344, 100%, 50%),
        hsl(31, 100%, 40%)
      );
      //z-index: -1;
      transition: opacity 0.5s linear;
      opacity: 0.1; 
  }
  :hover::before{
    opacity: 1;
  }
`

const Block2 = styled.div`
  position: relative;
  display: block;
  height: 300px;
  width: 300px;
  margin: 100px;
  color: #61dafb;
  background: linear-gradient(45deg, green, blue, green);
  ::before {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(45deg, blue, green, blue);
      //z-index: -1;
      transition: opacity 0.5s linear;
      opacity: 0; 
  }
  &.alter{
    ::before{
      opacity: 1;
    }
  }
`

function App() {
    const [inProp, setInProp] = useState(false)

    useEffect(()=>{
        console.log("inProp", inProp ? "true" : "false")
    },[inProp])

  return (
    <Basement className="App">
        <Block1>Hover me</Block1>
      <Block2
          className={inProp && "alter"}
          onClick = {()=>{setInProp(!inProp)}}
      >Click me</Block2>
    </Basement>
  );
}

export default App;
