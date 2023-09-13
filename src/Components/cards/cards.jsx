import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import List from "../list/List";

const Cards = () => {
    const [allCards, setAllCards] = useState([]);
    const [getCards, setGetCards] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setAllCards(data))
    }, [])

    const budget = 20000;

    const handleSelect = (all) =>{
        const newItems = [...getCards, all];
        const isExist = getCards.find(card => card.id == all.id);

        let count = all.salary

        if(isExist){
            return alert('already booked')
        }else{
            getCards.forEach(card => {
                count = count + card.salary
            });
            
           const remaining = budget - count;
           if(count > budget){
            return alert('Balance short');
           }
           else{
             setTotalCost(count);
             setRemaining(remaining);
             setGetCards(newItems)
           }
        }
        
    }

    return (
        <>
         <h1 className="mb-4 text-3xl font-semibold">Cards </h1>
         <div className="md:flex gap-20">
            <div className="grid gap-4 md:grid-cols-3">
             {
                allCards.map(card => <Card handleSelect={handleSelect} key={card.id} card={card}></Card>)
             }
            </div>
            <div>
            <List getCards ={getCards} totalCost={totalCost} remaining={remaining}></List>
            </div>
        </div>
        </>
    );
};


export default Cards;