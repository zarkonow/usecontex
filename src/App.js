
import './App.css';
import {createContext, useState} from "react";
import Payment from "./Components/Payment";



 export const CurrencyContext = createContext('USD')
 export const AmountContext=createContext(0)



function App() {

     const [currency, setCurrency] = useState('USD')
     const [amount, setAmount] = useState(0)

    const updateCurrency = (currency) => {
         setCurrency(currency)
    }
    const updateAmount = (value) => {
         setAmount(value)
    }


  return (
      <>

          <CurrencyContext.Provider value={{currency, updateCurrency}}>
              <AmountContext.Provider value={{amount, updateAmount}}>
              <Payment/>
              </AmountContext.Provider>

          </CurrencyContext.Provider>

            <input onInput={e=>updateAmount(e.target.value)}/>

          <select onChange={e => updateCurrency(e.target.value)}>
              <option value='EUR'>EUR</option>
              <option value='USD'>USD</option>
              <option value='RUB'>RUB</option>
              <option value='GBP'>GBP</option>

          </select>

      </>
  );
}

export default App;
