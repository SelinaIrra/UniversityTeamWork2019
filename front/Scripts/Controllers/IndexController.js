var IndexController = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this;   
    vm.slides = [
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img1.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img2.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img3.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img4.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img5.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img6.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img7.jpg'}
    ];

    $scope.$on('sentModalData', function(event, data) {
        vm.itemsSrc = JSON.parse(data).images;
        vm.itemName = JSON.parse(data).name;
        vm.itemColor = JSON.parse(data).color;
        vm.itemPrice = JSON.parse(data).price;
        vm.itemMaterial = JSON.parse(data).material;
        vm.itemHeight = JSON.parse(data).height;
        vm.itemWidth = JSON.parse(data).width;
        vm.itemLamps = JSON.parse(data).lamps;
        $scope.$apply();
    });

    $scope.$on('closingModal', function(){
        vm.itemsSrc = null;
        vm.itemName = null;
        vm.itemColor = null;
        vm.itemPrice = null;
        vm.itemMaterial = null;
        vm.itemHeight = null;
        vm.itemWidth = null;
        vm.itemLamps = null;
    })

    $scope.changeAuthBlock = function(id1, id2) {
        $('#' + id2).removeClass('active');
        $('#' + id1).addClass('active');

        $('#' + id1.split('_')[0]).removeClass('no_display');
        $('#' + id2.split('_')[0]).addClass('no_display');
    }

    $scope.auth = function() {
        $('#authBtn').addClass('no_display');
        $('#userInf').removeClass('no_display');
        $scope.$broadcast('closeModal');
    }
}

IndexController.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];