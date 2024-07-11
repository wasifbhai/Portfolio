
(function(){
    emailjs.init({
      publicKey: "7SjfHVne7W5VjYaj0",
    });
 })();


 function mail(event){
    event.preventDefault()
    let templateParms = {
    first_name:document.getElementById("first-name").value,
    last_name:document.getElementById("last-name").value,
    email:document.getElementById("email").value,
    phone:document.getElementById("phone").value,
    message:document.getElementById("message").value,
    }
  

    emailjs.send('service_2wcafx1', 'template_7dwai4y' ,templateParms).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
 }

 

document.getElementById("button").addEventListener('click', (event) => mail(event))

 
 setTimeout(function() {
    let loadingContainer = document.getElementById('loadingContainer');
    loadingContainer.style.display = 'none'; 

    let contentContainer = document.getElementById('contentContainer');
    contentContainer.style.display = 'block'; 
  }, 3000);

  document.addEventListener("DOMContentLoaded", function() {
    let skills = document.querySelectorAll(".skill-bar");
    skills.forEach(function(skill) {
        let width = skill.style.width;
        skill.style.width = "0";
        setTimeout(function() {
            skill.style.width = width;
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let skills = document.querySelectorAll(".skill-bar");

    function animateSkill(skill) {
        let percent = parseInt(skill.getAttribute("data-percent"));
        let progress = skill.querySelector(".bar-progress");
        let percentage = skill.querySelector(".percentage");
        let width = 0;
        let interval = setInterval(function() {
            if (width >= percent) {
                clearInterval(interval);
            } else {
                width++;
                progress.style.width = width + "%";
                percentage.textContent = width + "%";
            }
        }, 20);
    }

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        skills.forEach(function(skill) {
            if (isElementInViewport(skill) && !skill.classList.contains('animated')) {
                animateSkill(skill);
                skill.classList.add('animated'); // Mark this skill as animated
            }
        });
    }

    // Delay the animation check by 4 seconds
    setTimeout(function() {
        checkVisibility();
        // Check visibility on scroll after the initial delay
        window.addEventListener('scroll', checkVisibility);
    }, 4000);
});
