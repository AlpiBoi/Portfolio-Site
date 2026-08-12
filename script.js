console.log("Portfolio Loaded");

document.addEventListener('DOMContentLoaded', function () {
    // Dropdown toggle
    var dropdown = document.querySelector('.dropdown');
    if (!dropdown) return;

    var btn = dropdown.querySelector('.dropbtn');
    var menu = dropdown.querySelector('.dropdown-menu');

    function closeDropdown() {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function (e) {
        var open = dropdown.classList.contains('open');
        if (open) closeDropdown();
        else {
            dropdown.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            // focus first menu item for keyboard users
            var first = menu.querySelector('[role="menuitem"]') || menu.querySelector('a');
            if (first) first.focus();
        }
        e.stopPropagation();
    });

    // close when clicking outside
    document.addEventListener('click', function (ev) {
        if (!dropdown.contains(ev.target)) closeDropdown();
    });

    // keyboard handling
    dropdown.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape') closeDropdown();
        if ((ev.key === 'ArrowDown' || ev.key === 'Enter') && !dropdown.classList.contains('open')) {
            ev.preventDefault();
            dropdown.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            var first = menu.querySelector('[role="menuitem"]') || menu.querySelector('a');
            if (first) first.focus();
        }
    });
});