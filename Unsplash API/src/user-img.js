import React from "react";

    const FooterUserImg = (props) => {
        return(
            <a 
            className="img_footer"
            href={props.linkUser}
            onClick={props.canselClick}
            
            >
                <img 
                src={props.avatar}
                className="img_avatar"
                />
            
                <h2 
                className="img_nickname"
                >
                    {props.nickname}
                </h2>
            </a>
        )
    }

export default FooterUserImg;




    
            





