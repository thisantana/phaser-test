demo.state3 = function(){}
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#952';
        console.log('state3');
        changeStateListeners();
    },
    update: function(){}
};