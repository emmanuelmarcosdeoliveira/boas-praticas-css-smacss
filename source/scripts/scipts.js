const accordions = document.querySelectorAll(".accordion-header");
for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function(evento) {
    evento.target.parentNode.classList.toggle('is-open');
      });
}
