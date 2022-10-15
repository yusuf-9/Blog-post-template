import React from "react";
import "./Article.css";
import Articles from "./ArticlesObject.js";
import { NavLink, useParams } from "react-router-dom";


function Article() {
    let articleName = useParams().article_name;
    let displayedArticleArr = Articles.filter((x) => {
        return x.name == articleName
    })
    let displayedArticle = displayedArticleArr[0];
    let y = 0
    return (
        <>
            <div className="article-container-2">
                <img src={displayedArticle.logo_url} className="article-logo-img" />
                <div className="heading-and-byline">
                    <h1 className="article-heading">{displayedArticle.title}</h1>
                    <span>{displayedArticle.date}</span> | <span>{displayedArticle.time_to_read}</span>
                </div>
                <div className="hr-2">
                    <hr />
                </div>
                <div className="article-content">
                    <p>{displayedArticle.p1}</p>
                    <img src={displayedArticle.img_url} />
                    <p>{displayedArticle.p2}</p>
                    <div className="advertisement"></div>
                    <p>{displayedArticle.p3}</p>
                </div>
                <div className="hr-2">
                    <hr />
                </div>
                <h1 className="read-similar-articles-heading">Read similar articles</h1>
                <div className="article-showcase exception-showcase">
                    {
                        Articles.map((x) => {
                            if (y < 3) {
                                y++;
                                if (y <= 2) {

                                    let link = `/article/${x.name}`;
                                    return (
                                        <div className="article exception" key={x.img_url} onMouseOver={() => {
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
                                        }} onMouseOut={() => {
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
                                        }}>
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
                                }
                                else{

                                    let link = `/article/${x.name}`;
                                    return (
                                        <div className="article exception thr" key={x.img_url} onMouseOver={() => {
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
                                        }} onMouseOut={() => {
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
                                        }}>
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
                                }

                            }
                        })}
                </div>
            </div>
            <div className="advertisement"></div>
        </>
    )
}




export default Article;