import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import logo from './index.jpeg'

const Bootstrap_Button = (prop) => <button type="button" class="btn btn-primary">{prop.caption}</button>

const App = () => 
  <div>
    <h1>Parcel Bundler with React + Bootstrap</h1>
    <img src={logo}></img>
    <Bootstrap_Button caption='Boootstrap button'/>
  </div>

render(
  <App/>,
  document.getElementById('root')
)