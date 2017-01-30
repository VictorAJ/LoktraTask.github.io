'use strict';

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('light-blue').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});
app.controller('HomeCtrl',function($scope, $mdDialog, $location, $rootScope) {
    
    $scope.experiences = [
        {id: 1, label: "2.10+ years hands on experience in Web applications and Hybrid Mobile App development using various Frameworks."},
        {id: 2, label: "Hands on experience in Ionic (1&2), Angular (1&2) , Framework7 and Cordova Mobile App development."},
        {id: 3, label: "Professional in handling OOPS concepts , Angular 2 & Typescript."},
        {id: 4, label: "Hands on experience on ECMA script 6 and its concepts (Like Promises, Annotatoion ,etc)."},
        {id: 5, label: "Expert in Mobile / Web UI design using HTML5,CSS3 , Bootstrap and Jquery Mobile, Angular."},
        {id: 6, label: "Experience in working Angular JS MVW architecture and expertise in services, controllers and other dependencies."},
        {id: 7, label: "Professional in Javascript(ES5 &6) and Jquery."},
        {id: 8, label: "Hands on experience in Version 2 of Ionic and Angular and expertise in component based modal."},
        {id: 9, label: "Experience working with ajax calls consuming web services , Web APIs and REST Services."},
        {id: 10, label: "Experience working with Cordova Native Plugins and Ionic Plugins.Eg( Camera, Location, File Transfer ,etc)."},
        {id: 11, label: "Experience on working with Node JS , NPM and worked on cloud based databases."},
        {id: 12, label: "Expert in problem solving and debugging."},
        {id: 13, label: "Experience on working with agile methodologies."}
    ];
    
     $scope.navigate = function(path) {
        if(path.toUpperCase() == "WISHLIST") {
            
            $location.path( '/shopping/wishList' );
        } else if(path.toUpperCase() == "HOME") {
            $location.path( '/shopping' );
        } else if(path.toUpperCase() == "CART") {
            $location.path( '/shopping/cart' );
        }
     }
    
    $rootScope.shopping = false;
    
    $scope.amountRating = 833;
    $scope.resume = false;
    $scope.amount = 50;

    $scope.goto = function (currentPage) {
        console.log(currentPage);
        if(currentPage == "resume") {
            $scope.resume = true;    
        } else {
            $scope.resume = false;
        }
        
    }
    
    $scope.currentNavItem = 'resume';
    $scope.goto('resume');
    
    $scope.showDialogMCA = function(ev) {
        $mdDialog.show({
        controller: DialogController,
        contentElement: '#dialogMCA',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
        });
    };
    
    $scope.showDialogHSC = function(ev) {
        $mdDialog.show({
        controller: DialogController,
        contentElement: '#dialogHSC',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
        });
    };
    
    $scope.showDialogBCA = function(ev) {
        $mdDialog.show({
        controller: DialogController,
        contentElement: '#dialogBCA',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
        });
    };
    
    $scope.disabled1 = Math.floor(Math.random() * 100);
    $scope.disabled2 = 0;
    $scope.disabled3 = 70;
    
    $scope.showDialogSSLC = function(ev) {
        $mdDialog.show({
        controller: DialogController,
        contentElement: '#dialogSSLC',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
        });
    };
    
    $scope.addMoney = function() {
        if($scope.amountRating < 1000) {
            $scope.amountRating = $scope.amountRating + $scope.amount;
        } else {
            $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Total amount reached $1000')
                .ariaLabel('Alert Dialog Demo')
                .ok('OK')
            );
        }
    }
    
    $scope.showAlert = function(ev) {
        $mdDialog.show(
        $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Saved Successfully')
            .ariaLabel('Alert Dialog Demo')
            .ok('OK')
            .targetEvent(ev)
        );
    };
  
  
    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
        $mdDialog.hide();
        };

        $scope.cancel = function() {
        $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
        $mdDialog.hide(answer);
        };
    }
    
    $scope.cancelDialog= function() {
        $mdDialog.cancel();
    }
    
    $scope.Share = function(ev) {
         $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Yay, I donated! on Facebook and Twitter')
                .ariaLabel('Alert Dialog Demo')
                .ok('OK')
                .targetEvent(ev)
            );
    }
  
})
