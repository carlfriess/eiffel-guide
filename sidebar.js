angular.module('sidebar', [])
.controller('SidebarController', ["$anchorScroll", function($anchorScroll){
    this.scrollTo = function (index) {
        window.scrollTo(0, document.getElementsByTagName("h2").item(index).offsetTop);
    };
}])
.directive('sidebar', function() {
    return {
        restrict : 'E',
        template: function(elem, attr){

            var html = "<div id=\"sidebar\" ng-controller=\"SidebarController as sidebarCtrl\" style=\"position: fixed; top: 0; left: 0;\">",
                h2 = document.getElementsByTagName("h2");

            for (var i = 0; i < h2.length; i++) {
                html += "<a href=\"\" ng-click=\"sidebarCtrl.scrollTo(" + i + ")\">" + h2.item(i).innerText + "</a><br/>";
            }

            html += "</div>";

            return html;

        }
    };
});