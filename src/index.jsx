import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

import logo from './index.jpeg'
import { Button } from 'react-bootstrap'

const App = () => 
  <div>
    <h1>Parcel Bundler with React + Bootstrap</h1>
    <img src={logo}></img>
    <Button href="#">Teste</Button>
  </div>

render(
  <App/>,
  document.getElementById('root')
)