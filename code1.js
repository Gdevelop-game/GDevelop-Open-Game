gdjs.LoadingCode = {};
gdjs.LoadingCode.GDbgObjects1= [];
gdjs.LoadingCode.GDbgObjects2= [];
gdjs.LoadingCode.GDNewTextObjects1= [];
gdjs.LoadingCode.GDNewTextObjects2= [];
gdjs.LoadingCode.GDRedFlatBarwObjects1= [];
gdjs.LoadingCode.GDRedFlatBarwObjects2= [];
gdjs.LoadingCode.GDcrossairObjects1= [];
gdjs.LoadingCode.GDcrossairObjects2= [];
gdjs.LoadingCode.GDTransitionsObjects1= [];
gdjs.LoadingCode.GDTransitionsObjects2= [];


gdjs.LoadingCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedFlatBarw"), gdjs.LoadingCode.GDRedFlatBarwObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.LoadingCode.GDbgObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDbgObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDRedFlatBarwObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDRedFlatBarwObjects1[i].setX(66);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDRedFlatBarwObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDRedFlatBarwObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 132);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RedFlatBarw"), gdjs.LoadingCode.GDRedFlatBarwObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.LoadingCode.GDbgObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDbgObjects1[i].setXOffset(gdjs.LoadingCode.GDbgObjects1[i].getXOffset() + (5));
}
}{for(var i = 0, len = gdjs.LoadingCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDbgObjects1[i].setYOffset(gdjs.LoadingCode.GDbgObjects1[i].getYOffset() + (5));
}
}{for(var i = 0, len = gdjs.LoadingCode.GDRedFlatBarwObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDRedFlatBarwObjects1[i].SetValue(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), false);
}}

}


};

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDbgObjects1.length = 0;
gdjs.LoadingCode.GDbgObjects2.length = 0;
gdjs.LoadingCode.GDNewTextObjects1.length = 0;
gdjs.LoadingCode.GDNewTextObjects2.length = 0;
gdjs.LoadingCode.GDRedFlatBarwObjects1.length = 0;
gdjs.LoadingCode.GDRedFlatBarwObjects2.length = 0;
gdjs.LoadingCode.GDcrossairObjects1.length = 0;
gdjs.LoadingCode.GDcrossairObjects2.length = 0;
gdjs.LoadingCode.GDTransitionsObjects1.length = 0;
gdjs.LoadingCode.GDTransitionsObjects2.length = 0;

gdjs.LoadingCode.eventsList0(runtimeScene);

return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;
