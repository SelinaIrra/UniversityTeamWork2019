let Selectium = function (UtilsService) {
    return {
        restrict: 'E',
        scope: true,
        link: function (scope, element, attrs) {
            scope.selectDirective = {
                id: attrs.id,
                default: scope.selectiumComponent[attrs.default] || "",
                filtering: attrs.filtering == 'true'
            }

            scope.options = [];

            scope.setSelectedValue = function (option) {
                let elem = $("#" + scope.selectDirective.id);
                elem.find('p').text(option);
                elem.val(scope.optionValue[option]);
                let event = document.createEvent("CustomEvent");
                event.initCustomEvent('changeSelectiumOption', true, false, {
                    name: element.attr('name'),
                    data: { option: option, value: scope.optionValue[option] }
                });
                elem[0].dispatchEvent(event);
            }

            scope.$on('clearSelect', function() { scope.setSelectedValue(scope.selectDirective.default || '') } );

            function init() {
                scope.optionValue = {};
                scope.options = scope.selectiumComponent[element.attr('options')];
                let values = element.attr('values')? scope.selectiumComponent[element.attr('values')] : scope.options;
                for (let i = 0; i < values.length; i++)
                    scope.optionValue[scope.options[i]] = values[i];
            }

            $(document).ready(function () {
                init();
            })

        },
        templateUrl: 'Scripts/Directives/selectium/selectium.html'
    }
}