import {useState} from "react";
import Fruit from "./compenents/Fruit";
import BtnVider from "./compenents/BtnVider";
import './Style.css';

function App() {

const [fruits, setFruits] = useState([
    {id: 1, nom: 'abricot'},
    {id: 2, nom: 'banane'},
    {id: 3, nom: 'pomme'},
    {id: 4, nom: 'cerise'}
  ])

  const [newFruit, setNewFruit] = useState("");

// const inputRef= useRef();

const vider = () =>{
 
  //1. copie du state
  const fruitCopy =[...fruits];

  //2. manipuler la copie du state

  const fruitCopyUpdate = fruitCopy.splice(0,0);

  //3. modifier le state
  setFruits(fruitCopyUpdate);

}

const supp = (id) =>{
      console.log(id);
      //1. copie du state
      const fruitCopy =[...fruits];

      //2. manipuler la copie du state
      const fruitCopyUpdate = fruitCopy.filter((fruit) => fruit.id !== id);

      //3. modifier le state
      setFruits(fruitCopyUpdate);

}
  
const ajouter = (event) => {
  event.preventDefault();
  //1. copie du state
  const fruitCopy =[...fruits];

  //2. manipuler la copie du state
  const id = new Date().getTime();
  const nom = newFruit;
  const maValeur = {id, nom};
  fruitCopy.push(maValeur);

  //3. modifier le state
  setFruits(fruitCopy);
  setNewFruit("");


}
const changement = (event) => {
  setNewFruit(event.target.value);
  // console.log(event.target.value)
}






  return <div class='mesfruits'>
    <h1>Fruits</h1>
    
    
    <ul>{fruits.map((fruit) => (
        // <li key={fruit.id}>
        //     <button onClick= {() => supp(fruit.id )}>X</button> {fruit.nom} 
        // </li>
        <Fruit fruitInfo={fruit} onFruitDelete={supp}/>
    ))}     
    </ul>

    <form action="submit" onSubmit={ajouter}>
      <input 
        value ={newFruit} 
        onChange = {changement} 
        type="texte" 
        placeholder="Ajouter un fruit..."
      />
      <button>Ajouter</button>
    </form>
    <BtnVider onBtnVider={vider}/>
</div>;

}

export default App;


//formulaire
//1. création du formulaire
//2. soumission du formulaire
//3. collecter les données du formulaire
//3a. 


  // const [compteur, setCompteur] = useState(1);

  // const handleClick = () =>{
    
  //   setCompteur( compteur+1);
  //   // setCompteur(compteur +1);
  //   console.log(compteur);
  //   // alert('handleClick');
  // };

  // return (
  //   <div className="App">
  //     <h1>{compteur}</h1>
  //     <button onClick={handleClick}>Ajouté</button>
  //   </div>
  // );
// 


  
  