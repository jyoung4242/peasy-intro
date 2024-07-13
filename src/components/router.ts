type Routes = "home" | "peasy" | "bindings" | "events" | "css" | "animations" | "components" | "about";

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
      <h1>Home</h1>
      <p>This demo application is made to demonstrate the capabilities of Peasy-UI.  One aspect of peasy is that it can emulate a Single Page Application, and completely control the content of your app.  This demo is a mock-up of a SPA using Peasy-UI.
      </p>  

      <p>You can click the navbar links or follow these links below.</p>

      <div>
        <li><a class="home_link" href="#peasy">What is Peasy-UI</a></li>
        <li><a class="home_link" href="#bindings">Templates and Bindings</a></li>
        <li><a class="home_link" href="#events">Events</a></li>
        <li><a class="home_link" href="#css">CSS</a></li>
        <li><a class="home_link" href="#animations">Animations</a></li>
        <li><a class="home_link" href="#components">Components</a></li>
        <li><a class="home_link" href="#about">About Me</a></li>
      </div>
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
