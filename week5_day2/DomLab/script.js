// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

let showingSubMenu = false;

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

for (let i in menuLinks) {
    let a = document.createElement('a');
    a.setAttribute('href', menuLinks[i].href);
    a.textContent = menuLinks[i].text;
    topMenuEl.appendChild(a);

    // if (menuLinks[i].text !== 'about') {
    //     a.setAttribute('link', menuLinks[i].subLinks);
    // }
}

let topMenuLinks = document.querySelectorAll('#top-menu a');

topMenuEl.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.tagName == 'a' || e.target.tagName == 'A') {
        console.log(e.target.text);
    } else {
        return false;
    }

    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        return;
    }

    for (let i in topMenuLinks) {
        e.target.classList.remove('active');
    }

    e.target.classList.add('active');

    menuLinks.forEach(obj => {
        if (obj.hasOwnProperty('subLinks')) {
            showingSubMenu = true;
        } else {
            showingSubMenu = false;
        }
        if (menuLinks[i].text !== 'about') {
            obj.subLinks.setAttribute('link', menuLinks[i].subLinks);
        }
    })
});
