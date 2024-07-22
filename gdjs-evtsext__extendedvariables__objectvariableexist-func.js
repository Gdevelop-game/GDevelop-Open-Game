
if (typeof gdjs.evtsExt__ExtendedVariables__ObjectVariableExist !== "undefined") {
  gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist = {};
gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1= [];


gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.userFunc0x20f6538 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let returnValue = true;
if (!objects.length) {
    returnValue = false;
} else {
    const objectVariableName = eventsFunctionContext.getArgument("ObjectVariableName");
    for (let i = 0; i < objects.length; i++) {
        if (!objects[i].hasVariable(objectVariableName)) {
            // If any object does NOT have the variable, return false.
            returnValue = false;
            break;
        }
    }
}

eventsFunctionContext.returnValue = returnValue;
};
gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("ObjectToCheck"), gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1);
gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.userFunc0x20f6538(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.func = function(runtimeScene, ObjectToCheck, ObjectVariableName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"ObjectToCheck": ObjectToCheck
},
  _objectArraysMap: {
"ObjectToCheck": gdjs.objectsListsToArray(ObjectToCheck)
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
if (argName === "ObjectVariableName") return ObjectVariableName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.GDObjectToCheckObjects1.length = 0;

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ExtendedVariables__ObjectVariableExist.registeredGdjsCallbacks = [];