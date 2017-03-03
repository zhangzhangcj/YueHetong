/**
 * Created by zhchj on 2016/8/10.
 */
//ÂÖ²¥Í¼js
angular.module("firstYue",["ng"]).controller("firstCon",function($scope,$interval){
  $scope.imgSrc="1.jpg";
  $scope.prev=function(){
    var num=parseInt($scope.imgSrc.substring(0,$scope.imgSrc.indexOf(".")));
    num=num<3?num+1:1
    $scope.imgSrc=num+".jpg";
  }
  $scope.next=function(){
    var num=parseInt($scope.imgSrc.substring(0,$scope.imgSrc.indexOf(".")));
    num=num>1?num-1:3
    $scope.imgSrc=num+".jpg";
  }
  $interval($scope.next,2000);
});
//ÂÖ²¥Í¼js½áÊø