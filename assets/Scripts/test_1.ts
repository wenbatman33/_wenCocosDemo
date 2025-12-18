import {
  _decorator,
  Component,
  input,
  Input,
  Node,
  EventTouch,
  Vec3,
  UITransform,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("main")
export class main extends Component {
  // 記錄手指與物件的偏移量
  private touchOffset: Vec3 = new Vec3();
  // 是否正在拖曳
  private isDragging: boolean = false;

  start() {
    input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
    input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
  }

  onTouchStart(event: EventTouch) {
    const char = this.node.getChildByName("char");
    if (!char) return;

    const parentTransform = this.node.getComponent(UITransform);
    if (!parentTransform) return;

    // 取得觸摸位置的本地座標
    const uiPos = event.getUILocation();
    const touchLocalPos = parentTransform.convertToNodeSpaceAR(
      new Vec3(uiPos.x, uiPos.y, 0)
    );

    // 取得物件目前的位置
    const charPos = char.getPosition();

    // 計算偏移量：物件位置 - 觸摸位置
    Vec3.subtract(this.touchOffset, charPos, touchLocalPos);

    this.isDragging = true;
  }

  onTouchMove(event: EventTouch) {
    if (!this.isDragging) return;

    const char = this.node.getChildByName("char");
    if (!char) return;

    const parentTransform = this.node.getComponent(UITransform);
    if (!parentTransform) return;

    // 取得觸摸位置的本地座標
    const uiPos = event.getUILocation();
    const touchLocalPos = parentTransform.convertToNodeSpaceAR(
      new Vec3(uiPos.x, uiPos.y, 0)
    );

    // 套用偏移量：新位置 = 觸摸位置 + 偏移量
    const newPos = new Vec3();
    Vec3.add(newPos, touchLocalPos, this.touchOffset);
    char.setPosition(newPos);
  }

  onTouchEnd(event: EventTouch) {
    this.isDragging = false;
  }

  update(deltaTime: number) {}
}
