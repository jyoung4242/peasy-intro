import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { NavBar } from "./components/navbar";
import { Header } from "./components/header";
import { Router } from "./components/router";

let navbar = new NavBar();
let header = new Header();
let router = new Router();

const model = {
  navbar: navbar,
  header: header,
  router: router,
};
const template = `
<style>
    html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: var(--current-background);
      color: var(--current-foreground);
    }
    body {
      width: 100%;
      height: 100%;
    }
    .App {
      width: 100%;
      height: 100%;
      display: block;
    }
</style>
<div class="App">
    ${header.template}
    ${navbar.template}
    ${router.template}
</div>
`;
UI.create(document.body, model, template);
