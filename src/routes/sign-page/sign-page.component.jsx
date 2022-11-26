import './sign-page.styles.scss'

const SignPage = () => {
    return (
        <div className='sign-page'>
            <h1>Create account</h1>
            <h2>to contninue</h2>
            <label htmlFor="sign-page-username"></label>
            <input className="sign-page-username" type="text" name="sign-page-username" placeholder="Username" required />
            <label htmlFor="sign-page-email"></label>
            <input className="sign-page-email" type="email" name="sign-page-email" placeholder="Email" required />
            <label htmlFor="sign-page-password"></label>
            <input className="sign-page-password" type="password" name="sign-page-password" placeholder="Password" required />
            <button>Sign up</button>
        </div>
    )
}

export default SignPage;