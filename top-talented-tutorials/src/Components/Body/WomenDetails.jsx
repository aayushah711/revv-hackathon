import React from "react"
import style from "../style/style.module.css"
import { Link, Redirect } from "react-router-dom"

export default class WomenDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stage: 0,
            cart: false,
            item: {}
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
            let heading = ["Running Shoes", "Everyday Sneakers", "High-Tops", "Slip-Ons", "Boat Shoes", "Weather Repellent Shoes", "Flats"]

            const { data, match } = this.props

            const item = data.find(item => item.id === Number(match.params.id))

            return (
                <div style={{ marginTop: "4%" }}>
                    {
                        ((item.id) % 2 === 0) ?
                            <div style={{ marginTop: "4%", width: "70%", marginLeft: "15%", display: "flex", flexDirection: "" }}>
                                <div style={{ width: "30%", padding: "1%" }}>
                                    <h5>Home/Men's Shoes/</h5>
                                    <h2>{item.name}</h2>
                                    {
                                        heading && heading.map((items, index) => (
                                            index + 1 === item.id
                                                ?
                                                <h5 key={items}>{items}</h5>
                                                :
                                                <Link to={`/men/${index + 1}`} key={items} className={style.menD}><p>{items}</p></Link>
                                        ))
                                    }
                                    <h3>Filter By :</h3>
                                    <hr />

                                    <h3>Material</h3>
                                    <input type="checkbox" />Light & Breezy Tree<br />
                                    <input type="checkbox" />Soft & Cozy Wool
                                    <hr />
                                    <h4>HUE</h4>
                                    <p><span className={style.black}>.</span> Black</p>
                                    <p><span className={style.white}>.</span> White</p>
                                    <p><span className={style.beige}>.</span> Beige</p>
                                    <p><span className={style.grey}>.</span> Grey</p>
                                    <p><span className={style.red}>.</span> Red</p>
                                    <p><span className={style.yellow}>.</span> Yellow</p>
                                    <p><span className={style.blue}>.</span> Blue</p>
                                    <p><span className={style.pink}>.</span> Pink</p>
                                    <p><span className={style.purple}>.</span> Purple</p>
                                    <p><span className={style.green}>.</span> Green</p>
                                </div>
                                <div style={{ width: "70%", padding: "1%" }}>
                                    {
                                        item.product && item.product.map(item => (
                                            <div key={item.name}>
                                                <h3 style={{ marginTop: "8%", marginBottom: "0%" }}>{item.name}</h3>
                                                <small>{item.sub}</small>
                                                <div style={{ display: "flex", flexDirection: "row", marginTop: "3%" }}>
                                                    <div style={{ width: "44%", background: "whitesmoke", padding: "3%" }}>
                                                        <Link to={`/women/${match.params.id}/${item.name}`} style={{color:"black", textDecoration:"none"}}>
                                                            <img src="https://via.placeholder.com/300x200" alt={item.nam} width="100%" />
                                                            <h5>{item.name}</h5>
                                                            <small>{item.sole}</small>
                                                            <p>{item.price}</p>
                                                        </Link>
                                                    </div>
                                                    <div style={{ width: "44%", padding: "3%" }}>
                                                        <img src="https://via.placeholder.com/300" alt={item.nam} width="100%" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            :
                            <div style={{ marginTop: "4%", width: "70%", marginLeft: "15%" }}>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div style={{ width: "70%" }}>
                                        <img src="https://via.placeholder.com/300" alt="1" width="40%" style={{ margin: "3%" }} />
                                        <img src="https://via.placeholder.com/300" alt="1" width="40%" style={{ margin: "3%" }} />
                                        <img src="https://via.placeholder.com/300" alt="1" width="40%" style={{ margin: "3%" }} />
                                        <img src="https://via.placeholder.com/300" alt="1" width="40%" style={{ margin: "3%" }} />
                                        <img src="https://via.placeholder.com/300" alt="1" width="40%" style={{ margin: "3%" }} />
                                    </div>
                                    <div style={{ width: "30%" }}>
                                        <h1>{item.name}</h1>
                                        <p>{item.price}</p>
                                        <img src="https://img.icons8.com/emoji/2x/glowing-star.png" alt="star" width="30px" />{item.rating}<br />
                                        <small><b>Limited Edition :</b> {item.color} </small>
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
                                        <button style={{ marginBottom: "3%" }} className={style.btn5} onClick={() => { this.handleCart(item) }}>ADD TO CART</button><br />
                                        <small>Free shipping & 30-day returns, no questions asked</small><br />
                                        <div style={{ textAlign: "center", marginTop: "5%" }}>
                                            <b>Tree Dasher Highlights</b><br />
                                            <div style={{ display: "flex", flexDirection: "row", marginTop: "5%" }}>
                                                <div style={{ width: "30%", margin: "2%" }}>
                                                    <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/5RRq6D7d2XTZqvdmMIZQao/8499977205e7511610408842c3e2e925/4pdp-attributes-dasher-sprinter.png" alt="ha" />
                                                    <br /><small>Durable And Breathable Tree Material</small>
                                                </div>
                                                <div style={{ width: "30%", margin: "2%" }}>
                                                    <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/7wss7uKwXrUO90ynOGYr4g/01a0e139e9605b20c72fd5d11029c8ec/3pdp-attributes-dasher-sprinter.png" alt="he" />
                                                    <br /><small>Supportive Dual-Density Sugarcane Midsole</small>
                                                </div>
                                                <div style={{ width: "30%", margin: "2%" }}>
                                                    <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/6R7XNn35GqLdQ5OLgAalOu/1a762104f13ce7cb027333ae05a78dac/5pdp-attributes-dasher-sprinter.png" alt="he" />
                                                    <br /><small>Designed For Maximum Energy Return</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: "flex", flexDirection: "row", marginTop: "5%", textAlign: "center" }}>
                                    <div style={{ width: "50%" }}>
                                        <img src="https://via.placeholder.com/400" alt="1" />
                                    </div>
                                    <div style={{ width: "50%", paddingTop: "7%" }}>
                                        <h5>Tree Upper</h5>
                                        <h2>Seamless Durability</h2>
                                        <p>We knitted a unique one-piece upper made<br /> from FSC® Certified eucalyptus trees for a perfect<br /> fit that’s flexible, lightweight, and breathable <br />in every step..</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", marginTop: "5%", textAlign: "center" }}>
                                    <div style={{ width: "50%", paddingTop: "7%" }}>
                                        <h5>Measured Performance</h5>
                                        <h2>Rigorously Tested</h2>
                                        <p>Run confidently knowing we logged thousands of <br /> miles with 50+ amateur and pro athletes over a<br /> year-long testing period.</p>
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <img src="https://via.placeholder.com/400" alt="1" />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", marginTop: "5%", textAlign: "center" }}>
                                    <div style={{ width: "50%" }}>
                                        <img src="https://via.placeholder.com/400" alt="1" />
                                    </div>
                                    <div style={{ width: "50%", paddingTop: "7%" }}>
                                        <h5>Tree Upper</h5>
                                        <h2>Seamless Durability</h2>
                                        <p>We knitted a unique one-piece upper made<br /> from FSC® Certified eucalyptus trees for a perfect<br /> fit that’s flexible, lightweight, and breathable <br />in every step..</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", marginTop: "5%", textAlign: "center" }}>
                                    <div style={{ width: "50%", paddingTop: "7%" }}>
                                        <h5>Measured Performance</h5>
                                        <h2>Rigorously Tested</h2>
                                        <p>Run confidently knowing we logged thousands of <br /> miles with 50+ amateur and pro athletes over a<br /> year-long testing period.</p>
                                    </div>
                                    <div style={{ width: "50%" }}>
                                        <img src="https://via.placeholder.com/400" alt="1" />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", marginTop: "5%", textAlign: "center" }}>
                                    <div style={{ width: "50%" }}>
                                        <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/pageSectionBodyCard/en-US/images/1U4X4hX5JPanaYLg06jymf/1" width="100%" alt="1" />
                                    </div>
                                    <div style={{ width: "50%", paddingTop: "7%" }}>
                                        <h2>Tread Lighter</h2>
                                        <p>Our Tree Dasher is carbon neutral thanks<br /> to sustainable practices, like using natural<br /> materials and buying offsets. But before we balance the<br /> emissions, its footprint starts at 9.0 kg CO2e.<br /> Think of this measurement like a nutrition label <br />for your closet.</p>
                                        <Link to="/home/our-sustainability" style={{ color: "black", textDecoration: "none" }}><h5>Dig Into How We’re Measuring CO2e</h5></Link>
                                    </div>
                                </div>

                                <div style={{ textAlign: "center" }}>
                                    <h1>Feedback from the Flock</h1>
                                    <h5>{item.rate} out of 5 stars</h5>
                                </div>
                            </div>
                    }

                </div>
            )
        }
    }
}