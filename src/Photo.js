import React from 'react';
import useStyles from './style';

export default function MediaCard(props) {
  const classes = useStyles();

  const handleClick = () => {
   props.handleOpen(props.full)
  };
  return <img className={classes.photo} src={props.link} onClick={handleClick} />;
}
