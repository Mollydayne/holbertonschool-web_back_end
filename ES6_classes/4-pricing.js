import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    const name = this.currency.name;
    const code = this.currency.code;
    return `${this.amount} ${name} (${code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
