export class HomePage {
  linkRoute = (event: Event, model: any, element: HTMLElement) => {
    const link = element.getAttribute("data-id");
    model.router.changeRoute(link);
  };

  template = `
    <style>
    @media (max-width: 700px) {
          .transitiondiv {
            width: 95%;
            overflow-y: scroll;
          }

          .transitiondiv select {
            width: 100%;
          }   
      }
    
    </style>
    <div >
      <h1>Home</h1>
      <p>This demo application is made to demonstrate the capabilities of Peasy-UI.  One aspect of peasy is that it can emulate a Single Page Application, and completely control the content of your app.  This demo is a mock-up of a SPA using Peasy-UI.
      </p>  

      <p>You can click the navbar links or follow these links below.</p>

      <div>
        <li><a \${click@=>router.homepage.linkRoute} data-id="peasy" class="home_link" href="#peasy">What is Peasy-UI</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="bindings" class="home_link" href="#bindings">Templates and Bindings</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="events" class="home_link" href="#events">Events</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="css" class="home_link" href="#css">CSS</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="array" class="home_link" href="#css">Arrays</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="animations" class="home_link" href="#animations">Animations</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="components" class="home_link" href="#components">Components</a></li>
        <li><a \${click@=>router.homepage.linkRoute} data-id="about" class="home_link" href="#about">About Me</a></li>
      </div>
    </div>
        
    `;

  constructor() {}
}
