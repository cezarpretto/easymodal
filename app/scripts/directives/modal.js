'use strict';

/**
 * @ngdoc directive
 * @name easyModalApp.directive:modal
 * @description
 * # modal
 */
angular.module('easyModalApp')
  .directive('modal', function ($timeout) {
    return {
      templateUrl: 'views/modal.html',
      restrict: 'E',
      transclude: true,
      scope:{
      	mdTitulo: '@',
      	mdId: '@',
      	mdOpen: '@',
      	mdLg: '@',
      	mdShowFooter: '@',
      	mdBtnSaveFunction: '&',
      	mdBtnSaveText: '@',
        mdBtnCancelText: '@',
        mdBtnCancelFunction: '@',
      	mdBackdrop: '@'
      },
      link: function(scope, element, attrs){
      	if(attrs.mdOpen === 'true'){
      		$timeout(function(){
		    	$('#' + scope.mdId).modal('show');
		    }, 50);
      	}
      }
    };
  });
