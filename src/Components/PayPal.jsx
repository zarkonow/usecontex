import {useContext} from "react";
import {CurrencyContext} from "../App";


const PayPal = () => {

    const currency = useContext(CurrencyContext)

    return <p>PayPal</p>
}

export default PayPal