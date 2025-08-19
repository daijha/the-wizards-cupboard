
import React from "react";
import { useState, useEffect } from "react";



const magicalItems = [
  {
    name: "salamanderSaliva",
    description:
      "Shiny spit from a young salamanders mouth. Its iridescent. Great for time travel but don't let it get on your skin.",
    status: "fresh",
  },
  {
    name: "noseHairOfNewt",
    description:
      "A bottle of nose hairs collected from mystical mutated newts in the forest… Used for immunity ",
    status: "fresh",
  },
  {
    name: "oysterOverload",
    description:
      "A container of oysters from the nearby pier.  Use one for attracting wealth",
    status: "fresh",
  },
  {
    name: "beakOfBellbird",
    description:
      "A beak from one of the loudest birds ever. Used  for disarming the enemy with loud noise.",
    status: "expired",
  },
  {
    name: "snakeSkin",
    description:
      "Collected form large forest snakes. Used for various healing purposes.",
    status: "expired",
  },
  {
    name: "tigerTongue",
    description:
      "A tongue collected from a deceased tiger. Used for conjuring up abrasive speech.",
    status: "expired",
  },
];

const extendedItems = [...magicalItems, ...magicalItems, ...magicalItems,...magicalItems]// uses the spread operator to extend the array to 18 
//use fisher yates method to randomize the icons 
function randomize(extendedItems){
{  for( let i= extendedItems.length -1 ; i> 0 ; i--){
  let j = Math.floor(Math.random()*(i+1));
  let temp = extendedItems[i];
  extendedItems[i]= extendedItems[j];
  extendedItems[j]= temp  
}
}
return extendedItems
}

// map iterates over the array and creates list items
function Potions() {
  
const [shuffledIcons, setShuffledIcons] = useState([])// state give a container to  update the shuffle

useEffect(()=>{
  const randomized = randomize(extendedItems)
  setShuffledIcons(randomized)// updates the state so that they are shuffled 
},[magicalItems])// the dependency is the array of items

  return (
    <>
     { shuffledIcons.map((item,index)=>(
      <div key={index}> 
        <img className="gridItem" src={`/${item.name}.svg`}/>
        </div>
      ))}
    </>
  );
}
export default Potions;
