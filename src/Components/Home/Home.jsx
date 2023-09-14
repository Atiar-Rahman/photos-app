import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";


const Home = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('./phots.json')
        .then(res => res.json())
        .then(data=>setCarts(data))
    }, [])
    
    

    return (

        <div>
            <div>
                <h1 className='text-6xl bg-green-400'>hello</h1>
            <h2>cart: {carts.length}</h2>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
               {
                   carts.map((cart,idx) => <Cart key={idx} cart={cart}></Cart>)
               }

            </div>
        </div>
    );
};

export default Home;