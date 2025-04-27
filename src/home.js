import bgHero from "./img/bg-hero.jpg";
import hero from "./img/hero.png";
import "./css/home.css";

export default function renderPage() {
  const contentEl = document.querySelector("#content");
  contentEl.innerHTML = `
 
  <img class="hero-background" src=${bgHero} alt="hero background"/>
  <div class="overlay"></div>
    <section id="hero">
        <div class="hero-content">
          <h1 class="hero-heading">Enjoy Our Delicious Meal</h1>
          <p class="hero-text">
            Cow hamburger tenderloin, biltong buffalo andouille pork loin capicola
            meatloaf ham swine pastrami flank. Brisket jowl capicola leberkas filet
            mignon bacon strip steak kevin.
          </p>
          <button class="booking-button" type="button">BOOK A TABLE</button>
        </div>
        <img class="hero-spinner" src=${hero} alt="grill spinning"/>
    </section>
    `;
}
