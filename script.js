document.getElementById("toggle-theme").addEventListener("click", () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", nextTheme);
});
