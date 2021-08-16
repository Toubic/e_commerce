import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
    "&:hover": {
      cursor: 'zoom-in',
      transform: 'scale(1.2)',
      marginBottom: '20px',
    },
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  typography: {
    fontFamily: 'Arvo',
  },
  removeButton: {
    backgroundColor: 'black',
  },
}));