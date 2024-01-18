
const coursesApi =  'http://localhost:3000/courses';


function start (){

};

start();


function getCourses(callback){
    fetch(coursesApi)
    .then(function(response){
         return  response.json()
    })
    .then(callback);
}

function renderCourse(courses){
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls = courses.map(course=>{
        return
         `  <li>
               <h4>${course.name}</h4>
               <p>${course.description}</p>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('';)
}

