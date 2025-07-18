import {React, useState} from 'react'

function Textfield({name, label, value, placeholder, onChange}) {
    // const [text, setText] = useState(props.value || '');

    // const handleChange = (event) => {
    //     setText(event.target.value);
    // }

    return (
        <div>
          <label htmlFor={name}>{label}</label>            
          <input type="text" className="textfield"
                      name={name}
                      id={name}
                      value={value}
                      onChange={onChange}
                      placeholder={placeholder}                    
                      />
        </div>
    )
}

export default Textfield
