gdjs.Game_95FirstLaunchCode = {};
gdjs.Game_95FirstLaunchCode.localVariables = [];
gdjs.Game_95FirstLaunchCode.GDrankObjects1= [];
gdjs.Game_95FirstLaunchCode.GDrankObjects2= [];
gdjs.Game_95FirstLaunchCode.GDrankObjects3= [];
gdjs.Game_95FirstLaunchCode.GDrankObjects4= [];
gdjs.Game_95FirstLaunchCode.GDrankObjects5= [];
gdjs.Game_95FirstLaunchCode.GDrankObjects6= [];
gdjs.Game_95FirstLaunchCode.GDrankObjects7= [];
gdjs.Game_95FirstLaunchCode.GDrankObjects8= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects1= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects2= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects3= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects4= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects5= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects6= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects7= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects8= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects1= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects2= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects3= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects4= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects5= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects6= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects7= [];
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects8= [];


gdjs.Game_95FirstLaunchCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Game", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) + "FirstLaunch");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "131;214;155");
}{runtimeScene.getGame().getVariables().get("sceneLoad").setString("Game_World");
}{gdjs.evtTools.storage.readStringFromJSONFile("Game", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) + "Rank", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank"));
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("rank").setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").getAsString());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_Loading", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Game", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) + "FirstLaunch"));
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("Game", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) + "FirstLaunch", "true");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Game_95FirstLaunchCode.asyncCallback29606036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "144;19;254");
}gdjs.Game_95FirstLaunchCode.localVariables.length = 0;
}
gdjs.Game_95FirstLaunchCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95FirstLaunchCode.asyncCallback29606036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95FirstLaunchCode.asyncCallback29605964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "189;16;224");
}
{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_95FirstLaunchCode.localVariables.length = 0;
}
gdjs.Game_95FirstLaunchCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95FirstLaunchCode.asyncCallback29605964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95FirstLaunchCode.asyncCallback29605404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "65;117;5");
}
{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_95FirstLaunchCode.localVariables.length = 0;
}
gdjs.Game_95FirstLaunchCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95FirstLaunchCode.asyncCallback29605404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95FirstLaunchCode.asyncCallback29605332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "126;211;33");
}
{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_95FirstLaunchCode.localVariables.length = 0;
}
gdjs.Game_95FirstLaunchCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95FirstLaunchCode.asyncCallback29605332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95FirstLaunchCode.asyncCallback29604804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "208;2;27");
}
{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_95FirstLaunchCode.localVariables.length = 0;
}
gdjs.Game_95FirstLaunchCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95FirstLaunchCode.asyncCallback29604804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95FirstLaunchCode.asyncCallback29604500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "245;166;35");
}
{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_95FirstLaunchCode.localVariables.length = 0;
}
gdjs.Game_95FirstLaunchCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95FirstLaunchCode.asyncCallback29604500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95FirstLaunchCode.asyncCallback29604308 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "248;231;28");
}
{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Game_95FirstLaunchCode.localVariables.length = 0;
}
gdjs.Game_95FirstLaunchCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_95FirstLaunchCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_95FirstLaunchCode.asyncCallback29604308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_95FirstLaunchCode.mapOfGDgdjs_9546Game_959595FirstLaunchCode_9546GDrankObjects1Objects = Hashtable.newFrom({"rank": gdjs.Game_95FirstLaunchCode.GDrankObjects1});
gdjs.Game_95FirstLaunchCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 50);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").setString("A");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 50);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").setString("B");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 40);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").setString("C");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 30);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").setString("D");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 20);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").setString("E");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__FPS__FPS.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) < 10);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").setString("F");
}}

}


};gdjs.Game_95FirstLaunchCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "139;87;42");
}
{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.tween.tweenNumberEffectPropertyTween(runtimeScene, "adder", 200, "", "Effect", "blur", "linear", 7);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("rank"), gdjs.Game_95FirstLaunchCode.GDrankObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.Game_95FirstLaunchCode.mapOfGDgdjs_9546Game_959595FirstLaunchCode_9546GDrankObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Game_95FirstLaunchCode.GDrankObjects1.length ;i < len;++i) {
    gdjs.Game_95FirstLaunchCode.GDrankObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.tween.sceneTweenIsPlaying(runtimeScene, "adder");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_95FirstLaunchCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.tween.sceneTweenHasFinished(runtimeScene, "adder");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(29613284);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("Game", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) + "Rank", runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(4).getChild("rank").setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("rank").getAsString());
}{runtimeScene.getGame().getVariables().get("sceneLoad").setString("Game_World");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_Loading", true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_95FirstLaunchCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95FirstLaunchCode.GDrankObjects1.length = 0;
gdjs.Game_95FirstLaunchCode.GDrankObjects2.length = 0;
gdjs.Game_95FirstLaunchCode.GDrankObjects3.length = 0;
gdjs.Game_95FirstLaunchCode.GDrankObjects4.length = 0;
gdjs.Game_95FirstLaunchCode.GDrankObjects5.length = 0;
gdjs.Game_95FirstLaunchCode.GDrankObjects6.length = 0;
gdjs.Game_95FirstLaunchCode.GDrankObjects7.length = 0;
gdjs.Game_95FirstLaunchCode.GDrankObjects8.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects1.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects2.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects3.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects4.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects5.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects6.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects7.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595crosshairObjects8.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects1.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects2.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects3.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects4.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects5.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects6.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects7.length = 0;
gdjs.Game_95FirstLaunchCode.GDgame_9595transitionObjects8.length = 0;

gdjs.Game_95FirstLaunchCode.eventsList9(runtimeScene);

return;

}

gdjs['Game_95FirstLaunchCode'] = gdjs.Game_95FirstLaunchCode;
