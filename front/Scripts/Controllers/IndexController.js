var IndexController = function ($scope, $sce, $timeout, $http, $modal, $rootScope, UserService, FavourActionService, CartActionService, ItemsService) {
    var vm = this;
    vm.selectedItemId = null;
    vm.userIn = localStorage.getItem('lightToken') ;

    vm.slides = [
        { 'title': '', 'class': 'animation-fade', 'image': 'Content/img/img1.jpg' },
        { 'title': '', 'class': 'animation-fade', 'image': 'Content/img/img2.jpg' },
        { 'title': '', 'class': 'animation-fade', 'image': 'Content/img/img3.jpg' },
        { 'title': '', 'class': 'animation-fade', 'image': 'Content/img/img4.jpg' },
        { 'title': '', 'class': 'animation-fade', 'image': 'Content/img/img5.jpg' },
        { 'title': '', 'class': 'animation-fade', 'image': 'Content/img/img6.jpg' },
        { 'title': '', 'class': 'animation-fade', 'image': 'Content/img/img7.jpg' }
    ];

    $scope.$on('sentModalData', function (event, data) {
        vm.itemInCart = false;
        vm.itemInFavour = false;

        vm.itemsSrc = JSON.parse(data).item.image;
        vm.itemName = JSON.parse(data).item.name;
        vm.itemColor = JSON.parse(data).item.color;
        vm.itemPrice = JSON.parse(data).item.price;
        vm.itemMaterial = JSON.parse(data).item.material;
        vm.itemHeight = JSON.parse(data).item.height;
        vm.itemWidth = JSON.parse(data).item.width;
        vm.itemLamps = JSON.parse(data).item.lampCount;
        vm.itemInCart = JSON.parse(data).item.inCart;
        vm.itemInFavour = JSON.parse(data).item.inFavourites;
        vm.selectedItemId = JSON.parse(data).item.id;
        $scope.$apply();
    });

    vm.addToFavour = function() {
        FavourActionService.addItem(vm.selectedItemId, ()=>{alert('Товар добавлен в избранное')})
        vm.itemInFavour = true;
    }

    vm.addToCart = function() {
        CartActionService.addItem(vm.selectedItemId, ()=>{alert('Товар добавлен в корзину')})
        vm.itemInCart = true;
    }

    $scope.$on('closingModal', function () {
        vm.itemsSrc = null;
        vm.itemName = null;
        vm.itemColor = null;
        vm.itemPrice = null;
        vm.itemMaterial = null;
        vm.itemHeight = null;
        vm.itemWidth = null;
        vm.itemLamps = null;
        $scope.$broadcast('clearModalData');
    })

    $scope.changeAuthBlock = function (id1, id2) {
        $('#' + id2).removeClass('active');
        $('#' + id1).addClass('active');

        $('#' + id1.split('_')[0]).removeClass('no_display');
        $('#' + id2.split('_')[0]).addClass('no_display');
    }

    UserService.setUserInfo();

    $scope.auth = function(enter) {
        let data;
        if (enter) {
            data = JSON.stringify({ login: $('#loginIn').val(), password: $('#passIn').val() })
        } else {
            if ($('#auth_pass').val() != $('#auth_pass1').val()) {
                alert('пароли не совпадают');
                return;
            }
            if ($('#auth_pass').val() != '' && $('#auth_login').val() != ''  && $('#auth_name').val() != ''  && $('#auth_email').val() != '' ) {
                data = JSON.stringify({ 
                    login: $('#auth_login').val(), 
                    password: $('#auth_pass').val(),
                    email: $('#auth_email').val(),
                    name: $('#auth_name').val() 
                })
            } else {
                alert('заполните поля');
                return;
            }
        }

        $.ajax({
            url: 'https://lightingstore-server.herokuapp.com/users/' + (enter ? 'sign-in' : 'sign-up'),
            type: "POST",
            data: data,
            headers: {
                "Content-Type": "application/json"
            },
            dataType: 'json',
            error: function (res) { 
                alert('попробуйте еще раз)');
            },
            success: function (res) {
                localStorage.setItem('lightToken', res.token); 
                $('#authBtn').addClass('no_display');
                $('#userInf').removeClass('no_display');
                UserService.setUserInfo();
                vm.userInf = UserService.userInfo;
                $('#mainContent').removeClass('no_display');
                vm.userIn = localStorage.getItem('lightToken');
                $scope.$apply();
            }
        });
    }

}

IndexController.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope', 'UserService', 'FavourActionService', 'CartActionService', 'ItemsService'];