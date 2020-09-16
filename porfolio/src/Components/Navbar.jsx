import React from "react"
import { Link } from "react-router-dom"
import style from "./Style/style.module.css"

const NavBar = () => {
    return (
        <div className={style.navDiv}>
            <Link to="/" >Home</Link>
        </div>
    )
}

export default NavBar