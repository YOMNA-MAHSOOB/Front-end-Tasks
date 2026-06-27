export function Product ({name,image,price,rating,btnStatus}){
    return(

    <div className="product">
        <h3>{name}</h3>
        <img src={image} alt="" width="200" />
        <p className="price">{price}</p>
        <p className="rating">{rating}</p>
        <button>{btnStatus}</button>
    </div>

    )
}