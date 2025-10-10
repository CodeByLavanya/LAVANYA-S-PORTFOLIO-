const nav_a = document.querySelectorAll('nav a');


nav_a.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        // const targetSection = document.getElementById(targetId);

        targetId.scrollIntoView({ behavior: 'smooth' });

        // window.scrollTo({
        //     top: targetSection.offsetTop , 
        //     behavior: 'smooth'
        // });
    });
});

document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".nav_right ul li a").forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

function toggleMenu() {
    var menu = document.getElementById("menu-list");
    menu.classList.toggle("show");
}

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // stop the default submission

  const form = event.target;
  const formData = new FormData(form);
  const Time_out = setTimeout(() => {
          document.getElementById("successMsg").textContent = "";
        }, 6000);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById("successMsg").textContent = "✅ Message sent successfully!";
        form.reset(); // clear fields
        Time_out;
        
      } else {
        document.getElementById("successMsg").textContent = "❌ Failed to send. Please try again.";
      }
    })
    .catch(error => {
      document.getElementById("successMsg").textContent = "⚠️ Network error. Try again later.";
      console.error(error);
    });
});


// fade nav list

const nav = document.querySelector('.nav_bar');

const handleHover = function (e) {
  if (e.target.classList.contains('nav1')) {
    const link = e.target;
    const siblings = link.closest('.nav_bar').querySelectorAll('.nav1');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));




const slider = document.querySelector('.pro_col');
document.querySelector('.slider__btn--right').addEventListener('click', () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});
document.querySelector('.slider__btn--left').addEventListener('click', () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});
