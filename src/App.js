import React, { useState } from 'react';
import Prompt from './componenets/Prompt';
import Results from './componenets/Results';
import styled from 'styled-components';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const [types] = useState([
    {name:'surroundings',count:1},
    {name:'guilds',count:1},
    {name:'landmarks',count:1},
    {name:'npc_dialogue',count:1},
    {name:'npc_interactions',count:1},
    {name:'prosperity',count:1},
    {name:'store item',count:1},
    {name:'resources',count:1},
    {name:'black market items',count:1},
    {name:'magical item',count:1}
  ]);

  const generateAll = () => {
    types.forEach( type => {
        generateType(type.name);
    });
    console.log('generated all');
  }

  const insertUniqueByType = (item) => (oldItems) => [...oldItems.filter(i => i.type !== item.type), item]

  const generateType = (type) => {
    fetch('data/' + type + '.csv')
    .then(response => response.text() )
    .then( responseText => {
      //detect if one column and, if not, get headers and make object?
      const textArray = responseText.split(/\r?\n/); //split on linebreak
      const randIndex = Math.floor(Math.random() * textArray.length);
      const randChoice =  textArray[randIndex];
      let newData = {};
      newData['type'] = type;
      newData['description'] = randChoice;
      setData(insertUniqueByType(newData));
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <TitleDiv>
          <h1>Steading Generator</h1>
          <p>Select generate to get random village attributes</p>
        </TitleDiv>
        <Prompt types={types} generateButtonOnClick={generateAll}/>
        <Results generateOneType={generateType} data={data}/>
      </header>
    </div>
  );
}

const TitleDiv = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  text-align: center;
`

export default App;
