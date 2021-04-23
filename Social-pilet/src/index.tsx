const defaultButtons = ["facebook", "twitter", "email"];

export function setup(app) {
  const main = document.getElementsByTagName("main")[0];
  if (main) {
    const script = document.createElement("script");
    script.src = "https://static.addtoany.com/menu/page.js";

    const buttons = `<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
    ${(app.meta.config?.buttons?.split(",") || defaultButtons)
      .map((b) => `<a class="a2a_button_${b}"></a>`)
      .join("")}
    </div>`;

    const socialContainer = document.createElement("div");
    socialContainer.innerHTML = buttons;
    socialContainer.append(script);
    main.append(socialContainer);
  }
}
