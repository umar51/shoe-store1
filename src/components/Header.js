import React from 'react';
import { Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor: "yellow"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

          </IconButton>
          <Typography variant="h4" className={classes.title}>

            <h1 style={{textAlign : "center"}}>Best Shoe Store</h1>

            <nav>
              <Link to='/'>Home</Link> {' | '}
            
              <Link to='products'>Products</Link> {' | '}

              <Link to='cart'>Shopping Cart</Link>
            </nav>

            

          </Typography>
         
         
        </Toolbar>
      </AppBar>
    </div>
  );
}



function Header() {
  return (
    <div>
      <SimpleAppBar/>

    </div>
  );
}

export default Header;
