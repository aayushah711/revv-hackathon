import React from "react"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import axios from "axios"
import style from "./Style/style.module.css"

export default function AddUser() {

    const [name, setName] = useState("")
    const [cash, setCash] = useState(0)
    const [manager, setManager] = useState("")
    const [managerData, setManagerData] = useState([])
    const [status, setStatus] = useState(false)
    const [data, setData] = useState([])
    const [add, setAdd] = useState(true)
    const [confirm, setConfirm] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            id: uuid(),
            name,
            capital: {
                cash: Number(cash),
                stocks: []
            },
            manager1: managerData[0].id
        }
        addClient(payload)
        getClients()
        setAdd(false)
        remove()
    }

    const handleManager = (e) => {
        e.preventDefault()

        axios.get(`http://localhost:3000/managers`)
            .then(res => res.data)
            .then(res => {
                setManagerData(res)
                setStatus(true)
            })
            .catch(err => console.log(err))
    }

    const addClient = (payload) => {
        axios.post(`http://localhost:3000/clients`, payload)
    }

    const getClients = () => {
        axios.get(`http://localhost:3000/clients`)
            .then(res => res.data)
            .then(res => setData(res))
    }

    const remove = () => {
        setName("")
        setCash(0)
    }

    return (
        <div>
            {
                status ?
                    confirm ?
                        <h1>Next Page</h1>
                        :
                        <>
                            <h1 style={{ textAlign: "center", color: "teal" }}>Client Details</h1>
                            <div>
                                {
                                    data.map(item =>
                                        <div key={item.id} className={style.clients}>
                                            <div>{item.name}</div>
                                            <div>{item.capital.cash}</div>
                                        </div>
                                    )
                                }
                            </div>
                            {
                                add ?
                                    <form onSubmit={handleSubmit} className={style.form}>
                                        <input type="text" placeholder="Enter the Name" value={name} onChange={e => setName(e.target.value)} /><br />
                                        <input type="number" placeholder="Enter the Amount" value={cash} onChange={e => setCash(e.target.value)} /><br />
                                        <input className={style.btn} type="submit" value="ADD Client" />
                                    </form>
                                    :
                                    <div className={style.btns}>
                                        <button onClick={() => setAdd(true)}>Add More</button>
                                        <button onClick={() => setConfirm(true)}>Confirm</button>
                                    </div>
                            }
                        </>
                    :
                    <>
                        <h1 style={{ textAlign: "center", color: "teal" }}>Welcome</h1>
                        <div className={style.form}>
                            <input type="text" placeholder="Enter the manager Name" value={manager} onChange={e => setManager(e.target.value)} /><br />
                            <button onClick={handleManager} className={style.btn}>Confirm</button>
                        </div>
                    </>

            }
        </div>
    )
}