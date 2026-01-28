import { projects } from "./data.js";

const projectGrid = document.querySelector(".project-grid");
const baseCard = projectGrid?.querySelector(".project-card");

if (!projectGrid || !baseCard) {
  console.error("Project grid or base project card not found");
}

baseCard.remove();
function renderProjects(projects) {
  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const card = baseCard.cloneNode(true);

    const img = card.querySelector("img");
    const title = card.querySelector("h3");
    const desc = card.querySelector("p");
    const tech = card.querySelector(".tech");
    const link = card.querySelector(".github-link");

    img.src = project.imgPath;
    img.alt = project.alt || project.title;

    title.textContent = project.title;
    desc.textContent = project.description;
    tech.textContent = project.tech;

    link.href = project.githubLink || "#";

    fragment.appendChild(card);
  });

  projectGrid.appendChild(fragment);
}


function animateCardsOnScroll() {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2, 
    }
  );

  cards.forEach((card) => observer.observe(card));
}

renderProjects(projects);
animateCardsOnScroll();
