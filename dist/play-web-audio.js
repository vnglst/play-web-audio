"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buffer_loader_1 = require("./buffer-loader");
var context = new (window.AudioContext ||
    window.webkitAudioContext)();
exports.loadAudioUrls = function (urls, finishedLoading) {
    var bufferLoader = new buffer_loader_1.default(context, urls, finishedLoading);
    bufferLoader.load();
};
exports.playAudio = function (buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
};
