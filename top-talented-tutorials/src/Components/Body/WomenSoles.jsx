import React from "react"
import { Link } from "react-router-dom"

export default function MenSoles(props) {

    const { data, match } = props

    return (
        <div style={{ marginTop: '3%' }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ width: "60%" }}>
                    <img src="https://via.placeholder.com/300x200" width="100%" height="100%" alt="font" />
                </div>
                <div style={{ width: "36%", background: "#212a2f", color: "white", textAlign: "center", padding: "2%", paddingTop: "15%" }}>
                    <h1>Women's Insoles </h1>
                    <p>Get the spring back in your step with our high cushion, merino-lined replacement insoles.</p>
                </div>
            </div>
            <div style={{ display:"flex", flexDirection:"row", width: "65%", marginLeft: "17.5%", marginTop:"4%" }}>
                {
                    data && data.map((item, i) => (
                        <div key={item.id} style={{width:"20%", marginLeft:"5%"}} >
                            <Link to={`${match.url}/${item.id}`} style={{textDecoration:"none", color:"black"}}>
                                <img src="https://via.placeholder.com/100x100" alt={item.name} width="100%" />
                                <h5>{item.name}</h5>
                                <small>{item.sole}</small>
                                <p>{item.price}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}