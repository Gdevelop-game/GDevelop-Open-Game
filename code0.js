gdjs.Game_95IntroCode = {};
gdjs.Game_95IntroCode.localVariables = [];
gdjs.Game_95IntroCode.GDgame_9595crosshairObjects1= [];
gdjs.Game_95IntroCode.GDgame_9595crosshairObjects2= [];
gdjs.Game_95IntroCode.GDgame_9595transitionObjects1= [];
gdjs.Game_95IntroCode.GDgame_9595transitionObjects2= [];


gdjs.Game_95IntroCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{runtimeScene.getGame().getVariables().get("sceneLoad").setString("Game_FirstLaunch");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_Loading", true);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};

gdjs.Game_95IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95IntroCode.GDgame_9595crosshairObjects1.length = 0;
gdjs.Game_95IntroCode.GDgame_9595crosshairObjects2.length = 0;
gdjs.Game_95IntroCode.GDgame_9595transitionObjects1.length = 0;
gdjs.Game_95IntroCode.GDgame_9595transitionObjects2.length = 0;

gdjs.Game_95IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_95IntroCode'] = gdjs.Game_95IntroCode;
