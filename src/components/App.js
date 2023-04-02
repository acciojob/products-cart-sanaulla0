
import React,{useState} from "react";
import './App.css';

const App = () => {
     const[cart , setCart] = useState([]);

     const[deletee,setDeletee] = useState([]);
    
     const handleClick = (item)=>{
              setCart([...cart,item]);
              console.log(cart);
     }

const handleremove = (index)=>{
       const newcart = [...cart];
       newcart.splice(index ,1);
       setCart(newcart);
}

  
  return (
    <div >
      <h4>List of Products</h4>
   
         
         <div className="container" >
        
       <div className="item">Samsung Glaxy Fold 4
        <button  onClick={()=>handleClick('Samsung Galaxy Fold 4')} >Add Item</button>
       </div>
       <div className="item">Iphone 14 pro <br/>
        <button  onClick={()=>handleClick('Iphone 14 pro')
        } >Add Item</button>
       </div>
       <div className="item"> pixel 5<br/>
        <button  onClick={()=>handleClick('pixel 5')}  >Add Item</button>
       </div>

   <div className="item"> Mi note 6<br/>
        <button  onClick={()=>handleClick("Mi note 6")}>Add Item</button>
       </div>
   <div className="item">Fire Stick<br/>
        <button  onClick={()=>handleClick("Fire Stick")} >Add Item</button>
       </div>
   <div className="item">Onplus Nord<br/>
        <button  onClick={()=>handleClick("Onplus Nord")} > Add Item</button>
       </div>
      
   
       </div>
      
     

<h1>cart</h1>


     {cart.map((item ,index)=>(
        <p key={index} className="cart">{item}
        <button value={index} onClick={(e)=>handleremove(index)}>Remove</button>
        </p>

     ))}



    </div>
    
  )
}

export default App;
