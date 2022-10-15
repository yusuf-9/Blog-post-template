import React from "react";
import "./Showcase.css"
import { NavLink } from 'react-router-dom'
import Articles from "../Article/ArticlesObject";




class Showcase extends React.Component {
    constructor() {
        super();

    }

    
    componentDidMount(){
        const articles = document.querySelectorAll('.article');
        Array.from(articles).forEach((x) => {
            x.addEventListener("mouseover", function () {
                const articleChildren = x.children.item(3);
                articleChildren.children[0].style.animation = "onHover 0.5s forwards"
            })
        })
        Array.from(articles).forEach((x) => {
            x.addEventListener("mouseout", function () {
                const articleChildren = x.children.item(3);
                articleChildren.children[0].style.animation = "onMouseOut 0.5s forwards"
            })
        })
    }
    
    render() {
        return (
            <div className="article-container">
                <h1>Top articles</h1>
                <NavLink to='/articles' className="view-all-articles">View all articles</NavLink>
                <div className="article-showcase">
                {Articles.map((x) => {
                        let link = `/article/${x.name}`;
                        return (
                            <div className="article" key={x.img_url}>
                                <img src={x.img_url} className="article-background" />
                                <img src={x.logo_url} className="article-logo" />
                                <div className="article-text">
                                    <p>{x.title}</p>
                                    <span>{x.date}</span> | <span>{x.time_to_read}</span>
                                </div>
                                <div className="button-wrap">
                                    <NavLink to={link} className="button-link">
                                        <button className="toggle-button">Read article</button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}
export default Showcase;