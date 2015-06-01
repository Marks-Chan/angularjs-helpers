/* you have to write it with 'compileProvider' -- add by marks.chan.l@gmail.com */
app.compileProvider.directive('SexyDirective', function () {
    return {
        restrict: 'E',
        template: '<div class=\"sexy\"></div>',
        link: function (scope, element, attrs) {
            // ...
        }
    };
});
