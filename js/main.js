
function addCards() {
    let newTitleDiv = document.createElement("div");
    newTitleDiv.setAttribute("class", "text-white text-center mb-2 d-flex flex-column");
    
    let newMainTitle = document.createElement("h3");
    let textMainTitle = document.createTextNode("Mes projets réalisés");
    newMainTitle.setAttribute("class", "my-4 indexTitle");
    newMainTitle.appendChild(textMainTitle);
    newTitleDiv.appendChild(newMainTitle);

    document.getElementById("main").appendChild(newTitleDiv);

    for(let i=0; i<6; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "col col-4 text-center my-4 d-flex flex-column mycard");
        
        let newTitle = document.createElement("h4");
        newTitle.setAttribute("class", "text-white mb-1")
        
        let img = document.createElement("img");
        img.src = "img/screen_" + i + ".png"
        img.setAttribute("class", "img-fluid mt-2 indexMargin");
        
        let textTitle = "";
        if(i === 0) {
            textTitle = document.createTextNode("Shifoumi");
        } else if(i === 1) {
            textTitle = document.createTextNode("Jeu du pendu");
        } else if(i === 2) {
            textTitle = document.createTextNode("Saltain Banque");
        } else if(i === 3) {
            textTitle = document.createTextNode("Jeu des paires");
        } else if(i === 4) {
            textTitle = document.createTextNode("Terre de Geek");
        } else {
            textTitle = document.createTextNode("Wiki Star Wars");
        }

        let projectLink = document.createElement("a");
        projectLink.setAttribute("class", "githubLink")
        let textLink = document.createTextNode("Voir sur GitHub");
        projectLink.appendChild(textLink);
        if(i === 0) {
            projectLink.href = "https://github.com/DavidVXBLD/shifoumi"
        } else if(i === 1) {
            projectLink.href = "https://github.com/DavidVXBLD/pendu"
        } else if(i === 2) {
            projectLink.href = "https://github.com/DavidVXBLD/Saltain_Banque"
        } else if(i === 3) {
            projectLink.href = "https://github.com/DavidVXBLD/Memory_Game"
        } else if(i === 4) {
            projectLink.href = "https://github.com/DavidVXBLD/TerreDeGeekResponsive"
        } else {
            projectLink.href = "https://github.com/DavidVXBLD/FanSite_StarWars"
        }
        
        newTitle.appendChild(textTitle);
        newDiv.append(newTitle, projectLink, img);

        document.getElementById("main").appendChild(newDiv);
    }
}




addCards();



