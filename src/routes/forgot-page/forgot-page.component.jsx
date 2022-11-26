import './forgot-page.styles.scss';

const ForgotPage = () => {
    return (
        <div className='forgot-page'>
            <h1>Forgot password?</h1>
            <h2>Enter the email address associated with your account and we will send you the password</h2>
            <label htmlFor="forgot-page-email"></label>
            <input className="forgot-page-email" type="email" name="forgot-page-email" placeholder="Email" required />
            <button>Send</button>
        </div>)
}

export default ForgotPage;