input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (isStart) {
        Bullet = game.createSprite(OurPlane.get(LedSpriteProperty.X), 3)
    }
})
input.onButtonPressed(Button.A, function () {
    if (isStart) {
        OurPlane.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (isStart) {
        OurPlane.change(LedSpriteProperty.X, 1)
    }
})
function Init () {
    isStart = 0
    IntermissionTime = 2000
    basic.showIcon(IconNames.Happy)
    basic.pause(3000)
}
function GameLoop () {
    basic.clearScreen()
    game.setLife(5)
    game.setScore(0)
    isStart = 1
    OurPlane = game.createSprite(2, 4)
    EnemyPlane = game.createSprite(randint(0, 4), 0)
    EnemyPlane.set(LedSpriteProperty.Direction, 180)
    EnemyPlane.set(LedSpriteProperty.Brightness, 50)
    OurPlane.set(LedSpriteProperty.Brightness, 100)
    while (game.isRunning()) {
        basic.pause(IntermissionTime)
        EnemyPlane.move(1)
    }
}
let EnemyPlane: game.LedSprite = null
let IntermissionTime = 0
let OurPlane: game.LedSprite = null
let Bullet: game.LedSprite = null
let isStart = 0
Init()
GameLoop()
