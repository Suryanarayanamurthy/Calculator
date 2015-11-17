var app = angular.module("CalcApp",['ngRoute']);
app.controller("CalcController",function($scope){
$scope.result = "";
var expression;
$scope.operand = function(operand){
    //expression += operand;
    $scope.result += operand ;
};
$scope.operator = function(operator){
    if(operator === '=')
    $scope.result = eval($scope.result);
    else
    $scope.result += operator ;

    //switch(operator) {
    //case '=':
        //result = expression;
      //  break;
    //default:
  //     result;
//}
};
});