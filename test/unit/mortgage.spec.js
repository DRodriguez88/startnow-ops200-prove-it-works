const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage(200000, 3.5, 30);
    });

    it('should have monthlyPayment getter', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have principal argument', () => {
        expect(mortgage.principal).to.exist;
    });

    it('should have interest argument', () => {
        expect(mortgage.interest).to.exist;
    });

    it('should have term argument', () => {
        expect(mortgage.term).to.exist;
    })

    it('should return 898.09', () => {
        expect(mortgage.calculateMonthly()).to.equal(898.09)
    })
});