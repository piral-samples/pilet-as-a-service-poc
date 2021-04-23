export function setup(app) {
  const script = document.createElement("script");
  script.setAttribute("data-cookiefirst-key", app.meta.config.key);
  script.src = "https://consent.cookiefirst.com/banner.js";
  document.body.prepend(script);
}
