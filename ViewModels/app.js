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
     .when("/movies", {
        templateUrl : "templates/moviesHome.html"
    })
     .when("/movies/library", {
        templateUrl : "templates/library.html"
    })
    .otherwise({
        templateUrl: "templates/home.html"
    });;
})
