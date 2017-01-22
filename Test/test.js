var fullname ='John Doe';
var obj = {
  fullname:'Colin Ihrig',
  prop:{
    fullname:'Aurelio De Rosa',
    getFullname:function(){
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
console.log(test.call(obj.prop));

/*
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
*/
