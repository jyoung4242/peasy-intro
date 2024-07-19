//@ts-expect-error
import eventbinding from "../assets/eventbinding.png";
//@ts-expect-error
import eventmodel from "../assets/eventmodel.png";

export class EventPage {
  clicks: number = 0;
  inputElement: HTMLInputElement | undefined;
  inputText: string = "type here";
  selectText: string = "Option 1";
  clickhandler(e: Event, m: any, elem: HTMLElement, attr: string, obj: any) {
    m.router.eventpage.clicks++;
  }
  inputTexthandler(e: Event, m: any, elem: HTMLElement, attr: string, obj: any) {
    m.router.eventpage.inputText = (e.target as HTMLInputElement).value;
  }
  selectHandler(e: Event, m: any, elem: HTMLElement, attr: string, obj: any) {
    m.router.eventpage.selectText = (e.target as HTMLInputElement).value;
  }
  divColor: string = "black";
  mouseenterHandler(e: Event, m: any, elem: HTMLElement, attr: string, obj: any) {
    //change color
    m.router.eventpage.divColor = "white";
  }
  mouseleaveHandler(e: Event, m: any, elem: HTMLElement, attr: string, obj: any) {
    m.router.eventpage.divColor = "black";
  }
  template = `

        <style>


          .events{
          display: flex; justify-content: space-between; align-items: center;
          }

          @media (max-width: 700px) {
          .transitiondiv {
            width: 92%;
            overflow-y: scroll;
          }
          .transitiondiv img {
            width: 100%;
          }
          

          .events{
          flex-direction: row;
          flex-wrap: wrap;
          gap: 10px;
          }
        }
          
        </style>

        <div>
              <h1>Events</h1>
                            
              <p>Events can be leveraged in the bindings.</p>  
              
              <img id="eventbinding" src="${eventbinding}" alt="Event binding"/>

              <p>All the DOM events can be bound, and in the data model you provide the bound callback.</p>
  
              <img id="eventmodel" src="${eventmodel}" alt="Event model"/>
              
              <div class='events' style="">
                    <div>
                        <h3>Click Event</h3>
                        <button \${click@=>router.eventpage.clickhandler}>Click me</button>
                        <p>clicks: \${router.eventpage.clicks}</p>
                    </div>

                    <div>
                        <h3>Input Event</h3>
                        <input type="text" \${input@=>router.eventpage.inputTexthandler} placeholder="type here" />
                        <p>\${router.eventpage.inputText}</p>
                    </div>

                    <div>
                        <h3>Change Event</h3>
                        <select \${change@=>router.eventpage.selectHandler}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                        <p>\${router.eventpage.selectText}</p>
                    </div>

                    <div>
                        <h3>Mouse Events</h3>
                        <div style="width: 100px; height: 100px; border: 1px solid whitesmoke; background-color: \${router.eventpage.divColor}; display: flex; justify-content: center; align-items: center;"
                            \${mouseenter@=>router.eventpage.mouseenterHandler}
                            \${mouseleave@=>router.eventpage.mouseleaveHandler}
                            ><p>Hover me</p>
                        </div>
                        
                    </div>
              </div>
             
              
              
        </div>
        `;

  constructor() {}
}
