(function(){
    angular.module('principal')
    .controller('indexController',['$scope','previsaoService','conversorService', 
    function($scope,previsaoService,conversorService) {
        var vm = this;
        vm.cidade = 'Selecione a cidade';
        vm.previsao = 'Para ver a previsão';
        vm.mensagem = null;
        vm.selecionar = function(cidade) {
            vm.cidade = cidade;
            vm.mensagem = "";
            previsaoService(vm.cidade)
            .then(
                function(response) {
                    vm.previsao = response.data.weather[0].description
                        + ", " + conversorService(response.data.main.temp).toFixed(2)
                        + " C ";
                    console.log(vm.previsao);
                },
                function(erro) {
                    vm.mensagem = "Ocorreu um erro " + erro;
                }
            );
        }
    }]);
})();