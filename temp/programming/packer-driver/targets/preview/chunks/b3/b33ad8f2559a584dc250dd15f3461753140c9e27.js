System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, Vec3, UITransform, _dec, _class, _crd, ccclass, property, main;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50e5aMqp4FAI7dDK958lhVs", "test_01", undefined);

      __checkObsolete__(['_decorator', 'Component', 'input', 'Input', 'Node', 'EventTouch', 'Vec3', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass("main"), _dec(_class = class main extends Component {
        constructor() {
          super(...arguments);
          // 記錄手指與物件的偏移量
          this.touchOffset = new Vec3();
          // 是否正在拖曳
          this.isDragging = false;
        }

        start() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        onTouchStart(event) {
          var char = this.node.getChildByName("char");
          if (!char) return;
          var parentTransform = this.node.getComponent(UITransform);
          if (!parentTransform) return; // 取得觸摸位置的本地座標

          var uiPos = event.getUILocation();
          var touchLocalPos = parentTransform.convertToNodeSpaceAR(new Vec3(uiPos.x, uiPos.y, 0)); // 取得物件目前的位置

          var charPos = char.getPosition(); // 計算偏移量：物件位置 - 觸摸位置

          Vec3.subtract(this.touchOffset, charPos, touchLocalPos);
          this.isDragging = true;
        }

        onTouchMove(event) {
          if (!this.isDragging) return;
          var char = this.node.getChildByName("char");
          if (!char) return;
          var parentTransform = this.node.getComponent(UITransform);
          if (!parentTransform) return; // 取得觸摸位置的本地座標

          var uiPos = event.getUILocation();
          var touchLocalPos = parentTransform.convertToNodeSpaceAR(new Vec3(uiPos.x, uiPos.y, 0)); // 套用偏移量：新位置 = 觸摸位置 + 偏移量

          var newPos = new Vec3();
          Vec3.add(newPos, touchLocalPos, this.touchOffset);
          char.setPosition(newPos);
        }

        onTouchEnd(event) {
          this.isDragging = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b33ad8f2559a584dc250dd15f3461753140c9e27.js.map