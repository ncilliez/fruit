export default function Fruit({fruitInfo, onFruitDelete}){
    return ( 
    <li id ={fruitInfo.id} key={fruitInfo.id}>
        <button class='btnsupp' onClick= {() => onFruitDelete(fruitInfo.id)}>X</button> {fruitInfo.nom} 
    </li>);
};