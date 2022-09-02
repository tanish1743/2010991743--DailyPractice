// const Header=(props)=>{  
//     return(
//         <header>
//             <h1>React {props.title}</h1>  
//         </header>
//     )
// };

// export default Header;



const Header=({title})=>{  
    return(
        <header>
            <h1>Hello {title}</h1>  
        </header>
    )
};
Header.defaultProps={
    title: "Task Tracker",
};

export default Header;