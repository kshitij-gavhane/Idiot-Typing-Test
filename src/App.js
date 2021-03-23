import './App.css';

import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";
import H1 from "./components/H1/H1";
import Preview from "./components/Preview/Preview";
import Message from "./components/Message/Message";
import { useState } from 'react';

function App() {
  const text = "I am a programmer and I cry all day long because I am a little bitch";
  const [userInput, setUserInput] = useState('');
  const [started, setStarted] = useState(false); 
  const [done, setDone] = useState(false);
  const [secs, setSecs] = useState(0);
  const [interv, setInterv] = useState();
  const [stopped, setStopped] = useState(false);
  const [message, setMessage] = useState('');
  const [disableInput, setDisableInput] = useState(false);
  let num = 0;

  const onUserInputChange = (e) => {
    const val = e.target.value;
    setTimer();
    onFinish(val);
    setUserInput(val);
  }

  const onFinish = (val) => {
    if(val === text){
      clearInterval(interv);
      setDone(true);
      setDisableInput(true);
      setStopped(true);
      makeMessage();
    };
  }

  const setTimer = () => {
    if(!started){
      setStarted(true);
      setInterv(setInterval(() => {
        num += 0.01;
        setSecs(num.toFixed(2));
      }, 10));
    }
  }

  const handleStop = () => {
    clearInterval(interv);
    setStopped(true);
    setDisableInput(true);
  }

  const handleRestart = () => {
    setStarted(false);
    setStopped(false);
    setDone(false);
    setDisableInput(false);
    setUserInput('');
    num = 0;
    setSecs(num);
  }

  const makeMessage = () => {
    if(secs <= 5){
      setMessage('A noob with fast fingers, I wonder how much hentai have you watched. Here is your trophy tho 🏆');
    }
    else if(secs <= 10){
      setMessage('Slow fingers, gotta start coding in Java, you noob');
    }
    else if (secs <= 68){
      setMessage('Are you fucking kidding me? Even PHP is faster');
    }
    else if (secs === 69){
      setMessage('😏😏😏😏😏😏😏😏😏😏😏😏😏')
    }
    else {
      setMessage('I hate you')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          <H1>
            Stupid Typing Test
          </H1>
          <div className="Preview">
            <Preview 
              text={text}
              userInput={userInput}
            />
          </div>
          <div className='Input'>
            <TextInput 
              onChange={onUserInputChange}
              disabled={disableInput}
              value={userInput}
            />
          </div>
          <div className='Seconds'>
              <span>{secs}</span>
          </div>
          <div className="Buttons">
            <Button
              color="primary"
              onClick={handleStop}
              disabled={!started || stopped} 
            >
              Stop
            </Button>
            <Button
              color="primary"
              onClick={handleRestart}
              disabled={!stopped}
            >
              Restart
            </Button>
          </div>
          <div className="Message">
            {done ? (
              <Message>
                {message}
              </Message>
            ) : null}
          </div>
      </header>
    </div>
  );
}

export default App;
