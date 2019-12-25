var patronCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, ItemsService) {
  var vm = this;
  ItemsService.getCategories();
  $scope.items = ItemsService.getProducts('patron');
  
  $scope.maxPrice = Math.max.apply(null, $scope.items.map(x => x.price));
  
  $scope.multipleSelectiumComponent = {
    patronColorOptions: ItemsService.getProperties('patron', 'color'),
    patronMaterialOptions: ItemsService.getProperties('patron', 'material'),
    patronHeightOptions: ItemsService.getProperties('patron', 'height')
};

  $scope.selectiumComponent = {
    patronSortOptions: ["по возрастанию цены", "по убыванию цены"],
    patronSortValues: ['up', 'down'],
    patronSortDefault: 'Сортировка'
  }

  $(document).ready(function () {
    $('#patron_sort')[0].addEventListener("changeSelectiumOption", function (event) {
        $scope.sort = 'price';
        $scope.sortDirection = event.detail.data.value == 'down' ? true : false
        event.stopPropagation();
    });
    $('#patron_color')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
      setFilters();            
      event.stopPropagation();
    });

    $('#patron_material')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
        setFilters();            
        event.stopPropagation();
    });

    $('#patron_height')[0].addEventListener("changeMultiSelectiumOptions", function (event) {
        setFilters();            
        event.stopPropagation();
    });
  })

function setFilters() {
  let colorArr = $('#patron_color').val().split(',');
  let heightArr = $('#patron_height').val().split(',');
  let materialArr = $('#patron_material').val().split(',');

  $scope.filterFunction = function (value) {
      return ((Number(value.price) >= Number($( "#priceFrom" )[0].innerText) && Number(value.price) <= Number($( "#priceTo" )[0].innerText))
          && ((heightArr.length == 1 && heightArr[0]== "") || heightArr.filter(x => {return Number(x) == Number(value.height)}).length > 0)
          && ((materialArr.length == 1 && materialArr[0]== "") || materialArr.indexOf(value.material) > -1)
          && ((colorArr.length == 1 && colorArr[0]== "") || colorArr.indexOf(value.color) > -1))
  }
}

  $("#patronPrice").slider({
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

  $scope.getModalData = () => {}

  $scope.setModalDataFunc = function() {
      $scope.getModalData = function(id) {
          return {
              item: $scope.items.filter(x => x.id == id)[0],
              type: 'patron'
          }
      }
  }

  $scope.$on('clearModalData', function() {
      $scope.getModalData = () => {}
  })

}

patronCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'ItemsService'];