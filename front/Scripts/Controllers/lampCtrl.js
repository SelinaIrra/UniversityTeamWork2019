var lampCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, ItemsService) {
    var vm = this;
    
    ItemsService.getCategories();
    $scope.items = ItemsService.getProducts('lamp');

    $scope.maxPrice = Math.max.apply(null, $scope.items.map(x => x.price));
    
    $scope.multipleSelectiumComponent = {
        lampWidthOptions: ItemsService.getProperties('lamp', 'width'),
        lampHeightOptions: ItemsService.getProperties('lamp', 'height')
    };

    $scope.selectiumComponent = {
        lampSortOptions: ["по возрастанию цены", "по убыванию цены"],
        lampSortValues: ['up', 'down'],
        lampSortDefault: 'Сортировка'
    }

    $scope.sort;
    $scope.sortDirection;

    $(document).ready(function () {
        $('#lamp_sort')[0].addEventListener("changeSelectiumOption", function (event) {
            $scope.sort = 'price';
            $scope.sortDirection = event.detail.data.value == 'down' ? true : false
            event.stopPropagation();
        });

        $('#lamp_width')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#lamp_height')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

    })
    
    function setFilters() {
        let heightArr = $('#lamp_height').val().split(',');
        let widthArr = $('#lamp_width').val().split(',');

        $scope.filterFunction = function (value) {
            return ((Number(value.price) >= Number($( "#priceFrom" )[0].innerText) && Number(value.price) <= Number($( "#priceTo" )[0].innerText))
                && ((widthArr.length == 1 && widthArr[0]== "") || widthArr.filter(x => {return Number(x) == Number(value.width)}).length > 0)
                && ((heightArr.length == 1 && heightArr[0]== "") || heightArr.filter(x => {return Number(x) == Number(value.height)}).length > 0))
        }
    }
    
    $scope.getModalData = () => {}

    $scope.setModalDataFunc = function() {
        $scope.getModalData = function(id) {
            return {
                item: $scope.items.filter(x => x.id == id)[0],
                type: 'lamp'
            }
        }
    }

    $scope.$on('clearModalData', function() {
        $scope.getModalData = () => {}
    })


    $("#lampPrice").slider({
        range: true,
        min: 0,
        max: $scope.maxPrice,
        values: [0, $scope.maxPrice],
        step: 100,
        slide: function (event, ui) {
            $("#priceFrom")[0].innerText = ui.values[0];
            $("#priceTo")[0].innerText = ui.values[1];
        }
    });

}

lampCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'ItemsService'];