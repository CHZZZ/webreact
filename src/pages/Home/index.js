import React, { Component } from 'react'
// import styles from './MainLayout.css'
import Layout from '../../components/Layout'

class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        const { children, location } = this.props
        return (
            <Layout location={location} children={children} />
        )
    }
}

export default Home