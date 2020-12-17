import React from 'react';
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, ind) => {
        return <Card key={ind} robot={robots[ind]}/>
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;
