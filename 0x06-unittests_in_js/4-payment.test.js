import sinon from 'sinon';
const chai = await import('chai');
const expect = chai.expect;
const Utils = await import('./utils.js'); 
const sendPaymentRequestToApi = await import('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', async () => { // Add async keyword
    const stub = sinon.stub(Utils.default, 'calculateNumber').returns(10); // Stub the default export
    sendPaymentRequestToApi.default(100, 20); // Call the default export
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    stub.restore();
  });

  it('should log the correct message with the stubbed total', async () => { // Add async keyword
    const stub = sinon.stub(Utils.default, 'calculateNumber').returns(10); // Stub the default export
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi.default(100, 20); // Call the default export
    expect(spy.calledWith('The total is: 10')).to.be.true;
    spy.restore();
    stub.restore();
  });
});