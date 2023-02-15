const $links = document.querySelector('#links');
const $technologies = document.querySelector('#technologies');
const $name = document.querySelector('h1');
const $username = document.querySelector('h2');
const $biography = document.getElementById('biography');

const data =
{
    name: "Eduardo López 🇲🇽",
    username: "@spokelopez",
    biography: "Frontend Lead Developer en @VASS_Group - #JavaScript #Vue #PHP #Magento #Css #Docker #Laravel",
    avatar: "...",
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
                name: "Blog",
                url: "https://example.com/",
                color: "teal",
                opacity: "400",
                emoji: "📖",
            },
            {
                name: "Twitter",
                url: "https://example.com/",
                color: "sky",
                opacity: "400",
                emoji: "💬",
            },
            {
                name: "Sitio web",
                url: "https://example.com/",
                color: "green",
                opacity: "700",
                emoji: "💬",
            },
            {
                name: "Youtube",
                url: "https://example.com/",
                color: "red",
                opacity: "500",
                emoji: "💬",
            },
        ],
    footer: "Made with Love on Colombia",
};

const header = () => {
    let name = document.createTextNode(data?.name);
    let username = document.createTextNode(data?.username);
    let biography = document.createTextNode(data?.biography);

    $name.appendChild(name);
    $username.appendChild(username);
    $biography.appendChild(biography);

}

const main = ()=> {
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
main();