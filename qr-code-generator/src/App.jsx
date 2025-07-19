import { useState } from 'react'
import Textfield from './components/Textfield'
import Credits from './components/Credits'
import './App.css'

function App() {

  // inputs  
  const [qrCodeUrl, setQrCodeUrl] = useState(null)  
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
    
      <div className="main-container">
        <div className="card">
          <h1 className="title">QR Code Generator</h1>
          <form >

            <Textfield 
              name="url" 
              placeholder="https://example.com"
              label="Enter your website url:"
              value={formData.url}
              onChange={handleInputsChange} 
              />
            
            <button onClick={handleGenerateQrCode} className="btn btn-outline">Generate QR Code</button>          

          </form>
          
          <div className={`qrCodeContainer ${qrCodeUrl === null ? "" : "qrCodeContainer-show"}`}>
              <img src={qrCodeUrl} alt="" height="220" width="220"/>
              <a href={qrCodeUrl} download="qr-code.png" className="btn btn-download">Download as PNG</a>          
          </div>                    
        </div>
        

      </div>      

      <Credits/>
    </>
  )
}

export default App
