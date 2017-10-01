angular.module('ContactsApp').controller('IndexController', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject){

	var ref = firebase.database().ref();
	$scope.contacts = $firebaseArray(ref);

	$scope.profile = {
		name: '',
		email: '',
		phone: ''
	};

	$scope.addForm = {
		error: false,
		success: false
	};

	

	$scope.removeContact = function(contact) {

		var ans = confirm("Are you sure you want to remove \""+contact.name+"\" from contacts?")

		if (ans) {
			$scope.contacts.$remove(contact);
		}
	}




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