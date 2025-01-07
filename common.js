// skapa hemknapp
function homeNavigation() {
    let navHome = document.getElementById("home");

    let homeLink = document.createElement("a");
    homeLink.textContent = "Home";
    homeLink.href = "../index.html";
    navHome.appendChild(homeLink);
}
homeNavigation();