import { Routes, Route } from 'react-router-dom';

import StartPage from './routes/start-page/start-page.component';
import LogPage from './routes/log-page/log-page.component';
import SignPage from './routes/sign-page/sign-page.component';
import ForgotPage from './routes/forgot-page/forgot-page.component';

import './App.styles.scss';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='log-in' element={<LogPage />} />
        <Route path='sign-in' element={<SignPage />} />
        <Route path='forgot' element={<ForgotPage />} />
      </Routes>
    </div>
  )
}

export default App;
