import { PiletApi } from 'siteless';

export function setup(app: PiletApi) {
  const script = document.createElement("script");
  const config = 'config' in app.meta ? app.meta.config : {};
  script.setAttribute("data-cookiefirst-key", config.key);
  script.src = "https://consent.cookiefirst.com/banner.js";
  document.body.prepend(script);
}
