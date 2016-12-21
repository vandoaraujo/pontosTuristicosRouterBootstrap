(function() {
    angular.module("principal")
    .factory("forecastService", ['$http',
        function($http) {
            function obterForecast(cidade) {
                return $http.get(
                  "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=f7a5c649afc792dcc46245fa2620e64f&q="
                  + cidade
                  + "&mode=json&units=metric&cnt=3"                
                );             
             }
             
             return obterForecast;
        }
    ])    
})();