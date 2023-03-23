import '../assets/Graduates.css'
import { useNavigate } from 'react-router-dom';
import router from '../routes/root'

function Graduates() {

  const ciclos = ["2021-I", "2022-I", "2022-II", "2023-I",
                  "2023-II", "2024-I", "2024-II", "2025-I",
                  "2025-II", "2026-I"];

  const navigate = useNavigate();

  return (
    <div className='Graduates'>
      <h1 style={{padding: "4em 0 2em 0"}}>
        Selecciona un ciclo académico!
      </h1>

      <div className='grads-list'> 
        {
          ciclos.map(ciclo => <div key={ciclo} onClick= {
              () => {  navigate(`/graduates/${ciclo}`); }
            }>
              <p>Ciclo {ciclo}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Graduates;