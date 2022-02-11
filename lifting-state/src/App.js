//resources:
/* https://fullstækk.no/courses/intro-react/13-lift-state/
  * https://www.w3schools.com/REACT/react_usestate.asp
  * https://www.youtube.com/watch?v=JNjAbhlyHD0&ab_channel=ProgrammingwithHarun
 */
import './App.css';
import {useState} from 'react';

//component imports
import Header from './components/Header';
import Input from './components/Input';
import Data from './components/Data';
import Objects from './components/Object';

function App() {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
 /*  const id = new Date().getTime().toString();
  console.log(id); */
  return (
    <div className="App">
      <Header 
      text={text}
      data={data}
      >
        <Data data={data}/>
      </Header>
     <section>
       <Input 
       input={input} 
       setInput={setInput}
       setText={setText}
       data={data}
       setData={setData}
       input2={input2} 
       setInput2={setInput2}
       list={list}
       setList={setList}
       />
     </section>
      <Objects 
      list={list}
      setList={setList}
      />
    </div>
  );
}

export default App;
