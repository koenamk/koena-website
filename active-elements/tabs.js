// tabs.js
document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      tabs.forEach(tab => tab.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  tabs[0].classList.add('active'); // Set the first tab as active by default
});
