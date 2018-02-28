// todoStorage : 오직 데이터를 관리하는 역할만 수행 / controller.js에 주입해서 사용

angular.module('todo').factory('todoStorage', function () {

  var TODO_DATA = 'TODO_DATA';
  var storage = {

    todos: [],

    _saveToLocalStorage: function(data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },
    
    _getFromLocalStorage: function() {
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },
    
    get: function() { // 조회
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      return storage.todos;
    },
    
    remove: function(todo) {
      var idx = storage.todos.findIndex(function (item) {
        return item.id === todo.id;
        
      })

      if (idx > -1) {
        storage.todos.splice(idx, 1)
        storage._saveToLocalStorage(storage.todos);
      }
    },
    
    add: function(newTodoTitle) {
      var newTodo = {
        id: storage.todos.length+1,
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now()
      };
      
      storage.todos.push(newTodo);
      storage._saveToLocalStorage(storage.todos);
    },
    
    update: function() {
      storage._saveToLocalStorage(storage.todos);
    }
  };
  
  return storage;
});
