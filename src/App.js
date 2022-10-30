import React, { useState } from 'react';
import Prompt from './componenets/Prompt';
import Results from './componenets/Results';
import styled from 'styled-components';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const [types] = useState(['surroundings', 'guilds','landmarks','npc_dialogue','npc_interactions','prosperity', 'store item', 'resources', 'black market items']);

  const generateAll = () => {
    types.forEach( type => {
        generateType(type);
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
          <p>Select a steading type and hit "generate"</p>
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
