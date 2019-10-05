var braCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this; 
    $scope.multipleSelectiumComponent = {
        braColorOptions: ["черный", "белый", "серый", "красный", "синий", "коричневый", "желтый", "прозрачный"],
        braColorValues: ['black', 'white', 'grey', 'red', 'blue', 'brown', 'yellow', 'transparent'],
        braMaterialOptions: ['хрусталь', 'ракушки', 'стекло', 'металл', 'ткань', 'дерево'],
        braMaterialValues: ['crystal', 'shells', 'glass', 'metal', 'fabric', 'wood'],
        braHeightOptions: ['от 30см до 60см','от 60см до 90см', 'от 90см до 120см', 'от 120см'],
        braHeightValues: ['30-60','60-90', '90-120', '120'],
        braWidthOptions: ['от 10см до 20см','от 20см до 30см', 'от 30см до 40см', 'от 40см'],
        braWidthValues: ['10-20','20-30', '30-40', '40'],
        braLampOptions: ['до 2', 'от 2 до 4', 'от 9'],
        braLampValues: ['2', '2-4', '9']
    };

    $scope.selectiumComponent = {
    braSortOptions: ["по возрастанию цены", "по убыванию цены"],
    braSortValues: ['up', 'down'],
    braSortDefault: 'Сортировка'
    }

    $("#braPrice").slider({
        range: true,
        min: 0,
        max: 20000,
        values: [ 0, 20000 ],
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
            id: 143,
            name: 'model 143',
            descriptions: "",
            images: 'Content/items/bra/1.jpg',
            lamps: 1,
            price: '2300',
            color:'transparent',
            width: 30,
            height: 50,
            material: 'metal'
        },
        {
            id: 135,
            name: 'model 135',
            descriptions: "",
            images: 'Content/items/bra/2.jpg',
            lamps: 1,
            price:'3700',
            color:'yellow',
            width:51,
            height:55,
            material: 'crystal'
        },
        {
            id: 1223,
            name: 'model 1223',
            descriptions: "",
            images: 'Content/items/bra/3.jpg',
            lamps: 3,
            price: '7000',
            color:'grey',
            width:56,
            height:77,
            material: 'wood',
        },
        {
            id: 1043,
            name: 'model 1043',
            descriptions: "",
            images: 'Content/items/bra/4.jpg',
            lamps: 2,
            price:'2200',
            color:'grey',
            width:89,
            height:67,
            material:'metal'
        },
        {
            id: 137,
            name: 'model 137',
            descriptions: "",
            images: 'Content/items/bra/5.jpg',
            lamps: 2,
            price:'6140',
            color:'yellow',
            width:56,
            height:94,
            material: 'glass'
        },
        {
            id: 186,
            name: 'model 186',
            descriptions: "",
            images: 'Content/items/bra/6.jpg',
            lamps: 2,
            price:'8800',
            color:'black',
            width:44,
            height:77,
            material: 'glass'
        },
        {
            id: 177,
            name: 'model 177',
            descriptions: "",
            images: 'Content/items/bra/7.jpg',
            lamps: 3,
            price:'9000',
            color:'black',
            width:50,
            height:79,
            material: 'glass'
        },
        {
            id: 132,
            name: 'model 132',
            descriptions: "",
            images: 'Content/items/bra/8.jpg',
            lamps: 2,
            price:'10200',
            color:'grey',
            width:40,
            height:70,
            material: 'metal'
        },
        {
            id: 156,
            name: 'model 156',
            descriptions: "",
            images: 'Content/items/bra/9.jpg',
            lamps: 2,
            price:'12800',
            color:'white',
            width:44,
            height:80,
            material: 'metal'
        },
        {
            id: 103,
            name: 'model 103',
            descriptions: "",
            images: 'Content/items/bra/10.jpg',
            lamps: 2,
            price:'7300',
            color:'black',
            width: 55,
            height: 100,
            material: 'glass'
        },
        {
            id: 148,
            name: 'model 148',
            descriptions: "",
            images: 'Content/items/bra/11.jpg',
            lamps: 3,
            price:'22300',
            color:'white',
            width: 34,
            height: 44,
            material: 'metal'
        },
        {
            id: 189,
            name: 'model 189',
            descriptions: "",
            images: 'Content/items/bra/12.jpg',
            lamps: 2,
            price:'9400',
            color: 'white',
            width: 20,
            height: 50,
            material: 'crystal'
        }
    ]
}
braCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];