function name() {
	var image = faker.fake("<img src=\"{{image.avatar}}\">");
	document.getElementById('image').innerHTML = image;
	
	var name = faker.fake("{{name.firstName}}" + " " + "{{name.lastName}}");
	document.getElementById('name').innerHTML = name;
	
	var tweeter = "@" + name;
	
	var lower = tweeter.toLowerCase().replace(" ","");
	document.getElementById('tweeter').innerHTML = lower;
	
	var about = faker.fake("{{lorem.paragraph}}");
	document.getElementById('about').innerHTML = about;
	
	var location = faker.fake("{{address.city}}" + ", " + "{{address.stateAbbr}}");
	document.getElementById('location').innerHTML = location;
	
	var wwwsite = faker.fake("{{internet.domainName}}");
	if (wwwsite.length > '10') {
		document.getElementById('wwwsite').innerHTML = wwwsite.link();
	}
	/*
	wcześniej miałem napisane w ten sposób:

	var wwwsite = faker.fake("{{internet.domainName}}");
	if (wwwsite.lenght > 10) {
		document.getElementById('wwwsite').innerHTML = wwwsite.link;
	}
	
	- poprawiłem literówkę w .length (te literówki mnie wykończą)
	- w warunku 10 dałem w ''
	- w wyniku po .link dodałem ()

	*/
	
	var month = "Joined" + " " + faker.fake("{{date.month}}");
	document.getElementById('birthdate').innerHTML = month;
}
name();




