import React, { useState } from 'react';
import { FormControlLabel, Checkbox, Container, Paper, InputBase, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import FindPhotos from './FindPhotos';
import Photo from './Photo';
import useStyles from './style';
import Error from './Error';
import PhotoModal from './FullScreen';

export default function App() {
  const [search, setsearch] = useState('');
  const [photos, setphotos] = useState([]);
  const [safe, setsafe] = useState(false);
  const [error, seterror] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  const [open, setOpen] = React.useState(false);
  const [photo, setphoto] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!search) {
      seterror(true);
      seterrorMessage('Please select a subject for the photos');
    } else {
      seterror(false);
      FindPhotos(search, safe)
        .then((res) => {
          if (res.length === 0) {
            seterror(true);
            seterrorMessage('Oh no! Nothing happened, please try again with another word.');
          } else {
            listPhotos(res);
          }
          setsearch('');
        })
        .catch((error) => {
          seterror(true);
          seterrorMessage('Oops something went wrong. Please try again later.');
        });
    }
  };

  function listPhotos(res) {
    var List = [];
    res.forEach((i) => List.push(<Photo link={i.urls.small} full={i.urls.regular} key={i.id} handleOpen={handleOpen}></Photo>));
    setphotos(List);
  }

  const handleOpen = (url) => {
    setphoto(url)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
      <Container>
        <Paper elevation={0} className={classes.header}>
          Let's find some amazing photos today!
        </Paper>
      </Container>
      <Container component='main' maxWidth='md'>
        <Paper component='form' className={classes.customInput} elevation={0} onSubmit={handleSubmit}>
          <InputBase className={classes.input} placeholder='Search Photos' value={search} onChange={(e) => setsearch(e.target.value)} />
          <IconButton type='submit' className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
        </Paper>
        <FormControlLabel control={<Checkbox value={safe} onChange={(e) => setsafe(!safe)} />} label='Safe Search' className={classes.customCheck} />
        {error && <Error message={errorMessage} />}
      </Container>
      <PhotoModal handleOpen={handleOpen} handleClose={handleClose} open={open} photo={photo}/>
      <Container className={classes.photoContainer}>
        <Grid container direction='row' alignItems='center' spacing={1}>
          {photos.map((element) => {
            return (
              <Grid item xs={6} md={4}>
                {element}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
