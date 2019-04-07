const exec = require('cordova/exec');

exports.retrieveAuthorizationCode = function (params, successCallback, errorCallback) {
  exec(successCallback, errorCallback, "CordovaSquareReader", "retrieveAuthorizationCode", [params]);
};

exports.authorizeReaderSDKIfNeeded = function (params, successCallback, errorCallback) {
  exec(successCallback, errorCallback, "CordovaSquareReader", "authorizeReaderSDKIfNeeded", [params]);
};

exports.startCheckout = function (params, successCallback, errorCallback) {
  exec(successCallback, errorCallback, "CordovaSquareReader", "startCheckout", [params]);
};

exports.pairCardReaders = function (successCallback, errorCallback) {
  exec(successCallback, errorCallback, "CordovaSquareReader", "pairCardReaders", []);
};
