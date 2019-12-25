var cartCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, UserService, CartActionService) {
    var vm = this;  
    UserService.setCartList();

    $scope.items = UserService.cartList;

    function cartAmount() {
        if ($scope.items.length) 
            $scope.price = $scope.items.reduce(function(sum, current) {
                return sum + current.price
            }, 0);
    }
    cartAmount();

    
    $scope.deleteItem = function(id){
        CartActionService.deleteItem(id, function(){ 
            $scope.items = $scope.items.filter(function(x){return x.id != id});
            cartAmount();
            $scope.$apply();
        });
    }

    $scope.sentOrder = function() {
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/orders',
            type: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            data: JSON.stringify($scope.items.map(x => x.id)),
            error: function (res) { 
                alert('Ошибка(');
            },
            success: function (res) {
                alert('Ваш заказ оформлен. Ждите.. чуда)');
                $scope.items = [];
                cartAmount();
            }
        });
    }

}

cartCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'UserService', 'CartActionService'];