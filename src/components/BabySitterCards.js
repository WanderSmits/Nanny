import React, { useState } from "react";
import "../css/Header.css";
import TinderCard from "react-tinder-card";
import "../css/Cards.css";

function BabySitterCards() {
  const [nanny, setNanny] = useState([
    {
      name: "Lisa",
      url:
        "https://assets.vogue.com/photos/5ebc71d4a85f0288b7c3efda/3:4/w_2535,h_3380,c_limit/lisa-promo-crop.jpg",
      description: "Babysitter available from 18:00pm",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log(`removing ${nameToDelete}`);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="nannyCards">
      <div className="babyCards__cardContainer">
        {nanny.map((nanny) => (
          <TinderCard
            className="swipe"
            key={nanny.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, nanny.name)}
            onCardLeftScreen={() => outOfFrame(nanny.name)}
          >
            <div
              style={{ backgroundImage: `url(${nanny.url})` }}
              className="card"
            >
              <h3>{nanny.name}</h3>
            </div>
            <div>
              <TinderCard></TinderCard>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default BabySitterCards;
