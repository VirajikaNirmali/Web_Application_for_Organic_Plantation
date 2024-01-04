import React,{Component} from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost'; 
import EditPost from './components/EditPost';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import NavBarpic from './components/NavBarpic';
import footer from './components/footer';
import Another from './components/Another';
import Delivery from './components/Delivery';
import Deliveryview from './components/Deliveryview';
import About from './components/About';
import Addtocart from './components/CartScreen'


export default class App extends Component{

 
  render(){ 
    
    return(

    <BrowserRouter>
    
    
    
    <div className="container-fluid">
    
      <NavBar/>
      <NavBarpic/>
      <footer/>
      <Routes> 
      
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/add" element={<CreatePost/>}></Route>
      <Route path="/edit/:id" element={<EditPost  example="foo"/>}></Route>
      <Route path="/post/:id" element={<PostDetails/>}></Route>
      <Route path="/addnew" element={<Another/>}></Route>
      <Route path="/adddeliver" element={<Delivery/>}></Route>
      <Route path="/addtocart" element={<Addtocart/>}></Route>
      <Route path="/viewdeliver" element={<Deliveryview/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
      



    </div>
  
    
    </BrowserRouter>
    )
  }
}