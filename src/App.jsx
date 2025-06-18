import React, { useEffect, useState } from 'react'
import CurrSelect from './components/CurrSelect'

const App = () => {

  const [ fromCurr , setFromCurr] = useState("USD");
  const [toCurr , setToCurr ] = useState("NGN");
  const [ amount, setAmount ] = useState(100);
  const [ result, setResult ] = useState("");
  const [ isLoading, setIsLoading] = useState(false)

  // Swapping the currency
  const swapCurr = () => {
      setFromCurr(toCurr);
      setToCurr(fromCurr);
  }

  // Getting the Exchnage Rate API
  const getExchangeRate = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurr}/${toCurr}`;

      setIsLoading(true)
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error();

        const data = await response.json();
        const rate = (data.conversion_rate * amount).toFixed(2);
        setResult(`${amount} ${fromCurr} = ${rate} ${toCurr}`);
        
      } catch (error) {
        console.log(error);
        
      } finally {
        setIsLoading(false)
      }
  }
// On submitting the form, get the exchnage rate
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  }

  // Update the exchange on rendering
  useEffect(() => getExchangeRate, [])
  
  return (
    <div className="currency-converter">
        <h3 className="converter-title">Currency Converter</h3>

        <form className="converter-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
                <label className='form-label' >Enter Amount</label>
                <input type="number" className="form-input"
                value={amount} onChange = {e => setAmount(e.target.value)}
                required />
          </div>

          <div className="form-group form-currency-group">
              <div className="form-section">
                <label className="form-label">From</label>
                <CurrSelect selectedcurr = {fromCurr}
                handleCurr={ e => setFromCurr(e.target.value)}
                
                />
              </div>

               {/* SVG SWAP ICON */}
            <div className="swap-icon" onClick={swapCurr}>
              <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 
              .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 
              0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
              fill="#fff"
            />
              </svg>
            </div>
          <div className="form-section">
                <label className="form-label">To</label>
                <CurrSelect selectedcurr={toCurr} 
                handleCurr={ e => setToCurr(e.target.value)}
                />
              </div>
          </div>
          <button type='submit' className={`${isLoading ? "loading...." : "" } submit-button`}>Get Exchange Rate</button>
          <p className="exchange-rate-result"> {isLoading ? "Getting Exchange Rate...." : result }</p>
        </form>
    </div>
  )
}

export default App