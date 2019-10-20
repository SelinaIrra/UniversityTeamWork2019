var Light = angular.module('Light', ['ngSanitize', 'ngMaterial', 'ngMessages', 'ui.bootstrap', 'ngAnimate', 'ngRoute', 'bzSlider']);

Light.factory('UtilsService', UtilsService);

Light.directive('dropdownList', DropdownList);
Light.directive('multipleSelectium', MultipleSelectium);
Light.directive('selectium', Selectium);
Light.directive('modal', modal);

Light.controller('IndexController', IndexController);
Light.controller('patronCtrl', patronCtrl);
Light.controller('cartCtrl', cartCtrl);
Light.controller('userCtrl', userCtrl);
Light.controller('lightCtrl', lightCtrl);
Light.controller('soffitCtrl', soffitCtrl);
Light.controller('lampCtrl', lampCtrl);
Light.controller('braCtrl', braCtrl);
Light.controller('torsherCtrl', torsherCtrl);
Light.controller('infoCtrl', infoCtrl);

Light.config( ['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/light', {
      templateUrl: 'light.html',
      controller: 'lightCtrl'
    })
    .when('/user', {
      templateUrl: 'user.html',
      controller: 'userCtrl'
    })
    .when('/patron', {
      templateUrl: 'patron.html',
      controller: 'patronCtrl'
    })
    .when('/soffit', {
      templateUrl: 'soffit.html',
      controller: 'soffitCtrl'
    })
    .when('/lamp', {
      templateUrl: 'lamp.html',
      controller: 'lampCtrl'
    })
    .when('/torsher', {
      templateUrl: 'torsher.html',
      controller: 'torsherCtrl'
    })
    .when('/bra', {
      templateUrl: 'bra.html',
      controller: 'braCtrl'
    })
    .when('/cart', {
      templateUrl: 'cart.html',
      controller: 'cartCtrl'
    })
    .when('/info', {
      templateUrl: 'info.html',
      controller: 'infoCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

Light.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);

Light.run (function($rootScope){
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous, reject) {
    let location = window.location.href;
    if (location.endsWith("index.html#!/") || location.endsWith("index.html") || location.endsWith("index.html/") )
        $('#mainContent').removeClass('no_display');
    else  $('#mainContent').addClass('no_display');
  })
})