import bgHero from "./img/bg-hero.jpg";
import hero from "./img/hero.png";

export default function renderPage() {
  const contentEl = document.querySelector("#content");
  contentEl.innerHTML = `
      <img class="hero-background" src=${bgHero} alt="hero background"/>
      <h1>Enjoy Our Delicious Meal</h1>
      <p>
        Cow hamburger tenderloin, biltong buffalo andouille pork loin capicola
        meatloaf ham swine pastrami flank. Brisket jowl capicola leberkas filet
        mignon bacon strip steak kevin. Chislic pork loin sirloin flank, doner
        tenderloin capicola andouille ball tip porchetta boudin leberkas
        tri-tip.
      </p>
      <img class="hero-spinner" src=${hero} alt="grill spinning"/>
    `;
}
