import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';
import axios from "axios";

export const Searcher = ({ dataObtained }) => {
  const [namePokemon, setName] = useState("");
  const [notFound, setNotFound] = useState(false)

  function handleImput(event) {
    setName(event.target.value);
  }

  function handleClick() {
    if(namePokemon !== ""){
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}`)
      .then((response) => {
        setNotFound(false);
        dataObtained(response.data);
      }).catch(() => setNotFound(true));
    }
  }
  

  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Introduce nombre" variant="outlined" onChange={handleImput} value={namePokemon} />
      <Button id='botonLupa' variant="contained" onClick={handleClick}>Buscar<SearchIcon/></Button>
    </Box>
    
    {notFound && <Alert id="errorBusqueda" severity="error">Pokemon no encontrado</Alert>}
    </>
  );
};
