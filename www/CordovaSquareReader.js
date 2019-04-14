const exec = require('cordova/exec');

exports.retrieveAuthorizationCode = function (params, successCallback, errorCallback) {
  exec(successCallback, errorCallback, "CordovaSquareReader", "retrieveAuthorizationCode", [params]);
};

exports.authorizeReaderSDKIfNeeded = function (params, successCallback, errorCallback) {
  exec(successCallback, errorCallback, "CordovaSquareReader", "authorizeReaderSDKIfNeeded", [params]);
};

exports.startCheckout = function (params, successCallback, errorCallback) {
  exec((res) => {
    try {
      successCallback(JSON.parse(res));
    } catch (err) {
      console.log('error parsing checkout response', err.toString());
      errorCallback('error parsing checkout response: ' + err.toString());
    }
  }, errorCallback, "CordovaSquareReader", "startCheckout", [params]);
};

exports.pairCardReaders = function (successCallback, errorCallback) {
  exec(successCallback, errorCallback, "CordovaSquareReader", "pairCardReaders", []);
};
