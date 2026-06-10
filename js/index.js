//create footer and add it to the body
const footer = document.createElement('footer')
const body = document.querySelector('body')
body.appendChild(footer)

//Add a copyright to the footer
const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p')
copyright.innerHTML = `<span>&#169 ${year} Bianca<span>`
footer.appendChild(copyright)

//populate the skills list
const skillsList = ['python', 'javascript', 'excel'];
const skillsSection = document.getElementById('skills');
const skillsUL = skillsSection.querySelector('ul');

//to put items in a list one by one use for of
for (let skill of skillsList){
    let skillsLI = document.createElement('li');
    skillsLI.innerHTML = skill;
    skillsUL.appendChild(skillsLI);
}

const messageForm = document.querySelector("[name='leave_message']");


messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
 

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    let messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto: ${email}">${name} </a><span>wrote: ${message} <span>`
    
    
    const removeButton = document.createElement("BUTTON");
    removeButton.setAttribute("type", "button");
    removeButton.innerText = "Remove";


    function onRemoveButton(event){
        const entry = event.target.parentNode;
        entry.remove();
    }

    removeButton.addEventListener("click", onRemoveButton);
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})
let repositories = [];

fetch('https://api.github.com/users/Startnow08/repos')
.then(response => {
    if (!response.ok) {
        throw new Error("Request failed");
    }
    return response.json();
})
   
 .then(data => {
    console.log("data: ", data);
    repositories = [...data];
    console.log("repositories: ", repositories);

 let projectSection = document.getElementById("projects");
 let projectList = projectSection.querySelector("ul");

 for (let i = 0; i < repositories.length; i++){
    let project = document.createElement("li");
    project.innerText = repositories[i].name;
    console.log(project);
    projectList.appendChild(project);
 }

 })
 .catch(error => console.error(error))
