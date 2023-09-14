

// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
    const { url, thumbnailUrl, title,id } = cart;
    return (
        <div className="border my-5 p-10 rounded-xl">
            <img src={url} alt="" />
            <h1>id: {id}</h1>
            <h1>Title: {title}</h1>
            <img src={thumbnailUrl} alt="" />
            
        </div>
    );
};


export default Cart;