const button = document.querySelector("#clickme"); // Ensure an element with ID 'clickme' exists in your HTML

button.onclick = function() {
  console.log("clickme");
};

const scream = () => {
  console.log('Donst touch me');
};
button.onmouseover = function() {
  console.log("Don't touch me");
};

const eventbtn = document.querySelector("#eventbtn"); // Ensure an element with ID 'eventbtn' exists in your HTML
eventbtn.addEventListener('click', function() {
  alert(" clicked!");
});

function stepSatu ( ){
  console.log('step satu');
}

function stepDua ( )
  {
  console.log('step dua');
  }

  eventbtn.onclick = stepSatu;
  