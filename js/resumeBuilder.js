
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


var skills = ["JS "," CSS "," HTML "," Java "," Bootstrap"];

//about me
var bio = {
  "name" : "MARIA NABRINK",
  "role" : "Web Developer",
  "contacts" : {
    "email" : "maria.nabrink@hotmail.com ",
    "github" : "https://github.com/MariaNabrink ",
    "mobile" : "0707-314998",
    "location" : "Göteborg"
  },
  "picture" : "images/jag.jpg",
  "skills" : skills,
  "display" : ""
};
bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedImage = HTMLbioPic.replace("%data%", bio.picture);

  $("#footerContacts").append(formattedEmail, formattedGithub, formattedMobile, formattedLocation);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").prepend(formattedImage);

  //checks if there is any skills in bio and then prints it out
  if(bio.skills.length > 0){
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skillsChart").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skillsChart").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skillsChart").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skillsChart").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skillsChart").append(formattedSkills);
  }
};


//JSON with educations
var education = {
  "schools": [{
    "major": "Java developer",
    "location": "Göteborg",
    "name": "Teknikhögskolan",
    "degree": "Vocational degree",
    "year": "2013-2015"
  }, {
    "major": "Culture and Communication - Film studies",
    "location": "Halmstad",
    "name": "Högskolan i Halmstad",
    "degree": "Bachelor degree",
    "year": "2010-2013"
  }, {
    "major": "Arts programme - Art and design",
    "location": "Kungsbacka",
    "name": "Aranäsgymnasiet",
    "degree": "High school degree",
    "year": "2003-2006"
  }],
  "onlineCourses": [{
    "major": "Javascript Basics",
    "name": "Udacity",
    "year": "2016",
    "url" : "https://www.udacity.com"
  }, {
    "major": "HTML, CSS, Bootstrap",
    "name": "Udacity",
    "year": "2016",
    "url" : "https://www.udacity.com"
  }, {
    "major": "Computer Science",
    "name": "Udacity",
    "year": "2016",
    "url" : "https://www.udacity.com"
  }, {
    "major": "Product design",
    "name": "Udacity",
    "year": "2016",
    "url" : "https://www.udacity.com"
  },{
    "major": "Intro to jQuery",
    "name": "Udacity",
    "year": "2016",
    "url" : "https://www.udacity.com"
  },{
    "major": "Intro to AJAX",
    "name": "Udacity",
    "year": "2016",
    "url" : "https://www.udacity.com"
  }],
  "display": [{

  }]
}
education.display = function(){
  for(school in education.schools){
    var formattedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    var formattedEducationCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedEducationName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedEducationYear = HTMLschoolDates.replace("%data%", education.schools[school].year);

    var formatted = formattedEducationMajor + formattedEducationCity + formattedEducationYear + formattedEducationName + formattedEducationDegree;

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formatted);
  }

  for(course in education.onlineCourses){
    var formattedOnlineName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].name);
    var formattedOnlineMajor = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].major);
    var formattedOnlineYear = HTMLonlineDates.replace("%data%", education.onlineCourses[course].year);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    var formatted = formattedOnlineMajor + formattedOnlineName + formattedOnlineYear + formattedOnlineUrl;

    $("#online").append(HTMLonlineClasses);
    $(".onlineClass:last").append(formatted);
  }
};


//JSON with works
var work = {
  "jobs":[{
    "title" : "System developer - ",
    "employer" : "Woocode",
    "year" : "2016",
    "location" : "Borås",
    "description" : "Worked as a system developer with c#, Silverlight and SQL server."
  },{
    "title" : "Nursing assistant - ",
    "employer" : "Solängens äldreboende",
    "year" : "2015-2016",
    "location" :"Göteborg",
    "description" : "Worked as nursing assistant at a nursing home with dementia and somatic patients."
  }],
  "display" : [{

  }]
}
work.display = function(){
  for(job in work.jobs){
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkYear = HTMLworkDates.replace("%data%", work.jobs[job].year);
    var formattedWorkCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var formatted = formattedWorkTitle + formattedWorkEmployer + formattedWorkYear + formattedWorkCity + formattedWorkDescription;

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formatted);
  }
};


//JSON with projects
var projects = {
  "project":[{
    "title" : "MyPortfolio",
    "dates" : "2016",
    "description" : "Responsive portfolio site where you can find my good projects. Built with bootstrap, html, css and javascrip.",
    "image" : "images/abstract.jpg"
  },{
    "title" : "Neras Egg",
    "dates" : "2015",
    "description" : "A 2D game made in Unity. You play as Nera the dragon who searches for her egg that the human took.",
    "image" : "images/neras-egg1.png"
  },{
    "title" : "Meteorite Impact Visualizer",
    "dates" : "2015",
    "description" : "Web site where you can see all meteorites crashed on earth. I used Google maps API and NASA's API to locate the meteorites.",
    "image" : "images/meteorite1.png"
  },{
    "title" : "Horror Quiz",
    "dates" : "2014",
    "description" : "Android app I created in School. It's a quiz game with questions about the 80's horror movies.",
    "image" : "images/chucky.jpg"
  },{
    "title" : "MyMovies",
    "dates" : "2014",
    "description" : "A web site where you can log in with the help of Google, and add movies to your list.",
    "image" : "images/caligari.jpg"
  }],
  "display":[{

  }]
}
projects.display = function(){
  for(program in projects.project){
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[program].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[program].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[program].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[program].image);

    var formatted = formattedProjectImage + formattedProjectTitle + formattedProjectDates + formattedProjectDescription;

    $(".project-entry:last").append(formatted);
  }
};


function displayResume(){
  bio.display();
  work.display();
  education.display();
  projects.display();

  //Append Google maps
  $("#mapDiv").append(googleMap);
}

displayResume();
