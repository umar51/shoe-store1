import React from 'react';
import {Link} from 'react-router-dom'





function ProductIndex() {


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
    <div>
        <ul>
            {Object.entries(shoes).map(([productId, {name, img}]) => (
               
               <li key={productId}>


                    <Link to={productId}>

                        <h2>{name}</h2>
                        <img src={img} alt={name}/> <br/>
                       
                    </Link>
                       
                </li>
               )
               )}
        </ul>

    </div>
  );
}

export default ProductIndex;