(function() {
    angular.module("principal")
    .factory("conversorService", [
        function() {
             function toCelsius(k) {
                return k - 273.15;
             }             
             return toCelsius;
        }
    ])    
})();