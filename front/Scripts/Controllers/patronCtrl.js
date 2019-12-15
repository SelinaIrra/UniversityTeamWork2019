var patronCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
  var vm = this;

  $scope.multipleSelectiumComponent = {
    patronColorOptions: ["серый", "красный", "коричневый", "желтый"],
    patronColorValues: ['grey', 'red', 'brown', 'yellow'],
    patronMaterialOptions: ['металл'],
    patronMaterialValues: ['metal'],
    patronHeightOptions: ['от 6 см', 'от 8 см'],
    patronHeightValues: ['6', '8']
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
})

  $("#patronPrice").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [0, 1000],
    step: 100,
    slide: function (event, ui) {
      $("#priceFrom")[0].innerText = ui.values[0];
      $("#priceTo")[0].innerText = ui.values[1];
    }
  });

  $scope.getModalData = function(index) {
    return {
        type: 'lamp',
        id: $scope.items[index].id,
        name: $scope.items[index].name,
        images: $scope.items[index].images,
        price: $scope.items[index].price,
        height: $scope.items[index].height,
        material: $scope.items[index].material,
        color: $scope.items[index].color,
    }
}


  $scope.items = [
    {
      id: 443,
      name: 'model 443',
      descriptions: "",
      images: 'Content/items/patron/1.jpg',
      lamps: 1,
      price: 2300,
      color: 'transparent',
      width: 30,
      height: 50,
      material: 'metal'
    },
    {
      id: 435,
      name: 'model 435',
      descriptions: "",
      images: 'Content/items/patron/2.jpg',
      lamps: 1,
      price: 3700,
      color: 'yellow',
      width: 51,
      height: 55,
      material: 'crystal'
    },
    {
      id: 4223,
      name: 'model 4223',
      descriptions: "",
      images: 'Content/items/patron/3.jpg',
      lamps: 3,
      price: 7000,
      color: 'grey',
      width: 56,
      height: 77,
      material: 'wood',
    },
    {
      id: 4043,
      name: 'model 4043',
      descriptions: "",
      images: 'Content/items/patron/4.jpg',
      lamps: 2,
      price: 2200,
      color: 'grey',
      width: 89,
      height: 67,
      material: 'metal'
    },
    {
      id: 437,
      name: 'model 437',
      descriptions: "",
      images: 'Content/items/patron/5.jpg',
      lamps: 2,
      price: 6140,
      color: 'yellow',
      width: 56,
      height: 94,
      material: 'glass'
    },
    {
      id: 486,
      name: 'model 486',
      descriptions: "",
      images: 'Content/items/patron/6.jpg',
      lamps: 2,
      price: 8800,
      color: 'black',
      width: 44,
      height: 77,
      material: 'glass'
    },
    {
      id: 477,
      name: 'model 477',
      descriptions: "",
      images: 'Content/items/patron/7.jpg',
      lamps: 3,
      price: 9000,
      color: 'black',
      width: 40,
      height: 70,
      material: 'glass'
    },
    {
      id: 432,
      name: 'model 432',
      descriptions: "",
      images: 'Content/items/patron/8.jpg',
      lamps: 2,
      price: 10200,
      color: 'grey',
      width: 40,
      height: 70,
      material: 'metal'
    },
    {
      id: 456,
      name: 'model 456',
      descriptions: "",
      images: 'Content/items/patron/9.jpg',
      lamps: 2,
      price: 12800,
      color: 'white',
      width: 44,
      height: 80,
      material: 'metal'
    },
    {
      id: 403,
      name: 'model 403',
      descriptions: "",
      images: 'Content/items/patron/10.jpg',
      lamps: 2,
      price: 7300,
      color: 'black',
      width: 55,
      height: 100,
      material: 'glass'
    }
  ]
}

patronCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];