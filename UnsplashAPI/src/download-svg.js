import React from "react";

    const DownloadSVG = (props) => {
        const fillArrow = props.fillArrow || "#000";
        const fillBorder = props.fillBorder || "#000";
        return(
            <svg className = {props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <defs/>
                <path className = "dwn-arrow" fill={fillArrow} d="M256 0C114.618 0 0 114.618 0 256s114.618 256 256 256 256-114.618 256-256S397.382 0 256 0zm0 469.333c-117.818 0-213.333-95.515-213.333-213.333S138.182 42.667 256 42.667 469.333 138.182 469.333 256 373.818 469.333 256 469.333z"/>
                <path className = "dwn-border" fill={fillBorder} d="M326.248 283.582l-48.915 48.915V128c0-11.782-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333v204.497l-48.915-48.915c-8.331-8.331-21.839-8.331-30.17 0s-8.331 21.839 0 30.17l85.333 85.333c.004.004.008.006.011.01.494.493 1.012.96 1.552 1.403.247.203.507.379.761.569.303.227.6.462.915.673.304.203.619.379.93.565.286.171.565.35.86.508.317.17.643.313.967.466.308.145.61.299.925.43.314.13.635.235.953.349.338.122.672.251 1.018.356.318.096.642.167.964.248.353.089.701.188 1.061.259.372.074.748.117 1.122.171.314.045.622.105.941.136.693.068 1.388.105 2.083.105.007 0 .015.001.022.001s.015-.001.022-.001c.695-.001 1.39-.037 2.083-.105.318-.031.627-.091.941-.136.375-.054.75-.097 1.122-.171.359-.071.708-.17 1.061-.259.322-.081.645-.152.964-.248.346-.105.68-.234 1.018-.356.318-.114.639-.219.953-.349.315-.131.618-.284.925-.43.324-.153.65-.296.967-.466.294-.158.574-.337.86-.508.311-.186.626-.362.93-.565.315-.211.612-.446.915-.673.254-.19.514-.366.761-.569.54-.443 1.059-.91 1.552-1.403.004-.004.008-.006.011-.01l85.333-85.333c8.331-8.331 8.331-21.839 0-30.17-8.331-8.331-21.838-8.331-30.17 0z"/>
            </svg>
        )
    }

export default DownloadSVG;