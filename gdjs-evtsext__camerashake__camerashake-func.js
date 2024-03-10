
if (typeof gdjs.evtsExt__CameraShake__CameraShake !== "undefined") {
  gdjs.evtsExt__CameraShake__CameraShake.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__CameraShake = {};


gdjs.evtsExt__CameraShake__CameraShake.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "__CameraShake_DurationTimer");
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("__CameraShake_PowerX").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerX")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerY").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerY")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Layer").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : ""));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Camera").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Camera")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Duration")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerAngle").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerAngle")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_PowerZoom").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PowerZoom")) || 0 : 0));
}{runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimeBetweenShakes")) || 0 : 0));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeForever"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShakeForever") : false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeForever"), true);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) == 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber(0.5);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")) == 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes").setNumber(0.08);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_Duration")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes"));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("__CameraShake_Duration").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_TimeBetweenShakes")));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress")) == 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("__CameraShake_InitialShake").setNumber(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("__CameraShake_ShakeInProgress").setNumber(1);
}}

}


};gdjs.evtsExt__CameraShake__CameraShake.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__CameraShake.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__CameraShake__CameraShake.func = function(runtimeScene, PowerX, PowerY, Layer, Camera, Duration, PowerAngle, PowerZoom, TimeBetweenShakes, ShakeForever, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PowerX") return PowerX;
if (argName === "PowerY") return PowerY;
if (argName === "Layer") return Layer;
if (argName === "Camera") return Camera;
if (argName === "Duration") return Duration;
if (argName === "PowerAngle") return PowerAngle;
if (argName === "PowerZoom") return PowerZoom;
if (argName === "TimeBetweenShakes") return TimeBetweenShakes;
if (argName === "ShakeForever") return ShakeForever;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__CameraShake.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraShake__CameraShake.registeredGdjsCallbacks = [];