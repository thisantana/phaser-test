var demo = {};
var starfield;
var centerX = 1280/2;
var centerY = 800/2;
var spaceship;
var defaultSpeed = 10;
var bullet, velocity = 900;
var nextShoot = 0;
var bulletRate = 200;
var asteroid;


demo.state0 = function(){}
demo.state0.prototype = {
    preload: function(){

        //Load Default Images
        game.load.image('starfield','./assets/sprites/space.png');
        game.load.spritesheet('spaceship','./assets/sprites/spaceshipsheet.png',64,64);
        game.load.image('bullet', './assets/sprites/bullet.png');
        game.load.image('asteroid', './assets/sprites/asteroid.png');
        game.load.script('BlurX', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/BlurX.js');
        game.load.script('BlurY', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/BlurY.js');
    },
    create: function(){
        game.world.setBounds(0, 0, 1280*4, 800);

        //Start Physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0, 0, 1280, 800);
        console.log('state0');
        changeStateListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //Filters
        var blurX = game.add.filter('BlurX');
        var blurY = game.add.filter('BlurY');
        blurX.blur = 1;
        blurY.blur = 1;

        //Add Background
        starfield = game.add.sprite(0,0,'starfield');
        starfield.filters = [blurX, blurY];

        //Add Asteroid

        asteroid = game.add.group();
        asteroid.enableBody = true;
        asteroid.physicsBodyType = Phaser.Physics.ARCADE;
        asteroid.createMultiple(200,'asteroid');
        asteroid.scale.setTo(0.2,0.2);

        // asteroid.filters = [blurX, blurY];

        //Spaceship Bullet
        bullet = game.add.group();
        bullet.enableBody = true;
        bullet.physicsBodyType = Phaser.Physics.ARCADE;
        bullet.createMultiple(200,'bullet');
        bullet.setAll('anchor.y', 0.5)
        bullet.filters = [blurX, blurY];
        
        //Add spaceship
        spaceship = game.add.sprite(130,centerY,'spaceship');
        spaceship.anchor.setTo(0.5,0.5);
        spaceship.scale.setTo(1.0,1.0);
        spaceship.filters = [blurX, blurY];

        //spaceship physics
        game.physics.enable(spaceship);
        spaceship.body.collideWorldBounds = true;
        
        //spaceship Animation
        spaceship.animations.add('idle', [0]);
        spaceship.animations.add('idleShooting', [1]);
        spaceship.animations.add('throttle', [2]);
        spaceship.animations.add('throttleShooting', [3]);

        //Spaceship Camera
        game.camera.follow(spaceship);
        game.camera.deadzone = new Phaser.Rectangle(centerX-300, 0, 600,1920);

    },
    update: function() {
        var moveRight = game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);
        var moveLeft = game.input.keyboard.isDown(Phaser.Keyboard.LEFT);
        var moveUp = game.input.keyboard.isDown(Phaser.Keyboard.UP);
        var moveDown = game.input.keyboard.isDown(Phaser.Keyboard.DOWN);

        //Movement Keys
        if(moveUp) {
            spaceship.y += -defaultSpeed
            spaceship.animations.play('throttle', 16, true);
        }else if(moveDown) {
            spaceship.y += defaultSpeed
            spaceship.animations.play('throttle', 16, true);
        }else{
            spaceship.animations.play('throttle', 16, true);
        }

        //Targeting
        spaceship.rotation = game.physics.arcade. game.physics.arcade.angleToPointer(spaceship);

        //Shooting Keys
        if(game.input.activePointer.isDown) {
            spaceship.animations.play('throttleShooting', 16, true);
            this.shoot();
        }
       
    },
    shoot: function() {
       if(nextShoot < game.time.now) {
            nextShoot = game.time.now + bulletRate;
            var shootBullets = bullet.getFirstDead();
            shootBullets.reset(spaceship.x, spaceship.y);
            game.physics.arcade.moveToPointer(shootBullets, velocity);
            shootBullets.rotation = spaceship.rotation;
            console.log('shooting!');
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
  