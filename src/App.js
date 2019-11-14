import React from 'react';
import s from './stylesheets/App.module.css';
import {HeaderContainer} from "./containers/header-container";
import {ContentContainer} from "./containers/content-container";
import {Footer} from "./components/footer";

function App() {
  return (
    <div className={s.App}>
      <HeaderContainer/>
      <ContentContainer/>
      <Footer/>
    </div>
  );
}

export default App;
