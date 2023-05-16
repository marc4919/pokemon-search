import React from "react";

export const PokeCard = (sprite) => {
  return (
    <>
      <img id='pokeSprite' src={sprite.sprite} alt="imagen Pokemon"></img>
    </>
  );
};
