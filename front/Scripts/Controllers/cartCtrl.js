var cartCtrl = function ($scope, $sce, $timeout, $http, $modal, $rootScope, UserService, CartActionService) {
    var vm = this;  
    UserService.setCartList();

    $scope.items = UserService.cartList;

    function cartAmount() {
        if ($scope.items.length) 
            $scope.price = $scope.items.reduce(function(sum, current) {
                return sum + (current.price * current.cartCount)
            }, 0);
    }
    cartAmount();

    
    $scope.deleteItem = function(id){
        CartActionService.deleteItem(id, function(){
            UserService.setCartList();
            $scope.items = UserService.cartList;
            cartAmount();
            $scope.$apply();
        });
    }

    $scope.addItem = function(id){
        CartActionService.addItem(id, function(){
            UserService.setCartList();
            $scope.items = UserService.cartList;
            cartAmount();
            $scope.$apply();
        })
    }

    $scope.sentOrder = function() {
        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/orders',
            type: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('lightToken') 
            },
            data: JSON.stringify($scope.items.map(function(x){return {id: x.id, count: x.cartCount}})),
            error: function (res) { 
                alert('Ошибка(');
            },
            success: function (res) {
                alert('Ваш заказ оформлен, ожидайте подтверждения');
                $scope.items = [];
                cartAmount();
            }
        });
    }

}

cartCtrl.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'UserService', 'CartActionService'];