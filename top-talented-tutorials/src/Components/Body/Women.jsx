import React from "react"
import { Link } from "react-router-dom"
import style from "../style/style.module.css"

export default function Women(props) {

    const { data, match } = props

    return (
        <React.Fragment>
            <div style={{ marginTop: "7%" }}>
                <div style={{ width: "60%", marginLeft: "20%", display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "20%" }}>
                        <h4>SHOES</h4>
                        <div className={style.linkDiv}>
                            <Link to={`${match.url}/${data[0].id}`}><small>Running Shoes</small></Link><br/>
                            <Link to={`${match.url}/${data[1].id}`}><small>Everyday Sneakers</small></Link><br/>
                            <Link to={`${match.url}/${data[3].id}`}><small>Slip-Ons</small></Link><br/>
                            <Link to={`${match.url}/${data[6].id}`}><small>Flats</small></Link><br/>
                            <Link to={`${match.url}/${data[4].id}`}><small>Boat Shoes</small></Link><br/>
                            <Link to={`${match.url}/${data[2].id}`}><small>High Tops</small></Link><br />
                            <Link to={`${match.url}/${data[5].id}`}><small>Weather Repellent Shoes</small></Link>
                        </div>
                    </div>
                    <div style={{ width: "20%" }}>
                        <h4>BASIC</h4>
                        <div className={style.linkDiv}>
                            <Link to={``}><small>Underwear</small></Link><br />
                            <Link to="/socks"><small>Socks</small></Link>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <h4>ACCESSORIES</h4>
                        <div className={style.linkDiv}>
                            <Link to="/lace"><small>Lace Kits</small></Link><br />
                            <Link to="/mask"><small>Sleeping Masks</small></Link><br />
                            <Link to="/women/womenSoles"><small>Insoles</small></Link><br />
                            <Link to="/home/digital"><small>Digital Gift Cards</small></Link><br />
                            <Link to="/home/gift"><small>Physical Gift Cards</small></Link>
                        </div>
                    </div>
                    <div style={{ width: "35%" }}>
                        <h4>COLLECTIONS</h4>
                        <div>
                            <div>
                                <img src="https://via.placeholder.com/300x80" alt="1" />
                                <div style={{ position: "absolute", top: "24%", left: "63%", color: "green" }} className={style.linkDiv}>
                                    <Link to="/women/womenShop">New Tree Dashers</Link>
                                </div>
                            </div>
                            <div style={{ marginTop: "4%" }}>
                                <img src="https://via.placeholder.com/300x80" alt="1" />
                                <div style={{ position: "absolute", top: "34%", left: "65%", color: "green" }} className={style.linkDiv}>
                                    <Link to="/women/womenColor">New Colors</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}