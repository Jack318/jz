input.onButtonPressed(Button.A, function () {
    basic.showString("TMP")
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    timer = 0
    while (!(input.buttonIsPressed(Button.B))) {
        timer += 1
        basic.showString("" + (timer))
        break;
    }
    basic.showIcon(IconNames.StickFigure)
})
let timer = 0
basic.showString("Hiya")
music.playMelody("C5 B A G F E D C ", 120)
for (let index = 0; index < 5; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Chessboard)
    basic.clearScreen()
}
basic.forever(function () {
	
})
