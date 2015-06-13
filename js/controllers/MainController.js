app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	
	$scope.getToDos = function() {
		$http.get('http://localhost:63936/tasks')
			.success(function(data) {
				$scope.tasks = data;
			});
	}
	$scope.getToDos();
	
	$scope.addNew = function(input) {
		var index = $scope.tasks[$scope.tasks.length - 1].id + 1;
		$http.post('http://localhost:63936/tasks', { 
			id: index, 
			title: $scope.input 
			});
		console.log($scope.tasks);
		$scope.input = "";
	}
	
	$scope.delete = function() {
		var itemsToDelete = [];
		for (var i = 0; i < $scope.tasks.length; i++) {
			if ($scope.tasks[i].done == true) itemsToDelete.push(i);
		}
		for (var i = itemsToDelete.length - 1; i >= 0; i--) {
			$scope.tasks.splice(itemsToDelete[i], 1);
		}
		/*
		itemsToDelete.forEach(function(elem) {
			$http.delete('/emails/' + id)
		});
		*/
	}
}]);