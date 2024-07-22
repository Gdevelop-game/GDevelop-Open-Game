
if (typeof gdjs.evtsExt__FPS__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__FPS__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FPS__onScenePostEvents = {};


gdjs.evtsExt__FPS__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__FPS__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__FPS").getChild("TimeElapsed").setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FPS").getChild("FrameTimestamps").getChild(0)));
}}

}


{



}


{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().get("__FPS").getChild("FrameTimestamps")) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__FPS").getChild("FrameTimestamps").getChild(0)) < gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp") - 1000;
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().get("__FPS").getChild("FrameTimestamps"), 0);
}
{ //Subevents: 
gdjs.evtsExt__FPS__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().get("__FPS").getChild("FrameTimestamps"), gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}}

}


};gdjs.evtsExt__FPS__onScenePostEvents.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FPS__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__FPS__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FPS"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FPS"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FPS__onScenePostEvents.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__FPS__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__FPS__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__FPS__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__FPS__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__FPS__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
