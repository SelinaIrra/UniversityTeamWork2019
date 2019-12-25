var lightCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, ItemsService) {
    var vm = this;  
    ItemsService.getCategories();
    $scope.items = ItemsService.getProducts('light');
    
    $scope.maxPrice = Math.max.apply(null, $scope.items.map(x => x.price));
    
    $scope.multipleSelectiumComponent = {
        lightColorOptions: ItemsService.getProperties('light', 'color'),
        lightMaterialOptions: ItemsService.getProperties('light', 'material'),
        lightHeightOptions: ItemsService.getProperties('light', 'height'),
        lightWidthOptions: ItemsService.getProperties('light', 'width'),
        lightLampOptions: ItemsService.getProperties('light', 'lampCount')
    };

    $scope.selectiumComponent = {
        lightSortOptions: ["по возрастанию цены", "по убыванию цены"],
        lightSortValues: ['up', 'down'],
        lightSortDefault: 'Сортировка'
    }

    $(document).ready(function () {
        $('#light_sort')[0].addEventListener("changeSelectiumOption", function (event) {
            $scope.sort = 'price';
            $scope.sortDirection = event.detail.data.value == 'down' ? true : false
            event.stopPropagation();
        });
    
        $('#light_color')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#light_material')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#light_width')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#light_height')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#light_lamps')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });
    })
        
    function setFilters() {
        let colorArr = $('#light_color').val().split(',');
        let lampsArr = $('#light_lamps').val().split(',');
        let heightArr = $('#light_height').val().split(',');
        let widthArr = $('#light_width').val().split(',');
        let materialArr = $('#light_material').val().split(',');

        $scope.filterFunction = function (value) {
            return ((Number(value.price) >= Number($( "#priceFrom" )[0].innerText) && Number(value.price) <= Number($( "#priceTo" )[0].innerText))
                && ((widthArr.length == 1 && widthArr[0]== "") || widthArr.filter(x => {return Number(x) == Number(value.width)}).length > 0)
                && ((heightArr.length == 1 && heightArr[0]== "") || heightArr.filter(x => {return Number(x) == Number(value.height)}).length > 0)
                && ((materialArr.length == 1 && materialArr[0]== "") || materialArr.indexOf(value.material) > -1)
                && ((colorArr.length == 1 && colorArr[0]== "") || colorArr.indexOf(value.color) > -1)
                && ((lampsArr.length == 1 && lampsArr[0]== "") || lampsArr.filter(x => {return Number(x) == Number(value.lamps)}).length > 0))
        }
    }

    $("#lightPrice").slider({
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

    $scope.getModalData = () => {}

    $scope.setModalDataFunc = function() {
        $scope.getModalData = function(id) {
            return {
                item: $scope.items.filter(x => x.id == id)[0],
                type: 'light'
            }
        }
    }

    $scope.$on('clearModalData', function() {
        $scope.getModalData = () => {}
    })

}

lightCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'ItemsService'];