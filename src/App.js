import React from 'react'
import {Navigation} from './components/Navigation/Navigation'
import {Logo} from './components/Logo/Logo'
import {ImageLinkForm} from './components/ImageLinkForm/ImageLinkForm'
import {Rank} from './components/Rank/Rank'
import Particles from 'react-particles-js'
import './App.css'
const paramsOption={
      particles: {
        number:{
          value:200,
          density:{
            enable:true,
            value_area:800
          }
        }
      }
    }
                  
function App() {
  return (
    <div className="App">
       <Particles className='particles'
        params={paramsOption}
      />
      <Navigation/>
      <Logo />
      <Rank />
      <ImageLinkForm />      
      {/*
      <FaceRecognation /> */}
    </div>
  );
}

export default App;
