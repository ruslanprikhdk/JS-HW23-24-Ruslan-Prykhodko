define (
  'view',
  [
  'model'
  ],

  function (model) {

    return {

      view: function View(data) {

              var self = this;

              function init () {

                var wrapper = tmpl($('#wrapper-template').html());
                $('body').append(wrapper);

                self.elements = {
                  input: $('.item-value'),
                  addBtn: $('.item-add'),
                  listContainer: $('.item-list')
                };

                self.renderList(model.data);
              };


              self.renderList = function (data) {

                self.renameItem = function(item) {

                  var index2 = self.data.indexOf(item);

                  self.data[index2] = newText;

                }

                var list = tmpl($('#list-template').html(), {data: data});
                self.elements.listContainer.html(list);

              };
      init();

            }
      }
  }

);
