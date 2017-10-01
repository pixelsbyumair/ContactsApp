angular.module('ContactsApp').controller('IndexController', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject){

	var ref = firebase.database().ref();
	$scope.contacts = $firebaseArray(ref);

	$scope.profile = {
		id: '',
		name: '',
		email: '',
		phone: ''
	};

	$scope.addForm = {
		error: false,
		success: false
	};

	$scope.editForm = {
		error: false,
		success: false
	};



	$scope.editContact = function(contact) {
		//console.log(contact);

		$scope.profile = {
			id: contact.$id,
			name: contact.name,
			email: contact.email,
			phone: contact.phone
		};
	}


	$scope.changeContact = function(contact) {

		// getting record first
		var id = $scope.profile.id;
		var record = $scope.contacts.$getRecord(id);
	
		record.name = $scope.profile.name;
		record.email = $scope.profile.email;
		record.phone = $scope.profile.phone;


		//saving the record to database
		$scope.contacts.$save(record).then(function(ref){
			
			$('#editModal').modal('toggle');
			$scope.profile = {
				id: '',
				name: '',
				email: '',
				phone: ''
			};
		});
	}
	

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

			$('#myModal').modal('toggle');

			$scope.profile = {
				name: '',
				email: '',
				phone: ''
			};
		});

		return false;
	}
}]);