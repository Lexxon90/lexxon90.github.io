import "./css/style.css";
import Masonry from "masonry-layout"
import Unsplash from 'unsplash-js';
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import Login from "./login.js";
import Header from "./Header.js";
import ListPhoto from "./list-photo.js";
import ZoomPhoto from "./zoom-photo.js";
import imagesLoaded from 'imagesloaded';





// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
    // accesskey из настроек вашего приложения
    accessKey: "UaSusWVA_p5bK-ZG0Aj_KK-F3yYC8ZuXIxKKvj1Q6AA",
    // Application Secret из настроек вашего приложения
    // secret: "1oWJZ2W4HqnkQ4bikZkeX9f8fALUbzCR2p4Oy7Fy04w",
    // Полный адрес страницы авторизации приложения (Redirect URI)
    // Важно: этот адрес обязательно должен быть указан в настройках приложения
    // на сайте Unsplash API/Developers
    callbackUrl: "https://lexxon90.github.io/Unsplash%20API/dist/"
   });



class Img extends Component {
    constructor() {
        super();

        this.state = {
            img: [],
            user: [{
                idUser:"",
                avatar:"",
                username:""
            }],
            login: false,
            access_token: localStorage.access_token ? localStorage.access_token : "",
            zoom_photo: false,
            key: 0,
            list_number: 1,
            load_content: false,
        };

    };


    setBearerToken() {

        unsplash.auth.setBearerToken(localStorage.access_token);
                    unsplash.currentUser.profile()
                        .then(res => res.json())
                        .then(json => {
                            user = this.state.user
                            let user = {
                                idUser: json.id,
                                avatar: json.profile_image.small,
                                username: json.username
                            }
                            this.state.user.splice(0,1,user);
                            this.setState(this.state);
    })}

    getListPhotos() {
        let list = this.state.list_number;
        unsplash.photos.listPhotos(list, 30)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.state.load_content = true;
            let imgState= this.state.img;

            for (let i=0; i < json.length; i++){
            

                let img = {
                    idUser: json[i].user.id,
                    avatar: json[i].user.profile_image.small,
                    avatarMedium: json[i].user.profile_image.medium,
                    nickname: json[i].user.username,
                    idImg: json[i].id,
                    urls: json[i].urls.small,
                    like: json[i].liked_by_user,
                    urlsMedium: json[i].urls.regular,
                    download: json[i].links.download+"?force=true",
                    downloadSmall: json[i].links.download+"?force=true&w=640",
                    downloadMedium: json[i].links.download+"?force=true&w=1920",
                    downloadLarge: json[i].links.download+"?force=true&w=2400",
                    alt: json[i].alt_description,
                    linkUser: json[i].user.links.html,
                    height: json[i].height,
                    width: json[i].width,
                    selected: false
                }
                
                imgState.push(img)
            }

            this.setState(imgState);
            this.state.list_number = list + 1;
        })
        .then (()=> {

            this.state.load_content = false;
            let grid = document.querySelector('.grid');
            let msnry 
            imagesLoaded(grid, function(){
                
                msnry = new Masonry( grid, {  
                    // options...
                    itemSelector: '.grid-item',
                    columnWidth: 400,
                    gutter: 30
                });
                msnry.layout();
            })
        })
        
    }

    

    componentDidMount() {
        const code = location.search.split('code=')[1];
        if (code) {
            unsplash.auth.userAuthentication(code)
            .then(res => {
                if (!res.ok){
                    this.setBearerToken();
                    this.getListPhotos();
                }
                else {
                    res.json()
                    .then(json =>{
                        localStorage.access_token = json.access_token;
    
                        this.setBearerToken();
                        this.getListPhotos();
                    })
                }
            })
        }
        else {
            this.getListPhotos();  
        }
        
        window.addEventListener('scroll', this.scroll.bind(this));

    }

    scroll() {

        let posTop = (window.pageYOffset !== undefined) 
                ? window.pageYOffset 
                : (document.documentElement || document.body.parentNode || document.body).scrollTop;

            let heightPage = document.querySelector("body").offsetHeight
            let newContent = heightPage * .8;

            if ((newContent < posTop) && (!this.state.load_content))   {

                this.state.load_content = true;
                this.getListPhotos();

            }
    }

    imageInfoEnter(key) {
        let state = this.state.img;
        state[key].selected = true;
        this.state.key = key;
        this.setState(state);
    }

    imageInfoLeave(key) {
        let state = this.state.img
        state[key].selected = false;
        this.setState(state);
    }

    loginAuthentication(){

        // Генерируем адрес страницы аутентификации на unsplash.com
        // и указываем требуемые разрешения (permissions)
        const authenticationUrl = unsplash.auth.getAuthenticationUrl([
            "public",
            "read_user",
            "write_user",
            "read_photos",
            "write_photos",
            "write_likes"
           ]);
           // Отправляем пользователя по этому адресу
           location.assign(authenticationUrl);
        // Считываем GET-параметр code из URL
        // www.example.com/auth?code=abcdef123456...
    }

    loginMain() {
        let state = this.state;
        state.login = true;
        this.setState(state);
    }

    mainList() {
        let state = this.state;
        state.login = false;
        this.setState(state);
    }

    onPhotoClick(el, key) {
        el.stopPropagation();
        let state =this.state;
        state.zoom_photo = true;
        state.key = key;
        this.setState(state);
        document.querySelector("body").style.overflow = "hidden";
    }

    onPhotoClickOut() {
        let state =this.state;
        state.zoom_photo = false;
        this.setState(state);
        document.querySelector("body").style.overflow = "auto";
    }

    likePhoto(el, key) {
        const code = location.search.split('code=')[1];
        if (code) {

            key ? key : key = this.state.key
            el.stopPropagation();
            let state = this.state.img[key];
            if (state.like) {
                let idImg = state.idImg;
                unsplash.photos.unlikePhoto(idImg);
                state.like = false;
                this.setState(this.state);
            } 
            else {
                let idImg = state.idImg;
                unsplash.photos.likePhoto(idImg);
                state.like = true;
                this.setState(this.state);
            }
        }
        else {
            el.stopPropagation();
            this.state.login = true;
            this.state.zoom_photo = false;
            this.setState(this.state);
        }
    }

    loguot() {
        localStorage.clear();
        this.state.user = "";
        this.setState(this.state);
    }

    canselClick(el) {
        el.stopPropagation();
    }


    render () {
        return (
            
            <div>   
                <Header
                logiMain={this.loginMain.bind(this)}
                mainList={this.mainList.bind(this)}
                username={this.state.user[0].username}
                avatar={this.state.user[0].avatar}
                loguot={this.loguot.bind(this)}/>

                <main 
                className="main main-content"
                >
                
                    <div className="main_content-text">Unsplash</div>
                    {this.state.login ? 
                        <Login
                            loginAuthentication={this.loginAuthentication.bind()}
                        />
                        :<ListPhoto
                            zoom_photo={this.state.zoom_photo}
                            img={this.state.img}
                            imageInfoEnter={this.imageInfoEnter.bind(this)}
                            imageInfoLeave={this.imageInfoLeave.bind(this)}
                            onPhotoClick={this.onPhotoClick.bind(this)}
                            likePhoto={this.likePhoto.bind(this)}
                            canselClick={this.canselClick.bind(this)}                           
                        />
                    }
                    <ZoomPhoto
                        zoom_photo={this.state.zoom_photo}
                        onPhotoClickOut={this.onPhotoClickOut.bind(this)}
                        img={this.state.img[this.state.key]}
                        likePhoto={this.likePhoto.bind(this)}
                        key={this.state.key}                                             
                        canselClick={this.canselClick.bind(this)}/>        
                </main>
            </div>
                        
        )
    }
}



ReactDOM.render(<Img />, document.querySelector(".content"));