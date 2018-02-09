var pr = 0;
var nr = 0;
var question = 0;
var statement = document.getElementById('statement');
var title = document.getElementById('title');
var next = document.getElementById('skip');
var back = document.getElementById('back');

//console.dir(title);
choices = []

title.innerHTML = subjects[nr].title;
statement.innerHTML = subjects[nr].statement;



var resultaat = function(event){
	resultaat = "";
	title.innerHTML = "Resultaat";

	console.log(results);

	function compare(a,b) {
	  return b.pt - a.pt;
	}

	


	showResults();

	keysSorted = results.sort(compare);
	console.log(keysSorted);

	for (i = 0; i < 20; i++) { 
	    resultaat += results[i].name + " : " + results[i].pt + "<br>";
	}
	statement.innerHTML = resultaat;
}


var next = function(event){
	nr++;
	choices.push("skip")
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	parties.innerHTML = subjects[nr].parties;
	//console.log(choices,nr)
}

var prev = function(event){
	nr--;
	choices.pop()
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	parties.innerHTML = subjects[nr].parties;
	//console.log(choices,nr)
}
var eens = function(event){
	//saveChoice("pro");

	nr++;

	choices.push("pro")
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	parties.innerHTML = subjects[nr].parties;
	//console.log(choices,nr)
}
var even = function(event){
	//saveChoice("ambivalent");
	nr++;

	choices.push("ambivalent")
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	parties.innerHTML = subjects[nr].parties;
	//console.log(choices,nr)
}

var oneens = function(event){
	//saveChoice("contra");
	nr++;

	choices.push("contra")
	title.innerHTML = subjects[nr].title;
	statement.innerHTML = subjects[nr].statement;
	parties.innerHTML = subjects[nr].parties;
	//console.log(choices,nr)

}
resultaat1.onclick = resultaat;
skip.onclick = next;
back.onclick = prev;
weleens.onclick = eens;
gelijk_aan.onclick = even;
nieteens.onclick = oneens;
var nr = Math.min(Math.max(parseInt(nr), 0), 30);
//console.log(nr)


var groupname = subjects[nr].parties[pr].position;
//console.log(groupname)

// function match(position) {}{
// 	 name:vvd;
// 	 position: ;
// 	 matching++;
// }

parties.innerHTML = subjects[nr].parties.position;

// function saveChoice(choice) {
// 	//loop door de parties heen van uit de huidige subject
// 	subjects[nr].parties.foreach (function) {
// 			if (parties.position == choices) {
// 				group++;
// 			}
// 	}
// 		if (party.pos == choices)
// 		//	verhoog match met huidige party voor huidige subject met 1
// 	}

// }


// document.getElementById("demo1").innerHTML = saveChoice();
var results = [
{	
	name:'PVV',	
	pt:0 
},
{	
	name:'VVD',	
	pt:0 
},
{
	name:'CDA',
	pt:0
},
{
	name:'D66',
	pt:0
},
{
	name:'GroenLinks',
	pt:0
},
{
	name:'SP',
	pt:0
},
{
	name:'PvdA',
	pt:0
},
{
	name:'ChristenUnie',
	pt:0
},
{
	name:'Partij voor de Dieren',
	pt:0
},
{
	name:'SGP',
	pt:0
},
{
	name:'DENK',
	pt:0
},
{
	name:'Forum voor Democratie',
	pt:0
},
{
	name:'Lokaal in de kamer',
	pt:0
},
{
	name:'OndernemersPartij',
	pt:0
},
{
	name:'VNL',
	pt:0
},
{
	name:'Nieuwe Wegen',
	pt:0
},
{
	name:'De Burger Beweging',
	pt:0
},
{
	name:'Piratenpartij',
	pt:0
},
{
	name:'Artikel 1',
	pt:0
},
{
	name:'Libertarische Partij',
	pt:0
}
];


function showResults() {

	choices.forEach(function(choice, index) {

		//console.log(subjects[index]);
	
		subjects[index].parties.forEach(function(party, index) {

			results.forEach(function(result) {

				if (party.name == result.name) {
					//console.log(party);
					//console.log(party.position);

					if (party.position == choice) {
						//console.log(party.position);
						//console.log(choice);
						result.pt++;
					}
				}
			});
		});
	});

	//console.log(results);
}



subjects[nr].parties.forEach(function saveChoice(partij) {
	
	//console.log(partij.name)
 	//console.log(partij.position);
 	return partij.position;
});

function logArrayElements(element, index, array) {
  //console.log('a[' + index + '] = ' + element);
}
/*// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9





var matches = ['pro','ambivalent','contra'];
if (~ matches.indexOf(subjects[nr].parties.position))*/





//scores.indexof

// function Add_eens(){
//  nr = 0 ; nr < 3 ; nr++;
////  	console.log(subjects[nr].title);
////  	console.log(subjects[nr].statement);
// document.getElementById('title').innerHTML= subjects[nr].title;
// document.getElementById('statement').innerHTML= subjects[nr].statement;
// }




// for  (i=0; i < 3; i++){
//// 	console.log(subjects[i].title);
//// 	console.log(subjects[i].statement);
// document.getElementById('title').innerHTML= subjects[i].title;
// document.getElementById('statement').innerHTML= subjects[i].statement;
// }
//  var nr = 0;
