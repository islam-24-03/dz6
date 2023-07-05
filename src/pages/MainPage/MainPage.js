import React from 'react';
import { useSelector} from "react-redux";
import {productsSelect} from "../../redux/slices/productsSlice";
import ProductsPage from "../ProducItem/ProductsPage";

const MainPage = () => {
    const {products} = useSelector(productsSelect)


    return (
        <div>
            <ul className='ul'style={{width: '1300px', margin: '20px auto'}}>
                {
                    products.map(i => <ProductsPage i={i}/>)
                }
            </ul>
        </div>
    );
};

export default MainPage;
