var modal = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {},
        link: function (scope, element, attrs, ctrl) {
            scope.modalDirective = {
                title: attrs.headline
            }

            let el = $(element);
            let modalName = attrs.modalname;
            scope.idEl = attrs.id;
            let idtool = attrs.idtool;

            function showModal() {
                el.removeClass('no_display');
            }

            scope.closeModal = function () {
                if (el.hasClass('no_display')) return;
                scope.$broadcast('closingModal');
                el.addClass('no_display');
            }

            scope.$on('closeModal', scope.closeModal);

            $(document).ready(function () {
                $(document.body).on('click', '#' + idtool, function (event) {
                    let target = $(event.target).closest("[name~=" + modalName + "]");
                    if (target.length) {
                        let data = target.attr('modaldata');
                        if (data) scope.$broadcast('sentModalData', data);
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
        templateUrl: 'Scripts/Components/modal/modal.html'
    }
}