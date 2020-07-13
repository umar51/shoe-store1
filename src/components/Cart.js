import React, {useContext} from 'react';

import { GlobalContext } from '../context/GlobalState';



import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// import {useParams} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    height: '800%',
  },
}));




function CartGrid() {

  const { deleteProduct } = useContext(GlobalContext);   //deleteTransaction to deleteProduct

//   const shoes={
//     "sandles" : {
//         name : "blue sandal",
//         img: "https://ae01.alicdn.com/kf/HTB1XQp8c7KWBuNjy1zjq6AOypXa0.jpg",

//     },

//     "sneakers" : {
//         name : "black sneakers",
//         img : "https://images-na.ssl-images-amazon.com/images/I/61kHehSwprL._AC_UY395_.jpg",
//     },

//     "joggers" : {
//         name : "formal shoes",
//         img : "https://images-na.ssl-images-amazon.com/images/I/61uOOYHAhiL._AC_UY395_.jpg",
//     },

// };
  // const {productId}= useParams();
  // const product = shoes[productId];
  // const {name, img} = product;


  const classes = useStyles();

  const{addToCart} = useContext(GlobalContext);

 

  
 
  

  

  return (
    <div className={classes.root}>

      <Grid container spacing={6}>

        <Grid item xs>

          <Paper className={classes.paper}>

                <h1>Products</h1>

                {addToCart.map(product=> product.id)}

                {addToCart.map(product=> <img src={product.image} alt={product.name}/>)}
                



                <button onClick={() => deleteProduct(addToCart.id)} className="delete-btn">x</button>

          </Paper>

        </Grid>
        <Grid item xs>

          <Paper className={classes.paper}>

                <h1>Total cost</h1>
                <h2>
                {addToCart.map(product =>product.cost)} <br/>

                </h2>


               

          </Paper>

        </Grid>
      
      </Grid>
        

    </div>
  );
}





function Cart() {
  return (
    <div>

        <CartGrid/>

    </div>
  );
}

export default Cart;