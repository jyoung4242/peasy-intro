//@ts-expect-error
import arraypng from "../assets/array.png";
//@ts-expect-error
import arraypng2 from "../assets/array2.png";

export class ArraysPage {
  myArray: any[] = [
    {
      value: (Math.random() * 100).toFixed(1),
      id: 0,
      color: "red",
    },
  ];

  // i need js function to pick random color
  newColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  addUnit = () => {
    this.myArray.push({
      value: (Math.random() * 100).toFixed(1),
      id: this.myArray.length,
      color: this.newColor(),
    });
  };

  popUnit = () => {
    this.myArray.pop();
  };

  template = `
  <style>
        .arraydiv{
          display: flex; 
          gap: 10px;
          flex-wrap: wrap; 
          justify-content: flex-start;
          align-items: center;
          border: 1px solid whitesmoke;
          width: 600px;
          height: auto;
        }
        .arrayunit{
          padding: 10px;
        }
        
        @media (max-width: 700px) {
          .transitiondiv {
            width: 92%;
          }
          .transitiondiv img {
            width: 100%;
          }
          
          .arraydiv{
            width: 100%;
          }

                   
        }
        </style>
        <div >
              <h1>Array Binding</h1>
                            
              <p>Lists or Arrays have their own unique binding and behaviors.  Let's dig into them. The example below demonstrates the binding and the data model.
              </p>  

              <img id="arraybinding" src="${arraypng}" alt="Array binding" style="display:block"/>
              <img id="arraybinding" src="${arraypng2}" alt="Array binding" style="display:block;margin-top: 10px"/>
              
              <p>Key items to point out is that i'm using the key property of the object as the unique id.  I also added a color property to the object to be used in the css.I'm using the value of the object, the color property, and the id </p>
                            
             <button \${click@=>router.arraypage.addUnit} style="margin-top: 10px;margin-bottom: 10px">Add Unit</button>    
             <button \${click@=>router.arraypage.popUnit}>Pop Unit</button>    
             <div class="arraydiv">
                <div class="arrayunit" \${unit<=*router.arraypage.myArray:id} style="background-color: \${unit.color};">
                    <span>\${unit.value}</span>
                </div>
             </div>
              
        </div>
        `;

  constructor() {}
}
