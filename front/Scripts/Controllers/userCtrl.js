var userCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, UserService, FavourActionService) {
    var vm = this;

    $scope.admin = UserService.userInfo.roles.filter(function(x){return x.name == 'ADMIN'}).length;

    $scope.user = UserService.userInfo;

    $('#user_name').val($scope.user.name);
    $('#user_login').val($scope.user.login);
    $('#user_email').val($scope.user.email);

    UserService.setFavouritedList();
    $scope.selectedItems = UserService.favourList;

    UserService.setOrdersList();
    $scope.orders = UserService.ordersList;

    $scope.deleteItemFromFavour = function(id) {
        FavourActionService.deleteItem(id, ()=>{
            $scope.selectedItems = $scope.selectedItems.filter(x => x.id != id)
        });
    }

    $scope.cancelOrder = function(id) {
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/orders/' + id + '/status/CANCELLED',
            type: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            async: false, 
            error: function (res) { 
            },
            success: function (res) {
                UserService.setOrdersList();
                $scope.orders = UserService.ordersList;
            }
        });
    }

}

userCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'UserService', 'FavourActionService'];