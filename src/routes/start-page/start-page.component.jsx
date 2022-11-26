import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './start-page.styles.scss';

const StartPage = () => {
    return (
        <Fragment>
            <div className='start-page'>
                <h1>Compliment</h1>
                <div className='buttons'>
                    <Link to='/log-in'><button>Log in</button></Link>
                    <Link to='/sign-in'><button className='start-page-sign-button'>Sign up</button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default StartPage;