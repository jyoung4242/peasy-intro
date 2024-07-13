export class NavBar {
  template = `
    <style>
        .nav-wrapper {
        
        }
        nav {
            background-color: var(--current-background);
            color: var(--current-foreground);
            position: fixed;
            left:0;
            top: 10%;
            width: 15%;
            height: 90%;
            border-right: 1px solid var(--current-dark-accent);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 20px;
            
        }
        
        .nav_aboutme {
            background-color: var(--current-dark-accent);
            color: var(--current-foreground);
            position: fixed;
            left:0;
            bottom: 0;
            width: 15%;
            height: 10%;
            border-top: 1px solid var(--current-dark-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            cursor: pointer;
        }

        nav li {
            list-style: none;
            padding: 10px;
            cursor: pointer;
        }
        nav li:hover {
            background-color: var(--current-dark-accent);
        }
    </style>
    <nav>
        <div class="nav-wrapper">
            <ul id="nav-mobile"  class="right hide-on-med-and-down">
                <li data-id="home" \${click@=>navbar.linkRoute}>Home</li>
                <li data-id="peasy" \${click@=>navbar.linkRoute}>What is Peasy?</li>
                <li data-id="bindings" \${click@=>navbar.linkRoute}>Bindings/Template</li>
                <li data-id="events" \${click@=>navbar.linkRoute}>Events</li>
                <li data-id="css" \${click@=>navbar.linkRoute}>CSS</li>
                <li data-id="array" \${click@=>navbar.linkRoute}>Arrays</li>
                <li data-id="animations" \${click@=>navbar.linkRoute}>Animations</li>
                <li data-id="components" \${click@=>navbar.linkRoute}>Components</li>
            </ul>
        </div>
        <div data-id="about" \${click@=>navbar.linkRoute} class="nav_aboutme">
            About Me
        </div>
    </nav>
    `;

  linkRoute = (event: Event, model: any, element: HTMLElement) => {
    const link = element.getAttribute("data-id");
    console.log("here", link);

    model.router.changeRoute(link);
  };

  constructor() {}
}
