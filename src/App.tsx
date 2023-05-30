import React, {useState} from 'react';
import './App.css';
//1 урок.вложенные компоненты
import {Body} from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
/*//2 урок.метод map
import {CarsType, NewComponent} from "./site/NewComponent";*/

//1 урок.вложенные компоненты
/*function App() {
    return (
        <>
            <Header title = {'NEW HEADER'} />
            <Body titleForBody = {'NEW Body'}/>
            <Footer titleForFooter = {'NEW Footer'}/>
        </>

    );
}*/

/*//2 урок.метод map
function App() {
    let [topCars,setTopCars] = useState<CarsType[]>( [
        {id: 1, manufacturer: 'BMW', model: 'm5cs'},
        {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
        {id: 3, manufacturer: 'Audi', model: 'rs6'}
    ]);
    return (
        <NewComponent topCars={topCars}/>

    );
}*/

// useState
function App() {

    let[a, setA]=useState(1)

    const onClickHandler=()=>{
        setA(++a);
    }

    const onClickHandler2=()=>{
        setA(0);
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>delete</button>
        </div>

    );
}

export default App;
