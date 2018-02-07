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
        m_BtRoll:cc.Button,

    },

    // use this for initialization
    onLoad: function () {
        cc.log('Hello World');
        
        this.myHeroPlay('Run');
        this.m_BtRoll.node.on(cc.Node.EventType.TOUCH_START,this.touchStart,this);
        this.m_BtRoll.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
        this.m_BtRoll.node.on(cc.Node.EventType.TOUCH_CANCEL,this.touchEnd,this);
    },

    touchStart:function()
    {
        cc.log('touchStart');
        if(this.m_Hero.currentClip.name == 'Jump' )
        {
            return;
        }
        this.myHeroPlay('Roll');
    },
    
    touchEnd:function()
    {
        cc.log('touchEnd');
        if(this.m_Hero.currentClip.name == 'Jump' )
        {
            return;
        }
        this.myHeroPlay('Run');
    },

    callBackDownOver:function()
    {
        cc.log('callBackDownOver');
        // var anim = this.getComponent(cc.Animation);
        this.myHeroPlay('Run');
    },
    onAnimationChange:function(target,data)
    {
        cc.log("onAnimationChange "+data);

        if( data == 'Jump')
        {
            var moveUp = cc.moveTo(1,-92,42).easing(cc.easeCubicActionOut());
            var moveDown = cc.moveTo(1,-92,-52).easing(cc.easeCubicActionIn());
            var callBack = cc.callFunc(this.callBackDownOver,this,this);
            var seq = cc.sequence(moveUp,moveDown,callBack); 
            this.m_Hero.node.runAction(seq);
        }
        this.myHeroPlay(data);
    },
    myHeroPlay:function(playName)
    {
        if( playName == 'Roll' )
        {
            this.m_Hero.node.setPosition(-92,-57);
        }
        else if( playName == 'Run')
        {
            this.m_Hero.node.setPosition(-92,-49);

        }
        this.m_Hero.play(playName);
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
