import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  customInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    border: '2px solid #CDCDCD',
    borderRadius: '1rem',
    '& .MuiInputBase-root': {
      fontFamily: 'Courier New',
    },
  },
  header: {
    backgroundColor: '#5eb4a9',
    textAlign: 'center',
    padding: '3rem',
    fontSize: '2.5vmax',
    marginBottom: '2rem',
    marginTop: '0.5rem',
    color: 'white',
    letterSpacing: '-2px',
    fontFamily: 'Courier New',
  },
  input: {
    marginLeft: '1rem',
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  customCheck: {
    '& .MuiTypography-body1': {
      fontFamily: 'Courier New',
      fontSize: '1.1rem',
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#5eb4a9',
    },
  },
  photoContainer: {
    maxHeight: '65vh',
    overflow: 'auto',
    textAlign: 'center'
  },
  photo: {
    maxWidth: '100%',
    height: 'auto !important',
    maxHeight: '20rem',
    borderRadius: '1rem',
    cursor:'pointer',
    '&:hover': {
      transform: 'scale(1.008)', 
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
    },
  },
  error: {
    color: 'white',
    backgroundColor: '#f44336',
    padding: '0.8rem',
    fontFamily: 'Courier New',
    marginBottom: '1rem',
  },
  errorMessage: {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  photoModal:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen:{
    maxHeight:'95vh',
    maxWidth:'95vw'
  }
}));

export default useStyles;
