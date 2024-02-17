import React from "react"
import "./../App.css"
import Star from "./Star"


interface TStars {
    count: number
    onChange: (count:number, event?: React.MouseEvent<HTMLElement>) => void
}

export default function Stars({count, onChange}: TStars) {
    if (count==0) return (<ul className="card-body-stars u-clearfix"><li onClick={()=>onChange(count)}>0</li></ul>);
    else if (count<=5) return (
        <ul className="card-body-stars u-clearfix">
    {[...Array(count)].map((star, index) => {return(
    <li key={index} onClick={()=>onChange(count)}>
        <Star />
    </li>
    );
    })}</ul>);
    else if (count>5) {count=0; return (<ul className="card-body-stars u-clearfix"><li onClick={()=>onChange(count)}>0</li></ul>)}
}

