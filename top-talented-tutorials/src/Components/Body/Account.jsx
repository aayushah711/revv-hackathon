import React from "react"
import style from "../style/style.module.css"

export default class Account extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            conform: "",
            lemail: "",
            lpassword: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlelogin = () => {
        const { lemail, lpassword } = this.state

        const item = {
            email: lemail,
            password: lpassword
        }

        this.props.loggedIn(item)
        this.reBack()
    }

    handleRegister = () => {
        const { fname, lname, email, password, conform } = this.state

        const item = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            conform: conform
        }

        this.props.registration(item)
        this.reBack()
    }
    
    reBack = () => {
        this.setState({
            fname: "",
            lname: "",
            email: "",
            password: "",
            conform: "",
            lemail: "",
            lpassword: ""
        })
    }

    render() {

        const { fname, lname, email, password, conform, lemail, lpassword } = this.state

        const { login, loginUser } = this.props

        if (login) {
            return (
                <div className={style.account}>
                    <div style={{ width: "30%" }}>
                        <img src="https://via.placeholder.com/200x200" alt="user" style={{ borderRadius: "100px" }} />
                    </div>
                    <div style={{ width: "60%", marginLeft: "10%", paddingTop: "3%" }}>
                        <h1>{loginUser.fname} {loginUser.lname}</h1>
                        <h5>{loginUser.email}</h5>
                        <button onClick={this.props.loggedOut}>Logout</button>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <div style={{ marginTop: "4%", background: "whitesmoke", padding: "10%" }}>
                    <div style={{ width: "65%", marginLeft: "17.5%", display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "50%" }}>
                            <h2>LOGIN</h2>
                            <div>
                                <small>EMAIL</small><br />
                                <input name="lemail" value={lemail} onChange={this.handleChange} type="text" />
                            </div>
                            <div style={{ marginTop: "4%", marginBottom: "4%" }}>
                                <small>PASSWORD</small><br />
                                <input name="lpassword" value={lpassword} onChange={this.handleChange} type="password" />
                            </div>
                            <button style={{ width: "52%" }} onClick={this.handlelogin}> sign up </button>
                            <br />
                            <div style={{ marginLeft: "10%", marginTop: "4%", textDecoration: "underline" }}><small>FORGOT PASSWORD</small></div>
                        </div>
                        <div style={{ width: "50%" }}>
                            <h2>CREATE ACCOUNT</h2>
                            <small>We never save credit card information.</small>
                            <p>Registering makes checkout fast and easy and saves your order information in your account.</p>
                            <div style={{ marginBottom: "4%" }}>
                                <small>FIRST NAME</small><br />
                                <input name="fname" value={fname} onChange={this.handleChange} type="text" />
                            </div>
                            <div style={{ marginBottom: "4%" }}>
                                <small>LAST NAME</small><br />
                                <input name="lname" value={lname} onChange={this.handleChange} type="text" />
                            </div>
                            <div style={{ marginBottom: "4%" }}>
                                <small> EMAIL*</small><br />
                                <input name="email" value={email} onChange={this.handleChange} type="email" required />
                            </div>
                            <div style={{ marginBottom: "4%" }}>
                                <small>PASSWORD*</small><br />
                                <input name="password" value={password} onChange={this.handleChange} type="password" required />
                            </div>
                            <div style={{ marginBottom: "4%" }}>
                                <small>CONFORM PASSWORD*</small><br />
                                <input name="conform" value={conform} onChange={this.handleChange} type="password" />
                            </div>
                            <button style={{ width: "52%" }} onClick={this.handleRegister}> Register </button><br />
                            <small style={{ fontSize: "10px" }}>By creating an account, you agree to our Terms of Use and Privacy Policy. </small>
                            <h4>* REQUIRED FIELDS</h4>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}