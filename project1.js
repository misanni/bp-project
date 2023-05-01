
    function displayMenu() {
        if (document.getElementById('dropdown').style.display == 'block') {
            document.getElementById('dropdown').style.display= 'none';
        } else {
            document.getElementById('dropdown').style.display= 'block';
        }
    }
    document.getElementById('dropdown').addEventListener('click', displayMenu)

    function resetMenu() {
        if (window.innerWidth >= 900) {
            document.getElementById('menuicon').style.display = 'flex';
        } else if (window.innerWidth < 900) {
            document.getElementById('menuicon').style.display = 'none';
        }
    }
    window.addEventListener('resize', resetMenu);
 