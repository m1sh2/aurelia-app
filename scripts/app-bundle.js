define('app',["require", "exports", "./todo", "./storage.service"], function (require, exports, todo_1, storage_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.heading = 'Aurelia Todos Example';
            this.todos = storage_service_1.storage.get('au-todos') || [];
            this.todoDescription = '';
            this.todoType = 'story';
            if (!storage_service_1.storage.get('au-todos')) {
                storage_service_1.storage.set('au-todos', JSON.stringify([
                    { 'description': 'some', 'done': false, 'type': 'story' },
                    { 'description': 'here!', 'done': false, 'type': 'bug' },
                    { 'description': 'thing', 'done': true, 'type': 'story' }
                ]));
                this.todos = storage_service_1.storage.get('au-todos');
            }
        }
        App.prototype.addTodo = function () {
            if (this.todoDescription) {
                this.todos.push(new todo_1.Todo(this.todoDescription, this.todoType));
                storage_service_1.storage.set('au-todos', this.todos);
                this.todoDescription = '';
                this.todoType = 'story';
            }
        };
        App.prototype.removeTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            if (index !== -1) {
                this.todos.splice(index, 1);
                storage_service_1.storage.set('au-todos', this.todos);
            }
        };
        App.prototype.check = function (todo, isDone) {
            todo.done = isDone;
            storage_service_1.storage.set('au-todos', this.todos);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQU1FO1lBTEEsWUFBTyxHQUFXLHVCQUF1QixDQUFDO1lBQzFDLFVBQUssR0FBZSx5QkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEQsb0JBQWUsR0FBVyxFQUFFLENBQUM7WUFDN0IsYUFBUSxHQUFXLE9BQU8sQ0FBQztZQUd6QixFQUFFLENBQUMsQ0FBQyxDQUFDLHlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IseUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ3JDLEVBQUMsYUFBYSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUM7b0JBQ2xELEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7b0JBQ2pELEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUM7aUJBQ25ELENBQUMsQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcseUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNILENBQUM7UUFFRCxxQkFBTyxHQUFQO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELHlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQztRQUVELHdCQUFVLEdBQVYsVUFBVyxJQUFJO1lBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1Qix5QkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDSCxDQUFDO1FBRUQsbUJBQUssR0FBTCxVQUFNLElBQUksRUFBRSxNQUFNO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ25CLHlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNILFVBQUM7SUFBRCxDQXRDQSxBQXNDQyxJQUFBO0lBdENZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGhlYWRpbmc6IHN0cmluZyA9ICdBdXJlbGlhIFRvZG9zIEV4YW1wbGUnO1xuICB0b2RvczogQXJyYXk8YW55PiA9IHN0b3JhZ2UuZ2V0KCdhdS10b2RvcycpIHx8IFtdO1xuICB0b2RvRGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xuICB0b2RvVHlwZTogc3RyaW5nID0gJ3N0b3J5JztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXN0b3JhZ2UuZ2V0KCdhdS10b2RvcycpKSB7XG4gICAgICBzdG9yYWdlLnNldCgnYXUtdG9kb3MnLCBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIHsnZGVzY3JpcHRpb24nOidzb21lJywnZG9uZSc6ZmFsc2UsJ3R5cGUnOidzdG9yeSd9LFxuICAgICAgICB7J2Rlc2NyaXB0aW9uJzonaGVyZSEnLCdkb25lJzpmYWxzZSwndHlwZSc6J2J1Zyd9LFxuICAgICAgICB7J2Rlc2NyaXB0aW9uJzondGhpbmcnLCdkb25lJzp0cnVlLCd0eXBlJzonc3RvcnknfVxuICAgICAgXSkpO1xuICAgICAgdGhpcy50b2RvcyA9IHN0b3JhZ2UuZ2V0KCdhdS10b2RvcycpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZG8oKSB7XG4gICAgaWYgKHRoaXMudG9kb0Rlc2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvZG8odGhpcy50b2RvRGVzY3JpcHRpb24sIHRoaXMudG9kb1R5cGUpKTtcbiAgICAgIHN0b3JhZ2Uuc2V0KCdhdS10b2RvcycsIHRoaXMudG9kb3MpO1xuICAgICAgdGhpcy50b2RvRGVzY3JpcHRpb24gPSAnJztcbiAgICAgIHRoaXMudG9kb1R5cGUgPSAnc3RvcnknO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRvZG8odG9kbykge1xuICAgIGxldCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBzdG9yYWdlLnNldCgnYXUtdG9kb3MnLCB0aGlzLnRvZG9zKTtcbiAgICB9XG4gIH1cblxuICBjaGVjayh0b2RvLCBpc0RvbmUpIHtcbiAgICB0b2RvLmRvbmUgPSBpc0RvbmU7XG4gICAgc3RvcmFnZS5zZXQoJ2F1LXRvZG9zJywgdGhpcy50b2Rvcyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('storage.service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StorageService = (function () {
        function StorageService() {
        }
        StorageService.prototype.set = function (key, data) {
            key = key || prompt('Key:');
            data = data || prompt('Data:');
            if (typeof key === 'undefined') {
                console.error('No key');
                return false;
            }
            if (typeof data === 'undefined') {
                console.error('No data');
                return false;
            }
            if (typeof data !== 'string') {
                data = JSON.stringify(data);
            }
            localStorage.setItem(key, data);
        };
        StorageService.prototype.get = function (key) {
            if (typeof key === 'undefined') {
                console.error('No data');
                return false;
            }
            var data = localStorage.getItem(key);
            if (!data) {
                console.error('No data');
                return false;
            }
            var dataFormatted = JSON.parse(data);
            if (!dataFormatted) {
                console.error('Wrong data');
                return false;
            }
            return dataFormatted;
        };
        StorageService.prototype.remove = function (key) {
            key = key || prompt('Key:');
            if (typeof key === 'undefined') {
                console.error('No key');
                return false;
            }
            if (!localStorage.getItem(key)) {
                console.error('No data found');
                return false;
            }
            localStorage.removeItem(key);
        };
        return StorageService;
    }());
    exports.StorageService = StorageService;
    exports.storage = new StorageService();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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ZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2V0KGtleSwgZGF0YSkge1xuICAgIGtleSA9IGtleSB8fCBwcm9tcHQoJ0tleTonKTtcbiAgICBkYXRhID0gZGF0YSB8fCBwcm9tcHQoJ0RhdGE6Jyk7XG5cbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGtleScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhKTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZGF0YScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGFGb3JtYXR0ZWQgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgaWYgKCFkYXRhRm9ybWF0dGVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXcm9uZyBkYXRhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFGb3JtYXR0ZWQ7XG4gIH1cblxuICByZW1vdmUoa2V5KSB7XG4gICAga2V5ID0ga2V5IHx8IHByb21wdCgnS2V5OicpO1xuXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBrZXknKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEgZm91bmQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2VTZXJ2aWNlKCk7XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('todo',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Todo = (function () {
        function Todo(description, type) {
            this.description = description;
            this.done = false;
            this.type = type;
        }
        return Todo;
    }());
    exports.Todo = Todo;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFLRSxjQUFZLFdBQVcsRUFBRSxJQUFJO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUM7UUFDSCxXQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSxvQkFBSSIsImZpbGUiOiJ0b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkb25lOiBib29sZWFuO1xuICB0eXBlOiBzdHJpbmc7XG4gIFxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgdHlwZSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><div class=\"container\"><div class=\"well\"><h1>${heading}</h1></div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"well\"><form class=\"form-inline\" submit.trigger=\"addTodo()\"><div class=\"form-group\"><div class=\"input-group\"><label for=\"todoDescription\" class=\"input-group-addon\">Title</label><input type=\"text\" class=\"form-control\" id=\"todoDescription\" placeholder=\"Todo title or description\" size=\"19\" value.bind=\"todoDescription\"></div><select value.bind=\"todoType\" class=\"form-control\"><option value=\"story\">Story</option><option value=\"bug\">Bug</option></select><button class=\"btn btn-sm btn-success\" type=\"submit\"><span class=\"glyphicon glyphicon-plus\"></span></button></div></form></div></div><div class=\"col-sm-8\"><table class=\"table\"><tr repeat.for=\"todo of todos\" class=\"${todo.type === 'story'? 'bg-info' : 'bg-danger'}\"><td width=\"20\"><span if.bind=\"todo.done\" class=\"glyphicon glyphicon-check\" click.trigger=\"check(todo, false)\"></span> <span if.bind=\"!todo.done\" class=\"glyphicon glyphicon-unchecked\" click.trigger=\"check(todo, true)\"></span></td><td><span css=\"text-decoration: ${todo.done ? 'line-through' : 'none'}\">${todo.description} ${todo.type}</span></td><td width=\"30\"><button class=\"btn btn-xs btn-danger\" click.trigger=\"removeTodo(todo)\"><span class=\"glyphicon glyphicon-remove\"></span></button></td></tr></table></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map