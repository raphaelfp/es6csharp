(function () {
    var $resultadoBlock = $("#resultado-block");
    var $resultadoNonBlock = $("#resultado-nonblock");

    var chamadasBlock = 0;
    var chamadasNonBlock = 0;

    function simulaChamadaAjax(cbSucesso) {
        setTimeout(function () {
            cbSucesso()
        }, Math.floor((Math.random() * 5) + 5) * 1000);
    }

    $("#block").on("click", function () {
        chamadasBlock++;
        simulaChamadaAjax(function () {
            $resultadoBlock.html(`Realizou ${chamadasBlock} chamadas`);
        })
    });

    $("#nonblock").on("click", function () {
        $(this).attr("disabled", true);
        chamadasNonBlock++;
        simulaChamadaAjax(function () {
            $(this).attr("disabled", false);
            $resultadoNonBlock.html(`Realizou ${chamadasNonBlock} chamada`);
        }.bind(this));
    });

    $("#limpar").on("click", function () {
        chamadasBlock = 0;
        chamadasNonBlock = 0;
        $resultadoBlock.html("");
        $resultadoNonBlock.html("");
    })

})();