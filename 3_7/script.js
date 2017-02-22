function pad0(value){
  let result = value.toString();
  if (result.length < 2){
    result = '0' + result;
  }
  return result;
}

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      times: [],
    };
  }
  reset(){
    this.setState({
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    });
  }
  format(){
    return `${pad0(this.state.minutes)}:${pad0(this.state.seconds)}:${pad0(this.state.miliseconds)}`;
  }
  start() {
    if (!this.state.running) {
      this.setState({running: true});
      this.watch = setInterval(() => this.step(), 10);
    }
  }
  step() {
    if (!this.state.running) return;
    this.calculate();
  }
  calculate() {
    this.setState({miliseconds: this.state.miliseconds + 1});
    if (this.state.miliseconds >= 100){
      this.setState({seconds: this.state.seconds + 1});
      this.setState({miliseconds: 0});
    }
    if (this.state.seconds >= 60){
      this.setState({minutes: this.state.minutes + 1});
      this.setState({seconds: 0});
    }
  }
  stop() {
    this.setState({running: false});
    clearInterval(this.watch);
  }
  restart(){
    this.reset();
  }
  addToList(){
    this.setState({times: this.state.times.concat(this.format())});
  }
  clearList(){
    this.setState({times: []});
  }
  render (){
    return (
      <div className={'stopwatch'}>
        <p>{this.format()}</p>
        <nav className={'controls'}>
          <a href={'#'} className={'button'} id={'start'} onClick={this.start.bind(this)}>Start</a>
          <a href={'#'} className={'button'} id={'stop'} onClick={this.stop.bind(this)}>Stop</a>
          <a href={'#'} className={'button'} id={'restart'} onClick={this.restart.bind(this)}>Reset</a>
          <br />
          <a href={'#'} className={'button'} id={'addToList'} onClick={this.addToList.bind(this)}>Add time to list</a>
          <a href={'#'} className={'button'} id={'clearList'} onClick={this.clearList.bind(this)}>Clear the list!</a>
        </nav>
        <div className={'list'}>
        <p>Times</p>
        <ul>
          {this.state.times.map((time,index) => (<li key={index}>{time}</li>))}
        </ul>
        </div>
      </div>
    );
  }
}

var app = <Stopwatch />;
ReactDOM.render(app,document.getElementById('stopwatch'));
