"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BufferLoader = /** @class */ (function () {
    function BufferLoader(context, urlList, callback) {
        this.context = context;
        this.urlList = urlList;
        this.onload = callback;
        this.bufferList = [];
        this.loadCount = 0;
    }
    BufferLoader.prototype.load = function () {
        var _this = this;
        this.urlList.forEach(function (url, i) { return _this.loadBuffer(url, i); });
    };
    BufferLoader.prototype.loadBuffer = function (url, index) {
        var _this = this;
        fetch(url)
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (buffer) {
            _this.context.decodeAudioData(buffer, function (decodedData) {
                if (!decodedData) {
                    console.error('error decoding file data: ' + url);
                    return;
                }
                _this.bufferList[index] = decodedData;
                if (++_this.loadCount === _this.urlList.length) {
                    _this.onload(_this.bufferList);
                }
            }, function (error) { return console.error('decodeAudioData error', error); });
        })
            .catch(function (error) { return console.error('BufferLoader: XHR error', error); });
    };
    return BufferLoader;
}());
exports.default = BufferLoader;
