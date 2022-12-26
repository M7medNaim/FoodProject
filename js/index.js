// class active header
let linksNav = document.querySelectorAll("header nav a");

linksNav.forEach(e => {
    e.onclick = _ => {
        linksNav.forEach(e => {
            e.classList.remove("active");
        });
        e.classList.add("active");
    }
});

// class active nav sm
let linksNav2 = document.querySelectorAll(".navBar nav a");

linksNav2.forEach(e => {
    e.onclick = _ => {
        linksNav2.forEach(e => {
            e.classList.remove("active");
        });
        e.classList.add("active");
    }
});

// bar click

let bar = document.querySelector(".bar");
let navBar = document.querySelector(".navBar");
let closeNav = document.querySelector(".close");
bar.onclick = _ => {
    navBar.classList.toggle("show");
}
closeNav.onclick = _ => {
    navBar.classList.remove("show");
}

// arrow
let arrow = document.querySelector(".arrow");
onscroll = _ => {
    if (scrollY >= 600) {
        arrow.classList.add("show")
    } else {
        arrow.classList.remove("show")
    }
}


