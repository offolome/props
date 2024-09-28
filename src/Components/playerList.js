import React from "react";
import Player from "./player";
import Tabplayers from "../Data/players";

const PlayerList = () => {
    const player = Tabplayers;
    return (
        <>
            {
                player.map((value) => {
                    return <Player players={value} />
                })
            }
        </>
    );
}

export default PlayerList;