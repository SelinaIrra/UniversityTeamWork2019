var soffitCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, ItemsService, CartActionService) {
    var vm = this;   
    ItemsService.getCategories();
    $scope.items = ItemsService.getProducts('soffit');

    $scope.maxPrice = Math.max.apply(null, $scope.items.map(x => x.price));

    $scope.multipleSelectiumComponent = {
        soffitColorOptions: ItemsService.getProperties('soffit', 'color'),
        soffitMaterialOptions: ItemsService.getProperties('soffit', 'material'),
        soffitHeightOptions: ItemsService.getProperties('soffit', 'height'),
        soffitWidthOptions: ItemsService.getProperties('soffit', 'width'),
        soffitLampsOptions: ItemsService.getProperties('soffit', 'lampCount')
    };

    $scope.selectiumComponent = {
        soffitSortOptions: ["по возрастанию цены", "по убыванию цены"],
        soffitSortValues: ['up', 'down'],
        soffitSortDefault: 'Сортировка'
    }

    $("#soffitPrice").slider({
        range: true,
        min: 0,
        max: $scope.maxPrice,
        values: [ 0, $scope.maxPrice ],
        step: 100,
        slide: function( event, ui ) {
          $( "#priceFrom" )[0].innerText = ui.values[0];
          $( "#priceTo" )[0].innerText = ui.values[1];
        }
    });

    $(document).ready(function () {
        $('#soffit_sort')[0].addEventListener("changeSelectiumOption", function (event) {
            $scope.sort = 'price';
            $scope.sortDirection = event.detail.data.value == 'down' ? true : false
            event.stopPropagation();
        });

        $('#soffit_color')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#soffit_material')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#soffit_width')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#soffit_height')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#soffit_lamps')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });
    })
    
    function setFilters() {
        let colorArr = $('#soffit_color').val().split(',');
        let lampsArr = $('#soffit_lamps').val().split(',');
        let heightArr = $('#soffit_height').val().split(',');
        let widthArr = $('#soffit_width').val().split(',');
        let materialArr = $('#soffit_material').val().split(',');

        $scope.filterFunction = function (value) {
            return ((Number(value.price) >= Number($( "#priceFrom" )[0].innerText) && Number(value.price) <= Number($( "#priceTo" )[0].innerText))
                && ((widthArr.length == 1 && widthArr[0]== "") || widthArr.filter(x => {return Number(x) == Number(value.width)}).length > 0)
                && ((heightArr.length == 1 && heightArr[0]== "") || heightArr.filter(x => {return Number(x) == Number(value.height)}).length > 0)
                && ((materialArr.length == 1 && materialArr[0]== "") || materialArr.indexOf(value.material) > -1)
                && ((colorArr.length == 1 && colorArr[0]== "") || colorArr.indexOf(value.color) > -1)
                && ((lampsArr.length == 1 && lampsArr[0]== "") || lampsArr.filter(x => {return Number(x) == Number(value.lamps)}).length > 0))
        }
    }

    $scope.addToCart = function(id, event) {
        CartActionService.addItem(id, ()=>{alert('Товар добавлен в корзину')});
        event.stopPropagation();
    }

    $scope.getModalData = () => {}

    $scope.setModalDataFunc = function() {
        $scope.getModalData = function(id) {
            return {
                item: $scope.items.filter(x => x.id == id)[0],
                type: 'soffit'
            }
        }
    }

    $scope.$on('clearModalData', function() {
        $scope.getModalData = () => {}
    })

}

soffitCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'ItemsService', 'CartActionService'];