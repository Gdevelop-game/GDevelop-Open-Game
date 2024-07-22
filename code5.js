gdjs.Game_95LoadingCode = {};
gdjs.Game_95LoadingCode.localVariables = [];
gdjs.Game_95LoadingCode.GDbgObjects1= [];
gdjs.Game_95LoadingCode.GDbgObjects2= [];
gdjs.Game_95LoadingCode.GDNewTextObjects1= [];
gdjs.Game_95LoadingCode.GDNewTextObjects2= [];
gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1= [];
gdjs.Game_95LoadingCode.GDRedFlatBarwObjects2= [];
gdjs.Game_95LoadingCode.GDgame_9595crosshairObjects1= [];
gdjs.Game_95LoadingCode.GDgame_9595crosshairObjects2= [];
gdjs.Game_95LoadingCode.GDgame_9595transitionObjects1= [];
gdjs.Game_95LoadingCode.GDgame_9595transitionObjects2= [];


gdjs.Game_95LoadingCode.asyncCallback29584548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_95LoadingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("sceneLoad")), false);
}gdjs.Game_95LoadingCode.localVariables.length = 0;
}
gdjs.Game_95LoadingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_95LoadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95LoadingCode.asyncCallback29584548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95LoadingCode.mapOfGDgdjs_9546Game_959595LoadingCode_9546GDRedFlatBarwObjects1Objects = Hashtable.newFrom({"RedFlatBarw": gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1});
gdjs.Game_95LoadingCode.mapOfGDgdjs_9546Game_959595LoadingCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs.Game_95LoadingCode.GDNewTextObjects1});
gdjs.Game_95LoadingCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedFlatBarw"), gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.Game_95LoadingCode.GDbgObjects1);
{for(var i = 0, len = gdjs.Game_95LoadingCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.Game_95LoadingCode.GDbgObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}{for(var i = 0, len = gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1.length ;i < len;++i) {
    gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1[i].setX(66);
}
}{for(var i = 0, len = gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1.length ;i < len;++i) {
    gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 132);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RedFlatBarw"), gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg"), gdjs.Game_95LoadingCode.GDbgObjects1);
{for(var i = 0, len = gdjs.Game_95LoadingCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.Game_95LoadingCode.GDbgObjects1[i].setXOffset(gdjs.Game_95LoadingCode.GDbgObjects1[i].getXOffset() + (5));
}
}{for(var i = 0, len = gdjs.Game_95LoadingCode.GDbgObjects1.length ;i < len;++i) {
    gdjs.Game_95LoadingCode.GDbgObjects1[i].setYOffset(gdjs.Game_95LoadingCode.GDbgObjects1[i].getYOffset() + (5));
}
}{for(var i = 0, len = gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1.length ;i < len;++i) {
    gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1[i].SetValue(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("sceneLoad"))) * 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("sceneLoad")));
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_95LoadingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Game_95LoadingCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedFlatBarw"), gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.Game_95LoadingCode.mapOfGDgdjs_9546Game_959595LoadingCode_9546GDRedFlatBarwObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.Game_95LoadingCode.mapOfGDgdjs_9546Game_959595LoadingCode_9546GDNewTextObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.Game_95LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95LoadingCode.GDbgObjects1.length = 0;
gdjs.Game_95LoadingCode.GDbgObjects2.length = 0;
gdjs.Game_95LoadingCode.GDNewTextObjects1.length = 0;
gdjs.Game_95LoadingCode.GDNewTextObjects2.length = 0;
gdjs.Game_95LoadingCode.GDRedFlatBarwObjects1.length = 0;
gdjs.Game_95LoadingCode.GDRedFlatBarwObjects2.length = 0;
gdjs.Game_95LoadingCode.GDgame_9595crosshairObjects1.length = 0;
gdjs.Game_95LoadingCode.GDgame_9595crosshairObjects2.length = 0;
gdjs.Game_95LoadingCode.GDgame_9595transitionObjects1.length = 0;
gdjs.Game_95LoadingCode.GDgame_9595transitionObjects2.length = 0;

gdjs.Game_95LoadingCode.eventsList1(runtimeScene);

return;

}

gdjs['Game_95LoadingCode'] = gdjs.Game_95LoadingCode;
