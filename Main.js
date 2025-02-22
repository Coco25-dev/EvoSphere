// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
  var body = document.body;
  if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      this.textContent = '🌙 Theme';
      this.style= "font-weight: bold";
  } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      this.textContent = '☀️  Theme';
      this.style= "font-weight: bold";
  }
});
// Scroll to top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  


// Fonction pour afficher/masquer le menu
function toggleMenu() {
    document.getElementById("menu-content").classList.toggle("show");
}

// Fonction pour changer la langue et rediriger vers la bonne page
function changeLanguage(lang) {
    let newPage = "";

    switch (lang) {
        case "fr":
            newPage = "index-fr.html";
            break;
        case "en":
            newPage = "index-en.html";
            break;
        case "it":
            newPage = "index-it.html";
            break;
        case "es":
            newPage = "index-es.html";
            break;
        case "fr":
            newPage = "index-fr.html";
            break;
    }

    window.location.href = newPage; // Redirige vers la page choisie
}

// Fonction pour soumettre le QCM et afficher le résultat

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("qcm-form");
    const submitButton = document.querySelector("submit-btn");
    const resultDiv = document.getElementById("result");

    const answers = {
        q1: 'b', q2: 'b', q3: 'b', q4: 'b', q5: 'b',
        q6: 'b', q7: 'b', q8: 'b', q9: 'b', q10: 'b'
    };
    
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        let score = 0;
        
        for (let question in answers) {
            const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption) {
                let selectedLabel = document.querySelector(`label[for='${selectedOption.id}']`);
                
                if (selectedOption.value === answers[question]) {
                    score++;
                    selectedLabel.style.backgroundColor = "#4CAF50"; // Vert pour bonne réponse
                    selectedLabel.style.color = "white";
                } else {
                    selectedLabel.style.backgroundColor = "#FF6B6B"; // Rouge pour mauvaise réponse
                    selectedLabel.style.color = "white";
                    
                    let correctOption = document.querySelector(`input[name='${question}'][value='${answers[question]}']`);
                    let correctLabel = document.querySelector(`label[for='${correctOption.id}']`);
                    correctLabel.style.backgroundColor = "#4CAF50";
                    correctLabel.style.color = "white";
                }
            }
        }
        
        resultDiv.innerHTML = `Vous avez ${score} / 10 bonnes réponses.`;
    });
});

function submitQCM() {
    const answers = {
        q1: 'b', // Réponse correcte à la question 1
        q2: 'b', // Réponse correcte à la question 2
        q3: 'b', // Réponse correcte à la question 3
        q4: 'b', // Réponse correcte à la question 4
        q5: 'b', // Réponse correcte à la question 5
        q6: 'b', // Réponse correcte à la question 6
        q7: 'b', // Réponse correcte à la question 7
        q8: 'b', // Réponse correcte à la question 8
        q9: 'b', // Réponse correcte à la question 9
        q10: 'b', // Réponse correcte à la question 10
    };
    
    let score = 0; // Initialisation du score
    const form = document.getElementById('qcm-form'); // Récupération du formulaire
    
    // Boucle pour vérifier les réponses de chaque question
    for (let question in answers) {
        // Vérification de la réponse sélectionnée par l'utilisateur
        const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++; // Si la réponse est correcte, on incrémente le score
        }
    }
    
    // Affichage du résultat
    document.getElementById('result').innerHTML = `Vous avez ${score} / 10 bonnes réponses.`; // Affiche le score final
}

// buton burger mobile
function toggleMobileMenu() {
    document.querySelector(".burger-menu").classList.toggle("open");
    document.querySelector(".mobile-nav").classList.toggle("active");
}

function toggleLanguageMenu() {
    document.getElementById("menu-content").classList.toggle("show");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
  


setTimeout(() => {
    document.getElementById("myBlock").style.visibility = "hidden";
  }, 10000); // Disparaît après 3 secondes (3000 ms)



  function searchGoogle() {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    }
}






const registerBtn = document.getElementById("registerBtn");
const connectBtn = document.getElementById("connectBtn");
const disconnectBtn = document.getElementById("disconnectBtn");
const dropdownMenu = document.getElementById("dropdownMenu"); // Menu déroulant
const statusText = document.getElementById("statusText");
const overlay = document.getElementById("overlay");
const popupContent = document.getElementById("popupContent");
const body = document.body;

// Met à jour l'affichage des boutons en fonction de l'état d'inscription et de connexion
function updateButtons() {
    const isRegistered = localStorage.getItem("username") !== null;
    const isConnected = localStorage.getItem("isConnected") === "true";

    if (!isRegistered) {
        // L'utilisateur n'est pas inscrit -> Afficher "S'inscrire" uniquement
        registerBtn.style.display = "inline-block";
        connectBtn.style.display = "none";
        disconnectBtn.style.display = "none";
        dropdownMenu.style.display = "none"; // Masquer le menu déroulant
    } else if (isConnected) {
        // L'utilisateur est connecté -> Afficher "Se déconnecter" uniquement
        registerBtn.style.display = "none";
        connectBtn.style.display = "none";
        disconnectBtn.style.display = "inline-block";
        dropdownMenu.style.display = "none"; // Masquer le menu déroulant
    } else {
        // L'utilisateur est inscrit mais pas connecté -> Afficher "Se connecter" uniquement
        registerBtn.style.display = "none";
        connectBtn.style.display = "inline-block";
        disconnectBtn.style.display = "none";
        dropdownMenu.style.display = "none"; // Masquer le menu déroulant
    }
}

// Vérifier l'état de connexion stocké
function checkStatus() {
    const username = localStorage.getItem("username");
    const isConnected = localStorage.getItem("isConnected") === "true";
    
    if (isConnected && username) {
        statusText.textContent = `Connecté en tant que ${username}`;
    } else {
        statusText.textContent = "Non connecté";
    }

    updateButtons(); // Mettre à jour les boutons correctement
}

// Ouvrir la popup avec du contenu dynamique
function openPopup(content) {
    popupContent.innerHTML = content;
    overlay.style.display = "flex";
    body.classList.add("blur");
}

// Fermer la popup
function closePopup() {
    overlay.style.display = "none";
    body.classList.remove("blur");
}

// Afficher la popup d'inscription
registerBtn.addEventListener("click", () => {
    openPopup(`
        <h3>Inscription</h3>
        <input type="text" id="registerUsername" placeholder="Nom d'utilisateur">
        <input type="password" id="registerPassword" placeholder="Mot de passe">
        <p class="error" id="registerError" style="display: none;">Tous les champs sont requis</p>
        <button onclick="registerUser()">S'inscrire</button>
        <button onclick="closePopup()">Annuler</button>
    `);
});

// Afficher la popup de connexion
connectBtn.addEventListener("click", () => {
    openPopup(`
        <h3>Connexion</h3>
        <input type="text" id="loginUsername" placeholder="Nom d'utilisateur">
        <input type="password" id="loginPassword" placeholder="Mot de passe">
        <p class="error" id="loginError" style="display: none;">Identifiants incorrects</p>
        <button onclick="loginUser()">Se connecter</button>
        <button onclick="closePopup()">Annuler</button>
    `);
});

// Fonction d'inscription
function registerUser() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const errorText = document.getElementById("registerError");

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Inscription réussie !");
        closePopup();
        checkStatus(); // Mettre à jour l'état après l'inscription
    } else {
        errorText.style.display = "block";
    }
}

// Fonction de connexion
function loginUser() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const errorText = document.getElementById("loginError");

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("isConnected", "true");
        alert("Connexion réussie !");
        closePopup();
        checkStatus(); // Mettre à jour l'état après la connexion
    } else {
        errorText.style.display = "block";
    }
}

// Déconnexion
disconnectBtn.addEventListener("click", () => {
    localStorage.setItem("isConnected", "false");
    alert("Déconnexion réussie !");
    checkStatus(); // Mettre à jour l'état après la déconnexion
    dropdownMenu.style.display = "block"; // Afficher le menu déroulant après déconnexion
});

// Ouvrir le menu déroulant après déconnexion
function showDropdownMenu() {
    dropdownMenu.style.display = "block"; // Afficher le menu
}

// Vérifier l'état de connexion au chargement
checkStatus();

