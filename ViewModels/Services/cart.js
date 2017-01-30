app.service('CartService', ['$rootScope','$mdToast', function ($rootScope,$mdToast) {
    this.getCart = function() {
        var cartList = JSON.parse(localStorage.getItem('cart'));
        if(cartList != null && cartList != "undefined" &&  cartList != undefined) {
            return cartList;
        } else {
            return [];
        }
        
    };

    this.addItem = function(productID){
        var cartList = JSON.parse(localStorage.getItem('cart')); 
        if(cartList == null || cartList == "undefined" || cartList.length < 1) {
            var newCartList;
            
            for(var i in $rootScope.products) {
                
                if($rootScope.products[i].id == productID) {
                    $rootScope.products[i].quantity = 1;
                    
                    newCartList = [$rootScope.products[i]];
                   
                    var toast = $mdToast.simple()
                    .textContent('Product added into cart')
                    .action('OK')
                    .highlightAction(true)
                    .highlightClass('md-accent')
                    .position('bottom right');

                    $mdToast.show(toast).then(function(response) {
                    });
                    
                    break;
                }
            }
            
            $rootScope.cartProducts = newCartList;
            localStorage.setItem('cart',JSON.stringify(newCartList));
        } else {
            var cartListAdded = JSON.parse(localStorage.getItem('cart'));
            var flag = false;
            
            for(var i in cartListAdded) {
                
                if(cartListAdded[i].id == productID) {
                    
                     cartListAdded[i].quantity =  cartListAdded[i].quantity + 1;
                     
                     var toast = $mdToast.simple()
                    .textContent('Product added into cart')
                    .action('OK')
                    .highlightAction(true)
                    .highlightClass('md-accent')
                    .position('bottom right');

                    $mdToast.show(toast).then(function(response) {
                    });
                    
                    flag = true;
                }
            }
            
            if(!flag) {
                
                  for(var j in $rootScope.products) {
                    if($rootScope.products[j].id == productID) {
                        
                        $rootScope.products[j].quantity = 1;
                        
                        cartListAdded.push($rootScope.products[j]);
                        
                         var toast = $mdToast.simple()
                        .textContent('Product added into cart')
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
            
            $rootScope.cartProducts = newCartList;
            localStorage.setItem('cart',JSON.stringify(cartListAdded));
        }  
        
        $rootScope.cartCount = JSON.parse(localStorage.getItem('cart')).length;     
    };

    var addItems = function() {};

    var save = function() {};

    this.remove = function (productID) {
        var cartListAdded = JSON.parse(localStorage.getItem('cart'));
        
         for(var i in cartListAdded) {
            if(cartListAdded[i].id == productID) {
                cartListAdded.splice(i,1);
                                
                var toast = $mdToast.simple()
                .textContent('Product removed from the cart')
                .action('OK')
                .highlightAction(true)
                .highlightClass('md-accent')
                .position('bottom right');

                $mdToast.show(toast).then(function(response) {
                });
            }
        }
        
        localStorage.setItem('cart',JSON.stringify(cartListAdded));
        $rootScope.cartCount = JSON.parse(localStorage.getItem('cart')).length;
        
        return JSON.parse(localStorage.getItem('cart'));
    };

    this.clear = function() {
        var temp = [];
        localStorage.setItem('cart',JSON.stringify(temp));
        
        $rootScope.cartCount = JSON.parse(localStorage.getItem('cart')).length;
        
        return JSON.parse(localStorage.getItem('cart'));
    };

    var persist = function() {};

    this.changeQuantity = function (productID, quantity){
        
        var cartListAdded = JSON.parse(localStorage.getItem('cart'));
        
         for(var i in cartListAdded) {
            if(cartListAdded[i].id == productID) {
                cartListAdded[i].quantity = quantity;
            }
        }
        
        localStorage.setItem('cart',JSON.stringify(cartListAdded));
        $rootScope.cartCount = JSON.parse(localStorage.getItem('cart')).length;
        
        return JSON.parse(localStorage.getItem('cart'));
        
    };

    var refresh = function() {};
}]);
