import React from "react";
import DownloadSVG from "./download-svg.js";
import LikeSVG from "./heart-svg.js";

const HeaderButtonImg = (props) => {
    return(
        <div className="img_header">
            <ul className="img_skill_list">
                <a 
                className="skill_item"
                href={props.link}
                download={props.link}
                onClick={props.canselClick}>
                    <p className = "skill_text">
                        Download
                    </p>
                    <DownloadSVG
                    className="skill_img download" 
                    fillArrow="#fff"
                    fillBorder="#fff"/>
                </a>
                <a 
                className="skill_item"
                onClick={props.likePhoto}
                onMouseEnter={props.selectButton}
                >
                    <p className = "skill_text">
                        Like
                    </p>
                    {props.like ?

                    <LikeSVG
                    className="skill_img like"
                    fillHeart="#FF4656"
                    fillBorder="#fff"
                    />
                    :<LikeSVG
                    className="skill_img like" 
                    />
                    }       
                </a>
            </ul>
        </div>
    )
}


export default HeaderButtonImg;