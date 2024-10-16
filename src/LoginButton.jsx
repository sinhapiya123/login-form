import React, { useState } from "react";
import "./modal.css";
// import './images.png';

const LoginButton = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const submitHandler = (event) => {
    event.preventDefault();
    var name = document.myForm.uname.value;
    var password = document.myForm.password.value;
    var remember = document.myForm.remember.value;

    if(name===null || name===""){
        alert('Username cannot be null');
        return false;
    }

    if(password.length < 6){
        alert('Password should be more or equal to 6 characters')
        return false;
    }

    console.log('name', name, password, remember);
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Piya</h2>
            {/* <img src="images.png" alt="Avatar" class="avatar"></img> */}
            <p>
              Please provide the correct credentials
            </p>
            <div className="login-form">
                <form onSubmit={submitHandler} name='myForm' className="login-form">
                    <label for="uname">Username</label>
                    <input type="text" id="uname" name="uname" placeholder="Username" required></input><br></br>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" required></input><br></br>
                    <label for="password">Confirm password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" required></input><br></br>
                    <label for="password">Email address</label>
                    <input type="email" id="confirmPassword" name="confirmPassword" placeholder="email" required></input><br></br>
                    <button type="submit">Submit</button><br></br>
                    <input type='checkbox' name='remember'></input>Remember me<br></br>
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </form>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginButton;