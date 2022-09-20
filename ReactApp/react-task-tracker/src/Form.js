// // import React from 'react';

// // const Form=()=>{
// //     return(
// //         <div>
// //             <h1>Hellooo</h1>
// //         </div>
// //     )
// // };
// // export default Form;

// import React, {useState} from 'react';
// import "./Form.css";

// const Form=()=>{
//     return(
//         <div>
//             <input type="text" 
//             value={name}
//             onChange={()=>setName(e.tanget.value); />
//         </div>
//     )
// };

import React,{useState} from "react";
const Form=()=>{
    const [name, setName] = useState("");
    const [pin, setPin] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
    }
}