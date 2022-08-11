// Contact Page JS
window.onload = () => {
  const submit =  document.getElementById("submit");
  if(submit){
    submit.addEventListener("click", submitForm);
  }
}

function submitForm(e) {
  e.preventDefault();
  let user = document.getElementById('fname').value;
  if (user.length == 0){
    alert('Please, enter your name');
    return;
  };
  let email = document.getElementById('email').value;
  if (email == ''){
    alert('Please, enter your email')
  };
  let phone = document.getElementById('tel').value;
  if (phone.length >= 1 && phone.length < 9){
    alert('Not enough numbers');
    return;
  };
  if (submitForm == ''){
    alert('Please fill the formulary');
  } else {
    alert(`Thanks, ${user} for getting in touch with us, we'll contact you as soon as possible!!`);
  };
};

// Subscribe JS
function subscribe(e){
  e.preventDefault();
  let mail = document.getElementById('email').value;
  if (mail == ''){
    alert('Please, introduce your email');
    return;
  } else {
    alert('Thanks for contact us');
  }
}


// Home Page to Project Page JS
// document.getElementsByClassName("card").addEventListener("click", project)
// function project(){
  
//   var params = new Proxy (new URLSearchParams(window.location.href=`127.0.0.1:5500/project.html?title=${title}&subtitle=${subtitle}`), {
//     get: (searchParams, prop) => searchParams.get(prop)
//   })
//   const projectTitle = params.title;
//   const projectSubtitle = params.subtitle;
// }
