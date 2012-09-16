/**
 * Created by JetBrains WebStorm.
 * User: jiangfred
 * Date: 12-9-16
 * Time: 下午2:09
 * To change this template use File | Settings | File Templates.
 */

exports.food = function(req,res){
    var method = req.method;
    switch (method){
        case 'POST':
            var food = req.body;
            food.id = 1;
            res.send(food);
            break;

        case 'PUT':
            var foodId = req.params.id;
            console.log('PUT : '+foodId);
            res.send(food);
            break;

        case 'GET':
            var foodId = req.params.id;
            console.log('GET : '+foodId);
            res.send(food);
            break;

        case 'DELETE':
            var foodId = req.params.id;
            console.log('DELETE : '+foodId);
            res.send(food);
            break;

        default :
            break;
    }
}
