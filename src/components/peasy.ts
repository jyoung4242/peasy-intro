//@ts-expect-error
import apipic from "../assets/api.png";

export class Peasy {
  template = `
        <style>
          

          #apipic {
            position: fixed;
            right: 20%;
            bottom: 20px;
            width: 25%;
            
            border-radius: 15px;
          }

        @media (max-width: 700px) {
        #apipic {
            width: 60%;
            right: 10%;
            bottom: 100px;
          }
        }          
          
        </style>
        <div>
              <h1>What is Peasy-UI?</h1>
                            
              <p>Peasy-UI is a small UI binding library. It started as a hobby project that grew some legs and became more than the author originally intended. Written by
            Jürgen Wenzel in early 2022.</p>  
             
              <p>
              Here is a diagram outlining the key API calls used in Peasy-UI.  For more information on this, please see my article on dev.to regarding Peasy-UI.
              </p>

              <img id="apipic" src="${apipic}" alt="Peasy API diagram">
  
              <p>Here is the Peasy-UI github repo: <a class="home_link"  href="https://github.com/peasy-lib/peasy-lib/tree/main/packages/peasy-ui>">Link to Repo</a></p>

              <p>Here is Jurgen's github profile: <a class="home_link" href="https://github.com/jwx">Link to Profile</a></p>

              <p>Here is link to the Dev.to article: <a class="home_link"  href="https://dev.to/jyoung4242/">Peasy article</a></p>
              
              
        </div>
        `;

  constructor() {}
}
