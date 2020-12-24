import React from "react";

    const Login = (props) => {
        return(
            <main 
            className="main main-login-contaner"
            >

                <div 
                className="main-login"
                >
                    <h1 
                    className="main-login_header"
                    >Unsplash
                    </h1>

                    <h2 
                    className="main-login_text"
                    >Login
                    </h2>
                    
                    <button 
                    className ="form__button"
                    onClick ={props.loginAuthentication}>
                        Вход
                    </button>
                </div>
            </main>
        )
    }

export default Login;

