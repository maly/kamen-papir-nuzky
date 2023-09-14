let h = 0
input.onGesture(Gesture.Shake, function () {
    h = randint(1, 3)
    if (h == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1, 511, 255, 255, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    } else if (h == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 3411, 3946, 255, 255, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 22, 22, 255, 255, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
basic.forever(function () {
	
})
