
import React from "react";

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
//use fischer yates method to randomize the icons 
// map iterates over the array and creates list items
function Potions() {
  return (
    <>
     { extendedItems.map((item,index)=>(
      <div key={index}> 
        <img className="gridItem" src={`/${item.name}.svg`}/>
        </div>
      ))}
    </>
  );
}
export default Potions;
