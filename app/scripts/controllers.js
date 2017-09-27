angular.module('ContactsApp').controller('IndexController', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject){



	var ref = firebase.database().ref();

	$scope.contacts = $firebaseArray(ref);
	$scope.object = $firebaseObject(ref);

	console.log($scope.object);
}]);