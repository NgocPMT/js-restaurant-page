import renderHome from "./home";
import renderAbout from "./about";
import "./css/style.css";

const homeBtn = document.querySelector("#home");
const aboutBtn = document.querySelector("#about");

renderHome();
homeBtn.addEventListener("click", () => renderHome());
aboutBtn.addEventListener("click", () => renderAbout());
