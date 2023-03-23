import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Graduates.css'

export const UserContext = React.createContext();

function ShowPreviewCourses() {
  const navigate = useNavigate();

  return (
    <UserContext.Consumer>
      {
        value => {
          <div className='grad-btn'>
            <h1>{value}</h1> <br/>
            <h2>Cursos ofrecidos</h2>
            <button onClick= {
              () => {  navigate(`/graduates/${value}`); }
            }>
              Continuar
            </button>
          </div>
        }
      }
    </UserContext.Consumer>
  )
}

class Graduates extends React.Component {

  constructor(props) {
    super(props);
    this.showPreview = this.showPreview.bind(this);
    this.state = {
      showInfoGrads: false
    };
  }

  // ListGrauates() {
  //   return (
  //     <UserContext.Consumer> 
  //       {
  //         value => value.map(
  //           ciclo => <div
  //             key={ciclo}  id= {ciclo}
  //             onClick={this.showPreview}>
  //             <p>Ciclo {ciclo}</p>  
  //           </div>
  //         )
  //       }
  //     </UserContext.Consumer>
  //   )
  // }

  showPreview() {
    this.setState({showInfoGrads: true});
  }

  render() {
    const ciclos = ["2021-I", "2022-I", "2022-II", "2023-I",
                    "2023-II", "2024-I", "2024-II", "2025-I",
                    "2025-II", "2026-I"];
    return (
      <div className='Graduates'>
        <h1 style={{padding: "4em 0 2em 0"}}>
          Selecciona un ciclo académico!
        </h1>

        <div className='grads-list'> 
          {
            ciclos.map(
              ciclo => <div
                key={ciclo}  id= {ciclo}
                onClick={this.showPreview}>
                <p>Ciclo {ciclo}</p>  
              </div>
            )
          }
          {
            this.state.showInfoGrads &&
            <ShowPreviewCourses />
          }
        </div>
      </div>
    )
  }
}

export default Graduates;