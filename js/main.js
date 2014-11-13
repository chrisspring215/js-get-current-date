function init() {
	var currentdate = Date();

	var dateLength = currentdate.length;

	var dateSplit = currentdate.split(" ");

	if (dateSplit[1] === 'Jan') {
		dateSplit[1] = "01";
		dateCombiner();
	} else if (dateSplit[1] === 'Feb') {
		dateSplit[1] = "02";
		dateCombiner();
	} else if (dateSplit[1] === 'Mar') {
		dateSplit[1] = "03";
		dateCombiner();
	} else if (dateSplit[1] === 'Apr') {
		dateSplit[1] = "04";
		dateCombiner();
	} else if (dateSplit[1] === 'May') {
		dateSplit[1] = "05";
		dateCombiner();
	} else if (dateSplit[1] === 'Jun') {
		dateSplit[1] = "06";
		dateCombiner();
	} else if (dateSplit[1] === 'Jul') {
		dateSplit[1] = "07";
		dateCombiner();
	} else if (dateSplit[1] === 'Aug') {
		dateSplit[1] = "08";
		dateCombiner();
	} else if (dateSplit[1] === 'Sep') {
		dateSplit[1] = "09";
		dateCombiner();
	} else if (dateSplit[1] === 'Oct') {
		dateSplit[1] = "10";
		dateCombiner();
	} else if (dateSplit[1] === 'Nov') {
		dateSplit[1] = "11";
		dateCombiner();
	} else if (dateSplit[1] === 'Dec') {
		dateSplit[1] = "12";
		dateCombiner();
	} else {
		alert("errors");
	};
	
	function dateCombiner() {

		document.getElementById("dateTime").innerHTML = dateSplit[1] + "/" + dateSplit[2] + "/" + dateSplit[3];
	}

}