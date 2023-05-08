import React from "react";
import config from "../../../config";
import classes from './Products.module.css';




function Products(props) {


    return (
        <>
            <div className={classes.productsBackImg} id="products">
                <div className={classes.productFrameDiv}
                     style={{ 'background-image':
                             `url(${config.baseUrl}storage/${props?.servicesInfo?.sections?.[2].attributes?.image})`}}>
                    <div className="container">
                        <div className={classes.titleProducts}>
                            {props?.servicesInfo?.sections?.[2].attributes?.title}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.productImgDiv}
                 style={{ 'background-image':
                         `url(${config.baseUrl}storage/${props?.servicesInfo?.sections?.[2].attributes?.image})`}}>
                <div className="container">
                    <div className={classes.titleProducts}>{props?.servicesInfo?.sections?.[2].attributes?.title}</div>
                </div>
            </div>
        </>
    )
}


export default Products;

