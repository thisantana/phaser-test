var demo = {};
demo.state0 = function(){}
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#000";
        console.log('state0');
        game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
        game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);
    },
    update: function(){}
};

function changeState(i,stateNum) {
    game.state.start('state'+stateNum);
    console.log(stateNum);
}