var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var InstructionButton = /** @class */ (function (_super) {
        __extends(InstructionButton, _super);
        // constructors
        /**
         * Creates an instance of InstructionButton.
         * @param {string} imagePath
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        function InstructionButton(imagePath, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, imagePath) || this;
            _this.isCentered = isCentered;
            if (isCentered) {
                _this.regX = _this.halfWidth;
                _this.regY = _this.halfHeight;
            }
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this._MouseOver);
            _this.on("mouseout", _this._MouseOut);
            return _this;
        }
        // private methods
        InstructionButton.prototype._MouseOver = function () {
            this.alpha = 0.7; // change alpha transparency to 70%
        };
        InstructionButton.prototype._MouseOut = function () {
            this.alpha = 1.0; // change alpha transparency to 100%
        };
        // public methods
        /**
         * The Start Method performs object initialization
         *
         * @returns {void}
         */
        InstructionButton.prototype.Start = function () {
        };
        InstructionButton.prototype.Update = function () {
        };
        InstructionButton.prototype.Reset = function () {
        };
        return InstructionButton;
    }(objects.GameObject));
    objects.InstructionButton = InstructionButton;
})(objects || (objects = {}));
//# sourceMappingURL=InstructionButton.js.map