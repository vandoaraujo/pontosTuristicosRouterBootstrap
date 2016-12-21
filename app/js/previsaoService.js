(function() {
    angular.module("principal")
    .factory("previsaoService", ['$http',
        function($http) {
            function obterPrevisao(cidade) {
                return $http.get(
                   "http://api.openweathermap.org/data/2.5/weather?APPID=f7a5c649afc792dcc46245fa2620e64f&q="
                    + cidade
                    + ",br"                 
                );             
             }
             
             return obterPrevisao;
        }
    ])    
})();