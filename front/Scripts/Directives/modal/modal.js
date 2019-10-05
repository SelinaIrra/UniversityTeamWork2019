var modal = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {},
        link: function (scope, element, attrs, ctrl) {

            let el = $(element);
            let modalName = attrs.modalname;
            scope.idEl = attrs.id;
            let idtool = attrs.idtool;

            function showModal() {
                $('body').css('overflow-y', 'hidden');
                el.css('top', document.documentElement.scrollTop + 'px');
                el.removeClass('no_display');
            }

            scope.closeModal = function () {
                if (el.hasClass('no_display')) return;
                scope.$broadcast('closingModal');
                scope.$emit('closingModal');
                el.addClass('no_display');
                $('body').css('overflow-y', 'auto');
                el.css('top', 0);
            }

            scope.$on('closeModal', scope.closeModal);

            $(document).ready(function () {
                $(document.body).on('click', '#' + idtool, function (event) {
                    let target = $(event.target).closest("[name~=" + modalName + "]");
                    if (target.length) {
                        let data = target.attr('modaldata');
                        if (data) {
                            scope.$broadcast('sentModalData', data);
                            scope.$emit('sentModalData', data);
                        }
                        showModal();
                        event.stopPropagation();
                    }
                });
            })

            $(document).click(function (e) {
                let jqEl = $('#' + scope.idEl + '_dialog');
                if (!jqEl.is(e.target) && jqEl.has(e.target).length === 0) {
                    scope.closeModal();
                }
            })

        },
        templateUrl: 'Scripts/Directives/modal/modal.html'
    }
}