type Routes = "home" | "peasy" | "bindings" | "events" | "css" | "animations" | "components" | "about";

import { HomePage } from "./home";

const homepage = new HomePage();

export class Router {
  current: Routes = "home";

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
  get showAnimations() {
    return this.current == "animations";
  }
  get showComponents() {
    return this.current == "components";
  }
  get showAbout() {
    return this.current == "about";
  }

  template = `
  <style>
    .router {
      position: fixed;
      width: 80%;
      height: 90%;
      top: 10%;
      left: 20%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 24px;

    }

    .home_link {
      color: whitesmoke;
    }

    .home_link:visited {
      color: darkgrey;
    }
    
  </style>
  <div class="router">
    <div \${===router.showHome}>
        ${homepage.template}
    </div>
    <div \${===router.showPeasy}>What  is Peasy-UI</div>
    <div \${===router.showBindings}>Templates and Bindings</div>
    <div \${===router.showEvents}>Events</div>
    <div \${===router.showCSS}>CSS</div>
    <div \${===router.showAnimations}>Animations</div>
    <div \${===router.showComponents}>Components</div>
    <div \${===router.showAbout}>About Me</div>
  </div>`;

  constructor() {}
}
