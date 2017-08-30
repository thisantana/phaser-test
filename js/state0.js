var demo = {};
demo.state0 = function(){}
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#000";
        console.log('state0');
        changeStateListeners();
        
    },
    update: function(){}
};

function changeState(i,stateNum) {
    console.log(i);
    game.state.start('state'+stateNum);
}

function keyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function changeStateListeners() {
    keyCallback(Phaser.Keyboard.ONE, changeState, 1);
    keyCallback(Phaser.Keyboard.TWO, changeState, 2);
    keyCallback(Phaser.Keyboard.THREE, changeState, 3);
    keyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    keyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    keyCallback(Phaser.Keyboard.SIX, changeState, 6);
    keyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    keyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    keyCallback(Phaser.Keyboard.NINE, changeState, 9);
}
