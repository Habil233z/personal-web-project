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

const dummyData = [
        {
         id:2,
         name: "placeholder 1",
         description: "wadhawjwjadhjkawhjdhkawjhdkjhwashduiwhaduaw",
        img: "../src/Img_1.jpg"
        },
         {
        id:3,
        name: "placeholder 2",
        description: "awdawudhauiwhduiawhuidhuawduiawiudhjiawjdioawiodjhioawhdioawh",
        img: "../src/Img_2.jpg"
  }
]

  console.log(projectsList.length)
const projects = localStorage.getItem('projects');
    if (projects){
        projectsList = JSON.parse(projects);
        projectsList.push(...dummyData)
    }


console.log(projectsList)


    function renderProjects() {
        if (projectsList.length !== 0) {
        const projectsContainer = document.getElementById("containerArea")

        let projectsHTML = "";
        
        for (let i=0; i < projectsList.length; i++) {
            const project = projectsList[i];
            
            let projectOverview = project.description
            let intro = projectOverview.slice(0, 100)
            console.log(intro)

            projectsHTML += `
            <div class="card" id="card" style="width: 18rem;">
                <img class="card-img-top" src="${project.img}" alt="${project.img}">
                <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${intro}</p>
                    <button id="deleteButton" >Delete</button>
                    <button id="detailButton">Detail</button>
                        <div class="detail" id="detail">
                            <div class="detailContainer">
                            <img class="imgDetail" src="${project.img}" alt="${project.img}">
                            <p>${project.description}</p>
                            <button id="closeDetail">Close</button>
                            </div>
                        </div>
                    </div>
                    
                </div>`
                
        }projectsContainer.innerHTML = projectsHTML
    }else {
        console.log("No Data")
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

    projectsList.push(newProject)
    localStorage.setItem("projects", JSON.stringify(projectsList));
    console.log(newProject)
    renderProjects();
})

    let i = 0

    document.getElementById("deleteButton").addEventListener("click", function() {
    projectsList.splice(i, 2);
    localStorage.setItem('projects', JSON.stringify(projectsList));
    renderProjects(); 
    });


    const detaiButton = document.getElementById("detailButton")
    const closeDetail = document.getElementById("closeDetail")
    const detail = document.getElementById("detail")

    detaiButton.addEventListener("click", () => {
    detail.classList.add("open");
    });

    closeDetail.addEventListener("click", () => {
    detail.classList.remove("open")
    })