import dva from 'dva';
import './index.css';
import dvaLoading from 'dva-loading'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.use(dvaLoading())
app.model(require('./models/auth').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
