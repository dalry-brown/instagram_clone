import React from 'react'
import '../Style/login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="login">
    <div className= "page">
      <div className = "cover">    
      <h1 className= "head"><img src="public/instagramlogo.png" alt="" /></h1>
      <form action="">
        <input type="text" name="" id=""  placeholder="Username" /><br />
        <input type="password" name="" id="" placeholder="Password"/><br />
        <Link to='/landingpage'><button id= "submit-id">Login</button></Link>
      </form>


      <div className="or">
          <section className='lines'></section>
          <p className='por'>OR</p>
          <section className='lines'></section>
      </div>
     <div className= "wrapper">
      <img src="public/facebook-new.png" alt="" />
       <div className="text-box">
         <p>Log in with Facebook</p>
         <p id='text-color'>Forgot Password?</p>
       </div>
     </div>
    </div>
    <div className='page1'>
      <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
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
   <footer>
  <div class="container0">
    <div class="row1">
      <div class="col-3">
        <a href="">Meta</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Top Accounts</a>
        <a href="#">Hashtags</a>
        <a href="#">Locations</a>
        <a href="#">© 2023 Instagram from Facebook</a>
      </div>
     
    </div>
  </div>
</footer>

</div>
</div> 
</>
  )
}

export default Login