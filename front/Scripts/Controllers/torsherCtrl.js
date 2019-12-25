var torsherCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, ItemsService) {
    var vm = this;   
    ItemsService.getCategories();
    $scope.items = ItemsService.getProducts('torsher');

    $scope.maxPrice = Math.max.apply(null, $scope.items.map(x => x.price));
    
    $scope.multipleSelectiumComponent = {
        torsherColorOptions: ItemsService.getProperties('torsher', 'color'),
        torsherMaterialOptions: ItemsService.getProperties('torsher', 'material'),
        torsherHeightOptions: ItemsService.getProperties('torsher', 'height'),
        torsherWidthOptions: ItemsService.getProperties('torsher', 'width'),
        torsherLampOptions: ItemsService.getProperties('torsher', 'lampCount')
    };

    $scope.selectiumComponent = {
        torsherSortOptions: ["по возрастанию цены", "по убыванию цены"],
        torsherSortValues: ['up', 'down'],
        torsherSortDefault: 'Сортировка'
    }

    $("#torsherPrice").slider({
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
        $('#torsher_sort')[0].addEventListener("changeSelectiumOption", function (event) {
            $scope.sort = 'price';
            $scope.sortDirection = event.detail.data.value == 'down' ? true : false
            event.stopPropagation();
        });

        $('#torsher_color')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#torsher_material')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#torsher_width')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#torsher_height')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });

        $('#torsher_lamps')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
            setFilters();            
            event.stopPropagation();
        });
    })
    
    function setFilters() {
        let colorArr = $('#torsher_color').val().split(',');
        let lampsArr = $('#torsher_lamps').val().split(',');
        let heightArr = $('#torsher_height').val().split(',');
        let widthArr = $('#torsher_width').val().split(',');
        let materialArr = $('#torsher_material').val().split(',');

        $scope.filterFunction = function (value) {
            return ((Number(value.price) >= Number($( "#priceFrom" )[0].innerText) && Number(value.price) <= Number($( "#priceTo" )[0].innerText))
                && ((widthArr.length == 1 && widthArr[0]== "") || widthArr.filter(x => {return Number(x) == Number(value.width)}).length > 0)
                && ((heightArr.length == 1 && heightArr[0]== "") || heightArr.filter(x => {return Number(x) == Number(value.height)}).length > 0)
                && ((materialArr.length == 1 && materialArr[0]== "") || materialArr.indexOf(value.material) > -1)
                && ((colorArr.length == 1 && colorArr[0]== "") || colorArr.indexOf(value.color) > -1)
                && ((lampsArr.length == 1 && lampsArr[0]== "") || lampsArr.filter(x => {return Number(x) == Number(value.lamps)}).length > 0))
        }
    }

    $scope.getModalData = () => {}

    $scope.setModalDataFunc = function() {
        $scope.getModalData = function(id) {
            return {
                item: $scope.items.filter(x => x.id == id)[0],
                type: 'torsher'
            }
        }
    }

    $scope.$on('clearModalData', function() {
        $scope.getModalData = () => {}
    })
}

torsherCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'ItemsService'];