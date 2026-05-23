let footer = document.createElement("footer");
document.body.appendChild("footer");
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement("p");
copyright.innerHTML = `Bianca Goodwin ` + thisYear;
footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "Github"]
let skillsSelection = document.getElementbyId("skills");
let skillsList = skillsSelection.getElementByTagName("ul")[0];

for (let i = 0; i < skills.length; i++){
    let skillItem = document.createElement("li");
    skillItem.innerText = skillItem[i];
    skillsList[0].appendChild(skillItem);
    console.log("new skill", skillItem);
}

console.log(skillsList);