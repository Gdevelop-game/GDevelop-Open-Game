
if (typeof gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables = {};
gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.GDSourceObjectObjects1= [];
gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.GDTargetObjectObjects1= [];


gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.userFunc0x2103030 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// This JS event use private scope from the API, this can be borken at anytime.

const sourceObject = eventsFunctionContext.getObjects("SourceObject")[0];
const targetObject = eventsFunctionContext.getObjects("TargetObject")[0];
const isExactCopy = eventsFunctionContext.getArgument("isExactCopy");

const targetVariables = targetObject.getVariables();
const sourceVariables = sourceObject.getVariables()._variables.items;
for (const variableName in sourceVariables)
{
    if (sourceVariables.hasOwnProperty(variableName))
    {
        gdjs.Variable.copy(sourceVariables[variableName], targetVariables.get(variableName), isExactCopy);
    }
}
};
gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.userFunc0x2103030(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.func = function(runtimeScene, SourceObject, TargetObject, isExactCopy, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"SourceObject": SourceObject
, "TargetObject": TargetObject
},
  _objectArraysMap: {
"SourceObject": gdjs.objectsListsToArray(SourceObject)
, "TargetObject": gdjs.objectsListsToArray(TargetObject)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ExtendedVariables"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ExtendedVariables"),
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
if (argName === "isExactCopy") return isExactCopy;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.GDSourceObjectObjects1.length = 0;
gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.GDTargetObjectObjects1.length = 0;

gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ExtendedVariables__CopyAllObjectVariables.registeredGdjsCallbacks = [];