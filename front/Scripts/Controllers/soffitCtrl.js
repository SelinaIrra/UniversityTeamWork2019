var soffitCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this;   
    $scope.multipleSelectiumComponent = {
        soffitColorOptions: ["черный", "белый", "серый", "красный", "синий", "фиолетовый", "зеленый", "коричневый", "желтый", "прозрачный"],
        soffitColorValues: ['black', 'white', 'grey', 'red', 'blue', 'violet', 'green', 'brown', 'yellow', 'transparent'],
        soffitMaterialOptions: ['хрусталь', 'акрил', 'ракушки', 'мрамор', 'камень', 'бетон', 'пластик', 'стекло', 'металл', 'ткань', 'кожа', 'дерево'],
        soffitMaterialValues: ['crystal', 'acrylic', 'shells', 'marble', 'stone', 'concrete', 'plastic', 'glass', 'metal', 'fabric', 'leather', 'wood'],
        soffitHeightOptions: ['до 43см', 'от 43см до 86см','от 86см до 129см', 'от 129см до 172см', 'от 172см'],
        soffitHeightValues: ['43', '43-86','86-129', '129-172', '172'],
        soffitWidthOptions: ['до 56см', 'от 56см до 112см','от 112см до 168см', 'от 168см до 224см', 'от 224см'],
        soffitWidthValues: ['56', '56-112','112-168', '168-224', '224'],
        soffitLampsOptions: ['до 2', 'от 2 до 3', 'от 3 до 6', 'от 6'],
        soffitLampsValues: ['2', '2-3', '3-6', '6']
    };

    $scope.selectiumComponent = {
    soffitSortOptions: ["по возрастанию цены", "по убыванию цены"],
    soffitSortValues: ['up', 'down'],
    soffitSortDefault: 'Сортировка'
    }

    $("#soffitPrice").slider({
        range: true,
        min: 0,
        max: 90000,
        values: [ 0, 90000 ],
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
          id: 543,
          name: 'model 543',
          descriptions: "",
          images: 'Content/items/soffit/1.jpg',
          lamps: 1,
          price: '2300',
          color:'transparent',
          width: 30,
          height: 50,
          material: 'metal'
      },
      {
          id: 535,
          name: 'model 535',
          descriptions: "",
          images: 'Content/items/soffit/2.jpg',
          lamps: 1,
          price:'3700',
          color:'yellow',
          width:51,
          height:55,
          material: 'crystal'
      },
      {
          id: 5223,
          name: 'model 5223',
          descriptions: "",
          images: 'Content/items/soffit/3.jpg',
          lamps: 3,
          price: '7000',
          color:'grey',
          width:56,
          height:77,
          material: 'wood',
      },
      {
          id: 5043,
          name: 'model 5043',
          descriptions: "",
          images: 'Content/items/soffit/4.jpg',
          lamps: 2,
          price:'2200',
          color:'grey',
          width:89,
          height:67,
          material:'metal'
      },
      {
          id: 537,
          name: 'model 537',
          descriptions: "",
          images: 'Content/items/soffit/5.jpg',
          lamps: 2,
          price:'6140',
          color:'yellow',
          width:56,
          height:94,
          material: 'glass'
      },
      {
          id: 586,
          name: 'model 586',
          descriptions: "",
          images: 'Content/items/soffit/6.jpg',
          lamps: 2,
          price:'8800',
          color:'black',
          width:44,
          height:77,
          material: 'glass'
      },
      {
          id: 577,
          name: 'model 577',
          descriptions: "",
          images: 'Content/items/soffit/7.jpg',
          lamps: 3,
          price:'9000',
          color:'black',
          width:44,
          height:34,
          material: 'glass'
      },
      {
          id: 532,
          name: 'model 532',
          descriptions: "",
          images: 'Content/items/soffit/8.jpg',
          lamps: 2,
          price:'10200',
          color:'grey',
          width:40,
          height:70,
          material: 'metal'
      },
      {
          id: 556,
          name: 'model 556',
          descriptions: "",
          images: 'Content/items/soffit/9.jpg',
          lamps: 2,
          price:'12800',
          color:'white',
          width:44,
          height:80,
          material: 'metal'
      },
      {
          id: 503,
          name: 'model 503',
          descriptions: "",
          images: 'Content/items/soffit/10.jpg',
          lamps: 2,
          price:'7300',
          color:'black',
          width: 55,
          height: 100,
          material: 'glass'
      },
      {
          id: 548,
          name: 'model 548',
          descriptions: "",
          images: 'Content/items/soffit/11.jpg',
          lamps: 3,
          price:'22300',
          color:'white',
          width: 34,
          height: 44,
          material: 'metal'
      },
      {
          id: 589,
          name: 'model 589',
          descriptions: "",
          images: 'Content/items/soffit/12.jpg',
          lamps: 2,
          price:'9400',
          color: 'white',
          width: 20,
          height: 50,
          material: 'crystal'
      }
  ]
}

soffitCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];