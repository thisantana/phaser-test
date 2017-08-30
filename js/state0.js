var demo = {};
var centerX= 1500/2;
var centerY= 1000/2;
var aircraft;
var defaultSpeed = 15;


demo.state0 = function(){}
demo.state0.prototype = {
    preload: function(){

        //Load Default Images
        game.load.image('starfield','./assets/sprites/space.png');
        game.load.image('aircraft','./assets/sprites/Aircraft2.png');
    },
    create: function(){
        game.stage.backgroundColor = "#0f2";
        console.log('state0');
        changeStateListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.add.sprite(0,0,'starfield');
        aircraft = game.add.sprite(centerX,centerY,'aircraft');
        aircraft.anchor.setTo(0.5,0.5);
    },
    update: function(){
        var moveRight = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
        var moveLeft = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
        var moveUp = game.input.keyboard.isDown(Phaser.Keyboard.UP);
        var moveDown = game.input.keyboard.isDown(Phaser.Keyboard.DOWN);

        //Movement Keys
        if(moveRight){
            aircraft.x += defaultSpeed;
        }else if(moveLeft) {
            aircraft.x += -defaultSpeed
        }else if(moveUp) {
            aircraft.y += -defaultSpeed
        }else if(moveDown) {
            aircraft.y += defaultSpeed
        }
    }
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
