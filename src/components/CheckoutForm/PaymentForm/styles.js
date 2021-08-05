import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  typography: {
    margin: '20px 0',
  },
  paymentFormDiv: {
    marginTop: '20px', 
    display: 'flex', 
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: 'black',
    color: 'white',
  },
  payButton: {
    backgroundColor: 'purple',
  },
}));