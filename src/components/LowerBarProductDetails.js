import React from 'react';





import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';



export default LowerBarProductDetails;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));




function LowerBarProductDetails() {

  const classes = useStyles();
  



  const shoes={
    "sandles" : {
        name : "blue sandal",
        img: "https://ae01.alicdn.com/kf/HTB1XQp8c7KWBuNjy1zjq6AOypXa0.jpg",

    },

    "sneakers" : {
        name : "black sneakers",
        img : "https://images-na.ssl-images-amazon.com/images/I/61kHehSwprL._AC_UY395_.jpg",
    },

    "joggers" : {
        name : "formal shoes",
        img : "https://images-na.ssl-images-amazon.com/images/I/61uOOYHAhiL._AC_UY395_.jpg",
    },

}


  return (

    <div className={classes.root} style={{backgroundColor: "pink"}}>

        <h2>Other Products</h2>
      

      <GridList className={classes.gridList} cols={2.5}>
        {Object.entries(shoes).map(([productId, {name, img}]) =>(
          <GridListTile key={img}>

            
            
                <img src={img} alt={productId} />

            
            
            <GridListTileBar
              title={name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${name}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))
        }
      </GridList>

     

    </div>

    )
 
    }
