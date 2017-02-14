'use strict';

app.controller('MoviesCtrl',['$scope', '$mdDialog', '$rootScope', '$mdToast', 'MovieService','$location', function($scope, $mdDialog, $rootScope, $mdToast, MovieService, $location) {
    
    $rootScope.shopping = false;
    $rootScope.movies = [];
    document.getElementById("movieTitle").focus();
    $scope.showLoading = false;
    $rootScope.libraryListCount = 0;
    var libraryList = MovieService.getLibrary();
    $rootScope.libraryListCount = libraryList.length;
    $rootScope.moviesLibrary = true;
    
    $scope.movieTitle = "";
    $scope.getMovie = function() {
        $scope.showLoading = true;
        
        if($scope.movieTitle != "") {
            MovieService.getMovieByName($scope.movieTitle).then((data)=>{
                if(data.Error) {
                    alert(data.Error);
                    $scope.showLoading = false;
                    return;
                }
                $rootScope.movies = [];
                //var movie = [];
                //movie.push(data)
                $rootScope.movies.push(data);// = data;
                        $scope.showLoading = false;
            })    
        } else {
            alert("Please enter to begin serach");
        } 
    }
    
    $scope.addToLibrary = function(ID) {
        MovieService.addToLibrary(ID);
    }
     
}]);

app.controller('LibraryCtrl',['$scope', '$mdDialog', '$rootScope', '$mdToast', 'MovieService','$location', function($scope, $mdDialog, $rootScope, $mdToast, MovieService, $location) {
    $rootScope.movies = [];
     $rootScope.shopping = false;
     $rootScope.moviesLibrary = true;
    
    $rootScope.libraryListCount = 0;
    var libraryList = MovieService.getLibrary();
    for(var i in libraryList) {
        $rootScope.movies.push(libraryList[i]);// = data;
    }
    
    $rootScope.libraryListCount = libraryList.length;
    $rootScope.moviesLibrary = true;
}]);