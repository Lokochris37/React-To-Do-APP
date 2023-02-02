import React from "react";
import { TodoContext } from "../../context/TodoContext";
import './TodoSearch.css';


function TodoSearch(){

    const {searchValue,setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange  = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input 
        placeholder="Search"
        className="TodoSearch" 
        value={searchValue}
        onChange={onSearchValueChange}/>
    );
}

export {TodoSearch};