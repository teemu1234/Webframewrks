import React from "react";


export default function ShoppingListItem (props){
    return(
    <li className="itemsinlist">
    <div className="itemunit">
     <div>
     { props.qty }
    </div>
     <div>
    { props.unit }
   </div>
    </div>
     <div>
    { props.value}
    </div>
     <div>
     <button onClick={ ()=>props.DeleteRow(props.id) }>X</button>
    </div>
      </li>)
}