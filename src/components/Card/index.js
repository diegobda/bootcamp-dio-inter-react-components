import { useState } from 'react';
import Button from '../Button/Button';


export default function Card (){

    const [valor, setBatata] = useState(0)
    function Adicionar() {
        setBatata(valor + 1)
    }
    function Remover() {
        setBatata(valor - 1)
    }

    return(
        <div className="card">
            <div className="card-header">My primary card Dio
        </div>
        <div className="card-body">
        <button 
            className="btn btn-success"
            onClick={Adicionar}
            >
            Adicionar
        </button>
        <button 
            className="btn btn-danger"
            onClick={Remover}
            >
            Remover
        </button>
        <p>{valor}</p>
        </div>
      </div>
  
    )
  }
  