import titleBackground from "./img/bg-hero.jpg";
import "./css/menu.css";
import menu1 from "./img/menu-1.jpg";
import menu2 from "./img/menu-2.jpg";
import menu3 from "./img/menu-3.jpg";
import menu4 from "./img/menu-4.jpg";
import menu5 from "./img/menu-5.jpg";
import menu6 from "./img/menu-6.jpg";
import menu7 from "./img/menu-7.jpg";
import menu8 from "./img/menu-8.jpg";

export default function renderPage() {
  const contentEl = document.querySelector("#content");

  contentEl.innerHTML = `
  <img class="menu-title-background" src=${titleBackground}/>
  <div class="menu-overlay"></div>
  <section id="menu-title">
    <h1 class="menu-title-heading">Menu</h1>
  </section>
  `;
}
