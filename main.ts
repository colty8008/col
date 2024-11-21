input.onButtonPressed(Button.A, function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        record.playAudio(record.BlockingState.Blocking)
    }
})
basic.forever(function () {
	
})
