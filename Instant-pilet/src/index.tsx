export function setup(app) {
  const script = document.createElement("script");
  script.src = "https://instant.page/5.1.0";
  document.body.prepend(script);
}
