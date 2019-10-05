var torsherCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this;   

    $scope.multipleSelectiumComponent = {
        torsherColorOptions: ["черный", "белый", "серый", "коричневый", "желтый", "прозрачный"],
        torsherColorValues: ['black', 'white', 'grey', 'brown', 'yellow', 'transparent'],
        torsherMaterialOptions: ['хрусталь', 'мрамор', 'камень', 'пластик', 'стекло', 'металл', 'ткань', 'дерево'],
        torsherMaterialValues: ['crystal', 'marble', 'stone', 'plast', 'glass', 'metal', 'fabric', 'wood'],
        torsherHeightOptions: ['от 43см до 86см','от 86см до 130см', 'от 130см до 173см', 'от 173см'],
        torsherHeightValues: ['43-86','86-130', '130-173', '174'],
        torsherWidthOptions: ['от 29см до 58см','от 58см до 87см', 'от 87см до 116см', 'от 116см'],
        torsherWidthValues: ['29-58','58-87', '87-116', '116'],
        torsherLampOptions: ['до 2', 'от 2 до 4', 'от 4 до 7', 'от 7'],
        torsherLampValues: ['2', '2-4', '4-7', '7']
    };

    $scope.selectiumComponent = {
    torsherSortOptions: ["по возрастанию цены", "по убыванию цены"],
    torsherSortValues: ['up', 'down'],
    torsherSortDefault: 'Сортировка'
    }

    $("#torsherPrice").slider({
        range: true,
        min: 0,
        max: 30000,
        values: [ 0, 30000 ],
        step: 100,
        slide: function( event, ui ) {
          $( "#priceFrom" )[0].innerText = ui.values[0];
          $( "#priceTo" )[0].innerText = ui.values[1];
        }
    });

    $scope.getModalData = function(index) {
        return {
            type: 'lamp',
            id: $scope.items[index].id,
            name: $scope.items[index].name,
            images: $scope.items[index].images,
            price: $scope.items[index].price,
            width: $scope.items[index].width,
            height: $scope.items[index].height,
            material: $scope.items[index].material,
            color: $scope.items[index].color,
            lamps: $scope.items[index].lamps
        }
    }

    $scope.items = [
      {
          id: 643,
          name: 'model 643',
          descriptions: "",
          images: 'Content/items/torsher/1.jpg',
          lamps: 1,
          price: '2300',
          color:'transparent',
          width: 30,
          height: 50,
          material: 'metal'
      },
      {
          id: 635,
          name: 'model 635',
          descriptions: "",
          images: 'Content/items/torsher/2.jpg',
          lamps: 1,
          price:'3700',
          color:'yellow',
          width:51,
          height:55,
          material: 'crystal'
      },
      {
          id: 6223,
          name: 'model 6223',
          descriptions: "",
          images: 'Content/items/torsher/3.jpg',
          lamps: 3,
          price: '7000',
          color:'grey',
          width:56,
          height:77,
          material: 'wood',
      },
      {
          id: 6043,
          name: 'model 6043',
          descriptions: "",
          images: 'Content/items/torsher/4.jpg',
          lamps: 2,
          price:'2200',
          color:'grey',
          width:89,
          height:67,
          material:'metal'
      },
      {
          id: 637,
          name: 'model 637',
          descriptions: "",
          images: 'Content/items/torsher/5.jpg',
          lamps: 2,
          price:'6140',
          color:'yellow',
          width:56,
          height:94,
          material: 'glass'
      },
      {
          id: 686,
          name: 'model 686',
          descriptions: "",
          images: 'Content/items/torsher/6.jpg',
          lamps: 2,
          price:'8800',
          color:'black',
          width:44,
          height:77,
          material: 'glass'
      },
      {
          id: 677,
          name: 'model 677',
          descriptions: "",
          images: 'Content/items/torsher/7.jpg',
          lamps: 3,
          price:'9000',
          color:'black',
          width:55,
          height:100,
          material: 'glass'
      },
      {
          id: 632,
          name: 'model 632',
          descriptions: "",
          images: 'Content/items/torsher/8.jpg',
          lamps: 2,
          price:'10200',
          color:'grey',
          width:40,
          height:70,
          material: 'metal'
      },
      {
          id: 656,
          name: 'model 656',
          descriptions: "",
          images: 'Content/items/torsher/9.jpg',
          lamps: 2,
          price:'12800',
          color:'white',
          width:44,
          height:80,
          material: 'metal'
      },
      {
          id: 603,
          name: 'model 603',
          descriptions: "",
          images: 'Content/items/torsher/10.jpg',
          lamps: 2,
          price:'7300',
          color:'black',
          width: 55,
          height: 100,
          material: 'glass'
      },
      {
          id: 648,
          name: 'model 648',
          descriptions: "",
          images: 'Content/items/torsher/11.jpg',
          lamps: 3,
          price:'22300',
          color:'white',
          width: 34,
          height: 44,
          material: 'metal'
      },
      {
          id: 689,
          name: 'model 689',
          descriptions: "",
          images: 'Content/items/torsher/12.jpg',
          lamps: 2,
          price:'9400',
          color: 'white',
          width: 20,
          height: 50,
          material: 'crystal'
      }
  ]
}

torsherCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];