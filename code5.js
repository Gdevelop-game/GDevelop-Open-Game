gdjs.FunctionsIncludesCode = {};
gdjs.FunctionsIncludesCode.GDcrossairObjects1= [];
gdjs.FunctionsIncludesCode.GDcrossairObjects2= [];
gdjs.FunctionsIncludesCode.GDTransitionsObjects1= [];
gdjs.FunctionsIncludesCode.GDTransitionsObjects2= [];


gdjs.FunctionsIncludesCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(true);
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}{/* Unknown instruction - skipped. */}{/* Unknown instruction - skipped. */}{gdjs.evtsExt__RoomManager__goToRoom.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, 0, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.FunctionsIncludesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FunctionsIncludesCode.GDcrossairObjects1.length = 0;
gdjs.FunctionsIncludesCode.GDcrossairObjects2.length = 0;
gdjs.FunctionsIncludesCode.GDTransitionsObjects1.length = 0;
gdjs.FunctionsIncludesCode.GDTransitionsObjects2.length = 0;

gdjs.FunctionsIncludesCode.eventsList0(runtimeScene);

return;

}

gdjs['FunctionsIncludesCode'] = gdjs.FunctionsIncludesCode;
