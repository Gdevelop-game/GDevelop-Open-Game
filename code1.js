gdjs.Game_95Customisation_95WIPCode = {};
gdjs.Game_95Customisation_95WIPCode.localVariables = [];
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects1= [];
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects2= [];
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects1= [];
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects2= [];
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects1= [];
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects2= [];
gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1= [];
gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects2= [];
gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects1= [];
gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects2= [];
gdjs.Game_95Customisation_95WIPCode.GDgame_9595crosshairObjects1= [];
gdjs.Game_95Customisation_95WIPCode.GDgame_9595crosshairObjects2= [];
gdjs.Game_95Customisation_95WIPCode.GDgame_9595transitionObjects1= [];
gdjs.Game_95Customisation_95WIPCode.GDgame_9595transitionObjects2= [];


gdjs.Game_95Customisation_95WIPCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_body"), gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_hand"), gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_leg"), gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects1);
{for(var i = 0, len = gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects1.length ;i < len;++i) {
    gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects1[i].getBehavior("Animation").setAnimationIndex((( gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects1.length ;i < len;++i) {
    gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects1[i].getBehavior("Animation").setAnimationIndex((( gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects1.length ;i < len;++i) {
    gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects1[i].getBehavior("Animation").setAnimationIndex((( gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("player_body"), gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_hand"), gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects1);
gdjs.copyArray(runtimeScene.getObjects("player_leg"), gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Customisation").getChild("body").setNumber((( gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects1.length === 0 ) ? 0 :gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects1[0].getBehavior("Animation").getAnimationIndex()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Customisation").getChild("hand").setNumber((( gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects1.length === 0 ) ? 0 :gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects1[0].getBehavior("Animation").getAnimationIndex()));
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Customisation").getChild("leg").setNumber((( gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects1.length === 0 ) ? 0 :gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects1[0].getBehavior("Animation").getAnimationIndex()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteDecoratedButton"), gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects1[k] = gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_World_old", false);
}}

}


};

gdjs.Game_95Customisation_95WIPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects1.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595bodyObjects2.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects1.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595legObjects2.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects1.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDplayer_9595handObjects2.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects1.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDWhiteDecoratedButtonObjects2.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDgame_9595crosshairObjects1.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDgame_9595crosshairObjects2.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDgame_9595transitionObjects1.length = 0;
gdjs.Game_95Customisation_95WIPCode.GDgame_9595transitionObjects2.length = 0;

gdjs.Game_95Customisation_95WIPCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_95Customisation_95WIPCode'] = gdjs.Game_95Customisation_95WIPCode;
