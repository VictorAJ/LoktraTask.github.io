app.service('WishListService', ['$rootScope','$mdToast', function ($rootScope,$mdToast) {
    this.getWishList = function() {
        var wishList = JSON.parse(localStorage.getItem('wishList'));
         if(cartList != null && cartList != "undefined" &&  cartList != undefined) {
             return wishList;
         } else {
             return [];
         }
    };

    this.addItem = function(productID, iconText){
        var wishList = JSON.parse(localStorage.getItem('wishList'));
        
        if(wishList == null || wishList == "undefined") {
            var newWishList;
            
            for(var i in $rootScope.products) {
                
                if($rootScope.products[i].id == productID) {
                    
                   newWishList = $rootScope.products[i];
                   
                    var toast = $mdToast.simple()
                    .textContent('Product added into wishlist')
                    .action('OK')
                    .highlightAction(true)
                    .highlightClass('md-accent')
                    .position('bottom right');

                    $mdToast.show(toast).then(function(response) {
                    });
                    
                    break;
                }
            }
            
            localStorage.setItem('wishList',JSON.stringify(newWishList));
        
        } else {
            var wishListAdded = JSON.parse(localStorage.getItem('wishList'));
            var flag = false;
            
             for(var i in wishListAdded) {
                if(wishListAdded[i].id == productID) {
                    
                    if(iconText == 'favorite_border') {
                        
                        var toast = $mdToast.simple()
                        .textContent('Product already exist in the wishlist')
                        .action('OK')
                        .highlightAction(true)
                        .highlightClass('md-accent')
                        .position('bottom right');

                        $mdToast.show(toast).then(function(response) {
                        });
                        
                        flag = true;
                    } else {
                        wishListAdded.splice(i,1);
                        
                        var toast = $mdToast.simple()
                        .textContent('Product removed from the wishlist')
                        .action('OK')
                        .highlightAction(true)
                        .highlightClass('md-accent')
                        .position('bottom right');

                        $mdToast.show(toast).then(function(response) {
                        });
                        
                        flag = true;
                    }
                    break;
                }
             } 
             if(!flag) {
                for(var j in $rootScope.products) {
                    if($rootScope.products[j].id == productID) {
                        wishListAdded.push($rootScope.products[j]);
                        var toast = $mdToast.simple()
                        .textContent('Product added into wishlist')
                        .action('OK')
                        .highlightAction(true)
                        .highlightClass('md-accent')
                        .position('bottom right');

                        $mdToast.show(toast).then(function(response) {
                        });
                        break;
                    }
                }
            }
            
            localStorage.setItem('wishList',JSON.stringify(wishListAdded));
        }
        
        $rootScope.wishListCount = JSON.parse(localStorage.getItem('wishList')).length;
    }

    var addItems = function() {};

    var save = function() {};

    this.remove = function (productID) {
        var wishListAdded = JSON.parse(localStorage.getItem('wishList'));
        
         for(var i in wishListAdded) {
            if(wishListAdded[i].id == productID) {
                wishListAdded.splice(i,1);
                                
                var toast = $mdToast.simple()
                .textContent('Product removed from the wishlist')
                .action('OK')
                .highlightAction(true)
                .highlightClass('md-accent')
                .position('bottom right');

                $mdToast.show(toast).then(function(response) {
                });
                
                flag = true;
            }
        }
        
        localStorage.setItem('wishList',JSON.stringify(wishListAdded));
        $rootScope.wishListCount = JSON.parse(localStorage.getItem('wishList')).length;
        
        return JSON.parse(localStorage.getItem('wishList'));
    };

    var clear = function() {};

    var persist = function() {};

    var changeQuantity = function (){};

    var refresh = function() {};
}]);
