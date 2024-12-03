// Assuming you're using vanilla JavaScript or a simple framework
fetch('tabs.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('tabs-container').innerHTML = data;
  });
