function pad0(value){
  let result = value.toString();
  if (result.length < 2){
    result = '0' + result;
  }
  return result;
}

class Stopwatch {
  constructor(display) {
    this.running = false;
    this.display = display;
    this.reset();
    this.print(this.times);
  }

  reset(){
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  print(){
    this.display.innerText = this.format(this.times);
  }

  format(times){
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(times.miliseconds)}`;
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }

  calculate() {
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100){
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60){
      this.time.minutes += 1;
      this.time.seconds = 0;
    }
  }

  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  restart(){
    if(this.running){
      this.stop();
    }
      this.reset();
      this.print();
    }


  addToList(){
     this.display.innerText += `\n ${this.format(this.times)}`;
   }
}
//
//   clearList(){
//     console.log('');
//   }
// }

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

var startButton = document.getElementById('start');
startButton.addEventListener('click',stopwatch.start.bind(stopwatch));
var stopButton = document.getElementById('stop');
stopButton.addEventListener('click',stopwatch.stop.bind(stopwatch));
var resetButton = document.getElementById('restart');
resetButton.addEventListener('click',stopwatch.restart.bind(stopwatch));
var addButton = document.getElementById('addToList');
addButton.addEventListener('click', stopwatch.addToList.bind(stopwatch));
var clearList = document.getElementById('clearList');
clearList.addEventListener('click',stopwatch.clearList.bind(stopwatch));
