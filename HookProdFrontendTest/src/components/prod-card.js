import React from 'react';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            <header className="product-card__header product-header">
                <ul className="product-header__list">
                    {
                        this.state.active.imgSVG.map(el => {
                            return (
                                <li className="product-header__item">
                                        <img src={el}></img>
                                </li>
                            )
                        })
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
                    {this.state.bin 
                    ?   <div>
                            <button>корзина</button>
                            <div>{this.state.active.counter}</div>
                            <button>+</button>
                        </div>
                    :   <div className="product-main__button">
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
    )
}

export default ProductCard;