input.onButtonPressed(Button.A, function () {
    basic.showString("TMP")
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    timer = 0
    while (!(input.buttonIsPressed(Button.AB))) {
        timer += 1
        basic.showString("" + (timer))
    }
    basic.showIcon(IconNames.StickFigure)
})
let timer = 0
basic.showString("Hiya")
for (let index = 0; index < 5; index++) {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.forever(function () {
	
})
