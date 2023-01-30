import './bootstrap.css'
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [titre, setTitre] = useState<string>('');
  const [titreDone, setTitreDone] = useState<string>('');
  const [error , setError] = useState<String>("Asio zavatra io ral ah");

  const onTitre = (e:any):void => {
    if(e.target.id === "TiTre") {
        setTitre(e.target.value);
    }
    console.log(titre);
  }
  const onAdd = (e:any):void =>{
    if(titre === ""){
      console.log("vide"+titre);
      setError("Asio zavatra io ral ah")
    }else if(titre!== ""){
      setTitreDone(titre)
      console.log("misy zavatra" + titre);
    }
  }
  const onDelete = (e:any):void =>{
    if(titre === ""){
      console.log("vide"+titre);
    }else if(titre!== ""){
      setTitreDone("")
      console.log("misy zavatra" + titre);
    }
  }

  return (
  <>
    <div className='container'> 
      <div className='row'>

        <div className='col-5 m-3 tests bg-primary1'> <h1 className="m-2">Todo</h1> 
          <input type={"text"} className={"form-control mt-2 mb-2"} id="TiTre" onChange={(e)=>onTitre(e)}/>
          <h6 className=''>Todo 1 : </h6>
          <label className='form-control ben' hidden>{titre}</label>
          <div>
            <input type="checkbox" id='checkbox' className='chek' onClick={(e)=>onAdd(e)} /> <label>add</label>
          </div>
          <h6 className='text-danger'>{error}</h6>
        </div>

        <div className='col-5 m-3 tests bg-success1'> 
          <h1 className="m-2">Done </h1>
          <label className='form-control ben mt-2 mb-2'>{titreDone}</label>
          <div>
            <input type="checkbox" id='checkbox' className='chek' onClick={(e)=>onDelete(e)} /><label>remove</label></div>
        </div>

        <div className='container'>
          <div className='row'>
            <h1 className='col-6 form-control'>Count : {count}</h1>
              <button
              className='col-3 btn-danger btn'
                  type="button"
                  onClick={() => setCount ( count + 1 ) }
              >Add + 1 
              </button>
              <a className='col-3 btn-success btn' href='' id="reset">Reset</a>
          </div>
        </div>

      </div>
    </div>
  </>
  );
}

export default App;
