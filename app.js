const project = [
    {
        nameProject: "Pokemon Recognition",
        description: "CNN capable de reconnaitre n'importe quel pokémon de la 1ère génération.",
        image: "./img/pokemonRecognition.png",
        link: "https://github.com/quentinhouillon/pokemonRecognition"
    },
    {
        nameProject: "Django Project Manager",
        description: "Projet django qui permet de gérer vos notes, une todolist ainsi que vos projets.",
        image: "./img/djangoNote.png",
        link: "https://github.com/quentinhouillon/django_note"
    },
    {
        nameProject: "Puissance 4",
        description: "Puissance 4 écrit en C à l'aide de la bibliothèque ncurse.",
        image: "./img/puisance4.png",
        link: "https://github.com/quentinhouillon/puissance4"
    }
]

// Show projects
let container = document.getElementsByClassName("card-container");
container = container[container.length - 1];

const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
project.forEach(({nameProject, description, image, link}) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("card");

    const name = document.createElement("h2");
    name.textContent = nameProject;
    projectDiv.appendChild(name);

    const _description = document.createElement("p");
    _description.textContent = description;
    projectDiv.appendChild(_description);
    projectDiv.innerHTML += "<br>";

    const img = document.createElement("img");
    img.src = image;
    projectDiv.appendChild(img);
    projectDiv.innerHTML += "<br> <br>";

    const a = document.createElement("a");
    a.href = link;
    a.style.color = primaryColor;
    a.textContent = "View Project on GitHub";
    projectDiv.appendChild(a);

    container.appendChild(projectDiv);
});

// Add footer with current year
const pFooter = document.createElement("p");
pFooter.textContent = `© ${new Date().getFullYear()} Quentin HOUILLON. All Rights Reserved.`;
document.getElementsByTagName("footer")[0].appendChild(pFooter);
