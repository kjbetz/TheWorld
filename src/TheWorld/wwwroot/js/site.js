var ele = document.getElementById("username");
ele.innerHTML = "Kristopher Betz";

var main = document.getElementById("main");

main.onmouseenter = function () {
    main.style = "background-color: #888;";
};

main.onmouseleave = function () {
    main.style = "";
};