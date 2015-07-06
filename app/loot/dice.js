class Dice {
    _rollNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    rollD20() {
      return this._rollNumber(1, 20)
    }
}

let _Dice = new Dice();

export default _Dice;
