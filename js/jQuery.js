$(document).on("pagecreate", function () {
    //adequar altura da tela de acordo com o dispositivo
    var altura = $(window).height();
    $("section").css("height", altura);
    $("#map").css("height", altura - $("nav").height());


    $(document).on('click', '.btCad', function(){
        $("#lpLogin").css("display", "none");
        $("#lpCadastro").css("display", "block");
    });

    $(document).on('click', '.clrCad', function(){
        $("#lpLogin").css("display", "block");
        $("#lpCadastro").css("display", "none");
    });

     $.getJSON('json/filtros.json', function (filtros) {
        for (var i in filtros) {
            $("#myFilters").append("<p><a href='#;return(false)'>" + filtros[i] + "</a></p>");
        }
    });
});
