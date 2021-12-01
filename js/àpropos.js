function addBio() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "col col-12 text-white indexMargin");
    
    let mrBean = document.createElement("img");
    mrBean.src = "img/MrBean.jpg"
    mrBean.setAttribute("class", "img-fluid centerBean mb-5")

    let newTitle = document.createElement("h3");
    let textTitle = document.createTextNode("En savoir plus sur moi");
    newTitle.setAttribute("class", "text-center");
    newTitle.appendChild(textTitle);

    let cyanLine = document.createElement("div");
    cyanLine.setAttribute("class", "line centerLine mb-4");

    let pBio = document.createElement("p");
    let bio = document.createTextNode("J'ai découvert le développement web après avoir bifurquer à plusieurs reprise professionnellement. Ce n'est pas forcément simple de trouver sa voie aujourd'hui, et après avoir essayé différents métiers, cela peut devenir troublant. Mais après avoir été accompagné par des personnes qualifiées en insertion professionnelle, je pense avoir trouvé ma voie. En effet, ce que j'aime dans le développement web, c'est la logique derrière nos lignes de code. Si quelque chose ne fonctionne pas, il y a toujours une explication logique derrière le problème. Il ne tient qu'à nous de la trouver. Il y a aussi le fait de pouvoir profiter personnellement de nos compétences profesionnelles: on peut produire un site ou une application pour soi ou pour un proche. J'ai également la chance d'avoir une très bonne maîtrise de la langue anglaise, ce qui me permet d'avoir accès à toute la documentation possible pour ma montée en compétence. J'ai hâte de pouvoir réaliser des choses encore plus complexe.");
    pBio.setAttribute("class", "mb-4");
    pBio.appendChild(bio);

    let newTitle2 = document.createElement("h3");
    let textTitle2 = document.createTextNode("Dans le futur");
    newTitle2.setAttribute("class", "text-center");
    newTitle2.appendChild(textTitle2);

    let cyanLine2 = document.createElement("div");
    cyanLine2.setAttribute("class", "line centerTitleLine mb-4");

    let pBio2 = document.createElement("p");
    let bio2 = document.createTextNode("On dit qu'il faut viser la Lune pour atteindre les étoiles. Dans mon cas, la Lune serait le développement de jeux vidéos. En effet, je suis consommateur de jeux depuis ma plus tendre enfance, jusqu'à aujourd'hui. Je me demande si j'arrêterai de jouer un jour! J'aimerais donc pouvoir, dans un avenir pas forcément proche, tenter de créer un jeu vidéo. Mais si cela s'avère trop compliqué ou irréalisable pour X raison, rester dans les étoiles à savoir le développement web me convient parfaitement. C'est un milieu extrêmement vaste, au point qu'il semble difficile d'en faire le tour même le temps d'une vie. J'aime ce côté non-répétitif du métier: il a toujours différentes façon de faire, différentes approches à un unique projet. On ne tombe pas dans la routine du métier standard (faire tous les jours la même chose, toute sa vie). C'est un défi de se tenir à la page dans une carrière de développeur, mais à mon sens, cela vaux mieux que répéter encore et encore les même pratiques pour finir par être vite lassé.")
    pBio2.setAttribute("class", "mb-4");
    pBio2.appendChild(bio2);

    let newTitle3 = document.createElement("h3");
    let textTitle3 = document.createTextNode("Outils numériques utilisés");
    newTitle3.setAttribute("class", "text-center");
    newTitle3.appendChild(textTitle3);

    let cyanLine3 = document.createElement("div");
    cyanLine3.setAttribute("class", "line centerLine mb-4");

    let pBio3 = document.createElement("p");
    let bio3 = document.createTextNode("Dans ma formation actuelle, les langages Front-End étudiés sont: le HTML, le CSS et le JS. Le framework Front-end vu est React. En ce qui concerne les langages Back-End, les langages sont: PHP, MySQL et le framework Back-end est Symfony.");
    pBio3.setAttribute("class", "pb-4 m-0");
    pBio3.appendChild(bio3);

    newDiv.append(mrBean, newTitle, cyanLine, pBio, newTitle2, cyanLine2, pBio2, newTitle3, cyanLine3, pBio3)
    document.getElementById("main").appendChild(newDiv);
}

addBio();