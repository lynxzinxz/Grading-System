
const a = document.getElementById("g1");
const b = document.getElementById("g2");
const c = document.getElementById("g3");
const d = document.getElementById("g4");
const res = document.getElementById("ave");
const g = document.getElementById("letg");
const m = document.getElementById("message");

const inputs = [a, b, c, d];

inputs.forEach(input => {
  input.addEventListener('input', calculateAverage);
});


function calculateAverage() {
  const average = (parseFloat(a.value) + parseFloat(b.value) + parseFloat(c.value) + parseFloat(d.value)) / 4;
  res.value = average.toFixed(2);
  letterGrade();
}

function letterGrade() {
  const ave = parseFloat(res.value);
 let grade; message;
	
	if (ave >= 95) {
	grade = "A";
	message = "OUTSTANDING"
  } else if (ave >= 90 && ave < 95) {
	grade = "A-";
	message = "VERY GOOD"
  } else if (ave >= 85 && ave < 90) {
	grade = "B+";
	message = "GOOD"
  } else if (ave >= 80 && ave < 85) {
	grade = "B";
	message = "SATISFACTION"
  } else if (ave >= 75 && ave < 80) {
	grade = "B-";
	message = "SATISFACTION"
  } else if (ave < 75){
	grade = "C";
	message = "PASS"
  }
  else { 
  grade = "FAIL"
	message = "FAIL";
  }

  g.value = grade;
  m.value = message;
}

