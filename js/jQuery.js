$(document).on("pagecreate", function () {
    //adequar altura da tela de acordo com o dispositivo
    var altura = $(window).height();
    $("section").css("height", altura);
    $("#map").css("height", altura - $("nav").height());


    var filtros = ["um", "dois", "tres"];
    var output = "";

    for (var i in filtros) {
        output += "<p><a>" + filtros[i] + "</a></p>";
    }

    document.getElementById("myFilters").innerHTML = output;


    $(document).on('click', '.btCad', function(){
        $("#lpLogin").css("display", "none");
        $("#lpCadastro").css("display", "block");
    });

    $(document).on('click', '.clrCad', function(){
        $("#lpLogin").css("display", "block");
        $("#lpCadastro").css("display", "none");
    });

});