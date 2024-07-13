export class Bindings {
  get currentDescription() {
    if (!this.selectBinding) return "";
    const currentSelection = this.selectBinding?.value;
    return this.listOfBindings.find(b => b.value == currentSelection)?.description;
  }
  selectBinding: HTMLSelectElement | undefined;

  listOfBindings: any[] = [
    {
      text: "standard text binding",
      value: "standardtext",
      description: "${prop} is Binding from model property to attribute or text",
    },
    {
      text: "one-time text binding",
      value: "OTtext",
      description: "${|prop} os one-time binding from model property to attribute or text",
    },
    {
      text: "binding value with truthy",
      value: "truthyvalue",
      description: "${'value'=prop} is binding that renders value if model property is truthy",
    },
    {
      text: "binding value with non-truthy",
      value: "nontruthyvalue",
      description: "${'value'! prop} is binding that renders value if model property is truthy",
    },
    {
      text: "one time binding value with truthy",
      value: "OTtruthyvalue",
      description: "${|'value'=prop} is one-time binding that renders value if model property is truthy",
    },
    {
      text: "one time binding value with non-truthy",
      value: "OTnontruthyvalue",
      description: "${|'value'! prop} is one-time binding that renders value if model property is truthy",
    },
    {
      text: "attribute binding from data model to element attribute",
      value: "attributefrommodeltoelement",
      description:
        "${'attributename'<== datamodel property} is attribute binding that binds data from the data model to the elements given attribute, this is placed inside the element tag, example would be <div ${color <== myColor}>",
    },
    {
      text: "one time attribute binding from data model to element attribute",
      value: "OTattributefrommodeltoelement",
      description:
        "${'attributename'<=| datamodel property} is a one-time attribute binding that binds data from the data model to the elements given attribute, this is placed inside the element tag, example would be <div ${color <=| myColor}>",
    },
    {
      text: "attribute binding from attribute to data model",
      value: "attributefromattributetodata",
      description:
        "${'attributename'==> datamodel property} is attribute binding that binds data from the data model to the elements given attribute, this is placed inside the element tag, example would be <input ${'value' ==> mytext}>",
    },
    {
      text: "attribute binding that is bi-directional",
      value: "twowayattributeanddata",
      description:
        "${'attributename'<=> datamodel property} is a bi-directional attribute binding that binds data from the data model to the elements given attribute, and the reverse is also true, this is placed inside the element tag, example would be <div ${'value' <=> mytext}>",
    },
    {
      text: "event binding",
      value: "eventbinding",
      description: "${'eventname' @=> callbackname} is an event binding that is triggered when the event is fired",
    },
    {
      text: "one time element binding",
      value: "OTelementbinding",
      description:
        "${==> elementReference} is an one-time element binding, this can be used to capture key element references to use in your code",
    },
    {
      text: "render if true binding",
      value: "renderiftrue",
      description:
        "${=== property} is a render binding that can be added inside element tag and allows the element to be rendered if the property is truthy",
    },
    {
      text: "render if false binding",
      value: "renderiffalse",
      description:
        "${!== property} is a render binding that can be added inside element tag and allows the element to be rendered if the property is truthy",
    },
    {
      text: "array or list binding",
      value: "arrayorlist",
      description:
        "${itemname <=* listname:key} this is special binding that allows you to pass a list of items to the template, and it will duplicate the rendered element",
    },
  ];

  template = `
        <style>
          #profilepic {
            width: 300px;
            height: 300px;
            border-radius: 50%;
          }

          #apipic {
            position: fixed;
            right: 20%;
            bottom: 20px;
            width: 25%;
            
            border-radius: 15px;
          }
          
        </style>
        <div>
              <h1>Templates and Bindings</h1>
                            
              <p>The template is the string literal representing the HTML that you wish Peasy to render.  Bindings are the special tags that are parsed out of the template.  These bindings are mapped to the data model passed to Peasy.
              </p>  
             
             <p>Here is a quick example of a binding, and how it is used.</p>
             <xmp><p> {bindingname} </p> </xmp>
             <p>When peasy renders the template, it will replace the binding with the data model value.</p>

             <select \${==>router.bindings.selectBinding} id="selectbinding">
               <option \${option <=* router.bindings.listOfBindings} value="\${option.value}">\${option.text}</option>
             </select>
             <p>\${router.bindings.currentDescription}</p>
        </div>
        `;

  constructor() {}
}
