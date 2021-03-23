import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import colors from "../../config/colors/colors";

const AppButton = ({children, color, disabled, onClick}) => {
    const classes = useStyles();
    return (
        <Button
            variant="outlined"
            color={color}
            disabled={disabled}
            onClick={onClick}
            className={classes.root}
        >
            {children}
        </Button>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: "100%",
        fontFamily: "Monda",
        fontWeight: "bold",
        color: colors.primary,
        borderWidth: "2px",
        borderColor: colors.secondary,
        marginTop: "15px",
        marginRight: '10px',
        marginLeft: '10px',
        width: '25%',
        '&:hover': {
            borderWidth: "2px",
            borderColor: colors.buttonHover,
            backgroundColor: "transparent"
        },
        '&:disabled': {
            borderWidth: "2px",
            borderColor: colors.buttonDisabled,
            color: colors.buttonDisabled
        },
        [theme.breakpoints.down(1200)]: {
            display: 'block',
            width: '100%',
            fontSize: '100%',
            marginTop: '10px',
            marginLeft: '0px',
            marginRight: '0px'
        }
    }
}))

export default AppButton;