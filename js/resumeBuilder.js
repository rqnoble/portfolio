
var bio = {
	"name" : "Robb Noble",
	"role" : "iRole",
	"contacts": {
		"mobile" : "865.809.5555",
		"email" : "fry@planetexpress.com",
		"github" : "pjfry",
		"twitter" : "@pjfry",
		"location" : "New York, NY"
	},
	"welcomeMessage" : "Hi there! Welcome!",
	"skills" : [
	  "short", "bipedal", "upright", "thumbs"
	],
	 "bioPic" : "images/fry.jpg",
	"display":function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedHTMLmessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedHTMLmobile + formattedHTMLemail + formattedHTMLgithub + formattedHTMLtwitter + formattedHTMLlocation);
		$("#footerContacts").append(formattedHTMLmobile + formattedHTMLemail + formattedHTMLgithub + formattedHTMLtwitter + formattedHTMLlocation);
		$("#header").append(formattedHTMLbioPic);
		$("#header").append(formattedHTMLmessage);
		if( bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			var i = 0;
			for (item in bio.skills){
				var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[item]);
				$("#header").append(formattedHTMLskills);
				i = i + 1;
			}
		}
		
	}
};

var work = {
	"jobs" : [
		{
		  "position" : "Techy",
		  "employer" : "A Tech Town",
		  "years" : "2012 - Present",
          "location" : "Redmond, WA",
		  "description" : "I did so much stuff you won't even believe it.  I installed servers. I upgraded software.  I wrote some code. And then..."
		},
		{
		  "position" : "Tech E",
		  "employer" : "B Tech place",
		  "years" : "2008 - 2012",
          "location" : "Summerville, SC",
		  "description" : "I did some stuff here like automate work, review code, correct it administer servers..."
		}
	],
	"display" : function(){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
			var formattedWorkYears = HTMLworkDates.replace("%data%", work.jobs[job].years);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkYears + formattedWorkLocation + formattedWorkDescription);
		}
	}
}


var education = {
	"schools":[
		{
		 "name" : "Tennessee",
		 "location" : "Knoxville, TN",
		 "degree" : ["Comp Sci"],		
		 "dates" : "2007",
		 "major" : "Computer Science"
		},
		{
		 "name" : "CSCC",
		 "location" : "Cleveland, TN",
		 "degree" : ["Comp Sci"],		
		 "dates" : "1999",
		 "major" : "Computer Science"		 
		},
	],
	"display":function(){
		for( index in education.schools ){
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name );
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree );
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].dates );
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location );
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major );
			$(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
		}
	}
}

var projects = {
	"project":[
		{
		"name" : "Deliver Pizzas",
		"dates" : "Jan '11 - Dec '13",
		"description" : "Fell in love with a dog.",
		"image" : "images/pizza.jpg"
		},
		{
		"name" : "Delivery Exotic Packages",
		"dates" : "Jan '13 - Future",
		"description" : "Feel in love with Captain.",
		"image" : "images/planetexpress.jpg"
		},
	],
	"display":function(){
		for( index in projects.project ){
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[index].name);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[index].description);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.project[index].dates);
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[index].image + "\" heigth=\"250\" width=\"250\"");
			$(".project-entry:last").append(formattedTitle + formattedDescription + formattedDates + formattedImage);
		}
	}
}






function inName(name){
	
	console.log("NAME: " + name);
	if(name === ""){ name = bio.name };
	var newName = name.trim().toUpperCase();
	var names = newName.split(" ");
	names[0] = names[0].slice(0,1) + names[0].slice(1).toLowerCase();
    newName = names[0] + " " + names[1];
	return newName;
}

$(document).click(function(loc) {
  // your code goes here
  //var e = jQuery.Event( "click" );
  logClicks(loc.pageX, loc.pageY);
});



$("#main").append(internationalizeButton);
bio.display();
projects.display();
education.display();
work.display();
$("#mapDiv").append(googleMap);