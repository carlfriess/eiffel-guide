angular.module('sidebar', [])
.controller('SidebarController', ["$window", "$scope", function($window, $scope){
    this.scrollTo = function (index) {
        $window.scrollTo(0, document.getElementsByTagName("h2").item(index).offsetTop - 25);
    };
    angular.element($window).on('scroll', function(){

        var i = 0,
            h2 = document.getElementsByTagName("h2");

        while (i < h2.length) {
            if (h2.item(i).offsetTop >= $window.scrollY + 75)
                break;
            i++;
        }

        $scope.sidebarCtrl.highlighted = i - 1;
        $scope.$apply();

    });
}])
.directive('sidebar', function() {
    return {
        restrict : 'E',
        template: function(elem, attr){

            var html = "<div id=\"sidebar\" ng-controller=\"SidebarController as sidebarCtrl\"><div>",
                h2 = document.getElementsByTagName("h2");

            for (var i = 0; i < h2.length; i++) {
                html += "<a href=\"\" ng-click=\"sidebarCtrl.scrollTo(" + i + ")\" ng-class=\"{'highlighted':( " + i + " <= sidebarCtrl.highlighted)}\">" + h2.item(i).innerText + "</a>";
            }

            html += "</div></div>";

            return html;

        }
    };
});