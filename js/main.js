
function addCards() {
    for(let i=0; i<6; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "col col-4 text-center mb-5");
        let newTitle = document.createElement("h3");
        newTitle.setAttribute("class", "text-white mb-4")
        let img = document.createElement("img");
        img.src = "img/screen_" + i + ".png"
        img.setAttribute("class", "img-fluid");
        
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
        
        newTitle.appendChild(textTitle);
        newDiv.append(newTitle, img);

        document.getElementById("main").appendChild(newDiv);
    }
}




addCards();




// if (newDiv.classList.contains())

