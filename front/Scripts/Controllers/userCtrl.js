var userCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this;
    $scope.selectedItems = [
        {
            id: 361,
            name: 'model 332',
            descriptions: "",
            images: 'Content/items/lamp/8.jpg',
            lamps: 2,
            price: '10200',
            color: 'grey',
            width: 40,
            height: 70,
            material: 'metal'
        },
        {
            id: 486,
            name: 'model 486',
            descriptions: "",
            images: 'Content/items/patron/6.jpg',
            lamps: 2,
            price: '8800',
            color: 'black',
            width: 44,
            height: 77,
            material: 'glass'
        }
    ]

    $scope.user = {
        name: 'user',
        login: 'user_login',
        phone: '+7-924-322-52-12',
        address: 'Saratov, Moskovskaya street'
    }

    console.log('lt,bk')
    $('#user_name').val($scope.user.name);
    $('#user_login').val($scope.user.login);
    $('#user_phone').val($scope.user.phone);
    $('#user_address').val($scope.user.address);

}

userCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];