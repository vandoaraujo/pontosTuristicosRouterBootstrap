(function(){
    angular.module('principal')
    .controller('previsaoController',['$scope','forecastService','conversorService', 
    function($scope,forecastService,conversorService) {
        var vm = this;
        vm.cidade = 'Selecione a cidade';
        vm.previsao = 'Para ver a previsão';
        vm.mensagem = null;
        vm.selecionar = function(cidade) {
            vm.cidade = cidade;
            vm.mensagem = "";
            forecastService(vm.cidade)
            .then(
                function(response) {
                    var listaPrev = response.data.list;
                    vm.listaDias = [];
                    for (var x=0; x<listaPrev.length; x++) {
                        var prevDia = listaPrev[x];
                        var dtprev = new Date(prevDia.dt * 1000);
                        var wclima = dtprev.toLocaleDateString()
                            + "- mínima: "
                            + prevDia.temp.min + " C, "
                            + " máxima: " 
                            + prevDia.temp.max + " C, "
                            + prevDia.weather[0].description;
                        vm.listaDias.push(wclima);                            
                    }
                },
                function(erro) {
                    vm.mensagem = "Ocorreu um erro " + erro;
                }
            );
        }
    }]);
})();