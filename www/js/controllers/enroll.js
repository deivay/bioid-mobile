angular.module('bioid-mobile.enroll.controller', [])
  .controller('EnrollCtrl', function ($scope) {
    this.data = {};
    this.data.emails = [''];
    this.EnrollSucces=false;
    $scope.enrollUser=function (){
      
    }
    $scope.newUser = function(form, ev) { 
        this.EnrollSucces=false;
      }
})