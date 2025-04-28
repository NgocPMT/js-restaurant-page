import titleBackground from "./img/bg-hero.jpg";

export default function renderPage() {
  const contentEl = document.querySelector("#content");

  contentEl.innerHTML = `
  <img id="title-background" src=${titleBackground} alt="title background"/>
  <div class="about-overlay"></div>
  <div class="overlay"></div>
  <section id="title">
    <h1 class="title-heading">About Us</h1>
  </section>
  `;
}
