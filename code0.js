gdjs.IntroCode = {};
gdjs.IntroCode.GDcrossairObjects1= [];
gdjs.IntroCode.GDcrossairObjects2= [];
gdjs.IntroCode.GDTransitionsObjects1= [];
gdjs.IntroCode.GDTransitionsObjects2= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("City1");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loading", true);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDcrossairObjects1.length = 0;
gdjs.IntroCode.GDcrossairObjects2.length = 0;
gdjs.IntroCode.GDTransitionsObjects1.length = 0;
gdjs.IntroCode.GDTransitionsObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
