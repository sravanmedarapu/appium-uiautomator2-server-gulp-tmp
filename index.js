"use strict";

var path = require('path');

module.exports = {
  apkPath: path.resolve(__dirname, "app", "build", "apk", "app-server-debug-unaligned.apk"),
  testApkPath: path.resolve(__dirname, "app", "build", "apk", "app-server-debug-androidTest-unaligned.apk")
};
