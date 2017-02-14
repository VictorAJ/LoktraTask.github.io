app.service('MovieService', ['$rootScope','$mdToast','$http','$q', function ($rootScope,$mdToast,$http, $q) {
    this.getMovieByName = function(title) {
        
        var url = "//www.omdbapi.com/"
        var d = $q.defer();
        $http.get(url + "/?t="+title+"&y=&plot=short&r=json").success(function (data) {
            d.resolve(data);
        }).error(function() {
            d.reject();
        });
        return d.promise;
    }
    
    this.getLibrary = function() {
        var libraryList = JSON.parse(localStorage.getItem('library'));
        if(libraryList != null && libraryList != "undefined" &&  libraryList != undefined) {
            return libraryList;
        } else {
            return [];
        }
    };
    
    this.addToLibrary = function(movieID) {
        var libraryList = JSON.parse(localStorage.getItem('library')); 
        if(libraryList == null || libraryList == "undefined" || libraryList.length < 1) {
            var newLibraryList = [];
            
            for(var i in $rootScope.movies) {
                
                if($rootScope.movies[i].imdbID == movieID) {
                    newLibraryList.push($rootScope.movies[i]);
                    
                    var toast = $mdToast.simple()
                    .textContent('Movie added into library')
                    .action('OK')
                    .highlightAction(true)
                    .highlightClass('md-accent')
                    .position('bottom right');

                    $mdToast.show(toast).then(function(response) {
                    });
                    
                    break;
                }
            }
            
            localStorage.setItem('library',JSON.stringify(newLibraryList));
        } else {
            var libraryListAdded = [];
            libraryListAdded = JSON.parse(localStorage.getItem('library'));
            var flag = false;
            
             for(var i in libraryListAdded) {
                if(libraryListAdded[i].imdbID == movieID) {
                    
                    var toast = $mdToast.simple()
                    .textContent('Movie already exist in the library')
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
                for(var j in $rootScope.movies) {
                    if($rootScope.movies[j].imdbID == movieID) {
                        libraryListAdded.push($rootScope.movies[j]);
                        var toast = $mdToast.simple()
                        .textContent('Movie added into library')
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
            
            localStorage.setItem('library',JSON.stringify(libraryListAdded));
    
        }
        
        $rootScope.libraryListCount = JSON.parse(localStorage.getItem('library')).length;
    }
}]);
