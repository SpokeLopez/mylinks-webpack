(()=>{const e=document.querySelector("#links"),o=(document.querySelector("#technologies"),document.querySelector("h1")),t=document.querySelector("h2"),n=document.getElementById("biography"),a=document.getElementById("description"),r={name:"Eduardo López 🇲🇽",username:"@spokelopez",biography:"Frontend Lead Developer en @VASS_Group - #JavaScript #Vue #PHP #Magento #Css #Docker #Laravel",avatar:"...",description:"Soy un desarrollador frontend ubicado en México, actualmente trabajo como desarrollador de e- commerce en la plataforma Magento. Estoy especializado también en PHP, Node.js y Laravel.",technologies:[{name:"PHP",url:"https://twitter.com/",username:""},{name:"instagram",url:"https://instagram.com/",username:""}],links:[{name:"Sitio web",url:"https://spokelopez.com/",color:"stone",opacity:"500",emoji:"🌎"},{name:"Twitter",url:"https://twitter.com/spokelopez",color:"sky",opacity:"400",emoji:"💬"},{name:"Youtube",url:"https://example.com/",color:"red",opacity:"500",emoji:"📺"},{name:"Blog",url:"https://www.comsoft-mexico.com/",color:"violet",opacity:"400",emoji:"📖"},{name:"Linkedin",url:"#",color:"blue",opacity:"500",emoji:"💻"}]};(()=>{let e=document.createTextNode(r?.name),a=document.createTextNode(r?.username),c=document.createTextNode(r?.biography);o.appendChild(e),t.appendChild(a),n.appendChild(c)})(),(()=>{let e=document.createTextNode(r?.description);a.appendChild(e)})(),(()=>{let o=r?.links?.map((e=>`\n            <div class="bg-${e.color}-${e.opacity} px-4 py-5 w-full flex justify-between">\n                <a class="text-sm font-bold text-stone-100 text-center hover:text-stone-300 cursor-pointer"\n                    href="${e.url}" target="_blank">\n                    ${e.name}\n                </a>\n                <span>${e.emoji}</span>\n            </div>`)).join(""),t=document.createElement("main");e.appendChild(t),t.innerHTML=o})()})();