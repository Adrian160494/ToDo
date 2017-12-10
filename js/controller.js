var app = angular.module('application',[]);

app.controller('toDoCtrl',function ($scope,baseUrl,data,$http,perPage) {

    $scope.visibilityAdder = false;
    $scope.page = 1;

    $scope.changePage = function (page) {
        $scope.page = page;
    };

   $scope.listTasks = function () {
       data.getTasks($http,baseUrl).then(function (response) {
           $scope.tasks = response.data;
           var count = Math.ceil($scope.tasks.length / perPage);
           $scope.buttonsPage = [];
           for(var i=0;i<count;i++){
               $scope.buttonsPage.push(i+1);
           }
           var mainArray = [];
           for(var n=0; n<count; n++){
               var array =[];
               for(var p=0; p<perPage; p++){
                   if($scope.tasks[(n*perPage) + p]){
                       array.push($scope.tasks[(n*perPage) + p]);
                   }
               }
               mainArray.push(array);
           }
           $scope.paginationTasks = mainArray;
       });
   };

   $scope.deleteElement = function (id) {
       data.delete($http,baseUrl,id);
       $scope.listTasks();
   };

   $scope.addNewElement = function (element) {
       console.log(element);
        data.add($http,baseUrl,element).then(function () {
            $scope.visibilityAdder = false;
            $scope.listTasks();
        })
   };

   $scope.showAdder = function () {
       $scope.visibilityAdder = true;
   };

   $scope.hideAdder = function () {
       $scope.visibilityAdder = false;
   };

    $scope.listTasks();
});