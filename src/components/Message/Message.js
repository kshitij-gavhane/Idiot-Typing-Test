import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from "../../config/colors/colors";

function Message({children}) {
    const classes = useStyles();
    return (
        <h2
            className={classes.root}
        >
            {children}
        </h2>
    );
}

const useStyles = makeStyles(() => ({
  root: {
      fontFamily: 'Monda',
      fontSize: '30px',
      fontWeight: 'bold'
  },
}));

export default Message;