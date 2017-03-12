require (
  [
  'model',
  'view',
  'controller'
  ],

function (model, view, controller) {

  var firstToDoList = ['learn javascript', 'learn html', 'make coffee']

  var data = model.model(firstToDoList);

  var view1 = view.view(data);

  var controller1 = controller.controller(data, view1);

});
