$(function () {
  $("#btn-submit").click(function () {
    var pass = $("#password").val();
    $("#fill").empty();
    var contenido = getContenido(pass.toLowerCase());
    $("#fill").append(contenido);
    // alert("hi");
  });
});

function toggleLamina(id) {
  if ($("#lamina" + id).hasClass("lamina" + id)) {
    $("#lamina" + id).removeClass("lamina" + id);
    $("#lamina" + id).addClass("show-lamina show-lamina" + id);
    $("#heart" + id).removeClass("heart" + id);
    $("#heart" + id).addClass("show-heart show-heart" + id);
    hidePestanas(id);
    $("#contenido" + id).css("display", "flex");
  } else {
    $("#lamina" + id).removeClass("show-lamina show-lamina" + id);
    $("#lamina" + id).addClass("lamina" + id);
    $("#heart" + id).removeClass("show-heart show-heart" + id);
    $("#heart" + id).addClass("heart" + id);
    $("#contenido" + id).css("display", "none");
    showPestanas(id);
  }
}

function hidePestanas(id) {
  for (i = 1; i < id; i++) {
    $("#lamina" + i).css("display", "none");
  }
}
function showPestanas(id) {
  for (i = 1; i < id; i++) {
    $("#lamina" + i).css("display", "block");
  }
}

function friendship() {
  modal.style.display = "block";
}

var modal = document.getElementById("myModal");

var span = document.getElementById("span-close");

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
