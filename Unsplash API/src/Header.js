import React from "react";

    const Header = (props) => {
        return(
            <header className="header">
                <img 
                src="img/unsplash.svg" 
                alt="unsplash" 
                className="header_riot"
                onClick={props.mainList}
                />
                
                

                {props.username ?
                    <div className="header_login">
                        <img 
                            src={props.avatar}  
                            alt="avatar" 
                            className="header_login_avatar"/>
                        <a 
                            className="header_login_user-name"
                            
                        >
                            {props.username}
                        </a>
                        <a
                        href="http://localhost:8080/"
                        onClick={props.logout}>
                            <img 
                                src="img/exit.svg"  
                                alt="exit" 
                                className="header_login_exit"/>
                        </a>
                        

                    </div>

                    :<div className="header_login">
                        <img 
                            src="img/avatar.jpg"  
                            alt="avatar" 
                            className="header_login_avatar"/>
                        <a 
                            className="header_login_user-name"
                            onClick={props.logiMain}
                        >
                            login
                        </a>
                    </div>
            }

                
            </header>
        )
    }

export default Header;