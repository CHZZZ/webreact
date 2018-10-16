import React, { Component } from 'react'
// import styles from './MainLayout.css'
import Home from './Header'

class Layout extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const { children, location } = this.props
        return (
            <Home location={location} children={children} />
        )
    }
}

export default Layout