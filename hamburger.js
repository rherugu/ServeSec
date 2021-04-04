
        var menu = document.querySelector(".hamburger");
        var ham = document.querySelector(".hamburgericon");
        var xIcon = document.querySelector(".xIcon");

        function toggleMenu() {
            if (menu.classList.contains("showMenu")) {
                menu.classList.remove("showMenu");
                xIcon.style.display = "none";
                ham.style.display = "block";
                menu.style.display = "flex";
            } else {
                menu.classList.add("showMenu");
                xIcon.style.display = "block";
                ham.style.display = "none";
                menu.style.display = "flex";
            }
        }

        function onclickHamburger() {
            ham.addEventListener("click", toggleMenu());
        }
        function onclickXicon() {
            xIcon.addEventListener('click', toggleMenu());
        }