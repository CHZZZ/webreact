import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import IndexPage from './routes/IndexPage'
import Login from './pages/Login'
import dynamic from 'dva/dynamic'
import Layout from './components/Layout'

const {ConnectedRouter} = routerRedux
const routeArr = [
  {
  path: '/',
  component: () => IndexPage,
  models: () => [import('./models/home')]//必须是函数 返回组件
  }, {
  path: '/login',
  component: () => Login
  }
  ]
function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter  history={history}>
    {/* <Router history={history} /> */}
      <Switch>
        <Layout>
        {
        routeArr.map((item, index)=>
          <Route key = {index} path = {item.path} exact component={dynamic({app, component: item.component})} />)
        }
        </Layout>
      </Switch>
    </ConnectedRouter >
  )
}

export default RouterConfig
