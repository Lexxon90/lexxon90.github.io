import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
    constructor() {
        super();

        this.state = {
            imgLike: "img/like.svg",
            imgAnLike: "img/anlike.svg",
            active: {
                imgMain: "img/milk.png",
                imgSVG: [
                    "img/Vector_0.svg",
                    "img/Vector_1.svg",
                    "img/Vector_2.svg",
                ],  
                name: "Just Milk Semi-Skimmed 6 x 1L (Case of 2)",
                costPC: "1 pc / £1.59",
                cost: "£1.59",
                nutrition: {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. ",
                    list: [
                        "Lorem ipsum dolor sit amet",
                        "Consectetur adipiscing elit",
                        "Ultrices at egestas tempus",
                        "Duis egestas semper dolor morbi purus."
                    ]
                },
                ingridients: {
                    list:[
                    {name: "Kkal.", number: "28", rl: "4% Rl", low: true},
                    {name: "Proteins", number: "1,3 g", rl: "10% Rl", low: false},
                    {name: "Fats", number: "0 g", rl: "12% Rl", low: false},
                    {name: "Carbs", number: "28", rl: "10% Rl", low: false},
                    {name: "Niacin", number: "6,4 mg", rl: "40% Rl", low: false},
                    {name: "Vitamin B6", number: "0,8 g", rl: "57% Rl", low: false},
                    {name: "Fats", number: "0 g", rl: "12% Rl", low: false},
                    {name: "Carbs", number: "28", rl: "10% Rl", low: false}
                    ],
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus."
                },
                other: [
                    {"Страна производитель": "Россия"},
                    {"Состав": "цельное молоко"},
                    {"Срок годности":"12 дн."},
                    {"Изготовитель":"ОАО Компания Юнимилк"},
                    {"Жирность":"4,5 %"},
                    {"Содержание лактозы":"обычное (более 1% лактозы)"},
                    {"Витаминизированное/ обогащенное":"нет"}
                ],
                like: false,
            },
            product: [
                {name: "Best-in 10 British Big Eggs", costPC: "1 pc / £1.59", cost: "£1.59", img: "img/eggs_1.png", like: false},
                {name: "Best-in 10 British Big Eggs", costPC: "1 pc / £1.59", cost: "£1.59", img: "img/eggs_2.png", like: false},
                {name: "Best-in 10 British Big Eggs", costPC: "1 pc / £1.59", cost: "£1.59", img: "img/eggs_1.png", like: false},
            ],
            bin: false,
            counter: 0,
        }
    }

    render() {
        return(
            <main>
                <div className="product-card">
                    <header className="product-card__header product-header">
                        <ul className="product-header__list">
                            {
                                this.state.active.imgSVG.map(el => {return(<li className="product-header__item"><img src={el}></img></li>)})
                            }
                        </ul>
                        <img className="product-header__like" src={this.state.imgAnLike}></img>
                    </header>
                    <div className="product-card__main product-main">
                        <div className="slider"><img src={this.state.active.imgMain}></img></div>
                        <h2 className="product-main__title">{this.state.active.name}</h2>
                        <p className="product-main__subtitle">{this.state.active.costPC}</p>
                        <div className="product-main__cost-contaner">
                            <div className="product-main__cost">{this.state.active.cost}</div>
                            {this.state.bin ?
                                <div>
                                    <button>корзина</button>
                                    <div>{this.state.active.counter}</div>
                                    <button>+</button>
                                </div>
                                : <div className="product-main__button">
                                    <p className="product-main__link-add">Add</p>
                                    <button className="product-main__button-plus">+</button>
                                </div>
                            }
                        </div>
                    </div>
                    <footer className="product-card__footer product-footer">
                        <ul className="product-footer__list">
                            <li className="product-footer__item"><a>Nutrition</a></li>
                            <li className="product-footer__item"><a>Ingredients</a></li>
                            <li className="product-footer__item"><a>Other</a></li>
                        </ul>
                    </footer>
                </div>

                <div className="product-other">
                    <div className="swiper-wrapper">
                            {this.state.product.map(el=>{
                                return(
                                    <div>
                                        <img src={this.state.imgLike} className="like"></img>
                                        <img src={el.img}></img>
                                        <h3>{el.name}</h3>
                                        <div>{el.costPC}</div>
                                        <div>
                                            <div>{el.cost}</div>
                                            <button>+</button>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>

                <div className="description">
                    <div className="description__nutrition">
                            <h2 className="description__title">Nutrition</h2>
                            <div className="description__nutrition-text">{this.state.active.nutrition.text}</div>
                            <ul className="description__nutrition-list">
                                {this.state.active.nutrition.list.map(el => {
                                    return(<li className="nutrition__item">{el}</li>)
                                })}
                            </ul>
                            
                    </div>
                    <div className="description__list-contaner">
                        <ul className="description__structure">
                          {this.state.active.ingridients.list.map(el => {
                              return(
                                  <li className="description__structure-item">
                                      <div className="description__structure-number">{el.number}</div>
                                      <div className="description__structure-name">{el.name}</div>
                                      {el.low ?
                                        <div className="description__structure-rl-contaner">
                                            <div className="description__structure-rl">{el.rl}</div>
                                            <div className="description__structure-low">Low</div>
                                        </div>
                                        :<div className="description__structure-rl">{el.rl}</div>
                                        }
                                  </li>
                              )
                          })}  
                        </ul>
                        <a className="description__structure-link">Hide</a>
                    </div>
                    <div className="description__ingridients-contaner">
                        <h2 className="description__title">Ingridients</h2>
                        <div className="description__ingridients-text">{this.state.active.ingridients.text}</div>
                    </div>
                    <div className="description__other">
                        <h2 className="description__title">Other</h2>
                        {
                            this.state.active.other.map(el=>{
                                let key = Object.keys(el);
                                return(
                                    <div className="description__other-contaner">
                                        <div className="description__other-category">{key[0]}</div>
                                        <div className="description__other-value">{el[key[0]]}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            
        )
    }
}

ReactDOM.render(
    <TodoApp />,
    document.querySelector('#app')
);