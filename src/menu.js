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
  <main>
    <section id="menu">
      <h2>Most Popular Items</h2>
      <div class="menu-items">
        <div class="menu-item">
          <img src=${menu1} alt="">
          <div class="item-content">
            <div class="item-name">
              <h3>Chicken Burger</h3>
              <h3>$115</h3>
            </div>
            <hr />
            <p>burgdoggen prosciutto chislic filet mignon sausage brisket beef short loin alcatra strip steak</p>
          </div>
        </div>
        <div class="menu-item">
          <img src=${menu2} alt="">
          <div class="item-content">
            <div class="item-name">
              <h3>Chicken Burger</h3>
              <h3>$115</h3>
            </div>
            <hr />
            <p>burgdoggen prosciutto chislic filet mignon sausage brisket beef short loin alcatra strip steak</p>
          </div>
        </div>
        <div class="menu-item">
          <img src=${menu3} alt="">
          <div class="item-content">
            <div class="item-name">
              <h3>Chicken Burger</h3>
              <h3>$115</h3>
            </div>
            <hr />
            <p>burgdoggen prosciutto chislic filet mignon sausage brisket beef short loin alcatra strip steak</p>
          </div>
        </div>
        <div class="menu-item">
          <img src=${menu4} alt="">
          <div class="item-content">
            <div class="item-name">
              <h3>Chicken Burger</h3>
              <h3>$115</h3>
            </div>
            <hr />
            <p>burgdoggen prosciutto chislic filet mignon sausage brisket beef short loin alcatra strip steak</p>
          </div>
        </div>
        <div class="menu-item">
          <img src=${menu5} alt="">
          <div class="item-content">
            <div class="item-name">
              <h3>Chicken Burger</h3>
              <h3>$115</h3>
            </div>
            <hr />
            <p>burgdoggen prosciutto chislic filet mignon sausage brisket beef short loin alcatra strip steak</p>
          </div>
        </div>
        <div class="menu-item">
          <img src=${menu6} alt="">
          <div class="item-content">
            <div class="item-name">
              <h3>Chicken Burger</h3>
              <h3>$115</h3>
            </div>
            <hr />
            <p>burgdoggen prosciutto chislic filet mignon sausage brisket beef short loin alcatra strip steak</p>
          </div>
        </div>
        <div class="menu-item">
          <img src=${menu7} alt="">
          <div class="item-content">
            <div class="item-name">
              <h3>Chicken Burger</h3>
              <h3>$115</h3>
            </div>
            <hr />
            <p>burgdoggen prosciutto chislic filet mignon sausage brisket beef short loin alcatra strip steak</p>
          </div>
        </div>
        <div class="menu-item">
          <img src=${menu8} alt="">
          <div class="item-content">
            <div class="item-name">
              <h3>Chicken Burger</h3>
              <h3>$115</h3>
            </div>
            <hr />
            <p>burgdoggen prosciutto chislic filet mignon sausage brisket beef short loin alcatra strip steak</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  `;
}
