import React from 'react'
import '../Style/register.css'
import { useRef, useState, useEffect } from 'react'
import { FaCheck, FaTimes, FaInfoCircle, FaFacebookF } from 'react-icons/fa'
import instagramLogo from'../images/pngegg.png'
import {Link} from 'react-router-dom'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,24}/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])/

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [nameFocus, setNameFocus] = useState(false)
    
    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false)
    
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
    }

return (
<>
    {success ? (
        <section className='success'>
            <h1>Success!</h1>
            <p>
                <a href="#">Sign In</a>
            </p>
        </section>
    ) : (
    <section className='container'>
        <section className='body'>
            <div className="signup-area"> 
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>      
                <div className="header">
                    <h1><img src={instagramLogo} alt="instagramlogo" /></h1>
                    <p className='signup-msg'>Sign up to see photos and videos from your friends </p>
                    <button className='fbtn'> <FaFacebookF/> <span>Log in with facebook</span> </button>
                    <div className="or">
                        <section className='lines'></section>
                        <p className='por'>OR</p>
                        <section className='lines'></section>
                    </div>
                </div>
    
                <form className='reg-form' onSubmit={handleSubmit}>
                    <FaCheck className={validName && userFocus ? "valid" : "hide"} />
                    <FaTimes className={validName || !user ? "hide" : "invalid"} />                     
                    <label htmlFor="Username"></label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        placeholder ="Username"
                    />   
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FaInfoCircle/>
                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>                                                        
                    <label htmlFor="name"></label>
                        <input 
                            value={name}
                            name="name" 
                            onChange={(e) => setName(e.target.value)} 
                            type="text"   
                            id="name"
                            placeholder="Full Name" 
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}                            
                        />
                    <label htmlFor="email"></label>
                    <input value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        placeholder="Email" 
                        id="email" 
                        name="email" 
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}                        
                        />
                    <label htmlFor="password">
                        <FaCheck className={validPwd && pwdFocus ? "valid" : "hide"} />
                        <FaTimes className={validPwd || !pwd ? "hide" : "invalid"} />
                    </label>                         
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        placeholder="Password"
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FaInfoCircle/>
                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>

                    <label htmlFor="confirm_pwd">
                        <FaCheck className={validMatch && matchPwd && matchFocus ? "valid" : "hide"} />
                        <FaTimes className={validMatch || !matchPwd ? "hide" : "invalid"} />
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        placeholder="Confirm Password"
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FaInfoCircle />
                        Must match the first password input field.
                    </p>
                    <button disabled={!validName || !validPwd || !validMatch ? true : false}><Link to='/' style={{width: '100%', height: '100%', color: 'white'}}>Sign Up</Link></button>
                </form>
            
            <p id='conditions'> By signing up you are agreeing to our Terms, Data and Cookies Policy</p>
            </div>
                <div className="footer">
                    <p>
                        <span className='anaccount'>Have an account?</span> 
                        <span>
                            {/*put router link here*/}
                            <Link to='/'> Sign In</Link>
                        </span>
                    </p>
                </div>
                <p id='get'>Get the app.</p>
                <div className='dis'>
                <div className='container1'>
                    <img src="public/mac-os.png" alt="" />
                    <p>GET IT ON <br/> <span className='logotext'>App Store</span></p>
                </div>

                <div className='container1'>
                    <img src="public/google-play.png" alt="" />
                    <p>GET IT ON <br/> <span>Google Play</span></p>
                </div>
                </div>
            </section>
        </section>
    )}
</>)
}
export default Register