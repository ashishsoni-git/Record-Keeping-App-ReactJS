import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");

  }
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button className="addBtn" onClick={addData} variant="contained"  ><AddIcon /></Button>
        </Stack>

        <div className='data'>
          <div className='showData'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
          </div>

          {
            data.map((element, index) => {
              return (
                <div key={index} className='showData'>
                  <h4>{element.name}</h4>
                  <h4>{element.email}</h4>
                  <Stack>
                    <Button onClick={removeItem} variant="outlined" color="error"><DeleteForeverIcon /></Button>
                  </Stack>
                </div>
              )
            }
            )}
        </div>
      </div>
    </div >
  );
}

export default App;
