import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";
import './Foods.css'
import { addToLs, getStoredCarts , removeFromLS} from "../../utilits/localStorage";
import Cart from "../../cart/Cart";


const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[]);

    useEffect(()=>{
        console.log('After Use Effect ' , foods.length);
        const StoredCarts = getStoredCarts();
        if(foods.length){
            const saveCarts = [];
            for(const id of StoredCarts){
                const cart = foods.find(food => food.idMeal === id);
                if(cart){
                    saveCarts.push(cart);
                }
            }
            setCarts(saveCarts);
        }
        
    },[foods])

    const handlePurchaseCart = (item) =>{
        const newCart = [...carts, item];
        setCarts(newCart);
        addToLs(item.idMeal);
    }

    const removeCart = (item) =>{
        const newCarts = carts.filter(cart => cart.idMeal !== item.idMeal);
        setCarts(newCarts);
        removeFromLS(item.idMeal);
    }
    
    return (
        <div>
            <h3>Your Carts:- {carts.length}</h3>
            <div className="cartContainer">
                {
                    carts.map((cart, idx) => <Cart key={idx} cart={cart} removeCart={removeCart} ></Cart>)
                }
            </div>
            <h3>OurFoods:- {foods.length}</h3>
            <div className="foodsContainer">
                {
                    foods.map((food, idx) => <Food key={idx} food={food} handlePurchaseCart={handlePurchaseCart}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;