
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState([]);

   
    useEffect(() => {
        fetch('http://localhost:8080/')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
   }, []);

      return (
        <div className="App">
          <h2> HELLO WORLD</h2>
          {/* <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul> */}
     
       
    </div>
      );
}

export default App;
