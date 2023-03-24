import { useState } from 'react'
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import logo from './images/logo.png'
import './assets/App.css'

function AppMain() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav> 
        <div className='from-react'>
          <p>Made with React</p>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} width="70" className="react-logo" alt="React logo" />
          </a>
        </div>
      </nav>

      <div className='start-menu'>
        <img src={logo} width="400" alt="Main logo"/>
      </div>
      <h1>Welcome to the courses Trivia</h1> <br/>
      <div>
        <Link to="/graduates">
          <button className='clasic-btn start-btn' onClick={() => {
            // let App = document.getElementsByClassName('App')[0];
            // console.log(App);
          }}>Start</button>
        </Link>
      </div>
    </div>
  )
}

export default AppMain;