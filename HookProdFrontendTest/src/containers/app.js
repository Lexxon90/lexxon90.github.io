import React from "react";

import HeaderCard from '../components/head-card'
import ProductCard from '../components/prod-card';
import SwiperProduct from '../components/swip-prod';
import DescriptionCard from '../components/description';

let App = (props) => {
    return (
        <div>
            <HeaderCard />
            <main>
                <ProductCard />
                <SwiperProduct />
                <DescriptionCard />
            </main>
        </div>
    )
}

export default App;