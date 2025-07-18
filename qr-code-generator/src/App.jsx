import { useState } from 'react'
import Textfield from './components/Textfield'
import './App.css'

function App() {

  // inputs  
  const [formData, setFormData] = useState({
    url: ""
  })

  // handle inputs
  const handleInputsChange = e =>{
    const {name, value, type, files} = e.target    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // qr code
  const handleGenerateQrCode = (e) => {
    e.preventDefault()

  }


  return (
    <>
      <div className="card">
        <form action="">

          <Textfield 
            name="url" 
            placeholder="https://example.com"
            label="Enter your website url:"
            value={formData.url}
            onChange={handleInputsChange} 
            />
          
          <button onClick={handleGenerateQrCode}>Generate QR Code</button>

        </form>
      </div>
      
    </>
  )
}

export default App
