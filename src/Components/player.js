import React from "react";

const Player = ({players}) => {
    const {name, team, nationality, shirt_number, age, imageUrl} = players;

    return (
        <div>
            <img src={imageUrl} alt="joueur" />
            <h3>{name}</h3>
            <h5>{team}</h5>
            <h5>{nationality}</h5>
            <h6>numéro : {shirt_number}</h6>
            <h6>{age} ans</h6>
        </div>
    );
}

export default Player;