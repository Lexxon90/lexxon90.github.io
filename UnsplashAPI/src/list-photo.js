import React from "react";
import HeaderButtonImg from "./button-img.js";
import FooterUserImg from "./user-img.js";

    const ListPhoto = (props) => {
        return(
                <ul className = "grid">                        
                    {props.img.map((img, i) => {
                        return(
                            <li 
                            key={i}
                            className="grid-item"
                            onMouseEnter={()=>{props.imageInfoEnter(i)}}
                            onMouseLeave={()=>{props.imageInfoLeave(i)}}
                            onClick={(el)=>{props.onPhotoClick(el, i)}}
                            
                            >
                                
                                {img.selected
                                ? <HeaderButtonImg
                                    like = {img.like}
                                    likePhoto = {(el)=>{props.likePhoto(el, i)}}
                                    link = {img.download}
                                    canselClick={(el)=>{props.canselClick(el)}}
                                />
                                : ""}

                                <img
                                src={img.urls}
                                className={img.width>img.height
                                            ? "img_item img_item_height271"
                                            : "img_item img_item_height604"}
                                />
                                {img.selected ? <FooterUserImg
                                                    avatar = {img.avatar}
                                                    nickname={img.nickname}
                                                    linkUser={img.linkUser}
                                                    canselClick={(el)=>{props.canselClick(el)}}
                                                    /> 
                                                    : ""}
                                        
                            </li>
                        )
                    })}
                    
                </ul> 
            
            
        )
    }

export default ListPhoto;


