import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/home/Home'
import Talleres from './pages/talleres/talleres';
import Pinturas from './pages/productos/pinturas';
import {Link} from 'react-router-dom'; 
import Lienzo from './pages/productos/lienzos';
import * as bootstrap from 'bootstrap';
import ProductosIndex from './pages/productos/productosIndex';
import Espatulas from './pages/productos/espatulas';
import Brochas from './pages/productos/brochas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './pages/Error404';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/pigdiana/' element={<Home />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/talleres' element={<Talleres />}></Route>
            <Route path='/productos/pinturas' element={<Pinturas />}></Route>
            <Route path='/productos/brochas' element={<Brochas/>}></Route>
            <Route path='/productos/lienzos' element={<Lienzo />}></Route>
            <Route path='/productos/espatulas' element={<Espatulas />}></Route>
            <Route path='/productos' element={<ProductosIndex />}></Route>
            <Route path='*' element={<Error404/>}></Route>
        </Routes>
    </BrowserRouter>
    
  

);



