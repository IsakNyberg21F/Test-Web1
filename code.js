const sideBar = document.querySelector('.content');
const overlay = document.querySelector('.overlay');

window.addEventListener('click', function(event) {
    console.log("hejejejejeje");
    if (event.target !== sideBar && document.getElementById("popup-1").classList.contains('active')) {
        document.getElementById("popup-1").classList.remove("active");
        console.log("hejejejejeje");
    }
});

function toggleMenuSidebar(){
    document.getElementById("popup-1").classList.toggle("active");
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && document.getElementById("popup-1").classList.contains('active')){
        document.getElementById("popup-1").classList.toggle("active");
	}
});