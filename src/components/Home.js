import React from 'react';
import {Link} from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info'


export default Home;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%' ,
    height: '100%' ,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const shoelogos = {
  "nikelogo" : {
    name : "Nike" ,
    img : "data:image/png;base64,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",

  },
  "adidaslogo" : {
    name : "Adidas",
    img : "https://i.pinimg.com/originals/fd/b5/4e/fdb54e3c509e8609252856da12d49a54.jpg",
  },
  "pumalogo" : {
    name : "Puma",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqVQrF_3eCEcJdQbGs-jVZ_xf21Hmogdj2pA&usqp=CAU",
  },
  "filalogo" : {
    name : "Fila",
    img : "https://www.shoebrandlist.com/images/fila-shoe-brands-list-logo.jpg",
  },
  "reebooklogo" : {
    name : "Reebook",
    img : "https://assets.fontsinuse.com/static/use-media-items/16/15511/full-1400x1190/5db1c13c/reebok_logo_1986.png?resolution=0",
  },
  "footprintlogo" : {
    name : "Footprint",
    img : "https://www.logopeople.com.au/blog/wp-content/uploads/2013/09/footprint-shoe-company-logo-design-inspiration.jpg"
  },
}

function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cellWidth={200} className={classes.gridList} cols={1}>
        {Object.entries(shoelogos).map(([company, {name, img}]) => (
          <GridListTile key={img} cols={1}>

            

            <img src={img} alt={company} width="100" height="250"  />

            <GridListTileBar
              title={name}
             
              actionIcon={
                <IconButton aria-label={`info about ${name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
            
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
        }





 function Home() {

 

  return (
    <div>
        
      <Link to='Products'>
        
        <ImageGridList/>
      
        </Link>


    </div>
  );
}

