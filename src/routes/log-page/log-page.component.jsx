import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './log-page.styles.scss'

const LogPage = () => {
    return (
        <div className='log-page'>
            <h1>Login account</h1>
            <h2>to continue</h2>
            <label htmlFor="log-page-email"></label>
            <input className="log-page-email" type="email" name="log-page-email" placeholder="Email or Username" required />
            <label htmlFor="log-page-password"></label>
            <input className="log-page-password" type="password" name="log-page-password" placeholder="Password" required />
            <Link className='log-page-forgot' to='/forgot'>Forgot it?</Link>
            <button>Log in</button>
        </div>
    )
}

export default LogPage;