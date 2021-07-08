import React from 'react';

const SwiperProduct = (props) => {
    return (
        <Swiper 
            className="product-other"
            spaceBetween={8}
            slidesPerView={2.45}
            slidesOffsetBefore={36}
            slidesOffsetAfter={36}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >                
            <div className="swiper-wrapper">
                {this.state.product.map(el=>{
                    return(
                        <SwiperSlide className="swiper-slide">
                            <img src={this.state.imgLike} className="swiper-slide__like"></img>
                            <div className="swiper-slide__contaner-img">
                                <img src={el.img} className="swiper-slide__img"></img>
                            </div>
                            <h3 className="swiper-slide__title">{el.name}</h3>
                            <div className="swiper-slide__costPC">{el.costPC}</div>
                            {(el.counter == 0) 
                            ?   <div className="swiper-slide__footer-contaner">
                                    <div className="swiper-slide__cost">{el.cost}</div>
                                    <div className="swiper-slide__button-contaner">
                                        <p>Add</p>
                                        <button>+</button>
                                    </div>
                                </div>
                            :   <div className="swiper-slide__footer">
                                    <div className="swiper-slide__cost">{el.counter}</div>
                                    <div className="swiper-slide__button-contaner">
                                        <button>корзина</button>
                                        <p>{el.counter}</p>
                                        <button>+</button>
                                    </div>          
                                </div>
                            }                 
                        </SwiperSlide>
                    )
                })}
            </div>
        </Swiper>
    )
}

export default SwiperProduct;