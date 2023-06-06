import React, {useState} from 'react';
import './App.css';
// 5 урок input
import {FullInput} from "./site/FullInput";
import {Input} from "./site/Input";
import {Button} from "./site/Button";
/*//1 урок.вложенные компоненты
import {Body} from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";*/

/*//4 урок filter
import {Filter} from "./site/Filter";*/

/*//2 урок.метод map
import {CarsType, NewComponent} from "./site/NewComponent";*/

/*
//1 урок.вложенные компоненты
function App() {
    return (
        <>
            <Header title = {'NEW HEADER'} />
            <Body titleForBody = {'NEW Body'}/>
            <Footer titleForFooter = {'NEW Footer'}/>
        </>

    );
}
*/

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

/*
// 3 урок useState
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
*/

/*// 4 урок filter
export type FilterType='all'|'dollar'|'ruble'

function App() {
  const [money, setMoney] = useState([
    { banknote: 'dollar', nominal: 100, number: ' a1234567890' },
    { banknote: 'dollar', nominal: 50, number: ' z1234567890' },
    { banknote: 'ruble', nominal: 100, number: ' w1234567890' },
    { banknote: 'dollar', nominal: 100, number: ' e1234567890' },
    { banknote: 'dollar', nominal: 50, number: ' c1234567890' },
    { banknote: 'ruble', nominal: 100, number: ' r1234567890' },
    { banknote: 'dollar', nominal: 50, number: ' x1234567890' },
    { banknote: 'ruble', nominal: 50, number: ' v1234567890' },
  ])

  const[filter,setFilter]=useState<FilterType>('all')

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney =>filteredMoney.banknote === 'dollar');
    }

    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney =>filteredMoney.banknote === 'ruble');
    }

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFilter((nameButton))
    }

  return <Filter currentMoney={currentMoney} onFilterChange={onclickFilterHandler}/>
}*/

// 5 урок input
function App() {
let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'}
])

    let[title,setTitle]=useState('')

    const addMessage=(title:string)=>{
        let newMessage={message:title};
        setMessage([newMessage,...message])
    }

    const callBackButtonHandler=()=>{
        addMessage(title);
        setTitle('')
    }

    return (
        <div className={'App'}>

            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el,index)=>{
                return(
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )

}

export default App;
