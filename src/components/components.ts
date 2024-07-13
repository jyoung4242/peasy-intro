//@ts-expect-error
import comp1 from "../assets/component1.png";
//@ts-expect-error
import comp2 from "../assets/component2.png";

export class Components {
  constructor() {}

  template = `
    <style>
        .comp_content {
            overflow-y: scroll;
            border:1px solid whitesmoke;
            height: 500px;
            width: 800px;
            margin-top: 10px;
            padding: 5px;
        }
    </style>
    
    <h1>Components</h1> 
    This is the most advanced topic for Peasy.
    <div class="comp_content">
    
    <p>
    Peasy UI makes it possible to create both JavaScript and HTML single file components and import them for use in the app, without the need of a build step. 
    </p>
    
    <p>
    Peasy UI only needs a template property in order to render a component, but for Peasy UI to instantiate and render components based on a template object/class and (optionally) data, the template object/class needs
    a template property, a create method (that gets invoked with the specified model data), and to be known to the parent model either as a property or through the use of the UI.register method
    </p>

    <p>There are JavaScript and HTML based components, but for the scope of this app, we will only be using JS.   Please visit the readme.md for Peasy-UI for more information</p>
    
    <h3>JavaScript Single File Components</h3>

    <p>Here is an example of a Peasy-UI component, you can see how there is a template property and a create method.  Those are the two requirements needed to create a component</p>

    <img id="arraybinding" src="${comp1}" alt="Array binding" style="display:block"/>

    <p>Using a JavaScript single file component is done by importing it in script and then using it in parent's HTML.</p>
    <img id="arraybinding" src="${comp2}" alt="Array binding" style="display:block"/>
    
    </div>
    `;
}
