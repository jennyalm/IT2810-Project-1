
$(document).ready(function(){

  $("#knapp").click(function(){
    $("#dokumentasjon-tekst").slideToggle();
  })

  $("#knapp-info").click(function(){
    $("#k-info").slideToggle();
  })

  $("#linje3").hide();
  $("#linje4").hide();


//trekant
$("polygon").click(function(){ //gjemme trekanten
    $("#trekant").hide();
  });

//stjerne
$("#stjerne").mouseenter(function(){
  $("#stjerne").hide();
});

$("#stjerne").mouseleave(function(){
  $("#stjerne").show();
});

//sirkel
$("ellipse").hover(function(){
  $("#sirkel").css("fill" , "#e0154c");
},
  function(){
    $("#sirkel").css("fill" , "#fe4577");
  });

//rektangel
  $("rect").hover(function(){
   $(this).attr("height", "150");
   $(this).attr("width", "200");

},
function() {
  $(this).attr("height", "100");
  $(this).attr("width", "150");

});

//linje
$("line").hover(function(){
  $("#linje1").hide();
  $("#linje2").hide();
  $("#linje3").show();
  $("#linje4").show(); },

  function(){
    $("#linje1").show();
    $("#linje2").show();
    $("#linje3").hide();
    $("#linje4").hide();
  });

//CANVAS

function drawRectangle() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  context.fillStyle = "lightblue";
  context.fillRect(50, 340, 150, 100);
  context.lineWidth = 5;
  context.strokeStyle ="#75cddf";
  context.strokeRect(50, 340, 150, 100);

}
drawRectangle();


function drawTrekant(){

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(150,290);
  context.lineTo(250,190);
  context.lineTo(350,290);
  context.lineTo(150,290);
  context.lineTo(250,190);
  context.fillStyle ="#ffb8eb";
  context.fill();
  context.strokeStyle ="#fe7ad8";
  context.lineWidth = 5;
  context.stroke();
  context.closePath();


}
drawTrekant();

function drawKryss(){
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(350,100);
  context.lineTo(450,200);
  context.lineTo(350,100);
  context.strokeStyle ="#67ff3d";
  context.lineWidth = 5;
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(450,100);
  context.lineTo(350,200);
  context.lineTo(450,100);
  context.strokeStyle ="#67ff3d";
  context.lineWidth = 5;
  context.stroke();
  context.closePath();

}
drawKryss();

function drawStjerne(){
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(105,60);
  context.lineTo(135,154);
  context.lineTo(60,94);
  context.lineTo(150,94);
  context.lineTo(80,154);
  context.lineTo(105,60);
  context.lineTo(135,154);

  context.fillStyle ="#fff894";
  context.fill();
  context.strokeStyle ="#fef55d";
  context.lineWidth = 5;
  context.stroke();
  context.closePath();
}
drawStjerne();


function drawSirkel() {
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext('2d');
      var radius = 100;
      context.beginPath();
      context.arc(400, 400, 70, 0, 2 * Math.PI);
      context.fillStyle = "#fe4577";
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = "#e0154c";
      context.stroke();
      context.closePath();
}
drawSirkel();


// CANVAS EFFEKTER

function hover(){
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  $("#canvas").hover(function(){

    //større rektangel
    context.fillStyle = "lightblue";
    context.fillRect(50, 340, 200, 150);
    context.lineWidth = 5;
    context.strokeStyle ="#75cddf";
    context.strokeRect(50, 340, 200, 150);
        //farge sirkel
    var radius = 100;
    context.beginPath();
    context.arc(400, 400, 70, 0, 2 * Math.PI);
    context.fillStyle = "#e0154c";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#e0154c";
    context.stroke();
    context.closePath();
      //fjerne stjerne
    context.beginPath();
    context.moveTo(105,60);
    context.lineTo(135,154);
    context.lineTo(60,94);
    context.lineTo(150,94);
    context.lineTo(80,154);
    context.lineTo(105,60);
    context.lineTo(135,154);

    context.fillStyle ="white";
    context.fill();
    context.strokeStyle ="white";
    context.lineWidth = 10;
    context.stroke();
    context.closePath();
},

function() {
  //fjerne trekant
  context.clearRect(45,335,210,160);
  context.fillStyle = "lightblue";
  context.fillRect(50, 340, 150, 100);
  context.lineWidth = 5;
  context.strokeStyle ="#75cddf";
  context.strokeRect(50, 340, 150, 100);
      //sirkel
  var radius = 100;
  context.beginPath();
  context.arc(400, 400, 70, 0, 2 * Math.PI);
  context.fillStyle = "#fe4577";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#e0154c";
  context.stroke();
  context.closePath();
      //stjerne
  context.beginPath();
  context.moveTo(105,60);
  context.lineTo(135,154);
  context.lineTo(60,94);
  context.lineTo(150,94);
  context.lineTo(80,154);
  context.lineTo(105,60);

  context.fillStyle ="#fff894";
  context.fill();
  context.strokeStyle ="#fef55d";
  context.lineWidth = 5;
  context.stroke();
  context.closePath();
});
}
hover();



//Fjerne trekant i canvas
function klikk(){
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');
  $("#canvas").click(function(){
    //gjemme trekanten
    context.beginPath();
    context.moveTo(150,290);
    context.lineTo(250,190);
    context.lineTo(350,290);
    context.lineTo(150,290);
    context.lineTo(250,190);
    context.fillStyle ="white";
    context.fill();
    context.strokeStyle ="white";
    context.lineWidth = 10;
    context.stroke();
    context.closePath();

    //snu kryss
    context.beginPath();
    context.moveTo(350,100);
    context.lineTo(450,200);
    context.lineTo(350,100);
    context.strokeStyle ="white";
    context.lineWidth = 10;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(450,100);
    context.lineTo(350,200);
    context.lineTo(450,100);
    context.strokeStyle ="white";
    context.lineWidth = 10;
    context.stroke();
    context.closePath();

    //legge til snudd kryss
    context.beginPath();
    context.moveTo(400,100);
    context.lineTo(400,200);
    context.lineTo(400,100);
    context.strokeStyle ="#67ff3d";
    context.lineWidth = 5;
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(350,150);
    context.lineTo(450,150);
    context.lineTo(350,150);
    context.strokeStyle ="#67ff3d";
    context.lineWidth = 5;
    context.stroke();
    context.closePath();
    });
}
klikk();

});
