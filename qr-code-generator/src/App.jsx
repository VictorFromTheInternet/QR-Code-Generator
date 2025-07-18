import { useState } from 'react'
import Textfield from './components/Textfield'
import './App.css'

function App() {

  // inputs  
  const [qrCodeUrl, setQrCodeUrl] = useState("")  
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
  const handleGenerateQrCode = async (e) => {
    e.preventDefault()
    const baseUrl = "https://api.qrserver.com/v1/create-qr-code/"
    const queryParameters = new URLSearchParams({
      data: formData.url,
      size: "220x220",
      margin: "0"
    }).toString()

    const requestUrl = `${baseUrl}?${queryParameters}`

    // fetch
    const options = {
      method: 'GET'
    }
    const response = await fetch(requestUrl, options)
    const blob = await response.blob()
    const qrCodeUrl = URL.createObjectURL(blob)
    setQrCodeUrl(qrCodeUrl)    
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

        <div className="qrCodeContainer">
            <img src={qrCodeUrl} alt="" height="220" width="220"/>
        </div>
        <a href={qrCodeUrl} download="qr-code.png" >Download the url</a>
      </div>
      
    </>
  )
}

export default App
