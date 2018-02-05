(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/BaseView.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3c115psrxFBI4YxHibI/Tgk', 'BaseView', __filename);
// Script/BaseView.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        m_Hero: cc.Animation

    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.log('Hello World');
        this.m_Hero.play('Run');
    },

    onButtonJump: function onButtonJump(target, data) {
        cc.log("onButtonJump" + data);
        this.m_Hero.play('Jump');
    },

    onButtonRoll: function onButtonRoll(target, data) {
        cc.log("onButtonRoll" + data);
        this.m_Hero.play('Roll');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=BaseView.js.map
        