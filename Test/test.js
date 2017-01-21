function a() {

  function b() {
    console.log(myVar);
  }

  //var myVar = 1;
  b();
}

var myVar = 2;
a();

function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms){}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
