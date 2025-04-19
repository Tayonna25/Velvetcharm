document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for contacting LinkPilot! We will get back to you soon.');
    this.reset();
  });
  