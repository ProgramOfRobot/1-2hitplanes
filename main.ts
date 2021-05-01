input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (isStart) {
        Bullet = game.createSprite(OurPlane.get(LedSpriteProperty.X), OurPlane.get(LedSpriteProperty.Y))
        Bullet.set(LedSpriteProperty.Brightness, 100)
        while (true) {
            basic.pause(Our_Bullets_Speet)
            Bullet.change(LedSpriteProperty.X, -1)
            if (EnemyPlane.isTouching(Bullet) || Bullet.isTouching(EnemyPlane)) {
                Bullet.delete()
                ResetSpritePosition(EnemyPlane)
                game.addScore(1)
                break;
            }
            if (Bullet.get(LedSpriteProperty.X) == 0) {
                Bullet.delete()
                break;
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (isStart) {
        OurPlane.change(LedSpriteProperty.Y, -1)
    }
})
function ResetSpritePosition (sprite: game.LedSprite) {
    sprite.set(LedSpriteProperty.X, 0)
    sprite.set(LedSpriteProperty.Y, randint(0, 4))
}
input.onButtonPressed(Button.B, function () {
    if (isStart) {
        OurPlane.change(LedSpriteProperty.Y, 1)
    }
})
function Init () {
    isStart = 0
    Enemy_Planes_Speet = 1000
    Our_Bullets_Speet = 500
    basic.showIcon(IconNames.Happy)
    basic.pause(3000)
}
function GameLoop () {
    basic.clearScreen()
    game.setLife(5)
    game.setScore(0)
    isStart = 1
    OurPlane = game.createSprite(4, 2)
    EnemyPlane = game.createSprite(0, randint(0, 4))
    EnemyPlane.set(LedSpriteProperty.Direction, 90)
    while (game.isRunning()) {
        basic.pause(Enemy_Planes_Speet)
        EnemyPlane.move(1)
        if (EnemyPlane.get(LedSpriteProperty.X) == 4 || OurPlane.isTouching(EnemyPlane)) {
            game.removeLife(1)
            ResetSpritePosition(EnemyPlane)
        }
    }
}
let Enemy_Planes_Speet = 0
let EnemyPlane: game.LedSprite = null
let Our_Bullets_Speet = 0
let OurPlane: game.LedSprite = null
let Bullet: game.LedSprite = null
let isStart = 0
Init()
GameLoop()
