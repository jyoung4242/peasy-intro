export class NavBar {
  name = "World";
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
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>Home \${navbar.name}</li>
                <li>What is Peasy?</li>
                <li>Bindings/Template</li>
                <li>Events</li>
                <li>CSS</li>
                <li>Animations</li>
                <li>Components</li>
            </ul>
        </div>
        <div class="nav_aboutme">
            About Me
        </div>
    </nav>
    `;

  constructor() {}
}
