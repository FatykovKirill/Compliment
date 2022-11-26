import { Route } from 'react-router-dom';

import StartPage from './components/start-page/start-page.component';
import LogPage from './components/log-page/log-page.component';
import SignPage from './components/sign-page/sign-page.component';
import ForgotPage from './components/forgot-page/forgot-page.component';

import './App.styles.scss';

const App = () => {
  return (
    <div className="app-container">
      {/* <StartPage /> */}
      {/* <LogPage /> */}
      {/* <SignPage /> */}
      <ForgotPage/>
    </div>
  )
}

export default App;
