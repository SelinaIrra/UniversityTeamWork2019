var MultipleSelectium = function (UtilsService) {
    return {
        restrict: 'E',
        scope: true,
        link: function (scope, element, attrs, ctrl) {
            scope.multiSelectDirective = {
                id: attrs.id,
                filtering: attrs.filtering == 'true',
                placeholder: attrs.placeholder
            }

            scope.options = [];
            scope.selectedOptionsArray = [];
            scope.checkValues = {};

            function setOptions() {
                let elem = $("#" + scope.multiSelectDirective.id);
                let str = elem.find('p');
                let selectedStr = scope.selectedOptionsArray.join(', ');
                let selectedValues = scope.selectedOptionsArray.map(function (x) { return scope.checkValues[x].value });
                str.text(selectedStr);
                str.attr('title', selectedStr);
                elem.val(selectedValues.join(','));
                let placeholder = scope.selectedOptionsArray.length ? '' : scope.multiSelectDirective.placeholder;
                elem.find('.placeholder').text(placeholder);
                let event = document.createEvent("CustomEvent");
                event.initCustomEvent('changeMultiSelectiumOptions', true, false, {
                    name: element.attr('name'),
                    data: { options: scope.selectedOptionsArray, values: selectedValues }
                });
                elem[0].dispatchEvent(event);
            }

            function changeOptionStatus(selected, option) {
                if (option)
                    if (selected)
                        scope.selectedOptionsArray.push(option);
                    else
                        scope.selectedOptionsArray = scope.selectedOptionsArray.filter(function (x) { return x != option });
                else // выбрать все
                    scope.selectedOptionsArray = selected ? scope.options : [];

                setOptions();
            }

            scope.toggleCheckSelectedOption = function (option) {
                let value = scope.checkValues[option].check;
                scope.checkValues[option].check = !value;
                changeOptionStatus(!value, option);
            }

            scope.toggleCheckAllSelectOption = function (event) {
                let checkAll = event.target.checked;
                for (let key in scope.checkValues)
                    scope.checkValues[key].check = checkAll;
                changeOptionStatus(checkAll);
            }

            function init(firstTime) {
                scope.checkValues = {};
                scope.selectedOptionsArray.length = 0;
                scope.options = scope.multipleSelectiumComponent[element.attr('options')];
                let values = element.attr('values') ? scope.multipleSelectiumComponent[element.attr('values')] : scope.options;
                for (let i = 0; i < scope.options.length; i++) {
                    scope.checkValues[scope.options[i]] =
                        {
                            value: values[i],
                            check: false
                        }
                }
                if (!firstTime) setOptions();
            }

            function clearAll() {
                for (let key in scope.checkValues)
                    scope.checkValues[key].check = false;
                changeOptionStatus(false);
            }

            scope.$on('clearMultiSelect', clearAll);

            $(document).ready(function () {
                init();
                let defaultVal = scope.multipleSelectiumComponent[element.attr('default')] || "";
                if (defaultVal.length) {
                    for (let i = 0; i < defaultVal.length; i++)
                        scope.toggleCheckSelectedOption(defaultVal[i]);
                }
            })
        },
        templateUrl: 'Scripts/Directives/multipleSelectium/multipleSelectium.html'
    }
}