import React from "react"
import style from "../style/style.module.css"
import { Redirect } from "react-router-dom"

export default class MenSolesDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stage: 0,
            cart: false
        }
    }

    handleCart = (item) => {

        if (this.props.login) {
            this.props.addToCart(item)
            this.setState({
                cart: true
            })
        }
        else {
            alert("Do Login Before Adding to Cart!")
            this.setState({
                stage: 1
            })
        }
    }

    componentDidMount() {
        this.setState({
            cart: false,
            stage: 0
        })
    }


    render() {

        const { stage, cart } = this.state

        if (stage === 1) {
            return <Redirect to="/account" />
        }
        else if (cart) {
            return <Redirect to="/cart" />
        }
        else {

            const { data, match } = this.props

            const item = data.find(item => item.id === Number(match.params.id))

            if (!item) {
                return <h2>Product does not exist ERROR 404</h2>
            }

            return (
                <div style={{ marginTop: "5%", display: "flex", flexDirection: "row", width: "65%", marginLeft: "17.5%" }}>
                    <div style={{ width: "30%" }}>
                        <img src="https://via.placeholder.com/300x300" alt="1" width="100%" />
                    </div>
                    <div style={{ width: "40%", marginLeft: "30%" }}>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                        <small><b>Classics :</b> {item.sole}</small>
                        <div>
                            <h4>Select Size :</h4>
                            <span style={{ padding: "3%", paddingLeft: "3%", paddingRight: "3%", marginRight: "2%", border: "1px solid black" }}>5</span>
                            <span style={{ padding: "3%", paddingLeft: "3%", paddingRight: "3%", marginRight: "2%", border: "1px solid black" }}>6</span>
                            <span style={{ padding: "3%", paddingLeft: "3%", paddingRight: "3%", marginRight: "2%", border: "1px solid black" }}>7</span>
                            <span style={{ padding: "3%", paddingLeft: "3%", paddingRight: "3%", marginRight: "2%", border: "1px solid black" }}>8</span>
                            <span style={{ padding: "3%", paddingLeft: "3%", paddingRight: "3%", marginRight: "2%", border: "1px solid black" }}>9</span>
                            <span style={{ padding: "3%", paddingLeft: "3%", paddingRight: "3%", marginRight: "2%", border: "1px solid black" }}>10</span>
                            <span style={{ padding: "3%", paddingLeft: "3%", paddingRight: "3%", marginRight: "2%", border: "1px solid black" }}>11</span>
                        </div>
                        <button className={style.btn5} onClick={() => { this.handleCart(item) }}>ADD TO CART</button>
                    </div>
                </div>
            )
        }
    }
}