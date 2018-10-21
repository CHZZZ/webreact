import React from 'react'
import { Route, Switch, routerRedux } from 'dva/router'
import IndexPage from './routes/IndexPage'
import Login from './pages/Login'
import dynamic from 'dva/dynamic'
import Common from './pages/Common'
import Echarts from './pages/Echart'

const {ConnectedRouter} = routerRedux
const routeArr = [
  {
  path: '/',
  component: () => IndexPage,
  models: () => [import('./models/home')]//必须是函数 返回组件
  }
  , {
  path: '/echart',
  component: () => Echarts
  }
  ]
function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter  history={history}>
    {/* <Router history={history} /> */}
      <Switch>
      <Route key = '/login' path = '/login' exact component={dynamic({app, component:  () => Login, models:  () => [import('./models/login')]})} />
        <Common >
        {
        routeArr.map((item, index)=>
          <Route key = {index} path = {item.path} exact component={dynamic({app, component: item.component})} />)
        }
        </Common>
      </Switch>
    </ConnectedRouter >
  )
}

export default RouterConfig
