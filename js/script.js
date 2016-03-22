
var startStopVary = 'Start';
var pauseTimeDisplay = 0;
var score = 0;
var timerId = 0;
var startStopSetInterv;  // for on/off setInterval
var startStopDisplaySetInterv;  // for on/off setInterval
var COUNT_START = 0; 
var currentTime = 0;
var stopСounter = 0;
var mls =0;

function beginCounter() {
    cData = new Date();
    currentTime = cData.getTime();
    score = currentTime - COUNT_START;
};

function stopwatchDisplay() {
    var t = parseInt(score);
    var milliseconds = Math.floor((t % 1000)) + 000;
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    milliseconds = (milliseconds < 10 ? '00' + milliseconds : milliseconds);
    seconds = (seconds < 10 ? '0' + seconds : seconds);
    minutes = (minutes < 10 ? '0' + minutes : minutes);
    hours = (hours < 10 ? '0' + hours : hours);
    timerId = hours + ":" + minutes + ":" + seconds; 
    document.getElementById('stopwatch__display').value = timerId;
    document.getElementById('stopwatch__mls').value =  milliseconds;
    mls = milliseconds;
};

function stopwatchOn() {
    data = new Date();
    COUNT_START = data.getTime() - pauseTimeDisplay;
    startStopSetInterv = setInterval("this.beginCounter()", 6);
    startStopDisplaySetInterv = setInterval("this.stopwatchDisplay()", 12);
    startStopVary = ( startStopVary == 'Start' ? 'Pause' : 'Start');
    document.getElementById('stopwatch__start_stop_btn').setAttribute("value", startStopVary);
};

function stopwatchOff() {
    pauseTimeDisplay = currentTime - COUNT_START;
    clearInterval(startStopSetInterv);
    clearInterval(startStopDisplaySetInterv);
    startStopVary = ( startStopVary == 'Pause' ? 'Continue' : 'Pause');
    document.getElementById('stopwatch__start_stop_btn').setAttribute("value", startStopVary);
};

function onOff() {
    if (startStopVary == 'Start') {
        return stopwatchOn();
    } 
	else if (startStopVary == 'Continue') {
        return stopwatchOn();
    } 
	else {
        return stopwatchOff();
    }
};

function clearСlock() {
    startStopVary = 'Start';
    stopСounter = 0;
    score = 0;
    mls =0;
    timerId = 0;
    pauseTimeDisplay = 0;
    clearInterval(startStopSetInterv);
    clearInterval(startStopDisplaySetInterv);
    document.getElementById('stopwatch__display').value = "00:00:00";
	document.getElementById('stopwatch__mls').value = "0";
    document.getElementById('stopwatch__start_stop_btn').setAttribute("value", startStopVary);
};

document.getElementById('stopwatch__start_stop_btn').addEventListener("click", onOff);
document.getElementById('stopwatch__clear_btn').addEventListener("click", clearСlock);

