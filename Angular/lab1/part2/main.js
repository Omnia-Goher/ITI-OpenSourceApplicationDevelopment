var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(acc_no, balance) {
        if (acc_no === void 0) { acc_no = 0; }
        if (balance === void 0) { balance = 0; }
        this.acc_no = acc_no;
        this.balance = balance;
    }
    Account.prototype.depitAmount = function (amount) {
        if (amount === void 0) { amount = 0; }
        console.log("depitAmount");
    };
    Account.prototype.creditAmount = function (amount) {
        if (amount === void 0) { amount = 0; }
        console.log("creditAmount");
    };
    Account.prototype.getBalance = function () {
        console.log("getBalance");
    };
    return Account;
}());
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(acc_no, balance, date_of_opening, min_balance) {
        var _this = _super.call(this, acc_no, balance) || this;
        _this.date_of_opening = date_of_opening;
        _this.min_balance = min_balance;
        return _this;
    }
    Saving_Account.prototype.addCustomer = function (id) {
        console.log("Saving_Account " + id);
    };
    Saving_Account.prototype.removeCustomer = function (id) {
        console.log("Saving_Account " + id);
    };
    return Saving_Account;
}(Account));
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(acc_no, balance, date_of_opening, interest_rate) {
        var _this = _super.call(this, acc_no, balance) || this;
        _this.date_of_opening = date_of_opening;
        _this.interest_rate = interest_rate;
        return _this;
    }
    Current_Account.prototype.addCustomer = function (id) {
        console.log("Current_Account " + id);
    };
    Current_Account.prototype.removeCustomer = function (id) {
        console.log("Current_Account " + id);
    };
    return Current_Account;
}(Account));
var saving_account = new Saving_Account(10, 20, new Date(), 30);
saving_account.addCustomer(122);
saving_account.removeCustomer(256);
console.log(saving_account.date_of_opening);
var current_account = new Current_Account(40, 50, new Date(), 60);
current_account.addCustomer(784);
current_account.removeCustomer(148);
console.log(current_account.date_of_opening);
