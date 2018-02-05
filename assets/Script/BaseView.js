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

        m_Hero:cc.Animation,

    },

    // use this for initialization
    onLoad: function () {
        cc.log('Hello World');
        this.m_Hero.play('Run');
    },

    onButtonJump: function(target,data)
    {
        cc.log("onButtonJump" + data);
        this.m_Hero.play('Jump');
    },
    
    onButtonRoll: function(target,data)
    {
        cc.log("onButtonRoll" + data);
        this.m_Hero.play('Roll');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
