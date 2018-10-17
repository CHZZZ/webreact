import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'dva'
import { Link } from 'dva/router'
// import qs from 'qs'

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }
    // menuClick = ({ item, key, keyPath }) => {
    //     if(key !== '/users') return
    //     this.props.dispatch(
    //         routerRedux.push({
    //             pathname: key,
    //             search: qs.stringify({ page: 1 })
    //         })
    //     )
    // }
    render() {
        // const { location } = this.props
        const { children } = this.props
        return (
            <Layout style={{height: '100%'}}>
                <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => { console.log(broken); }}
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                    <Link to='/city'>
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                    <Icon type="user" />
                    <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default connect()(Home)