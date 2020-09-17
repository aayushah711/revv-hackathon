import React from "react"
import { Link } from "react-router-dom"
import style from "../style/style.module.css"

export default function socks(props) {

    const { data, match } = props

    return (
        <div style={{ marginTop: "4%", width: "70%", marginLeft: "15%", display: "flex", flexDirection: "" }}>
            <div style={{ width: "30%", padding: "1%" }}>
                <h5>Home/Men's Shoes/</h5>
                <h2>{data.name}</h2>
                <p><b>Filter By :</b></p>
                <hr />
                <h4>HUE</h4>
                <p><span className={style.blue}>.</span> Blue</p>
                <p><span className={style.black}>.</span> Black</p>
                <p><span className={style.white}>.</span> White</p>
                <p><span className={style.grey}>.</span> Grey</p>
                <p><span className={style.beige}>.</span> Beige</p>
                <p><span className={style.red}>.</span> Red</p>
                <p><span className={style.yellow}>.</span> Yellow</p>
                <p><span className={style.pink}>.</span> Pink</p>
                <p><span className={style.purple}>.</span> Purple</p>
                <p><span className={style.green}>.</span> Green</p>
            </div>
            <div style={{ width: "70%", padding: "1%" }}>
                {
                    data.product && data.product.map(item => (
                        <div key={item.name}>
                            <h3 style={{ marginTop: "8%", marginBottom: "0%" }}>{item.name}</h3>
                            <small>{item.sub}</small>
                            <div style={{ display: "flex", flexDirection: "row", marginTop: "3%" }}>
                                <Link to={`${match.url}/${item.name}`} style={{color:"black",textDecoration:"none", width: "44%", background: "whitesmoke", padding: "3%" }}>
                                    <img src="https://via.placeholder.com/300x200" alt={item.nam} width="100%" />
                                    <h5>{item.name}</h5>
                                    <small>{item.sole}</small>
                                    <p>{item.price}</p>
                                </Link>
                                <div style={{ width: "44%", padding: "3%" }}>
                                    <img src="https://via.placeholder.com/300" alt={item.nam} width="100%" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}