import React from "react"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import axios from "axios"
import style from "./Style/style.module.css"

export default function AddUser() {

    const [name, setName] = useState("")
    const [cash, setCash] = useState(0)
    const [manager, setManager] = useState("")
    const [status, setStatus] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            id: uuid(),
            name,
            capital: {
                cash: Number(cash),
                stocks: []
            },
            manager1: "manager1"
        }
        addClient(payload)
        console.log(name, cash)

        remove()
    }

    const handleManager = (e) => {
        e.preventDefault()
        setStatus(true)
    }

    const addClient = (payload) => {
        axios.post(`http://localhost:3000/clients`, payload)
    }

    const remove = () => {
        setName("")
        setCash(0)
    }

    return (
        <div>
            {
                status ?
                    <>
                        <h1 style={{ textAlign: "center", color: "teal" }}>Client Details</h1>
                        <form onSubmit={handleSubmit} className={style.form}>
                            <input type="text" placeholder="Enter the Name" value={name} onChange={e => setName(e.target.value)} /><br />
                            <input type="number" placeholder="Enter the Amount" value={cash} onChange={e => setCash(e.target.value)} /><br />
                            <input type="submit" value="ADD Client" />
                        </form>
                    </>
                    :
                    <>
                        <h1 style={{ textAlign: "center", color: "teal" }}>Welcome</h1>
                        <div className={style.form}>
                            <input type="text" placeholder="Enter the manager Name" value={manager} onChange={e => setManager(e.target.value)} /><br />
                            <button onClick={handleManager}>Confirm</button>
                        </div>
                    </>

            }
        </div>
    )
}