import React from "react";

    const LikeSVG = (props) => {
        const fillHeart = props.fillHeart || "#fff";
        const fillBorder = props.fillBorder || "#000";
        return (
            <svg className = {props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.158 496.158">
                <defs/>
                <path className = "like-heart" fill={fillHeart} d="M0 248.085C0 111.063 111.069.003 248.075.003c137.013 0 248.083 111.061 248.083 248.082 0 137.002-111.07 248.07-248.083 248.07C111.069 496.155 0 385.087 0 248.085z"/>
                <path className = "like-border" fill={fillBorder} d="M374.116 155.145c-34.799-34.8-91.223-34.8-126.022 0h-.029c-34.801-34.8-91.224-34.8-126.023 0-34.801 34.8-29.783 86.842 0 126.022 31.541 41.491 89.129 109.944 126.023 109.944h.029c36.895 0 94.481-68.453 126.022-109.944 29.784-39.179 34.8-91.221 0-126.022z"/>
            </svg>
        )
    }


export default LikeSVG;