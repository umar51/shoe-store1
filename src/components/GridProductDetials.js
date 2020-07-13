import React , {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {useParams, Link} from 'react-router-dom';

import LowerBarProductetails from './LowerBarProductDetails';

import { GlobalContext } from '../context/GlobalState';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function GridProductDetails() {

  const classes = useStyles();

  const shoes={
    "sandles" : {
        name : "blue sandal",
        img: "https://ae01.alicdn.com/kf/HTB1XQp8c7KWBuNjy1zjq6AOypXa0.jpg",
        cost: 1000
    },

    "sneakers" : {
        name : "black sneakers",
        img : "https://images-na.ssl-images-amazon.com/images/I/61kHehSwprL._AC_UY395_.jpg",
        cost: 1500
      },

    "joggers" : {
        name : "formal shoes",
        img : "https://images-na.ssl-images-amazon.com/images/I/61uOOYHAhiL._AC_UY395_.jpg",
        cost : 2500
      },

};


const {productId}= useParams();
const product = shoes[productId];
const {name, img, cost} = product;


const {addProduct} = useContext(GlobalContext);  //addTransaction to addProduct

    const onClick = e => {
      e.preventDefault();

      const productBought = {         //newTransaction to newProduct
          id: name,
                                           //removed text
          image: img,

          cost: cost,
      }

      addProduct(productBought)
  }

  return (
    <div className={classes.root} style={{backgroundColor: "orange"}}>
      <Grid container spacing={6}>
        
        <Grid item xs={3} sm={6} >
          <Paper className={classes.paper}style={{backgroundColor: "purple"}} >
                 
                Details of {productId}

            <h1>{name}</h1>

            <img src={img} alt={name} width='600' height='500'/>


          </Paper>

        </Grid>


 
        <Grid item xs= {12} sm={6}>
          <Paper className={classes.paper} style={{backgroundColor: "grey"}}>
              <h1>
                  Product Details
              </h1>
              <ul>
                <li>Product : Men Footwear</li><br/>


                <li>Product type : {name}</li><br/>

                

                <li>Sizes : XL, L, M, S</li><br/>

                <li>Colors : Black, Blue, Red</li>
                 </ul>
                 <button onClick={onClick}>Add to Cart</button>
          </Paper>
        </Grid>

        <Link to= '/Products'>
            <Grid item xs={12}>
                <Paper className={classes.paper} >
                    <LowerBarProductetails/>
                </Paper>
            </Grid>

        </Link>


      </Grid>
    </div>
  );
}