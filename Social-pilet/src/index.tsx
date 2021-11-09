import { PiletApi } from "siteless";

const defaultButtons = ["facebook", "twitter", "email"];

export function setup(app: PiletApi) {
  const main = document.getElementsByTagName("main")[0];
  const config = "config" in app.meta ? app.meta.config : {};

  if (main) {
    const script = document.createElement("script");
    const socialContainer = document.createElement("div");
    const buttons = config.buttons?.split(",") || defaultButtons;
    const btContent = buttons
      .map((b) => `<a class="a2a_button_${b}"></a>`)
      .join("");
    socialContainer.innerHTML = `<div class="a2a_kit a2a_kit_size_32 a2a_default_style">${btContent}</div>`;
    socialContainer.append(script);
    main.append(socialContainer);
    
    script.src = "https://static.addtoany.com/menu/page.js";
  }
}
