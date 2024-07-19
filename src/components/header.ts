export class Header {
  name = "Peasy-UI";
  uptime = 0;
  template = `
      <style>
        header {
          background-color: var(--current-background);
          color: var(--current-foreground);
          position: fixed;
          left:0;
          width: calc(100% - 40px);

          height: 10%;
          border-bottom: 1px solid var(--current-dark-accent);
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }
        @media (max-width: 700px) {
        header {
            height: 8%;
            
          }
        header h1 {
          font-size: 18px;
        }
      </style>
      
      <header>
          <h1>\${header.name}</h1>
          <uptime-counter>
            uptime: \${header.uptime}
          </uptime-counter>
      </header>
      `;

  constructor() {
    setInterval(() => {
      this.uptime++;
    }, 1000);
  }
}
