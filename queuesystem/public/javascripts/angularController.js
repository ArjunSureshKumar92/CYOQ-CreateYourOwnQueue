angular.module('queueApp', [])
  .controller('MainController', function() {
    var main = this;
    main.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
      main.addTodo = function() {
        main.todos.push({text:main.todoText, done:false});
        main.todoText = '';
    };
 
    main.remaining = function() {
      var count = 0;
      angular.forEach(main.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    main.archive = function() {
      var oldTodos = main.todos;
      main.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) main.todos.push(todo);
      });
    };
  });