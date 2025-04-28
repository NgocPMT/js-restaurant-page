import renderHome from "./home";
import renderAbout from "./about";
import "./css/style.css";

const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");

renderHome();
homeBtn.addEventListener("click", () => renderHome());
aboutBtn.addEventListener("click", () => renderAbout());
