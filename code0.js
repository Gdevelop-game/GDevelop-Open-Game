gdjs.TitleCode = {};
gdjs.TitleCode.localVariables = [];
gdjs.TitleCode.idToCallbackMap = new Map();
gdjs.TitleCode.GDPlayButtonObjects1= [];
gdjs.TitleCode.GDPlayButtonObjects2= [];
gdjs.TitleCode.GDPlayerObjects1= [];
gdjs.TitleCode.GDPlayerObjects2= [];
gdjs.TitleCode.GDCashObjects1= [];
gdjs.TitleCode.GDCashObjects2= [];
gdjs.TitleCode.GDMoneyTextObjects1= [];
gdjs.TitleCode.GDMoneyTextObjects2= [];
gdjs.TitleCode.GDPromptTextObjects1= [];
gdjs.TitleCode.GDPromptTextObjects2= [];


gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.TitleCode.GDPlayButtonObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.TitleCode.GDPlayButtonObjects1});
gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.TitleCode.GDPlayButtonObjects1});
gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.TitleCode.GDPlayButtonObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayButtonObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.TitleCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayButtonObjects1[i].getBehavior("Scale").setScale(1.08);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.TitleCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.TitleCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayButtonObjects1[i].getBehavior("Scale").setScale(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.TitleCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_9546TitleCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/click.ogg", false, 60, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "City", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/click.ogg", false, 60, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "City", false);
}
}

}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDPlayButtonObjects1.length = 0;
gdjs.TitleCode.GDPlayButtonObjects2.length = 0;
gdjs.TitleCode.GDPlayerObjects1.length = 0;
gdjs.TitleCode.GDPlayerObjects2.length = 0;
gdjs.TitleCode.GDCashObjects1.length = 0;
gdjs.TitleCode.GDCashObjects2.length = 0;
gdjs.TitleCode.GDMoneyTextObjects1.length = 0;
gdjs.TitleCode.GDMoneyTextObjects2.length = 0;
gdjs.TitleCode.GDPromptTextObjects1.length = 0;
gdjs.TitleCode.GDPromptTextObjects2.length = 0;

gdjs.TitleCode.eventsList0(runtimeScene);
gdjs.TitleCode.GDPlayButtonObjects1.length = 0;
gdjs.TitleCode.GDPlayButtonObjects2.length = 0;
gdjs.TitleCode.GDPlayerObjects1.length = 0;
gdjs.TitleCode.GDPlayerObjects2.length = 0;
gdjs.TitleCode.GDCashObjects1.length = 0;
gdjs.TitleCode.GDCashObjects2.length = 0;
gdjs.TitleCode.GDMoneyTextObjects1.length = 0;
gdjs.TitleCode.GDMoneyTextObjects2.length = 0;
gdjs.TitleCode.GDPromptTextObjects1.length = 0;
gdjs.TitleCode.GDPromptTextObjects2.length = 0;


return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
