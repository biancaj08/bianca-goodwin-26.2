let footer = document.appendChild("footer");
let today = new Date();
let thisYear = today.getFullYear();
let copyright = document.createElement(p);
copyright.innerHTML = append(thisYear);
footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "Github"]
let skillsSelection = document.getElementbyId("skills");
let skillsList = skillsSelection.getElementByTagName("ul");

for (let i = 0; i < skills.length; i++){
    let skills = document.createElement("li");
    skills.innerText = skills[i];
    skillsList[0].appendChild(skill);
    console.log("new skill", skills);
}

console.log(skillsList);