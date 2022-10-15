import React from "react";
import "./HomePage.css";
import IntroImg from "./intro-image.jpg";
import Showcase from "../ArticleShowcase/Showcase"
import {NavLink} from 'react-router-dom'
import Articles from "../Article/ArticlesObject";





class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            next: ">",
            prev: "<",
            slide1Url: `/article/${Articles[2].name}`,
            slide2Url: `/article/${Articles[1].name}`,
            slide3Url: `/article/${Articles[5].name}`
        }
    }

    nextAndPrevBtns = (event) => {
        const prevAndNextBtns = document.querySelectorAll(".nav-buttons");
        const nextBtn = prevAndNextBtns[0];
        const prevBtn = prevAndNextBtns[1];
        const introWrap = document.querySelector(".intro-wrap");
        const introWrapChildren = Array.from(introWrap.children);
        var left100 = "-100%";
        var right100 = "100%";
        var zero = "0%";

        // these are all the functions

        function nextSlideMover(x) {
            introWrapChildren[x].style.setProperty("--position", left100);
            introWrapChildren[x + 1].style.setProperty("--position", zero);
            introWrapChildren[x].classList.remove("active");
            introWrapChildren[x + 1].classList.add("active");
        }
        function prevSlideMover(x) {
            introWrapChildren[x].style.setProperty("--position", right100);
            introWrapChildren[x - 1].style.setProperty("--position", zero);
            introWrapChildren[x].classList.remove("active");
            introWrapChildren[x - 1].classList.add("active");
        }
        function slideTextAnimationAdder(y) {
            if (event.target.classList.contains("next")) {
                let articleChildElements = Array.from(introWrapChildren[y + 1].children);
                articleChildElements.forEach((x) => {
                    if (articleChildElements.indexOf(x) == 0) { }
                    else {
                        x.style.animation = "intro-text-opacity 1s ease-in"
                    }
                })
            } else {
                let articleChildElements = Array.from(introWrapChildren[y - 1].children);
                articleChildElements.forEach((x) => {
                    if (articleChildElements.indexOf(x) == 0) { }
                    else {
                        x.style.animation = "intro-text-opacity 1s ease-in"
                    }
                })
            }

        }
        function slideTextAnimationRemover(x) {
            const articleChildElements2 = Array.from(introWrapChildren[x].children);
            articleChildElements2.forEach((x) => {
                if (articleChildElements2.indexOf(x) == 0) { }
                else {
                    x.style.animation = ""
                }
            })
        }

        //end of functions

        if (event.target.classList.contains("next")) {
            if (introWrapChildren[2].classList.contains("active")) {
                nextSlideMover(2);
                prevBtn.classList.remove("hidden");
                slideTextAnimationAdder(2);
                slideTextAnimationRemover(2);
            }
            else if (introWrapChildren[3].classList.contains("active")) {
                nextSlideMover(3)
                slideTextAnimationAdder(3);
                slideTextAnimationRemover(3);
            }
            else if (introWrapChildren[4].classList.contains("active")) {
                nextSlideMover(4)
                nextBtn.classList.add("hidden");
                slideTextAnimationAdder(4);
                slideTextAnimationRemover(4);
            }
        }
        else {
            if (introWrapChildren[3].classList.contains("active")) {
                prevSlideMover(3);
                prevBtn.classList.add("hidden");
                slideTextAnimationAdder(3);
                slideTextAnimationRemover(3);

            }
            else if (introWrapChildren[4].classList.contains("active")) {
                prevSlideMover(4);
                slideTextAnimationAdder(4);
                slideTextAnimationRemover(4);
            }
            else if (introWrapChildren[5].classList.contains("active")) {
                prevSlideMover(5);
                slideTextAnimationAdder(5);
                nextBtn.classList.remove("hidden");
                slideTextAnimationRemover(5);
            }
        }
    }
 
    

    render() {
        return (
            <>
            <div className="intro-wrap">
                <button className="nav-buttons next" onClick={this.nextAndPrevBtns}>{this.state.next}</button>
                <button className="nav-buttons prev hidden" onClick={this.nextAndPrevBtns}>
                    {this.state.prev}</button>
                <div className="intro-page slide-1 active">
                    <img src={IntroImg} className="intro-img" />
                    <span id="intro-heading">Welcome to my Blog</span>
                    <span id="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti
                        consequatur. Impedit, velit. Harum necessitatibus maxime voluptatibus ex impedit,
                    </span>
                    <NavLink to="/articles" className="button link">
                        <button>View all articles</button>
                    </NavLink>
                </div>
                <div className="intro-page slide-2">
                    <img src={Articles[2].img_url} className="intro-img" />
                    <span id="intro-heading">{Articles[2].title}</span>
                    <span id="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti
                        consequatur. Impedit, velit. Harum necessitatibus maxime voluptatibus ex impedit,
                    </span>
                    <NavLink to={this.state.slide1Url} className="button link">
                        <button>Read Article</button>
                    </NavLink>
                </div>
                <div className="intro-page slide-3">
                    <img src={Articles[1].img_url} className="intro-img" />
                    <span id="intro-heading">{Articles[1].title}</span>
                    <span id="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti
                        consequatur. Impedit, velit. Harum necessitatibus maxime voluptatibus ex impedit,
                    </span>
                    <NavLink to={this.state.slide2Url} className="button link">
                        <button>Read Article</button>
                    </NavLink>
                </div>
                <div className="intro-page slide-4">
                    <img src={Articles[5].img_url} className="intro-img" />
                    <span id="intro-heading">{Articles[5].title}</span>
                    <span id="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti
                        consequatur. Impedit, velit. Harum necessitatibus maxime voluptatibus ex impedit,
                    </span>
                    <NavLink to={this.state.slide3Url} className="button link">
                        <button>Read Article</button>
                    </NavLink>
                </div>
            </div>
            <Showcase />
            </>
        )
    }
}

export default HomePage;