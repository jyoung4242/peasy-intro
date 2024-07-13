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

        
        .home_link {
        color: whitesmoke;
        }

        .home_link:visited {
        color: darkgrey;
        }

    </style>
    <nav>
        <div class="nav-wrapper">
            <ul id="nav-mobile"  class="right hide-on-med-and-down">
                
                <li><a \${click@=>navbar.linkRoute} data-id="home" class="home_link" href="#home">Home</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="peasy" class="home_link" href="#peasy">What is Peasy?</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="bindings" class="home_link" href="#bindings">Bindings/Templates</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="events" class="home_link" href="#events">Events</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="css" class="home_link" href="#css">CSS</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="array" class="home_link" href="#array">Arrays</a></li>
                <li><a \${click@=>navbar.linkRoute} data-id="animations" class="home_link" href="#animations">Animations</a></li>
                <li></li>               
                
            </ul>
        </div>
        <div class="nav_aboutme">
            <a \${click@=>navbar.linkRoute} data-id="about" class="home_link" href="#about">About Me</a>    
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
