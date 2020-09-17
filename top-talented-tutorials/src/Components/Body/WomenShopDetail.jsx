import React from "react"
import style from "../style/style.module.css"
import { Link, Redirect } from "react-router-dom"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core"

export default class WomenShopDetails extends React.Component {
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

            const { data, match } = this.props

            const item = data.find(item => item.id === Number(match.params.id))

            if (!item) {
                return <h2>Product does not exist ERROR 404</h2>
            }

            return (
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
                            <img src="https://img.icons8.com/emoji/2x/glowing-star.png" alt="star" width="30px" />
                            <h5>Limited Edition : </h5>{item.sole}
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
                            <button style={{ marginBottom: "3%" }} className={style.btn5} onClick={() =>{this.handleCart(item)}}>ADD TO CART</button><br />
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
                            <div>
                                <Accordion>
                                    <AccordionSummary>
                                        <small><b>CORE FEATURES</b></small>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            <li>Renewable Materials</li>
                                            <li>Machine Washable</li>
                                            <li>Minimizes Odor</li>
                                            <li>Flexibly Conforms To Your Movements</li>
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>
                                        <small><b>DESCRIPTION</b></small>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <p>Our most technical shoe yet, the Tree Dasher reimagines the traditional running shoe with natural materials engineered for serious performance.</p>
                                            <ul>
                                                <li>Heel Drop: 7mm (Forefoot: 15.5mm, Heel: 22.5mm)</li>
                                                <li>Type: Neutral, Cushioned, Light Stability Running Shoe</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>
                                        <small><b>SHIPPING & RETURNS</b></small>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Free shipping on orders over $50, and our 30 days, no questions asked return policy. Lightly worn shoes get donated to Soles4Souls.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary>
                                        <small><b>CARE GUIDE</b></small>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Pull out the insoles and laces. Slip your shoes into a delicates bag and toss them in the washing machine—gentle cycle with cold water with your favorite mild detergent. When they’re done, shake off any excess water and let them air dry.
                                            Handy tips: Don’t put them in the dryer. And don’t worry, they’ll go back to their original shape in no time. You can hand wash your laces and insoles on their own.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
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
                            <h2>Tread Lighter</h2>
                            <p>Our Tree Dasher is carbon neutral thanks<br /> to sustainable practices, like using natural<br /> materials and buying offsets. But before we balance the<br /> emissions, its footprint starts at 9.0 kg CO2e.<br /> Think of this measurement like a nutrition label <br />for your closet.</p>
                            <Link to="/home/our-sustainability" style={{ color: "black", textDecoration: "none" }}><h5>Dig Into How We’re Measuring CO2e</h5></Link>
                        </div>
                        <div style={{ width: "50%" }}>
                            <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/pageSectionBodyCard/en-US/images/1U4X4hX5JPanaYLg06jymf/1" width="100%" alt="1" />
                        </div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <h1>Feedback from the Flock</h1>
                        <h5>4.9 out of 5 stars</h5>
                    </div>
                </div>
            )
        }
    }
}