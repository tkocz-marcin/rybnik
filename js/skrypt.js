function getTarget(e) {
	if(!e) {
		e = window.event;
	}
	return e.target || e.srcElement;
}

function getDistrict(e) {
var district = document.querySelectorAll("path"),
	target = getTarget(e),
	districtId = changeId(target.id);

	return 0;
}
function getDistrictList(e) {
var districtList = document.querySelectorAll("li"),
	list = districtList.length,
	value,
	target = getTarget(e);
	value = target.id;
	districtId = changeId(value);
//console.log(value);
//childNodes[0].nodeValue
	return 0;
}

function changeId(id) {
	var length = id.length,
		newId = "",
		i;

		for(i=1; i < length; i++) {
			newId += id[i];
		}
		showInfo(newId);
		mapsList(newId);
		return 0;
};

function mapsList(id) {
	var idMaps = "d"+id,
		idList = "l"+id,
		idArray = [idMaps, idList];

		changeView(idArray);
		return 0;
}
function changeView(idArray) {
	var idMaps = idArray[0],
		idList = idArray[1],
		districtMaps = document.getElementById(idMaps),
		districtList = document.getElementById(idList);

		districtMaps.classList.toggle("toggleMaps");
		districtList.classList.toggle("toggleList");
}

function showInfo(id) {

}


function District( name, id, population) {
	this.id = id;
	this.name = name;
	this.population = population;
	//console.log(this.name +", "+this.population+"tys");
	this.info = "Nazwa dzielnicy: "+this.name +", Populacja: "+this.population+"tys mieszkańców";
}
function makeDistrict() {
	district1 = new District('BOGUSZOWICE OSIEDLE', d1, 13);
	district2 = new District('BOGUSZOWICE STARE', d2, 7.6);
	district3 = new District('CHWAŁOWICE', d3, 9);
	district4 = new District('CHWAŁĘCICE', d4, 1.6);
	district5 = new District('GOLEJÓW', d5, 2);
	district6 = new District('GOTARTOWICE', d6, 3.3);
	district7 = new District('GRABOWNIA', d7, 0.6);
	district8 = new District('KAMIEŃ', d8, 3.7);
	district9 = new District('KŁOKOCIN', d9, 2.6);
	district10 = new District('LIGOTA I LIGOCKA KUŹNIA', d10, 3.5);
	district11 = new District('MEKSYK', d11, 2);
	district12 = new District('NIEDOBCZYCE', d12, 13.5);
	district13 = new District('NIEWIADOM', d13, 5);
	district14 = new District('NOWINY', d14, 30);
	district15 = new District('ORZEPOWICE', d15, 3.2);
	district16 = new District('PARUSZOWIEC PIASKI', d16, 4.5);
	district17 = new District('POPIELÓW', d17, 3.1);
	district18 = new District('RADZIEJÓW', d18, 2);
	district19 = new District('RYBNICKA KUŹNIA', d19, 4.4);
	district20 = new District('RYBNIK PÓŁNOC', d20, 8);
	district21 = new District('SMOLNA', d21, 8);
	district22 = new District('STODOŁY', d22, 0.6); 
	district23 = new District('ŚRÓDMIEŚCIE', d23, 9);
	district24 = new District('WIELOPOLE', d24, 1.8);
	district25 = new District('ZAMYSŁÓW', d25, 3.2);
	district26 = new District('ZEBRZYDOWICE', d26, 2.7);
	district27 = new District('OCHOJEC', d27, 2);
}


function click() {
	var maps = document.getElementById('svg2'),
		list1 = document.getElementById('first'),
		list2 = document.getElementById('second');
	maps.addEventListener('click', function(e) {
		getDistrict(e);
	}, false);
	list1.addEventListener('click', function(e) {
		getDistrictList(e);
	}, false);
	list2.addEventListener('click', function(e) {
		getDistrictList(e);
	}, false);	
}
function hover() {
	var maps = document.getElementById('svg2'),
		list1 = document.getElementById('first'),
		list2 = document.getElementById('second');
	maps.addEventListener('mouseover', function(e) {
		getDistrict(e);
	}, false);
	list1.addEventListener('mouseover', function(e) {
		getDistrictList(e);
	}, false);
	list2.addEventListener('mouseover', function(e) {
		getDistrictList(e);
	}, false);	
	maps.addEventListener('mouseout', function(e) {
		getDistrict(e);
	}, false);
	list1.addEventListener('mouseout', function(e) {
		getDistrictList(e);
	}, false);
	list2.addEventListener('mouseout', function(e) {
		getDistrictList(e);
	}, false);	
}



window.onload = function() {
	click();
	hover();
	makeDistrict();
}