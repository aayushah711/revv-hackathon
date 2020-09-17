import React from "react"
import style from "../style/style.module.css"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <React.Fragment>
            <div>
                <Link to="/class/1/english">
                    <div>
                        <img src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" alt="note1" />
                    </div>
                    <div>
                        <h1>English</h1>
                        <p><small>Class 1</small></p>
                    </div>
                </Link>
            </div>
        </React.Fragment >
    )
}