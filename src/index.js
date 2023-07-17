const $links = document.querySelector('#links');
const $technologies = document.querySelector('#technologies');
const $name = document.querySelector('h1');
const $username = document.querySelector('h2');
const $biography = document.getElementById('biography');
const $description = document.getElementById('description');

const data =
{
    name: "Eduardo López 🇲🇽",
    username: "@spokelopez",
    biography: "Software engineer en @dacodes - #JavaScript #NodeJS #PHP #Magento #Css #Docker #Laravel #Mysql",
    avatar: "...",
    description: "Soy un desarrollador frontend ubicado en México, actualmente trabajo como desarrollador de e- commerce en la plataforma Magento. Estoy especializado también en PHP, Node.js y Laravel.",
    technologies:
        [
            {
                name: "PHP",
                url: "https://twitter.com/",
                username: "",
            },
            {
                name: "instagram",
                url: "https://instagram.com/",
                username: "",
            },
        ],

    links:
        [
            {
                name: "Sitio web",
                url: "https://spokelopez.com/",
                color: "stone",
                opacity: "500",
                emoji: "🌎",
            },
            {
                name: "Twitter",
                url: "https://twitter.com/spokelopez",
                color: "sky",
                opacity: "400",
                emoji: "💬",
            },
            {
                name: "Youtube",
                url: "https://www.youtube.com/c/SpokeLopez",
                color: "red",
                opacity: "500",
                emoji: "📺",
            },
            {
                name: "Blog",
                url: "https://www.comsoft-mexico.com/",
                color: "violet",
                opacity: "400",
                emoji: "📖",
            },
            {
                name: "Github",
                url: "https://github.com/SpokeLopez",
                color: "blue",
                opacity: "500",
                emoji: "💻",
            }
        ],
};

const header = () => {
    let name = document.createTextNode(data?.name);
    let username = document.createTextNode(data?.username);
    let biography = document.createTextNode(data?.biography);

    $name.appendChild(name);
    $username.appendChild(username);
    $biography.appendChild(biography);
}

const section = () => {
    let description = document.createTextNode(data?.description);
    $description.appendChild(description);
}

const main = () => {
    let links = data?.links?.map((link) => {
        return `
            <div class="bg-${link.color}-${link.opacity} px-4 py-5 w-full flex justify-between">
                <a class="text-sm font-bold text-stone-100 text-center hover:text-stone-300 cursor-pointer"
                    href="${link.url}" target="_blank">
                    ${link.name}
                </a>
                <span>${link.emoji}</span>
            </div>`
    }).join('');
    let newItem = document.createElement("main");
    $links.appendChild(newItem);
    newItem.innerHTML = links;
}
header();
section();
main();