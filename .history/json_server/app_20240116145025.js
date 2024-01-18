var listCoursesBlock = document.querySelector("#list-courses");
const coursesApi =  'http://localhost:3000/courses';


function start (){

};

start();


function getCourses(callback){
    fetch(coursesApi)
    .then(function(response){
          response.json
    })
    .then(callback);
}