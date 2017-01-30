'use strict';

app.controller('WishListCtrl',['$scope', '$mdDialog', '$rootScope', '$mdToast', 'WishListService', '$location','CartService', function($scope, $mdDialog, $rootScope, $mdToast, WishListService, $location,CartService) {
    
    $rootScope.wishListCount = 0;
    $rootScope.cartCount = 0;
    var wishList = WishListService.getWishList();
    $rootScope.wishListCount = wishList.length;
    var cartList = CartService.getCart();
    $rootScope.cartCount = cartList.length;
    $scope.wishList = wishList;
    $rootScope.shopping = true;
    $scope.remove = function(productID) {
       $scope.wishList = WishListService.remove(productID);
    }
    
    $rootScope.navigate = function(path) {
        if(path.toUpperCase() == "WISHLIST") {
            $location.path( '/shopping/wishList' );
        } else if(path.toUpperCase() == "HOME") {
            $location.path( '/shopping' );
        }  else if(path.toUpperCase() == "CART") {
            $location.path( '/shopping/cart' );
        }
    }
    
     $scope.addToCart = function(productID) {
       CartService.addItem(productID);
    }
    
}]);
