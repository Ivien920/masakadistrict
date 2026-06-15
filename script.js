// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Sidebar Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');

if(menuBtn){
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
}

if(overlay){
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
}

// Close sidebar when clicking a link
const sidebarLinks = document.querySelectorAll('.sidebar a:not(.dropdown-btn)');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Dropdown Menu Toggle
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(e){
        e.preventDefault();
        this.parentElement.classList.toggle('active');
    });
});


navigator.geolocation.getCurrentPosition(position => {

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log(lat, lng);

});
const apiKey = "8828c9bf55e2b91ce92547eacc60965a";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=Masaka,UG&units=metric&appid=${apiKey}`)
.then(response => response.json())
.then(data => {

    console.log(data);

    document.getElementById("city").textContent =
        data.name;

    document.getElementById("temp").textContent =
        `Temperature: ${data.main.temp}°C`;

    document.getElementById("description").textContent =
        `Condition: ${data.weather[0].description}`;

})
.catch(error => {
    console.error("Weather Error:", error);
});