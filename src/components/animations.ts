//@ts-expect-error
import anime from "../assets/anime.png";
//@ts-expect-error
import anime2 from "../assets/anime2.png";
export class Animations {
  selectChange = (event: Event, model: any, element: HTMLElement) => {
    const link = element.getAttribute("data-id");
    if (link == "show") {
      this.showDiv = true;
    } else if (link == "hide") {
      this.showDiv = false;
    }
  };
  showDiv: boolean = true;
  get isDivShowing() {
    return this.showDiv;
  }
  template = `
        <style>
           .animTargetDiv {
               background-color: whitesmoke;
               color: black;
               opacity: 1;
               transition: opacity 0.5s;
               width: 100px;
               height: 100px;
               display: flex;
               text-align: center;
               justify-content: center;
               align-items: center;

           }

           .animTargetDiv.pui-adding, .animTargetDiv.pui-removing {
               opacity: 0;
           }

            @media (max-width: 700px) {
          .transitiondiv {
            width: 92%;
          }
          .transitiondiv img {
            width: 100%;
          }
                  
        }

        </style>
        <div >
              <h1>Animations</h1>
                            
              <p>If you are looking to animate aspects of your DOM, you usually accomplish this with CSS.  Well, peasy gives you two utility class names to assist in this: .pui-adding class and the .pui-removing class </p>  

              <img id="arraybinding" src="${anime}" alt="Array binding" style="display:block"/>

              <p>  The class names are added and remove during the rendering, unrendering of the element, here's the rendering binding. The key item to note is the pui-adding and pui-removing class names are left attaced until the end of the animations.</p>
              <img id="arraybinding" src="${anime2}" alt="Array binding" style="display:block"/>
              
            <div>
                <div>
                    
                    <label>Show</label>
                    <input type="radio" data-id="show" \${change@=>router.animations.selectChange} checked name="fav_language">    
                    <label>Hide</label>
                    <input type="radio" data-id="hide" \${change@=>router.animations.selectChange}  name="fav_language">    
                    
                </div>
                <div class="animTargetDiv" \${===router.animations.isDivShowing}>
                    <p>  Hello Peasy! </p>
                </div>
            
            
            </div>
             
              
        </div>
        `;

  constructor() {}
}
