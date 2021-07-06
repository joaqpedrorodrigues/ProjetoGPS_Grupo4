function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openIPV() {
    window.open("https://www.ipv.pt/")
}

function openIPS() {
    window.open("https://www.ips.pt/")
}

function openIPL() {
    window.open("https://www.ipleiria.pt/")
}


function choice1(select) {
    alert(select.options[select.selectedIndex].text);
}

function esconder() {
    var x = document.getElementById("divTest");
    if (x.style.display != "none") {
        x.style.display = "none";
    }
}

function mostrar() {
    var x = document.getElementById("divTest");
    if (x.style.display != "none") {
        x.style.display = "none";
        conta = 0;
    } else if (x.style.display = "none") {
        window.location.reload();
        conta = 0;
    }
    var y = document.getElementById("divTest2");
    if (y.style.display != "none") {
        y.style.display = "none";
        conta = 0;
    } else if (y.style.display = "none") {
        window.location.reload();
        conta = 0;
    }
    var z = document.getElementById("divTest3");
    if (z.style.display != "none") {
        z.style.display = "none";
        conta = 0;
    } else if (z.style.display = "none") {
        window.location.reload();
        conta = 0;
    }
    var w = document.getElementById("divTest4");
    if (w.style.display != "none") {
        w.style.display = "none";
        conta = 0;
    } else if (w.style.display = "none") {
        window.location.reload();
        conta = 0;
    }
}