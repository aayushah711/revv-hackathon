import React from "react"
import { Link } from "react-router-dom"
import style from "../style/style.module.css"

export default function OurMaterials() {
    return (
        <React.Fragment>
            <div style={{ marginTop: "3%" }}>
                <img src="https://via.placeholder.com/1000x500" alt="ha" width="100%" />
                <div className={style.our}>
                    <Link to="/ourmaterials/" >WOOL</Link>
                    <Link to="/ourmaterials/tree" >TREE</Link>
                    <Link to="/ourmaterials/sugar" >SUGAR</Link>
                    <Link to="/ourmaterials/trino" >TRINO</Link>
                </div>
                <hr style={{width:"50%",color:"whitesmoke",  marginTop:'2%', textAlign:"center"}} />
            </div>
        </React.Fragment>
    )
}