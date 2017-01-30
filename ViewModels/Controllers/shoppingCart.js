'use strict';

app.controller('ShoppingCartCtrl',['$scope', '$mdDialog', '$rootScope', '$mdToast', 'WishListService','$location','CartService', function($scope, $mdDialog, $rootScope, $mdToast, WishListService, $location, CartService) {
    
    $rootScope.products = [
        {id:1, name:'Table Lamp', price:'1200.00', imgUrl: 'p1.jpg', iconText: 'favorite_border'},
        {id:2, name:'Dollor Chain', price:'4100.00', imgUrl: 'p3.jpg', iconText: 'favorite_border'},
        {id:3, name:'Parken Pen', price:'800.00', imgUrl: 'p4.jpg', iconText: 'favorite_border'},
        {id:4, name:'Perfume', price:'920.00', imgUrl: 'p5.jpg' , iconText: 'favorite_border'},
        {id:5, name:'Travel Bag', price:'1010.00', imgUrl: 'p6.jpg', iconText: 'favorite_border'},
        {id:6, name:'Lipstick Set', price:'870.00', imgUrl: 'p7.jpg', iconText: 'favorite_border'},
        {id:7, name:'Dollor Chain', price:'750.00', imgUrl: 'p8.jpg', iconText: 'favorite_border'},
        {id:8, name:'Pearl Chain', price:'350.00', imgUrl: 'p9.jpg', iconText: 'favorite_border'},
        {id:9, name:'Dollor Chain', price:'680.00', imgUrl: 'p10.jpg', iconText: 'favorite_border'},
        {id:10, name:'Travel Bag', price:'1100.00', imgUrl: 'p11.jpg', iconText: 'favorite_border'},
        {id:11, name:'Designer Lamp', price:'6500.00', imgUrl: 'p12.jpg', iconText: 'favorite_border'},
        {id:12, name:'Formal Shoe', price:'1250.00', imgUrl: 'p14.jpg', iconText: 'favorite_border'}
    ]
    
    $rootScope.navigate = function(path) {
        if(path.toUpperCase() == "WISHLIST") {
            
            $location.path( '/shopping/wishList' );
        } else if(path.toUpperCase() == "HOME") {
            $location.path( '/shopping' );
        } else if(path.toUpperCase() == "CART") {
            $location.path( '/shopping/cart' );
        }
    }
    
    $rootScope.wishListCount = 0;
    $rootScope.cartCount = 0;
    
    initialSetUp();
    
    function initialSetUp() {
        
        var cartList = CartService.getCart();
        var wishList = WishListService.getWishList();
        
        if(wishList != null || wishList != "undefined") {
            for(var i in wishList) {
                for(var j in $rootScope.products) {
                    if(wishList[i].id == $rootScope.products[j].id) {
                        $rootScope.products[j].iconText = wishList[i].iconText;
                    }
                }
            }
        }
        
        $rootScope.wishListCount = wishList.length;
        $rootScope.cartCount = cartList.length;
    }
    
    //localStorage.removeItem('wishList');
    
    $scope.addRemoveWishList = function(productID, iconText) {
        
        document.getElementById('icon_'+productID).innerHTML = (iconText == 'favorite_border' ? 'favorite' : 'favorite_border');
        
        for(var i in $rootScope.products) {
             if($rootScope.products[i].id == productID) {
                 $rootScope.products[i].iconText = (iconText == 'favorite_border' ? 'favorite' : 'favorite_border');
             }
        }
        
        WishListService.addItem(productID, iconText);
    }
    
    $scope.addToCart = function(productID) {
       CartService.addItem(productID);
    }
    
    $scope.buyNow = function(productID) {
        
    }
}]);