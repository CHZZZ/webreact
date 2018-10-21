import React, { Component } from 'react'
import { Layout, Menu, Icon, Dropdown } from 'antd'
import { connect } from 'dva'
import { Link } from 'dva/router'
// import qs from 'qs'

const { Header, Content, Sider } = Layout;

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
        // console.log(this, 88)
        return (
            <Layout style={{height: '100%'}}>
                <Sider
                breakpoint="lg"
                collapsedWidth="0"
                // onBreakpoint={(broken) => { console.log(broken); }}
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
                    <Menu.SubMenu key='2' title={<span><Icon type="video-camera" />图表</span>}>
                        <Menu.Item key="2-1">
                        <Link to='/echart'><span className="nav-text">图表Demo</span></Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">上传</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                    <Icon type="user" />
                    <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'flex-end' }} >
                    <div style={{marginRight: 20}}>
                        <Dropdown placement="bottomCenter" overlay={
                        <Menu>
                            <Menu.Item>
                            <Link to='/login'>退出登录</Link>
                            </Menu.Item>
                        </Menu>}>
                            <span className="ant-dropdown-link">
                                guest
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    {children}
                </Content>
                </Layout>
            </Layout>
        )
    }
}

export default connect(({auth})=>auth)(Home)