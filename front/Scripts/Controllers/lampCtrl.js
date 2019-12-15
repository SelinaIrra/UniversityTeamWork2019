var lampCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this;

    $scope.multipleSelectiumComponent = {
        lampWidthOptions: ['2 см', '4 см', '7 см', '9 см', '12см'],
        lampWidthValues: ['2', '4', '7', '9', '12'],
        lampHeightOptions: ['от 6 см', 'от 9 см', 'от 10 см'],
        lampHeightValues: ['6', '9', '10']
    };

    $scope.selectiumComponent = {
        lampSortOptions: ["по возрастанию цены", "по убыванию цены"],
        lampSortValues: ['up', 'down'],
        lampSortDefault: 'Сортировка'
    }

    $scope.sort;
    $scope.sortDirection;

    $(document).ready(function () {
        $('#lamp_sort')[0].addEventListener("changeSelectiumOption", function (event) {
            $scope.sort = 'price';
            $scope.sortDirection = event.detail.data.value == 'down' ? true : false
            event.stopPropagation();
        });
    })

    $scope.getModalData = function(index) {
        return {
            type: 'lamp',
            id: $scope.items[index].id,
            name: $scope.items[index].name,
            images: $scope.items[index].images,
            price: $scope.items[index].price,
            width: $scope.items[index].width,
            height: $scope.items[index].height,
        }
    }

    $("#lampPrice").slider({
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


    $scope.items = [
        {
            id: 343,
            name: 'model 343',
            descriptions: "",
            images: 'Content/items/lamp/1.jpg',
            lamps: 1,
            price: 2300,
            color: 'transparent',
            width: 30,
            height: 50,
            material: 'metal'
        },
        {
            id: 333,
            name: 'model 335',
            descriptions: "",
            images: 'Content/items/lamp/2.jpg',
            lamps: 1,
            price: 3700,
            color: 'yellow',
            width: 51,
            height: 55,
            material: 'crystal'
        },
        {
            id: 345,
            name: 'model 3223',
            descriptions: "",
            images: 'Content/items/lamp/3.jpg',
            lamps: 3,
            price: 7000,
            color: 'grey',
            width: 56,
            height: 77,
            material: 'wood',
        },
        {
            id: 366,
            name: 'model 3043',
            descriptions: "",
            images: 'Content/items/lamp/4.jpg',
            lamps: 2,
            price: 2200,
            color: 'grey',
            width: 89,
            height: 67,
            material: 'metal'
        },
        {
            id: 364,
            name: 'model 337',
            descriptions: "",
            images: 'Content/items/lamp/5.jpg',
            lamps: 2,
            price: 6140,
            color: 'yellow',
            width: 56,
            height: 94,
            material: 'glass'
        },
        {
            id: 363,
            name: 'model 386',
            descriptions: "",
            images: 'Content/items/lamp/6.jpg',
            lamps: 2,
            price: 8800,
            color: 'black',
            width: 44,
            height: 77,
            material: 'glass'
        },
        {
            id: 362,
            name: 'model 377',
            descriptions: "",
            images: 'Content/items/lamp/7.jpg',
            lamps: 3,
            price: 9000,
            color: 'black',
            width: 20,
            height: 40,
            material: 'glass'
        },
        {
            id: 361,
            name: 'model 332',
            descriptions: "",
            images: 'Content/items/lamp/8.jpg',
            lamps: 2,
            price: 10200,
            color: 'grey',
            width: 40,
            height: 70,
            material: 'metal'
        },
        {
            id: 342,
            name: 'model 356',
            descriptions: "",
            images: 'Content/items/lamp/9.jpg',
            lamps: 2,
            price: 12800,
            color: 'white',
            width: 44,
            height: 80,
            material: 'metal'
        },
        {
            id: 343,
            name: 'model 303',
            descriptions: "",
            images: 'Content/items/lamp/10.jpg',
            lamps: 2,
            price: 7300,
            color: 'black',
            width: 55,
            height: 100,
            material: 'glass'
        },
        {
            id: 345,
            name: 'model 348',
            descriptions: "",
            images: 'Content/items/lamp/11.jpg',
            lamps: 3,
            price: 22300,
            color: 'white',
            width: 34,
            height: 44,
            material: 'metal'
        },
        {
            id: 346,
            name: 'model 389',
            descriptions: "",
            images: 'Content/items/lamp/12.jpg',
            lamps: 2,
            price: 9400,
            color: 'white',
            width: 20,
            height: 50,
            material: 'crystal'
        }
    ]
}

lampCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];