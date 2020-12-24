import React from "react";
import DownloadSVG from "./download-svg.js";
import LikeSVG from "./heart-svg.js";

    const ZoomPhoto = (props) => {
        return(
            <div>
                {props.zoom_photo ? 
                <div
                className="zoom_contaner"
                onClick={()=>{props.onPhotoClickOut()}}
                >
                    <div
                    className="zoom_background"></div>
                    <div
                    className="zoom_content"
                    onClick={(el)=>{props.canselClick(el)}}>
                        <a
                        className="zoom_user"
                        href={props.img.linkUser}>
                            <img 
                            src={props.img.avatarMedium}
                            className="zoom_user-avatar"
                            ></img>
                            <p
                            className="zoom_user-nickname">
                                {props.img.nickname}</p>
                        </a>
                        <img
                            src={props.img.urlsMedium}
                            className="zoom_img">
                        </img>
                        <div
                        className="zoom_button">
                            <a
                            className="zoom_link"
                            download={props.img.downloadSmall}
                            href={props.img.downloadSmall}
                            >
                                <p
                                className="zoom_link-text">download Small</p>
                                <DownloadSVG
                                className="skill_img download zoom_skill-button" 
                                />
                            </a>

                            <a
                            className="zoom_link"
                            download={props.img.downloadMedium}
                            href={props.img.downloadMedium}>
                                <p
                                className="zoom_link-text">download Medium</p>
                                <DownloadSVG
                                className="skill_img download zoom_skill-button" 
                                />
                            </a>

                            <a
                            className="zoom_link"
                            download={props.img.downloadLarge}
                            href={props.img.downloadLarge}>
                                <p
                                className="zoom_link-text">download Large</p>
                                <DownloadSVG
                                className="skill_img download zoom_skill-button" 
                                />
                            </a>

                            <a
                            className="zoom_link"
                            download={props.img.download}
                            href={props.img.download}>
                                <p
                                className="zoom_link-text">download Original</p>
                                <DownloadSVG
                                className="skill_img download zoom_skill-button" 
                                />
                            </a>

                            <a
                            className="zoom_link"
                            onClick={(el)=>{props.likePhoto(el)}}
                            >
                                <p
                                className="zoom_link-text">Like</p>
                                {props.img.like ? 
                                <LikeSVG
                                className="skill_img like"
                                fillHeart="#FF4656"
                                fillBorder="#fff"
                                />
                                :<LikeSVG
                                className="skill_img like" 
                                fillHeart="#000"
                                fillBorder="#fff"
                                />
                                }
                            </a>
            
                        </div>
                    </div>
                </div>
            : ""}
            </div>
            
        )
    }

export default ZoomPhoto;

