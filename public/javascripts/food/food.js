/**
 * Created with JetBrains WebStorm.
 * User: marshal
 * Date: 12-9-16
 * Time: 下午7:34
 * To change this template use File | Settings | File Templates.
 */

var marshal = {
    init:function () {
    }
}
$(marshal.init());

(function (marshal) {
    var Food = Backbone.Model.extend({});
    var Foods = Backbone.Collection.extend({
        model:Food,
        url:'/allFoods'
    });

    var FoodView = Backbone.View.extend({
        render:function () {
            var template = Handlebars.compile($('#food_template').html());
            $(template(this.model.toJSON())).appendTo(this.$el);
            return this;
        }
    });
    var FoodFormView=Backbone.View.extend({
        render:function(){
            var template = Handlebars.compile($('#food_form_template').html());
            $(template()).appendTo(this.$el);
            return this;
        }
    });
    var FoodsView = Backbone.View.extend({
        className:'food',
        initialize:function () {
            var view = this;
            this.collection.on('reset', function (collection) {
                view.render();
                collection.each(function (model) {
                    collection.trigger('add', model);
                });
            });
            this.collection.on('add',function(model){
                new FoodView({model:model}).render().$el.appendTo(view.$el);
            });
            this.collection.fetch();
        },
        render:function () {
            this.$el.empty();
            var template = Handlebars.compile($('#foods_template').html());
            $(template()).appendTo(this.$el);
            return this;
        }
    });
    var FoodRouter = Backbone.Router.extend({
        routes:{
            'list':'list',
           'edit':'edit',
            '*actions':'list'
        },
        list:function () {
            $('#app').empty();
            new FoodsView({collection:new Foods()}).$el.appendTo('#app');
        },
        edit:function(){
            $('#app').empty();
            new FoodFormView().render().$el.appendTo('#app');
        }
    });

    marshal.Food = Food;
    marshal.Foods = Foods;
    marshal.FoodView = FoodsView;
    marshal.FoodsView = FoodsView;
    marshal.FoodRouter = FoodRouter;

})(marshal);