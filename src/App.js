
import './App.css';
import {createContext, useEffect, useState} from "react";
import Payment from "./Components/Payment";

import {CURRENCIES} from "./Utils/CurrencyUtils";
import {loadUsersState} from "./Reducers/User";
import {userReducer} from './Reducers/User'


export const CurrencyContext = createContext('USD')
 export const AmountContext=createContext(0)




function App() {


     const [userState, dispatch] = userReducer(userReducer, loadUsersState())


     const [currency, setCurrency] = useState('USD')
     const [amount, setAmount] = useState(0)




    const updateCurrency = (currency) => {
         setCurrency(currency)
    }
    const updateAmount = (value) => {
         setAmount(value)
    }

    const saveUser = () => {
        if (userState.username === null || userState.username.trim() === '' || userState.money === null || isNaN(userState.money)){
            return;
        }
        dispatch({type: 'SET_USERNAME', payload: true})
    }

    useEffect(() => {
        if(userState.isUserCreated){
            localStorage.setItem('userState', JSON.stringify(userState))
        }
    }, [userState]);


  return (
      <>

          <CurrencyContext.Provider value={{currency, updateCurrency}}>
              <AmountContext.Provider value={{amount, updateAmount}}>
                  <Payment/>
              </AmountContext.Provider>
          </CurrencyContext.Provider>


          <input onInput={e => updateAmount(e.target.value)}/>



          {!userState.isUserCreated &&
          <form>
              <input placeholder='Enter your username' onInput={e => dispatch({type: 'SET_USERNAME', payload: e.target.value})}/>
              <input placeholder='Enter your money' onInput={e => dispatch({type: 'SET_MONEY', payload: e.target.value})}/>
              <button type='button' onClick={saveUser}>Kreiraj Korisnika</button>
          </form>
          }

          <select onChange={e => updateCurrency(e.target.value)}>
              {Object.keys(CURRENCIES).map(currency => (
                  <option key={currency} value={currency}>{currency}</option>))}
          </select>

      </>
  );
}

export default App;
