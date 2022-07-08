class DonutMaker {

  constructor(numDonuts, numAutoclickers, numDonutmultiplier){
    this.numDonuts = numDonuts;
    this.numAutoclickers = numAutoclickers;
    this.numDonutmultiplier = numDonutmultiplier;
  }

  addDonut(){
    this.numDonuts +=1;
  }

  addAutoclickers(){
    if(this.numDonuts >= 100) {
    this.numDonuts -=100;
    this.numAutoclicker +=1;
    }
  }

  addDonutmultiplier(){
    if(this.numDonuts >= 10) {
      this.numDonuts -= 10;
      this.numDonutmultiplier += 1;
    }
  }

}

export default DonutMaker;
