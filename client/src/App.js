import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import memories from './components/images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import UseStyles from "./styles"

const App = () => {
  const classes = UseStyles();
  const Dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);


  useEffect(() => {
    Dispatch(getPosts())
  }, [Dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img src={memories} className={classes.image} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App
