'use strict';

app.controller('cartCtrl',['$scope', '$mdDialog', '$rootScope', '$mdToast', 'WishListService', '$location','CartService', function($scope, $mdDialog, $rootScope, $mdToast, WishListService, $location,CartService) {
    
    $rootScope.wishListCount = 0;
    $rootScope.cartCount = 0;
    var wishList = WishListService.getWishList();
    $rootScope.wishListCount = wishList.length;
    var cartList = CartService.getCart();
    $rootScope.cartCount = cartList.length;
    $scope.cartList = cartList;
    $scope.totAmount = 0;
    
    $scope.Remove = function(productID) {
       $scope.cartList = CartService.remove(productID);
       
        $scope.totAmount = 0;
       
       for(var i in $scope.cartList) {
            $scope.totAmount += $scope.cartList[i].quantity * $scope.cartList[i].price; 
        }
    }
    
    for(var i in $scope.cartList) {
        $scope.totAmount += $scope.cartList[i].quantity * $scope.cartList[i].price; 
    }
    
    $rootScope.navigate = function(path) {
        if(path.toUpperCase() == "WISHLIST") {
            $location.path( '/shopping/wishList' );
        } else if(path.toUpperCase() == "HOME") {
            $location.path( '/shopping' );
        }
    }
    
    $scope.changeQuantity = function(productID, quantity) {
        CartService.changeQuantity(productID, quantity);
    }
    
    $scope.removeAll = function clear(){
        
    }
    
}]);