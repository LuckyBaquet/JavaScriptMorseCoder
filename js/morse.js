
var morseAlphabet = {
	A: ".- ",
	B: "-... ",
	C: "-.-. ",
	D: "-.. ",
	E: ". ",
	F: "..-. ",
	G: "--. ",
	H: ".... ",
	I: ".. ",
	J: ".--- ",
	K: "-.- ",
	L: ".-.. ",
	M: "-- ",
	N: "-. ",
	O: "--- ",
	P: ".--. ",
	Q: "--.- ",
	R: ".-. ",
	S: "... ",
	T: "- ",
	U: "..- ",
	V: "...- ",
	W: ".-- ",
	X: "-..- ",
	Y: "-.-- ",
	Z: "--.. ",
	one: ".---- ",
	two: "..--- ",
	three: "...-- ",
	four: "....- ",
	five: "..... ",
	six: "-.... ",
	seven: "--... ",
	eight: "---.. ",
	nine: "----. ",
	zero: "----- ",
	period: ".-.-.- ",
	comma: "--..-- ",
	questionMark: "..--.. ",
	apostrophe: ".----. ",
	excamationMark: "-.-.-- ",
	slash: "-..-. ",
	hyphen: "-....- ",
	parentheses: "-.--.- ",
	quotationMark: ".-..-. "

}

var intro = prompt("What do you want to tranlate into Morse Code?");


intro = intro.replace(/\s+/g,"|");


 intro = intro.replace(/\./g, morseAlphabet['period']); //I put the Hyphen and period first
 intro = intro.replace(/\.-\.-\.- /g , "seCreTchaRActEr");
 
 
 
 intro = intro.replace(/\-/g, morseAlphabet['hyphen']); //Because the dam string is getting translated to dots and dashes so the literal dots and dashes need to be translated first
 
 intro = intro.replace(/seCreTchaRActEr/g , morseAlphabet['period']);

intro = intro.replace(/A/gi, morseAlphabet['A']);
intro = intro.replace(/B/gi, morseAlphabet['B']);
intro = intro.replace(/C/gi, morseAlphabet['C']);
intro = intro.replace(/D/gi, morseAlphabet['D']);
intro = intro.replace(/E/gi, morseAlphabet['E']);
intro = intro.replace(/F/gi, morseAlphabet['F']);
intro = intro.replace(/F/gi, morseAlphabet['G']);
intro = intro.replace(/H/gi, morseAlphabet['H']);
intro = intro.replace(/I/gi, morseAlphabet['I']);
intro = intro.replace(/J/gi, morseAlphabet['J']);
intro = intro.replace(/K/gi, morseAlphabet['K']);
intro = intro.replace(/L/gi, morseAlphabet['L']);
intro = intro.replace(/M/gi, morseAlphabet['M']);
intro = intro.replace(/N/gi, morseAlphabet['N']);
intro = intro.replace(/O/gi, morseAlphabet['O']);
intro = intro.replace(/P/ig, morseAlphabet['P']);
intro = intro.replace(/Q/ig, morseAlphabet['Q']);
intro = intro.replace(/R/ig, morseAlphabet['R']);
intro = intro.replace(/S/ig, morseAlphabet['S']);
intro = intro.replace(/T/ig, morseAlphabet['T']);
intro = intro.replace(/U/ig, morseAlphabet['U']);
intro = intro.replace(/V/ig, morseAlphabet['V']);
intro = intro.replace(/W/ig, morseAlphabet['W']);
intro = intro.replace(/X/ig, morseAlphabet['X']);
intro = intro.replace(/Y/ig, morseAlphabet['Y']);
intro = intro.replace(/Z/ig, morseAlphabet['Z']);
intro = intro.replace(/1/g, morseAlphabet['one']);
intro = intro.replace(/2/g, morseAlphabet['two']);
intro = intro.replace(/3/g, morseAlphabet['three']);
intro = intro.replace(/4/g, morseAlphabet['four']);
intro = intro.replace(/5/g, morseAlphabet['five']);
intro = intro.replace(/6/g, morseAlphabet['six']);
intro = intro.replace(/7/g, morseAlphabet['seven']);
intro = intro.replace(/8/g, morseAlphabet['eight']);
intro = intro.replace(/9/g, morseAlphabet['nine']);
intro = intro.replace(/0/g, morseAlphabet['zero']);
intro = intro.replace(/'/g, morseAlphabet['apostrophe']);
intro = intro.replace(/,/g, morseAlphabet['comma']);
intro = intro.replace(/\?/g, morseAlphabet['questionMark']);
intro = intro.replace(/\!/g, morseAlphabet['excamationMark']);
intro = intro.replace(/[\\\/]/g, morseAlphabet['slash']);
intro = intro.replace(/[\(\)]+/g, morseAlphabet['parentheses']);
intro = intro.replace(/["]+/g, morseAlphabet['quotationMark']);

var introNoPipes = intro.replace(/\|/g, " ");
//
console.log(introNoPipes);

document.getElementById('result').innerHTML = intro;





