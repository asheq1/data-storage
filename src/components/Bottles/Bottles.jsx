import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    // load cart from local storage 
    useEffect(() =>{
        console.log('called the useEffect', bottles.length)
        if(bottles.length){
            const storedCart = getStoredCart();
            // console.log(storedCart)
            const saveCart = [];
            for(const id of storedCart){
                // console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            // set ui
            setCart(saveCart)
        }
    }, [bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLS(bottle.id)
    }

    // remove cart 
    const handleRemoveCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLS(id)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>   
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;