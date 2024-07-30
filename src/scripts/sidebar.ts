export function initializeNavigation() {
  const sidebarLinks = document.querySelectorAll<HTMLAnchorElement>(".sidebar ul li a");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const href = link.getAttribute("href");
      if (href) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          const windowHeight = window.innerHeight;
          const scrollPosition = offsetTop - windowHeight / 2 + 300;

          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
}
