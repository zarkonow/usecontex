import {useContext} from "react";
import {AmountContext, CurrencyContext} from "../App";


const PayPal = () => {

    const currency = useContext(CurrencyContext)
    const amount= useContext(AmountContext)

    return <p>{currency.currency},{amount.amount}</p>
}

export default PayPal