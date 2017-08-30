demo.state1 = function(){}
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#00f";
        console.log('state1');
        changeStateListeners();
    },
    update: function(){}
};
