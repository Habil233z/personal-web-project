function back() {
    window.location.href = "../index.html"
}

// const projects = [
//     {
//         id:1,
//         name: "placeholder 1",
//         description: "wadhawjwjadhjkawhjdhkawjhdkjhwashduiwhaduaw",
//         img: "../src/Img_1.jpg"
//     },
//     {
//         id:2,
//         name: "placeholder 2",
//         description: "awdawudhauiwhduiawhuidhuawduiawiudhjiawjdioawiodjhioawhdioawh",
//         img: "../src/Img_2.jpg"
//     },
// ];
let projectsList = []

for (let i=0; i < localStorage.length;i++) {
    const projects = localStorage.getItem(`projects`);
    if (projects){
        projectsList = JSON.parse(projects);
    }
}

console.log(localStorage.length)

function renderProjects() {
    const projectsContainer = document.getElementById("containerArea")

    let projectsHTML = "";
    const projects = localStorage.getItem("projects")
        if (projectsList.length === 0) {
            console.log("No data")
            projectsContainer.innerHTML = projectsHTML
        } else {
        for (let i=0; i < projectsList.length; i++) {
            
            const project = projectsList[i];

            projectsHTML += `
            <div class="card" id="card" style="width: 18rem;">
                <img class="card-img-top" src="${project.img}" alt="${project.img}">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <div class="introContainer">
                        <p class="card-text">${project.description}</p>
                    </div>
                    <button onclick="deleteProject(${i})" >Delete</button>
                    <button onclick="projectDetail(${i})">Detail</button>
                        <div class="detail" id="detail${i}">
                            <div class="detailContainer">
                            <img class="imgDetail" src="${project.img}" alt="${project.img}">
                            <p>${project.description}</p>
                            <button onclick="closeDetail(${i})">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`
                
        }projectsContainer.innerHTML = projectsHTML
    }}
    renderProjects()

let base64String = "";

        function imageUploaded() {
            let file = document.querySelector(
                'input[type=file]')['files'][0];

            let reader = new FileReader();

            reader.onload = function () {
                base64String = reader.result

                imageBase64Stringsep = base64String;

                console.log(base64String);
            }
            reader.readAsDataURL(file);
        }
    
const form = document.getElementById("myProjectForm")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("projectName").value;
    const description = document.getElementById("projectDescription").value;

    const newProject ={
        id: projectsList.length +1,
        name: name,
        description: description,
        img: base64String
    }

    let index = projectsList.length
    projectsList.push(newProject)
    localStorage.setItem(`projects`, JSON.stringify(projectsList));
    console.log(newProject)
    console.log(projectsList)
    renderProjects();
})

function deleteProject(index) {
    projectsList.splice(index, 1);
    localStorage.setItem(`projects`, JSON.stringify(projectsList));
    console.log("delete index" + index)
    renderProjects()
}

function projectDetail(index) {
    const pressed = document.getElementById(`detail${index}`)
    pressed.classList.add("open")
}

function closeDetail(index) {
    const pressed = document.getElementById(`detail${index}`)
    pressed.classList.remove("open")
}

function clearAll() {
    localStorage.clear();
    projectsList = []
    renderProjects()
}