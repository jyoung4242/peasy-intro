export type Routes = "home" | "peasy" | "bindings" | "events" | "css" | "animations" | "components" | "about" | "array" | "blank";

import { HomePage } from "./home";
import { AboutMe } from "./aboutme";
import { Peasy } from "./peasy";
import { Bindings } from "./bindings";
import { EventPage } from "./events";
import { CSSPage } from "./css";
import { ArraysPage } from "./arrays";
import { Animations } from "./animations";
import { Components } from "./components";

export class Router {
  current: Routes = "home";
  changeRoute(newRoute: Routes) {
    this.current = "blank";

    setTimeout(() => {
      this.current = newRoute;
    }, 250);
  }

  homepage = new HomePage();
  aboutme = new AboutMe();
  peasy = new Peasy();
  bindings = new Bindings();
  eventpage = new EventPage();
  csspage = new CSSPage();
  arraypage = new ArraysPage();
  animations = new Animations();
  components = new Components();

  get showHome() {
    return this.current == "home";
  }
  get showPeasy() {
    return this.current == "peasy";
  }
  get showBindings() {
    return this.current == "bindings";
  }
  get showEvents() {
    return this.current == "events";
  }
  get showCSS() {
    return this.current == "css";
  }
  get showArray() {
    return this.current == "array";
  }
  get showAnimations() {
    return this.current == "animations";
  }
  get showComponents() {
    return this.current == "components";
  }
  get showAbout() {
    return this.current == "about";
  }

  get showBlank() {
    return this.current == "blank";
  }

  get showArrayPage() {
    return this.current == "array";
  }

  template = `
  <style>
    .router {
      position: fixed;
      width: 80%;
      height: 90%;
      top: 10%;
      left: 22%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 24px;

    }
      @media (max-width: 700px) {
      .router {
        font-size: 18px;
        padding-left: 3px;
        width: 78%;
        height: 80%;
      }
    }

        
    .transitiondiv {
        opacity: 1;     

    }

    .transitiondiv.pui-adding{
        animation: fadeIn 0.5s forwards;
    }

    .transitiondiv.pui-removing {
        animation: fadeOut 0.5s forwards;
    }

    @keyframes fadeIn {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }

    @keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
    }
    
    



  </style>
  <div class="router">
      
    <div \${===router.showHome} class="transitiondiv">
        ${this.homepage.template}
    </div>

    <div \${===router.showPeasy} class="transitiondiv">
        ${this.peasy.template}
    </div>

    <div \${===router.showBindings} class="transitiondiv">
        ${this.bindings.template}
    </div>

    <div \${===router.showAbout} class="transitiondiv">
        ${this.aboutme.template}
    </div>
    
    <div \${===router.showEvents} class="transitiondiv">
        ${this.eventpage.template}
    </div>

    <div \${===router.showCSS} class="transitiondiv">
        ${this.csspage.template}
    </div>

    <div \${===router.showArray} class="transitiondiv">
        ${this.arraypage.template}
    </div>

    <div \${===router.showAnimations} class="transitiondiv">
        ${this.animations.template}
    </div>

    <div \${===router.showComponents} class="transitiondiv">
        ${this.components.template}
    </div>

    <div \${===router.showBlank}></div>
  </div>`;

  constructor() {}
}

/*

*/
