import React, {Component} from "react";
import ReactDOM from 'react-dom'

const HelloWorld = () => {
    return <h1>Hello World!</h1>;
}

ReactDOM.render (
    <HelloWorld/>,
    document.querySelector(".main__content_img")
)