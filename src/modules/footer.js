import { home } from "./home";
let footer = (function() {
    const containerNinM = document.querySelector('.container-NinM')
    const parentDiv = document.getElementById("content");
    const footer = document.createElement("footer");
    const title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = "Fantasy Restaurant";
    const subTitle = document.createElement("h2");
    subTitle.className = "sub-title";
    const line = document.createElement("hr");
    const div = document.createElement("div");
    div.className = "footer-txt";
    line.className = 'footer-hline';
    subTitle.innerHTML = "Where taste is unreal";
    div.innerHTML = `&copy; 2020 | <a href="#">Privacy Policy</a> <br> Website   designed by <a href="https://givemo.github.io/My_Portfolio_Website/" rel="nofollow">Givemore Chiwanza</a>`
    footer.appendChild(title)
    footer.appendChild(subTitle)
    footer.appendChild(line)
    footer.appendChild(div)
    parentDiv.appendChild(footer)
})();

export {footer};