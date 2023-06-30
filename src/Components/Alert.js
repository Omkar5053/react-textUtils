import React from 'react'

export default function Alert(props) {

   const capitalize = (word)=>{
        let type = word.toLowerCase();
        return type.charAt(0).toUpperCase() + type.slice(1);
   }

  return (
    props.alert && <div class={`alert fade show alert-${props.alert.type}`} role="alert">
           <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
        </div>
  )
}
