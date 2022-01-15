import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from "styled-components"
import NavigationBar from "./NavigationBar"
import { GlobalStyles } from './GlobalStyles';
import SlideBar from './SlideBar';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <NavigationBar/>
      <SlideBar/>
    </React.Fragment>
  );
}

export default App;
