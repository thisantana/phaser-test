demo.state8 = function(){}
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff2';
        console.log('state8');
        changeStateListeners();
    },
    update: function(){}
};