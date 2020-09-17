import React from "react"
import style from "../style/style.module.css"

export default class Cart extends React.Component {
    render() {
        const { cart, loginUser } = this.props
    
        if (cart.length === 0) {
            return (
                <div style={{ marginTop: "5%", textAlign: "center" }}>
                    <h5>Cart is Empty!</h5>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div style={{ marginTop: "4%" }}>
                    <h5 style={{ textAlign: "center" }}>{loginUser.fname} {loginUser.lname}'s Cart List</h5>
                    {
                        cart && cart.map((item, i) =>
                            (item.id === undefined) ?
                                <div key={i} className={style.cart}>
                                    <div>
                                        <img src={item.img} alt="https://via.placeholder.com/150" width="150px" style={{borderRadius:"10px"}} />
                                    </div>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p><b>Price : </b>{item.size}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.removeToCart(item)}>X</button>
                                    </div>
                                </div>
                                :
                                <div key={i} className={style.cart}>
                                    <div>
                                        <img src="https://via.placeholder.com/150" alt={item.name}  style={{borderRadius:"10px"}}/>
                                    </div>
                                    <div>
                                        <h3 style={{marginBottom:"0%"}}>{item.name}</h3>
                                        <small style={{marginTop:"0%"}}>{item.sub}</small>
                                        <p><b>Edition : </b>{item.sole}{item.color}</p>
                                        <h5>{item.price}</h5>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.removeToCart(item)}>X</button>
                                    </div>
                                </div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}