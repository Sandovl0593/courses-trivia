import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Graduates.css'

export const UserContext = React.createContext();

class Graduates extends React.Component {

  constructor(props) {
    super(props);
    this.showPreview = this.showPreview.bind(this);
    this.closePreview = this.closePreview.bind(this);
    this.state = {
      indexInfo: "",
      showInfoGrads: false,
      closeInfoGrads: true
    };
  }
  
  showPreview(ciclo) {
    this.setState({
      showInfoGrads: true,
      closeInfoGrads: false,
      indexInfo: ciclo
    });
  }

  closePreview() {
    this.setState({
      closeInfoGrads: true,
      showInfoGrads: false
    });
  }
  
  render() {
    const ciclos =  ["2021-I", "2022-I", "2022-II", "2023-I",
                     "2023-II", "2024-I", "2024-II", "2025-I",
                     "2025-II", "2026-I"]
    return (
      <div className='Graduates'>
        <h1 style={{padding: "2.35em 0 2em 0"}}>
          Selecciona un ciclo académico!
        </h1>

        <div className='grads-list'> 
          {
            ciclos.map(ciclo => <div
                key={ciclo}  id= {ciclo}
                onClick= { () =>{ this.showPreview(ciclo); }}>
                <p>Ciclo {ciclo}</p>  
              </div>
            )
          }
        </div>
        {
          this.state.showInfoGrads && !this.state.closeInfoGrads &&
          <div className='gradinfo-box'>
            <div>
              <button className='X-btn' onClick={this.closePreview}>X</button>
              <h1>
                {this.state.indexInfo}
              </h1> <br/>

              <h2>Cursos ofrecidos</h2>
              <button onClick= { () => {  
                  const navigate = useNavigate();
                  navigate(`/graduates/${value}`);
                }
              }>
                Continuar
              </button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Graduates;