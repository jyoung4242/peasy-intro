//@ts-expect-error
import csspng from "../assets/css.png";

export class CSSPage {
  divColor: string = "black";
  boxWidth: number = 100;
  selectelement: HTMLSelectElement | undefined;
  changedivcolor(e: Event, m: any, elem: HTMLElement, attr: string, obj: any) {
    m.router.csspage.divColor = (e.target as HTMLInputElement).value;
  }
  changeboxwidth(e: Event, m: any, elem: HTMLElement, attr: string, obj: any) {
    m.router.csspage.boxWidth = parseInt((e.target as HTMLInputElement).value);
  }
  template = `
        <style>
            .csstestbox {
                background-color: \${router.csspage.divColor};
                width: \${router.csspage.boxWidth}px;
                border-radius: 5px;
                border: 1px solid black;
                transition: all 0.25s;
            }
        </style>
        <div>
              <h1>CSS Binding</h1>
                            
              <p>If you pass a style tag with your template, parameters defined in your style tag are now accessible by Peasy and can be controlled.
              </p>  
              
              <p>This works for inline styling as well...
              </p>

             <img id="css" src="${csspng}" alt="CSS binding"/>
              
             <div>
                <div>
                    Box Color: 
                    <select \${==>router.csspage.selectelement} \${change@=>router.csspage.changedivcolor}>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                    Box Width:
                    <input type="number" \${input@=>router.csspage.changeboxwidth} value="100"/>
                </div>

                <div class="csstestbox" style="height: 100px;">
                </div>
             
             </div>
              
        </div>
        `;

  constructor() {}
}
