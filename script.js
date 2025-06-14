// script.js

// Exemple simple : confirmation à l'envoi du formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nom = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs avant d'envoyer le message.");
        return;
      }

      // Simple validation email basique
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }

      // Ici tu pourrais envoyer les données via AJAX, ou simplement afficher un message
      alert(`Merci ${nom}, votre message a bien été envoyé !`);

      // Reset formulaire
      form.reset();
    });
  }
});
