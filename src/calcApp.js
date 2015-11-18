var app = angular.module("CalcApp",['ngRoute']);
app.controller("CalcController",function($scope){
$scope.result = "";
var decimalPt = false;
var patt = /[+-/*]/;
$scope.operand = function(operand){
    $scope.result += operand ;
};

$scope.operator = function(operator){
    
    // remove redundent operator.
    //if($scope.result[$scope.result.length - 1] == ('+' || '-' || '*' || '/'))
    if(patt.test($scope.result[$scope.result.length - 1]))
    {
      $scope.result = $scope.result.slice(0, $scope.result.length - 1 );
    }
    if(operator == '=')
    {
      $scope.result =  eval($scope.result);
    }
    else
    $scope.result += operator ;
    //reset the decimal pt for nxt number.
    if(decimalPt) decimalPt =false;
};
$scope.decimalPt = function(){
    if(!decimalPt)
    {
        $scope.result += '.';
        decimalPt = true;
    }
};
$scope.clearScreen = function(){
    $scope.result = "";
};

});