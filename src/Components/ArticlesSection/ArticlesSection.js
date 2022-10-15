import React from "react";
import "./ArticlesSection.css";
import Articles from "../Article/ArticlesObject";
import { NavLink } from "react-router-dom";


class ArticlesSection extends React.Component {
    constructor() {
        super();
    }

    
    articleFilter = (e) => {
        let activeFilter = e.target.parentNode;
        const articles = Array.from(document.querySelectorAll(".article"));
        if (!activeFilter.classList.contains("active")) {
            activeFilter.classList.add("active");
            activeFilter.children[0].classList.add("activated-img")
            activeFilter.children[1].classList.add("activated-span")
            console.log(activeFilter.children)
            let activeFilters = Array.from(document.querySelectorAll(".topic-name")).filter((x) => { return x.classList.contains("active") })
            let innerText = activeFilters.map((x) => {
                return x.children[1].innerText;
            });
            const articles = Array.from(document.querySelectorAll(".article"));
            let hiddenArticles = articles.filter((x) => {
                return !innerText.includes(x.classList[1])
            })
            let notHiddenArticles = articles.filter((x) => {
                return innerText.includes(x.classList[1])
            })
            notHiddenArticles.forEach((x) => {
                if (x.classList.contains("hidden")) {
                    x.classList.remove("hidden")
                }
            })
            hiddenArticles.forEach((x) => {
                x.classList.add("hidden")
            })
        }
        else {
            activeFilter.classList.remove("active");
            activeFilter.children[0].classList.remove("activated-img")
            activeFilter.children[1].classList.remove("activated-span")
            let activeFilters = Array.from(document.querySelectorAll(".topic-name")).filter((x) => { return x.classList.contains("active") })
            if (activeFilters.length > 0) {
                let innerText = activeFilters.map((x) => {
                    return x.children[1].innerText;
                });
                let hiddenArticles = articles.filter((x)=>{
                    return !innerText.includes(x.classList[1])
                })
                let notHiddenArticles = articles.filter((x)=>{
                    return innerText.includes(x.classList[1])
                })
                notHiddenArticles.forEach((x)=>{
                    if(x.classList.contains("hidden")){
                        x.classList.remove("hidden")
                    }
                })
                hiddenArticles.forEach((x)=>{
                    x.classList.add("hidden")
                })
            }
            else{
                articles.forEach((x)=>{
                    if(x.classList.contains("hidden")){
                        x.classList.remove("hidden")
                    }
                })
            }



        }

    }

    componentDidMount() {
        // Read button animations
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
            <div className="article-container low-padding">
                <div className="browse-articles">
                    <h2>Browse Articles by Topic</h2>
                    <div className="topic-names">
                        <div className="topic-set first">
                            <div className="topic-name" onClick={this.articleFilter}>
                                <img src={Articles[0].logo_url} className="topic-img" />
                                <span >Religion</span>
                            </div>
                            <span className="vertical-line"></span>
                            <div className="topic-name" onClick={this.articleFilter}>
                                <img src={Articles[4].logo_url} className="topic-img" />
                                <span>Epistemology</span>
                            </div>
                            <span className="vertical-line"></span>
                            <div className="topic-name" onClick={this.articleFilter}>
                                <img src={Articles[1].logo_url} className="topic-img" />
                                <span>Metaphysics</span>
                            </div>
                        </div>
                        <span className="vertical-line removable"></span>
                        <div className="topic-set last">
                            <div className="topic-name" onClick={this.articleFilter}>
                                <img src={Articles[3].logo_url} className="topic-img" />
                                <span>Consciousness</span>
                            </div>
                            <span className="vertical-line modified"></span>
                            <div className="topic-name" onClick={this.articleFilter}>
                                <img src={Articles[2].logo_url} className="topic-img" />
                                <span>Ethics</span>
                            </div>
                            <span className="vertical-line modified"></span>
                            <div className="topic-name" onClick={this.articleFilter}>
                                <img src={Articles[5].logo_url} className="topic-img" />
                                <span >Existentialism</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr"><hr /></div>
                <div className="article-showcase">
                    {Articles.map((x) => {
                        let link = `/article/${x.name}`;
                        let categoryclass = `article ${x.category}`
                        return (
                            <div className={categoryclass} key={x.img_url}>
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

export default ArticlesSection;