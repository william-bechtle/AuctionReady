import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: 'center',
  },
  imgBox: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "auto"
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
  },
  input: {
    display: "none"
  }
}));

const Camera = () => {

  const ip = useSelector(state => state.ip);

  const classes = useStyles();
  const [source, setSource] = useState("");
  const dispatch = useDispatch();

  const sendFileName = (fileName) => {
    dispatch({type: "setItemFile", payload:fileName})

  }
  
  const handleCapture = (e) => {
    if (e.target.files) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0];
        const formData = new FormData();
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
        formData.append(
          "file",
          file
        );
        //console.log(formData.get('file'));
        dispatch({ type: 'handleCapture', payload: formData });
        let req = "http://" + ip + ":4000/images";
        axios.post(req, formData)
        .then( res => {
          console.log( 'Axios response: ', res );
          sendFileName(res.data);
          dispatch({type: 'clearStateImage'});
          //setSource("");
        }, (error) => {
          console.error(error);
          
        })
      }
    }
  };
  
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          { source &&
            <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
              <img src={ source } alt={"snap"} className={classes.img}></img>
            </Box> }
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e)}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCameraRoundedIcon fontSize="large" color="primary" />
            </IconButton>
          </label>
        </Grid>
      </Grid>
    </div>
  );
}
export default Camera;