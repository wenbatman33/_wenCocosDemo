System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, AudioManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "34d6cMht1lEPYuRULH0UOEC", "AudioManager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec(_class = (_class2 = (_class3 = class AudioManager extends Component {
        constructor() {
          super(...arguments);

          // 音樂播放器
          _initializerDefineProperty(this, "musicSource", _descriptor, this);

          // 音效播放器
          _initializerDefineProperty(this, "soundSource", _descriptor2, this);
        }

        static get instance() {
          return AudioManager._instance;
        }

        onLoad() {
          // 單例模式
          if (!AudioManager._instance) {
            AudioManager._instance = this;
          } else {
            this.destroy();
          }
        }

        onDestroy() {
          if (AudioManager._instance === this) {
            AudioManager._instance = null;
          }
        }

        stopMusic() {
          if (this.musicSource) {
            this.musicSource.stop();
            this.musicSource.loop = false;
          } else {
            console.error('AudioManager: Music source or clip not found');
          }
        }

        stopSound() {
          if (this.soundSource) {
            this.soundSource.stop();
          } else {
            console.error('AudioManager: Sound source not found');
          }
        }

        playMusic(music, loop) {
          if (loop === void 0) {
            loop = false;
          }

          if (music) {
            this.musicSource.clip = music;
            this.musicSource.loop = loop;
            this.musicSource.play();
          } else {
            console.error('AudioManager: Music source or clip not found');
          }
        }

        playSound(sound) {
          // 可由外部的腳本傳入音效
          if (sound) {
            this.soundSource.playOneShot(sound);
          } else {
            console.error('AudioManager: Sound source or clip not found');
          }
        }

      }, _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "musicSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "soundSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99457c8dad052607c8270c4f65daaf9e3fa6dc74.js.map