var braCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, ItemsService) {
    var vm = this; 

    $scope.sort;
    $scope.sortDirection;
    
    ItemsService.getCategories();

    $scope.multipleSelectiumComponent = {
        braColorOptions: ItemsService.getProperties('bra', 'color'),
        braMaterialOptions: ItemsService.getProperties('bra', 'material'),
        braHeightOptions: ItemsService.getProperties('bra', 'height'),
        braWidthOptions: ItemsService.getProperties('bra', 'width'),
        braLampOptions: ItemsService.getProperties('bra', 'lampCount')
    };

    $scope.items = ItemsService.getProducts('bra');

    $scope.maxPrice = Math.max.apply(null, $scope.items.map(x => x.price));

    $(document).ready(function () {
        $('#bra_sort')[0].addEventListener("changeSelectiumOption", function (event) {
            $scope.sort = 'price';
            $scope.sortDirection = event.detail.data.value == 'down' ? true : false
            event.stopPropagation();
        });

        $('#bra_color')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#bra_material')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#bra_width')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#bra_height')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#bra_lamps')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });
    })
    
    function setFilters() {
        let colorArr = $('#bra_color').val().split(',');
        let lampsArr = $('#bra_lamps').val().split(',');
        let heightArr = $('#bra_height').val().split(',');
        let widthArr = $('#bra_width').val().split(',');
        let materialArr = $('#bra_material').val().split(',');

        $scope.filterFunction = function (value) {
            return ((Number(value.price) >= Number($( "#priceFrom" )[0].innerText) && Number(value.price) <= Number($( "#priceTo" )[0].innerText))
                && ((widthArr.length == 1 && widthArr[0]== "") || widthArr.filter(x => {return Number(x) == Number(value.width)}).length > 0)
                && ((heightArr.length == 1 && heightArr[0]== "") || heightArr.filter(x => {return Number(x) == Number(value.height)}).length > 0)
                && ((materialArr.length == 1 && materialArr[0]== "") || materialArr.indexOf(value.material) > -1)
                && ((colorArr.length == 1 && colorArr[0]== "") || colorArr.indexOf(value.color) > -1)
                && ((lampsArr.length == 1 && lampsArr[0]== "") || lampsArr.filter(x => {return Number(x) == Number(value.lamps)}).length > 0))
        }
    }

    $scope.selectiumComponent = {
        braSortOptions: ["по возрастанию цены", "по убыванию цены"],
        braSortValues: ['up', 'down'],
        braSortDefault: 'Сортировка'
    }

    $("#braPrice").slider({
        range: true,
        min: 0,
        max: $scope.maxPrice,
        values: [ 0, $scope.maxPrice ],
        step: 100,
        slide: function( event, ui ) {
          $( "#priceFrom" )[0].innerText = ui.values[0];
          $( "#priceTo" )[0].innerText = ui.values[1];
          setFilters();
        }
    });



    $scope.getModalData = () => {}

    $scope.setModalDataFunc = function() {
        $scope.getModalData = function(id) {
            return {
                item: $scope.items.filter(x => x.id == id)[0],
                type: 'bra'
            }
        }
    }

    $scope.$on('clearModalData', function() {
        $scope.getModalData = () => {}
    })

}
braCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'ItemsService'];