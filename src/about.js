import titleBackground from "./img/bg-hero.jpg";
import "./css/about.css";

export default function renderPage() {
  const contentEl = document.querySelector("#content");

  contentEl.innerHTML = `
  <img class="about-title-background" src=${titleBackground} alt="title background"/>
  <div class="about-overlay"></div>
  <section id="about-title">
    <h1 class="about-title-heading">About Us</h1>
  </section>
  `;
}
