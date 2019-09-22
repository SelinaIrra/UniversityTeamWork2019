var DropdownList = function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        priority: -100,
        scope: { },
        link: function(scope, element, attrs, ctrl) {
            scope.dropdownListDirective = {
                id: attrs.id,
                name: attrs.headline,
                icon: attrs.icon,
                placeholder: attrs.placeholder
            };

            scope.multiple = attrs.multiple;
            scope.close = attrs.close == 'true';
            scope.selector = '#' + scope.dropdownListDirective.id + (scope.close ? '_title' :  '');

            function setOptionsWidth(elem) {
                let prevElem = elem[0].previousElementSibling;
                let width = prevElem.offsetWidth;
                if (scope.multiple) elem.css('width', width + 'px');
                else  elem.css('width', width + 30 + 'px');
            }
            
            scope.toggleDropdownList = function() {
                let list = $('#' + scope.dropdownListDirective.id + '_list'); 
                setOptionsWidth(list);
                if (list.attr('collapsed') === undefined) {
                    list.addClass('no_display'); 
                    list.attr('collapsed', '');
                    list.closest('.dropdownList__area').find('.dropdownList__arrow_icon').css('transform', 'rotate(0deg)');
                } else {
                    list.removeClass('no_display'); 
                    list.removeAttr('collapsed');
                    list.closest('.dropdownList__area').find('.dropdownList__arrow_icon').css('transform', 'rotate(180deg)');
                }
            }
            
            $(document).click(function(e) {
                let jqEl = $(scope.selector);
                let options = scope.close ? jqEl.siblings('.dropdownList__options') : jqEl.find('.dropdownList__options');
                if (!jqEl.is(e.target) && jqEl.has(e.target).length === 0 && !options.hasClass('no_display')) {
                    options.addClass('no_display');
                    jqEl.find('.dropdownList__arrow_icon').css('transform', 'rotate(0deg)');
                    options.attr('collapsed', '');
                }
            })
        },
        templateUrl: 'Scripts/Components/dropdownList/dropdownList.html'
        }
}