
if (typeof gdjs.evtsExt__CameraShake__ShakeCamera !== "undefined") {
  gdjs.evtsExt__CameraShake__ShakeCamera.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__ShakeCamera = {};


gdjs.evtsExt__CameraShake__ShakeCamera.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Time").setNumber(0);
}{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration").setNumber(eventsFunctionContext.getArgument("Duration"));
}{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StartEaseDuration").setNumber(eventsFunctionContext.getArgument("StartEaseDuration"));
}{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StopEaseDuration").setNumber(eventsFunctionContext.getArgument("StopEaseDuration"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StartEaseDuration")) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StopEaseDuration"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StartEaseDuration").setNumber(eventsFunctionContext.getArgument("StartEaseDuration") * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration")) / (eventsFunctionContext.getArgument("StartEaseDuration") + eventsFunctionContext.getArgument("StopEaseDuration")));
}{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("StopEaseDuration").setNumber(eventsFunctionContext.getArgument("StopEaseDuration") * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Duration")) / (eventsFunctionContext.getArgument("StartEaseDuration") + eventsFunctionContext.getArgument("StopEaseDuration")));
}}

}


};

gdjs.evtsExt__CameraShake__ShakeCamera.func = function(runtimeScene, Duration, StartEaseDuration, StopEaseDuration, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraShake"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraShake"),
  localVariables: [],
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
if (argName === "Duration") return Duration;
if (argName === "StartEaseDuration") return StartEaseDuration;
if (argName === "StopEaseDuration") return StopEaseDuration;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__ShakeCamera.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraShake__ShakeCamera.registeredGdjsCallbacks = [];