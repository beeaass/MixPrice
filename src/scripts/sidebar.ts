export function initializeNavigation() {
  document.querySelectorAll<HTMLAnchorElement>(".sidebar ul li a").forEach(link =>
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href")?.slice(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;

      targetElement && window.scrollTo({
        top: targetElement.offsetTop - window.innerHeight / 2 + 300,
        behavior: "smooth",
      });
    })
  );
}
