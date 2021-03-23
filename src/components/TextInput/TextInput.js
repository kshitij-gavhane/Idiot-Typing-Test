import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import colors from "../../config/colors/colors";

const TextInput = ({onChange, disabled, value}) => {
    const classes = useStyles();

    const handleChange = (e) => {
      e.preventDefault();
    }
    
    return (
        <InputBase
          id="standard-full-width"
          placeholder="Start typing your sh*t here"
          fullWidth
          classes={{
              root: classes.input,
              disabled: classes.disabled,
          }}
          variant="outlined"
          onChange={onChange}
          disabled={disabled}
          value={value}
          autoComplete="off"
          onPaste={handleChange}
        />
    );
};

const useStyles = makeStyles(() => ({
  input: {
      color: 'white', 
      border: '2px solid',
      borderColor: colors.secondary,
      borderRadius: '10px',
      padding: '10px',
      fontWeight: 'bold',
      
  },
  disabled: {
    color: colors.buttonDisabled,
  },
}));

export default TextInput;