import React from "react";
import img from "../components/rightimg.svg";

function SignIn() {
  return (
    <div className="wrapper box-shadow">
      <div className="left">
        <div className="form_tags">
          <h5 className="card_icon">Sign In</h5>
        </div>
        <div className="form">
          <form>
            <div className="email">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <input className="input" type="text" placeholder="Email address" />
            </div>
            <div className="password">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input className="input" type="password" placeholder="Password" />
            </div>
            <p><a href="#">Forgot your password</a></p>
            <input className="checkbox" type="checkbox" value="Remember me" />
            <label>Remember Me</label>
          </form>
          <div className="social">
            <button type="submit">Sign In</button>
            <p>Or via social media</p>
            <ul className="social-icons">
              <li className="google"><i class="fa fa-google-plus" aria-hidden="true"></i></li>
              <li className="fb"><i class="fa fa-facebook-square" aria-hidden="true"></i></li>
              <li className="ln"><i class="fa fa-linkedin" aria-hidden="true"></i></li>
            </ul>
            <p>
              By signing up, you are agree with our{" "}
              <a href="#">Terms & conditions</a>
            </p>
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={img}/>
      </div>
    </div>
  );
}

export default SignIn;
