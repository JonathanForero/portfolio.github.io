app.directive('installApp', function() {
  return {
    restrict: 'E',
    scope: {},
    template: '<button class="btn btn-active" ng-click="download()">{{ buttonText }}</button>',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,
      scope.download = function() {
        element.toggleClass('btn-active');
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    }
  };
});