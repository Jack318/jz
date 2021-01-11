input.onButtonPressed(Button.A, function () {
    basic.showString("TMP")
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    timer = 0
    while (true) {
        timer += 1
        basic.showString("" + (timer))
        if (input.logoIsPressed()) {
            break;
        } else {
            continue;
        }
    }
    basic.showIcon(IconNames.StickFigure)
    basic.pause(5000)
    basic.showString("BYE")
})
let timer = 0
basic.showString("Hiya")
music.playMelody("C5 B A G F E D C ", 120)
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.clearScreen()
}
basic.forever(function () {
	
})
