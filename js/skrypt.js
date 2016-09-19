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