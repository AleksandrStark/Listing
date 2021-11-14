export default function Item({item}) {
  return (   
      <div className="item">
          <div className="item-image">
              <a href={item.url}>
                  <img src={item.MainImage && item.MainImage.url_570xN} alt="card"/>
              </a>
          </div>
          <div className="item-details">
              <p className="item-title">{item.title}</p>
              <p className="item-price">{item.price}</p>
              <p className={`item-quantity ${item.quantity}`}>{item.quantity} left</p>
          </div>
      </div>
  ) 
}