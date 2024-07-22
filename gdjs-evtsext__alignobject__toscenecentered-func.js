
if (typeof gdjs.evtsExt__AlignObject__ToSceneCentered !== "undefined") {
  gdjs.evtsExt__AlignObject__ToSceneCentered.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AlignObject__ToSceneCentered = {};
gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects1= [];
gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects2= [];


gdjs.evtsExt__AlignObject__ToSceneCentered.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToCenter"), gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects1);
{for(var i = 0, len = gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects1[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects1[i].getHeight()) / 2);
}
}}

}


};

gdjs.evtsExt__AlignObject__ToSceneCentered.func = function(runtimeScene, ObjectToCenter, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ObjectToCenter": ObjectToCenter
},
  _objectArraysMap: {
"ObjectToCenter": gdjs.objectsListsToArray(ObjectToCenter)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AlignObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AlignObject"),
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

gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects1.length = 0;
gdjs.evtsExt__AlignObject__ToSceneCentered.GDObjectToCenterObjects2.length = 0;

gdjs.evtsExt__AlignObject__ToSceneCentered.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AlignObject__ToSceneCentered.registeredGdjsCallbacks = [];