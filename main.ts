input.onButtonPressed(Button.A, function () {
    scoreSpelerA = scoreSpelerA + 1
    basic.showString("A")
    basic.showNumber(scoreSpelerA)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    scoreSpelerA = scoreSpelerA + 1
    scoreSpelerB = scoreSpelerB + 1
    basic.showString("X")
    basic.showString("A")
    basic.showNumber(scoreSpelerA)
    basic.showString("B")
    basic.showNumber(scoreSpelerB)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    scoreSpelerB = scoreSpelerB + 1
    basic.showString("B")
    basic.showNumber(scoreSpelerB)
    basic.clearScreen()
})
let scoreSpelerB = 0
let scoreSpelerA = 0
scoreSpelerA = 0
scoreSpelerB = 0
basic.forever(function () {
    if (scoreSpelerA == 10 && scoreSpelerB == 10) {
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        scoreSpelerA = 0
        scoreSpelerB = 0
        basic.pause(100)
        basic.clearScreen()
    } else if (scoreSpelerA == 10) {
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Diamond)
        basic.showString("A")
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        scoreSpelerA = 0
        basic.pause(100)
        basic.clearScreen()
    } else if (scoreSpelerB == 10) {
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Diamond)
        basic.showString("B")
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        scoreSpelerB = 0
        basic.pause(100)
        basic.clearScreen()
    }
})
