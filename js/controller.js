define (
  'controller',
  [
    'model',
    'view'
  ],

  function (model, view) {

    return {

      controller: function Controller(data, view1) {

                    var self = this;

                    view.elements.addBtn.on('click', addItem);
                    $('.item-value').on("keypress", function(event) {
                      if(event.which==13) {
                        event.preventDefault();
                        addItem();
                      }
                    });

                    view.elements.listContainer.on('click', '.item-delete', removeItem);

                    function addItem () {
                      var newItem = view.elements.input.val();
                      model.addItem(newItem);
                      view.renderList(model.data);
                      view.elements.input.val('');
                    }

                    function removeItem () {
                      var item = $(this).attr('data-value');
                      model.removeItem(item);
                      view.renderList(model.data);
                    }


                    $('ul').on('click', '.list', function () {

                      var $set = $('ul .list');
                      var newText = prompt('Please, enter updated list item');

                      var number = $set.index(this);

                      $(this).empty();
                      $(this).append(newText);

                      model.renameItem(newText, number);

                      view.renderList(model.data);
                    });
                  }
    }
  }
);
