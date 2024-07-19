export class AboutMe {
  template = `
      <style>
        #profilepic {
          width: 300px;
          height: 300px;
          border-radius: 50%;
        }

         @media (max-width: 700px) {
          .transitiondiv {
            width: 92%;
            overflow-y: scroll;
          }
          .transitiondiv img {
            width: 50%;
            height: 50%;
          }
          
          #profilepic {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

                   
        }
        
      </style>
      <div>
            <h1>About Me</h1>
            <img id="profilepic" src="https://github.com/jyoung4242.png" alt="Justin Young's profile picture"/>
            
            <p>I'm from the midwest United States, and I'm a hobbyist developer. I enjoy learning new technologies, and recently have been
            working on dev.to articles and blog posts.
            I also create games and demoes for my itch.io profile.
            </p>  
           
            <p>I have used the peasy framework to make my own DOM based game engine, Squeleto.  
            Here is the link to that project:
            </p>
             <a class="home_link"  href="https://jyoung4242.github.io/Squeleto-Docs/#/">https://jyoung4242.github.io/Squeleto-Docs/#/</a>

            <p>Here is my twitter profile: <a class="home_link"  href="https://twitter.com/jyoung424242">https://twitter.com/jyoung424242</a></p>
            <p>Here is my github profile: <a class="home_link" href="https://github.com/jyoung4242">https://github.com/jyoung4242</a></p>
            <p>Here is my itch.io profile: <a class="home_link"  href="https://mookie4242.itch.io/">https://mookie4242.itch.io/</a></p>
            <p>Here is my dev.to profile: <a class="home_link"  href="https://dev.to/jyoung4242">https://dev.to/jyoung4242</a></p>
            
      </div>
      `;

  constructor() {}
}
