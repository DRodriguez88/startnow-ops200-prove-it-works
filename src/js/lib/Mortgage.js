module.exports = class Mortgage {
    constructor(principal, interest, term) {
        this.principal = principal;
        this.interest = interest;
        this.term = term;
      }
    //I have no fuckin clue what this thing is or why i need it.
      get monthlyPayment() {
        var term = this.term*12;
        var interest = this.interest/100/12;
        var principal = this.principal;

        let top = interest*Math.pow((1+interest),term);
        let bottom = Math.pow((1+interest), term) - 1;
        let middle = top/bottom;
        let monthlyPay = principal*middle;
        monthlyPay = Math.round(100*monthlyPay)/100
        return monthlyPay
      }

      calculateMonthly() {
        var term = this.term*12;
        var interest = this.interest/100/12;
        var principal = this.principal;

        let top = interest*Math.pow((1+interest),term);
        let bottom = Math.pow((1+interest), term) - 1;
        let middle = top/bottom;
        let monthlyPay = principal*middle;
        monthlyPay = Math.round(100*monthlyPay)/100
        return monthlyPay
      }
    
    
    
    
    
    
    
    
    
    // monthlyPayment(principal, rate, term) {
    //     term = term*12;
    //     rate = rate/100/12;

    //     let top = rate*Math.pow((1+rate),term);
    //     let bottom = Math.pow((1+rate), term) - 1;
    //     let middle = top/bottom;
    //     let monthlyPay = principal*middle;
    //     monthlyPay = Math.round(100*monthlyPay)/100
    //     return monthlyPay
    // }
}
