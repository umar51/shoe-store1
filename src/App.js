import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';
import ProductIndex from './components/ProductIndex';

import Cart from './components/Cart';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>

      <Router>
        <Header/>
        <br/> <br/>
        
        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='products' element={<Products/>}>
            
              <Route path='/' element={<ProductIndex/>}/>
              <Route path=':productId' element={<ProductDetails/>}/>
          </Route>
          <Route path='cart' element={<Cart/>}></Route>

          <Route path='*' element={<NotFound/>}/>

        </Routes>
      </Router>

      </GlobalProvider>

    </div>
  );
}

export default App;
