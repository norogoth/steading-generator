import logo from './logo.svg';
import Prompt from './componenets/Prompt';
import Results from './componenets/Results';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleDiv>
          <h1>Steading Generator</h1>
          <p>Select a steading type and hit "generate"</p>
        </TitleDiv>
        <Prompt/>
        <Results />
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
