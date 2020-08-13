import React,{useState,useEffect} from 'react'
import TinderCard from "react-tinder-card"
import "./TinderCards.css"
import database from "./firebase"

export default function TinderCards() {

    const [people,setPeople]=useState([]);
    //Bad way to push
    //const people=[];
    //people.push('suni','navi')

    // Good way to push to an array in normal way
    //setPeople([...people,'suni','navi']) //[...]  --> spread operator for not overwriting previous entries

    //useeffect is piece of code which runs based on condition
    useEffect(()=>{
        //code runs here..
        const unsubscribe=database
            .collection('people')
            .onSnapshot((snapshot)=>
            setPeople(snapshot.docs.map((doc)=>doc.data()))
        );
        return ()=>{
            //this is a cleanup
            unsubscribe();
        }
    //run once when component loads..
    },[]);
    return (
        <div>
         
            <div className="tinderCards__cardContainer">
            {people.map(person=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}>
                    <div
                    style={{backgroundImage:`url(${person.url})`}}
                        className="card"
                        >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}
