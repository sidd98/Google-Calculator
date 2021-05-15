/* eslint-disable no-eval */
import React , { useState, } from 'react';
import Button from './components/buttons/Button'
import CurrentDisplay from './components/currentDisplay/CurrentDisplay'
import PrevDisplay from './components/prevDisplay/PrevDisplay'
import './App.css';

export default function App() {

  const [data , setData] = useState('')
  const [exp, setExp] = useState('')
  const [ pExprs, setPExp] = useState('')


  const onClick = (value) => {

    if( (pExprs === '=' || data === 'Error') && value !== 'clear') {
      setExp(`Answer = ${data}`)
      setData(value)
      setPExp('')
    } else if(value === '=') {
      try {
        const  answer = eval(data);
        setData(answer)
        setExp(data + value)
        setPExp(value)
      } catch (error) {
        setData('Error')
      }
    } else if( value === 'clear') {
      if (pExprs !== '=') setData( data.slice(0, -1))
      else {
      setData('')
      setExp(`Answer = ${data}`)
    }
    } else {
      setData(data + value);
      setPExp(value)
    }

  }

  return (
    <div className="App">
      <PrevDisplay  data = {exp} />
      <CurrentDisplay data = {data} />
      <Button onClick = {onClick} />
    </div>
  );
}

