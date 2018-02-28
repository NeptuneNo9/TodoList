angular.module('todo').directive('todoTitle', function () {
  return {
    template: '<br><h1>ToDoList</h1><br>'
  }
});
  
angular.module('todo').directive('todoItem', function () {
  return {
    templateUrl: 'todoItem.tpl.html'
  }
});

angular.module('todo').directive('todoFilters', function () {
  return {
    templateUrl: 'todoFilters.tpl.html'
  }
});

angular.module('todo').directive('todoForm', function () {
  return {
    templateUrl: 'todoForm.tpl.html'
  }
});
