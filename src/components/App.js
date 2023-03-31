
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
    <div>
      <h4>List of Products</h4>
     <table className="container" border='1'>
      <tbody  >
        <tr>
       <td>Samsung Glaxy Fold 4<br/>
        <button className="item" onClick={()=>handleClick('Samsung Glaxy Fold 4')} >Add item</button>
       </td>
       <td>Iphone 14 pro <br/>
        <button className="item" onClick={()=>handleClick('Iphone 14 pro')
        } >Add item</button>
       </td>
       <td> pixel 5<br/>
        <button className="item" onClick={()=>handleClick('pixel 5')}  >Add item</button>
       </td>
       </tr>
   <tr>

   <td> Mi note 6<br/>
        <button className="item" onClick={()=>handleClick("Mi note 6")}>Add item</button>
       </td>
   <td>Fire Stick<br/>
        <button className="item" onClick={()=>handleClick("Fire Stick")} >Add item</button>
       </td>
   <td>Onplus Nord<br/>
        <button className="item" onClick={()=>handleClick("Onplus Nord")} > Add item</button>
       </td>

   </tr>


      </tbody>
     </table>

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
