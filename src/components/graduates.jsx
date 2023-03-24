import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/graduates.css'

// export const UserContext = React.createContext();

function Graduates() {

  const ciclos =  ["2021-I", "2022-I", "2022-II", "2023-I",
                   "2023-II", "2024-I", "2024-II", "2025-I",
                   "2025-II", "2026-I"];

  const [showInfo, setshowInfo] = useState(false);
  const [gradInfo, setgradInfo] = useState("");
  // const [closedInfo, setclosedInfo] = useState(true);
  // const [display, setdisplay] = useState(true);

  const navigate = useNavigate();
  
  return (
    <div className='Graduates'>
      <h1 style={{padding: "2.35em 0 2em 0"}}>
        Selecciona un ciclo académico!
      </h1>

      <div className='grads-list'> 
        {
          ciclos.map(ciclo => 
            <div
              key={ciclo}  id= {ciclo}
              onClick= { () => {
                setgradInfo(ciclo); setshowInfo(true); 
                // setclosedInfo(false);
              }}>
              <p>Ciclo {ciclo}</p>  
            </div>
          )
        }
      </div>
      { showInfo &&
        <div className="gradinfo-box">
          <button id='X-btn' onClick={ () => {
            // setclosedInfo(!closedInfo);
            setshowInfo(false);
          }}>  X  </button>
          <h1>
            {gradInfo}
          </h1> <br/>

          <h2>Cursos ofrecidos</h2>
          <button onClick= { () => {
              navigate(`/graduates/${value}`);
            }
          }>
            Continuar
          </button>
        </div>
      }
    </div>
  )
}

export default Graduates;