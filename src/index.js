import renderHome from "./home";
import renderAbout from "./about";
import renderMenu from "./menu";
import "./css/style.css";

const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const menuBtn = document.querySelector("#menu-btn");

renderHome();
homeBtn.addEventListener("click", () => renderHome());
aboutBtn.addEventListener("click", () => renderAbout());
menuBtn.addEventListener("click", () => renderMenu());
