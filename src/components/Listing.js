import PropTypes from 'prop-types';
import Item from './Item';

export default function Listing({items}) {
    const elems = JSON.parse(JSON.stringify(items));
    items.forEach((el, i) => {
        if (el.title) {
           (el.title.length > 50) && (elems[i].title = `${el.title.substr(0, 49)}...`)        
        } 
        if (el.price) {
            el.currency_code === "USD" ? elems[i].price = `$${el.price}`
            : elems[i].currency_code === "EUR" ? elems[i].price = `€${el.price}`
            : elems[i].price = `GBP ${el.price}`;   
        } 
        if (el.quantity) {
            (el.quantity <= 20) && (elems[i].quantity = "level-medium");           
            (el.quantity <= 10) && (elems[i].quantity = "level-low");
            (el.quantity > 20) && (elems[i].quantity = "level-high");
            
        }                 
    })
   
    return (
        <div className="item-list">
            {
            elems.map((elem) => {
                return <Item key={elem.listing_id} item={elem}/>        
            })
            }
        </div>      
    )
}

Listing.defaultProps = {
    items: []
};

Listing.propTypes = {
    items: PropTypes.array
};