angular.module('ContactsApp').controller('IndexController', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject){

	$scope.profile = {
		name: '',
		email: '',
		phone: ''
	};

	$scope.addForm = {
		error: false,
		success: false
	};

	var ref = firebase.database().ref();
	$scope.contacts = $firebaseArray(ref);
	
	//$scope.object = $firebaseObject(ref);


	$scope.addContact = function() {
		

		$scope.contacts.$add({
			name: $scope.profile.name,
			email: $scope.profile.email,
			phone: $scope.profile.phone
		
		}).then(function(ref){
			console.log('profile added');
			//var id = ref.key();
			//console.log("Contact "+id+" added!");
			$scope.addForm.success = true;

			$scope.profile = {
				name: '',
				email: '',
				phone: ''
			};
		});

		return false;
	}
}]);