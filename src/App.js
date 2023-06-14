import { useState, useEffect } from 'react';
import NamePartners from './NamePartners';
import Associates from './Associates';
import Cases from './Cases ';

function App() {

  const [data, setData] = useState([]);

   
    useEffect(() => {
        fetch('http://localhost:8080/', {mode: 'cors'})
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
   }, []);

      return (
        <div className="App">
          <h2> HELLO WORLD</h2>   
          <h1>WELCOME WORLD!!</h1>
          <NamePartners />
          <Associates />
          <Cases />

          <ul>
      {!data ? 'loading...' : 
        <li key={data.data}>{data.data}</li>
      }
    </ul>
   
    </div>
      );
}

export default App;
