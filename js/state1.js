var demo = {};
demo.state1 = function(){}
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#000";
        console.log('state1');
    },
    update: function(){}
};
