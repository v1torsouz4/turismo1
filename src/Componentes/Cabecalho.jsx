import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <img className="img" src='src/imagens/logo.jfif'/>
        <Autocomplete className="button"
      disablePortal
      id="combo-box-demo"
      options={estados}
      sx={{ width: 160}}
      renderInput={(params) => <TextField {...params} label="Destino" />}
    />
    </div>
  )
}

const estados= [
  { label: 'Rondônia'},
  { label: 'Acre'},
  { label: 'Roraima' },
  { label: 'Amazonas' },
  { label: 'Amapá'},
  { label: "Tocantins"},
  { label: 'Pará'},


];