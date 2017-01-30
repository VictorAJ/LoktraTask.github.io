var app = angular.module('TaskApp', ['ngMaterial','ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "templates/home.html"
    })
    .when("/shopping", {
        templateUrl : "templates/shoppingCart.html"
    })
    .when("/shopping/wishList", {
        templateUrl : "templates/wishList.html"
    })
    .when("/shopping/cart", {
        templateUrl : "templates/cart.html"
    })
    .otherwise({
        templateUrl: "templates/home.html"
    });;
})
