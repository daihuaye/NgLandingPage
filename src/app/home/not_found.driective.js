(function (module) {
    module.directive('notFound', function () {
        return {
            restirct: 'E',
            template: '<canvas id="myCanvas"></canvas>',
            link: link
        };

        //////////////

        function link () {
            window.canvas = $("#myCanvas");
            var errorMsg = "404 Not Found";

            var red = [0, 100, 63];
            var orange = [40, 100, 60];
            var green = [75, 100, 40];
            var blue = [196, 77, 55];
            var purple = [280, 50, 60];
            var letterColors = [red, orange, green, blue, purple];

            drawName(errorMsg, letterColors);
            bubbleShape = 'circle';
            bounceBubbles();
        }
    });
}(angular.module('Directive.NotFound', [])));