var cartCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this;  
    $scope.items = [
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
            material: 'metal',
            count: 1
        },
        {
            id: 2223,
            name: 'model 2223',
            descriptions: "",
            images: 'Content/items/light/3.jpg',
            lamps: 3,
            price: '7000',
            color:'grey',
            width:56,
            height:77,
            material: 'wood',
            count: 2
        }
    ]

    $scope.price = $scope.items.reduce(function(sum, current) {
        return sum + (current.price * current.count)
    }, 0);

}

cartCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];