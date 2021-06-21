import React from 'react';
import SHOP_DATA from './SHOP_DATA';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super();
        this.state = {
            collections : SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state;
        return (
        <div className="shop-page">
            {
                collections.map(({id, ...restOfProps}) => (
                    <CollectionPreview id={id} {...restOfProps} />
                ))
            }
        </div>
        );
    }
}

export default ShopPage;