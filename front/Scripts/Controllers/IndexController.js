var IndexController = function ($scope, $sce, $timeout, $http, $modal, $rootScope) {
    var vm = this;   
    vm.slides = [
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img0.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img1.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img2.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img3.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img4.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img5.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img6.jpg'},
        {'title': '', 'class': 'animation-fade', 'image': 'Content/img/img7.jpg'}
    ];
}
/// modal share project end
IndexController.$inject = ['$scope', '$sce', '$timeout', '$http', '$modal', '$rootScope'];