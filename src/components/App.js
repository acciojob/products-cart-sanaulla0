
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
    <div className="container">
      <h4>List of Products</h4>
   
     <div className="grid">
        
       <div>Samsung Glaxy Fold 4
        <button className="item" onClick={()=>handleClick('Samsung Glaxy Fold 4')} >Add Item</button>
       </div>
       <div>Iphone 14 pro <br/>
        <button className="item" onClick={()=>handleClick('Iphone 14 pro')
        } >Add Item</button>
       </div>
       <div> pixel 5<br/>
        <button className="item" onClick={()=>handleClick('pixel 5')}  >Add Item</button>
       

   <div> Mi note 6<br/>
        <button className="item" onClick={()=>handleClick("Mi note 6")}>Add Item</button>
       </div>
   <div>Fire Stick<br/>
        <button className="item" onClick={()=>handleClick("Fire Stick")} >Add Item</button>
       </div>
   <div>Onplus Nord<br/>
        <button className="item" onClick={()=>handleClick("Onplus Nord")} > Add Item</button>
       </div>
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
