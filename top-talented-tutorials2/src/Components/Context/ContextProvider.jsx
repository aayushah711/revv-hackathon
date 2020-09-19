import React from "react"

export const AuthContext = React.createContext()

class ContextProvider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: false,
            cart: [],
            loginUser: [],
            registerUsers: []
        }
    }

    registration = (data) => {
        this.setState({
            registerUsers: [...this.state.registerUsers, data]
        })
        alert("Register Successfully! Login Now.....")
    }

    loggedIn = (data) => {
        const { registerUsers } = this.state
        let temp = registerUsers.find(item => (item.email === data.email && item.password === data.password))
        if (temp.length === 0) {
            alert("Wrong Username and Password!")
        }
        else {
            this.setState({
                login: true,
                loginUser: temp
            })
            alert("Login Successfully!")
        }
    }

    loggedOut = () => {
        this.setState({
            login: false
        })
    }

    addToCart = (item) => {
        this.setState({
            cart: [...this.state.cart, item]
        })
    }

    removeToCart = (cartItem) => {
        const { cart } = this.state
        this.setState({
            cart: cart.filter(item => item.name !== cartItem.name)
        })
    }

    render() {
        const { login, cart, loginUser } = this.state
        const { loggedIn, loggedOut, addToCart, removeToCart, registration } = this

        return (
            <AuthContext.Provider value={{ login, cart, loginUser, loggedIn, loggedOut, addToCart, removeToCart, registration }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default ContextProvider