import React from 'react';

const DescriptionCard = (props) => {
    return (
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
    )
}

export default DescriptionCard;