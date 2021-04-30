import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { generateMapJSON } from '../../utils/mapGenerator';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  title: {
    flexGrow: 1,
  },
}));

export const MapForm = () => {
  const classes = useStyles();
  const [tileType, setTileType] = useState('grass');
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  const handleChange = (event) => {
    setTileType(event.target.value);
  }

  const handleSubmit = () => {
    const json = generateMapJSON(rows, columns, tileType);
    console.log(JSON.stringify(json));
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={2}>
          <Grid item>
            <TextField id="outlined-basic" label="Rows" variant="outlined" value={rows} onChange={(event) => setRows(event.target.value)} />
          </Grid>
          <Grid item>
            <TextField id="outlined-basic" label="Columns" variant="outlined" value={columns} onChange={(event) => setColumns(event.target.value)} />
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Tile Type</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={tileType}
                onChange={handleChange}
                label="Tile Type"
              >
                <MenuItem value="grass">Grass</MenuItem>
                <MenuItem value="dirt">Dirt</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container justify="left" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
