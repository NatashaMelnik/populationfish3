import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Field } from './getField';
import { createPopulation } from './getPopulation';
import { passDay } from './passDay';

function App() {

  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [karasCount, setKarasCount] = useState(7000);
  const [karasOld, setKarasOld] = useState(3);
  const [karasReproduct, setKarasReproduct] = useState(3);
  const [shchukaCount, setShchukaCount] = useState(200);
  const [shchukaOld, setShchukaOld] = useState(9);
  const [shchukaReproduct, setShchukaReproduct] = useState(9);
  const [shchukaDied, setShchukaDied] = useState(5);

  const onChangeX = (event) => {
    setX(event.target.value);
  }

  const onChangeY = (event) => {
    setY(event.target.value);
  }

  const onChangeKarasCount = (event) => {
    setKarasCount(event.target.value);
  }

  const onChangeKarasOld = (event) => {
    setKarasOld(event.target.value);
  }

  const onChangeKarasReproduct = (event) => {
    setKarasReproduct(event.target.value);
  }

  const onChangeShchukaCount = (event) => {
    setShchukaCount(event.target.value);
  }

  const onChangeShchukaOld = (event) => {
    setShchukaOld(event.target.value);
  }

  const onChangeShchukaReproduct = (event) => {
    setShchukaReproduct(event.target.value);
  }

  const onChangeShchukaDied = (event) => {
    setShchukaDied(event.target.value);
  }

  const [day, setDay] = useState(1);

  const [population, setPopulation] = useState(createPopulation(x, y, karasCount, shchukaCount, karasReproduct, shchukaReproduct));

  const nextDay = () => {
    setDay(day + 1);
    console.log('__________');
    const temp = passDay(population, karasReproduct, shchukaReproduct, shchukaDied);
  }

  Field(x, y, population);


  return (
    <div className="App">
      <div className='inputValues'>
        <TextField type="number" id="outlined-basic" label="Размер сетки по х" variant="outlined" onChange={onChangeX} value={x} />
        <TextField type="number" id="outlined-basic" label="Размер сетки по y" variant="outlined" onChange={onChangeY} value={y} />
        <TextField type="number" id="outlined-basic" label="Количество жертв" variant="outlined" onChange={onChangeKarasCount} value={karasCount} />
        <TextField type="number" id="outlined-basic" label="Начальный возрастр размножения жертв" variant="outlined" onChange={onChangeKarasOld} value={karasOld} />
        <TextField type="number" id="outlined-basic" label="Период размножения жертв" variant="outlined" onChange={onChangeKarasReproduct} value={karasReproduct} />
        <TextField type="number" id="outlined-basic" label="Колисчество хищников" variant="outlined" onChange={onChangeShchukaCount} value={shchukaCount} />
        <TextField type="number" id="outlined-basic" label="Начальный возрастр размножения хищников" variant="outlined" onChange={onChangeShchukaOld} value={shchukaOld} />
        <TextField type="number" id="outlined-basic" label="Период размножения хищников" variant="outlined" onChange={onChangeShchukaReproduct} value={shchukaReproduct} />
        <TextField type="number" id="outlined-basic" label="Хищник живет без еды" variant="outlined" onChange={onChangeShchukaDied} value={shchukaDied} />
      </div>
      <div onClick={nextDay}>
        <Button variant="outlined" color="primary">
          New Day!
        </Button>
        day {day}
      </div>
    </div>
  );
}

export default App;
