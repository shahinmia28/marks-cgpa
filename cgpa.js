// CGPA calculator program
var bangla = document.querySelector('#bangla-input');
var english = document.querySelector('#english-input');
var math = document.querySelector('#math-input');
var science = document.querySelector('#science-input');
var btn = document.querySelector('#input-btn');

btn.addEventListener('click' , function(e){
e.preventDefault()

  document.querySelector('#bangla-mark').innerHTML = bangla.value;
  document.querySelector('#english-mark').innerHTML = english.value;
  document.querySelector('#math-mark').innerHTML = math.value;
  document.querySelector('#science-mark').innerHTML = science.value ; 
  var average = ( parseFloat(bangla.value)  + parseFloat(english.value) + parseFloat(math.value) + parseFloat(science.value))/4;
  document.querySelector('#average-mark').innerHTML= average;

  // CGPA for bangla
  if(bangla.value>100)
  document.querySelector('#bangla-cgpa').innerHTML= 'Wrong';
  else if (bangla.value>=80)
  document.querySelector('#bangla-cgpa').innerHTML= 'A+';
  else if (bangla.value>=70)
  document.querySelector('#bangla-cgpa').innerHTML= 'A';
  else if (bangla.value>=60)
  document.querySelector('#bangla-cgpa').innerHTML= 'A-';
  else if (bangla.value>=50)
  document.querySelector('#bangla-cgpa').innerHTML= 'B';
  else if (bangla.value>=40)
  document.querySelector('#bangla-cgpa').innerHTML= 'C';
  else if (bangla.value>=33)
  document.querySelector('#bangla-cgpa').innerHTML= 'D';
  else
  document.querySelector('#bangla-cgpa').innerHTML= 'Fail';

  // CGPA for english
  if(english.value>100)
  document.querySelector('#english-cgpa').innerHTML= 'Wrong';
  else if (english.value>=80)
  document.querySelector('#english-cgpa').innerHTML= 'A+';
  else if (english.value>=70)
  document.querySelector('#english-cgpa').innerHTML= 'A';
  else if (english.value>=60)
  document.querySelector('#english-cgpa').innerHTML= 'A-';
  else if (english.value>=50)
  document.querySelector('#english-cgpa').innerHTML= 'B';
  else if (english.value>=40)
  document.querySelector('#english-cgpa').innerHTML= 'C';
  else if (english.value>=33)
  document.querySelector('#english-cgpa').innerHTML= 'D';
  else
  document.querySelector('#english-cgpa').innerHTML= 'Fail';

  // CGPA for math
  if(math.value>100)
  document.querySelector('#math-cgpa').innerHTML= 'Wrong';
  else if (math.value>=80)
  document.querySelector('#math-cgpa').innerHTML= 'A+';
  else if (math.value>=70)
  document.querySelector('#math-cgpa').innerHTML= 'A';
  else if (math.value>=60)
  document.querySelector('#math-cgpa').innerHTML= 'A-';
  else if (math.value>=50)
  document.querySelector('#math-cgpa').innerHTML= 'B';
  else if (math.value>=40)
  document.querySelector('#math-cgpa').innerHTML= 'C';
  else if (math.value>=33)
  document.querySelector('#math-cgpa').innerHTML= 'D';
  else
  document.querySelector('#math-cgpa').innerHTML= 'Fail';

  // CGPA for science
  if(science.value>100)
  document.querySelector('#science-cgpa').innerHTML= 'Wrong';
  else if (science.value>=80)
  document.querySelector('#science-cgpa').innerHTML= 'A+';
  else if (science.value>=70)
  document.querySelector('#science-cgpa').innerHTML= 'A';
  else if (science.value>=60)
  document.querySelector('#science-cgpa').innerHTML= 'A-';
  else if (science.value>=50)
  document.querySelector('#science-cgpa').innerHTML= 'B';
  else if (science.value>=40)
  document.querySelector('#science-cgpa').innerHTML= 'C';
  else if (science.value>=33)
  document.querySelector('#science-cgpa').innerHTML= 'D';
  else
  document.querySelector('#science-cgpa').innerHTML= 'Fail';

  // Average CGPA
  if(average>100)
  document.querySelector('#average-cgpa').innerHTML= 'Wrong';
  else if (average>=80)
  document.querySelector('#average-cgpa').innerHTML= 'A+';
  else if (average>=70)
  document.querySelector('#average-cgpa').innerHTML= 'A';
  else if (average>=60)
  document.querySelector('#average-cgpa').innerHTML= 'A-';
  else if (average>=50)
  document.querySelector('#average-cgpa').innerHTML= 'B';
  else if (average>=40)
  document.querySelector('#average-cgpa').innerHTML= 'C';
  else if (average>=33)
  document.querySelector('#average-cgpa').innerHTML= 'D';
  else
  document.querySelector('#average-cgpa').innerHTML= 'Fail';
});











