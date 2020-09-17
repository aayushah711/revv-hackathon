import React from "react"
import { Link } from "react-router-dom"

export default function FAQDetails(props) {

    const { data, match } = props

    const item = data.find(item => item.id === Number(match.params.id))

    if (!item) {
        return <h2>Product does not exist ERROR 404</h2>
    }
    
    return (
        <div style={{width:'65%', marginLeft:"17.5%", padding:"3%"}}>
            <p><Link to="/faq" style={{color:"black"}}>BACK</Link></p>
            <h2>{item.que}</h2>
            {item.ans}
        </div>
    )
}