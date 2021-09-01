import React, {useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({prestaAtencion}) => {
    
    const [inputValue, setinputValue] = useState('');        
    const handleInputChange = (e)=> 
    {
        
    console.log(e.target.value);
    setinputValue(e.target.value)
    
}
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
        prestaAtencion(pat => [...pat, inputValue]);
        }
    }
    return(
    <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
             />
        </form>
    )
}

AddCategory.propTypes = {
    prestaAtencion: PropTypes.func.isRequired
}