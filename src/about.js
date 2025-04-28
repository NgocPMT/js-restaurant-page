import titleBackground from "./img/bg-hero.jpg";
import about1 from "./img/about-1.jpg";
import about2 from "./img/about-2.jpg";
import about3 from "./img/about-3.jpg";
import about4 from "./img/about-4.jpg";
import "./css/about.css";

export default function renderPage() {
  const contentEl = document.querySelector("#content");

  contentEl.innerHTML = `
  <img class="about-title-background" src=${titleBackground} alt="title background"/>
  <div class="about-overlay"></div>
  <section id="about-title">
    <h1 class="about-title-heading">About Us</h1>
  </section>
  <main>
    <section id="about">
      <div id="side-images">
        <img src=${about1} alt=""/>
        <img src=${about2} alt=""/>
        <img src=${about3} alt=""/>
        <img src=${about4} alt=""/>
      </div>
      <div id="about-content">
        <h3>About Us</h3>
        <p>Salami shankle swine burgdoggen pig jowl pork. Chuck alcatra shoulder filet mignon jerky ball tip rump porchetta kielbasa meatball salami.</p>
        <p>Flank andouille shoulder short ribs burgdoggen beef ribs ham hock cupim turducken corned beef capicola chislic jowl. Shankle swine short ribs doner.</p>
        <button class="about-read-more-button">READ MORE</button>
      </div>
    </section>
  </main>
  `;
}
