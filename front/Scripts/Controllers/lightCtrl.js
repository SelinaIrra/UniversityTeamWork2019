var lightCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this;  
    $scope.multipleSelectiumComponent = {
        lightColorOptions: ["черный", "белый", "серый", "красный", "синий", "коричневый", "желтый", "прозрачный"],
        lightColorValues: ['black', 'white', 'grey', 'red', 'blue', 'brown', 'yellow', 'transparent'],
        lightMaterialOptions: ['хрусталь', 'ракушки', 'мрамор', 'камень', 'стекло', 'металл', 'ткань', 'кожа', 'дерево'],
        lightMaterialValues: ['crystal', 'shells', 'marble', 'stone', 'glass', 'metal', 'fabric', 'leather', 'wood'],
        lightHeightOptions: ['от 20 см', 'от 40 см', 'от 60см', 'от 70 см'],
        lightHeightValues: ['20', '40', '60', '70'],
        lightWidthOptions: ['от 20 см','от 40 см', 'от 60 см'],
        lightWidthValues: ['20', '40', '60'],
        lightLampOptions: ['от 2', 'от 4'],
        lightLampValues: ['2', '4']
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
    })

    $("#lightPrice").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [ 0, 10000 ],
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
            id: 243,
            name: 'model 243',
            descriptions: "",
            images: 'Content/items/light/1.jpg',
            lamps: 1,
            price: 2300,
            color:'transparent',
            width: 30,
            height: 50,
            material: 'metal'
        },
        {
            id: 235,
            name: 'model 235',
            descriptions: "",
            images: 'Content/items/light/2.jpg',
            lamps: 1,
            price: 3700,
            color:'yellow',
            width:51,
            height:55,
            material: 'crystal'
        },
        {
            id: 2223,
            name: 'model 2223',
            descriptions: "",
            images: 'Content/items/light/3.jpg',
            lamps: 3,
            price: 7000,
            color:'grey',
            width:56,
            height:77,
            material: 'wood',
        },
        {
            id: 2043,
            name: 'model 2043',
            descriptions: "",
            images: 'Content/items/light/4.jpg',
            lamps: 2,
            price: 2200,
            color:'grey',
            width:89,
            height:67,
            material:'metal'
        },
        {
            id: 237,
            name: 'model 237',
            descriptions: "",
            images: 'Content/items/light/5.jpg',
            lamps: 2,
            price: 6140,
            color:'yellow',
            width:56,
            height:94,
            material: 'glass'
        },
        {
            id: 286,
            name: 'model 286',
            descriptions: "",
            images: 'Content/items/light/6.jpg',
            lamps: 2,
            price: 8800,
            color:'black',
            width:44,
            height:77,
            material: 'glass'
        },
        {
            id: 277,
            name: 'model 277',
            descriptions: "",
            images: 'Content/items/light/7.jpg',
            lamps: 3,
            price: 9000,
            color:'black',
            width:30,
            height:50,
            material: 'glass'
        },
        {
            id: 232,
            name: 'model 232',
            descriptions: "",
            images: 'Content/items/light/8.jpg',
            lamps: 2,
            price: 10200,
            color:'grey',
            width:40,
            height:70,
            material: 'metal'
        },
        {
            id: 256,
            name: 'model 256',
            descriptions: "",
            images: 'Content/items/light/9.jpg',
            lamps: 2,
            price: 12800,
            color:'white',
            width:44,
            height:80,
            material: 'metal'
        },
        {
            id: 203,
            name: 'model 203',
            descriptions: "",
            images: 'Content/items/light/10.jpg',
            lamps: 2,
            price: 7300,
            color:'black',
            width: 55,
            height: 100,
            material: 'glass'
        },
        {
            id: 248,
            name: 'model 248',
            descriptions: "",
            images: 'Content/items/light/11.jpg',
            lamps: 3,
            price: 22300,
            color:'white',
            width: 34,
            height: 44,
            material: 'metal'
        },
        {
            id: 289,
            name: 'model 289',
            descriptions: "",
            images: 'Content/items/light/12.jpg',
            lamps: 2,
            price: 9400,
            color: 'white',
            width: 20,
            height: 50,
            material: 'crystal'
        }
    ]
}

lightCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];