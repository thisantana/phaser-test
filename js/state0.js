var demo = {};
var starfield;
var centerX= 1500/2;
var centerY= 1000/2;
var spaceship;
var defaultSpeed = 15;


demo.state0 = function(){}
demo.state0.prototype = {
    preload: function(){

        //Load Default Images
        game.load.image('starfield','./assets/sprites/space.png');
        game.load.spritesheet('spaceship','./assets/sprites/spaceshipsheet.png',64,64);
    },
    create: function(){
        //Start Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        // game.stage.backgroundColor = "#0f2";
        game.world.setBounds(0, 0, 1920, 1080);
        console.log('state0');
        changeStateListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //Add Background
        starfield = game.add.sprite(0,0,'starfield');
        
        //Add spaceship
        spaceship = game.add.sprite(centerX,centerY,'spaceship');
        spaceship.anchor.setTo(0.5,0.5);
        spaceship.scale.setTo(1.5,1.5);

        //spaceship physics
        game.physics.enable(spaceship);
        spaceship.body.collideWorldBounds = true;
        
        //spaceship Animation
        spaceship.animations.add('idle', [0]);
        spaceship.animations.add('dleShooting', [1]);
        spaceship.animations.add('throttle', [2]);
        spaceship.animations.add('throttleShooting', [3]);
       
        

        //spaceship Camera
        game.camera.follow(spaceship);
        game.camera.deadzone = new Phaser.Rectangle(centerX-300, 0, 600,1920);
    },
    update: function(){
        var moveRight = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
        var moveLeft = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
        var moveUp = game.input.keyboard.isDown(Phaser.Keyboard.UP);
        var moveDown = game.input.keyboard.isDown(Phaser.Keyboard.DOWN);

        //Movement Keys
        if(moveRight){
            spaceship.x += defaultSpeed;
            spaceship.scale.setTo(1.7,1.7);
            spaceship.animations.play('throttle', 16, true);
            
        }else if(moveLeft) {
            spaceship.x += -defaultSpeed
            spaceship.scale.setTo(-1.7,1.7);
            spaceship.animations.play('throttle', 16, true);
        }else if(moveUp) {
            spaceship.y += -defaultSpeed
            spaceship.animations.play('idle', 16, true);
        }else if(moveDown) {
            spaceship.y += defaultSpeed
            spaceship.animations.play('idle', 16, true);
        }else{
            spaceship.animations.play('idle', 16, true);
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
