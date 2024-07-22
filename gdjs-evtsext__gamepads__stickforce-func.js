
if (typeof gdjs.evtsExt__Gamepads__StickForce !== "undefined") {
  gdjs.evtsExt__Gamepads__StickForce.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__StickForce = {};


gdjs.evtsExt__Gamepads__StickForce.userFunc0x1fdbaf0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const stick = eventsFunctionContext.getArgument("stick").toUpperCase();


if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier is not valid in expression: "Value of a stick force"');
    return;
}

if (stick !== "LEFT" && stick !== "RIGHT") {
    console.error('Parameter stick is not valid in expression: "Value of a stick force"');
    return;
}

const gamepad = gamepads[playerId];

//we need keep this condition because when use have not yet plug her controller we can't get the controller in the gamepad variable.
if (gamepad == null) return;


switch (stick) {
    case 'LEFT':
        eventsFunctionContext.returnValue = gdjs.evtTools.common.clamp(Math.abs(gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[0], playerId)) + Math.abs(gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[1], playerId)), 0, 1);
        break;

    case 'RIGHT':
        eventsFunctionContext.returnValue = gdjs.evtTools.common.clamp(Math.abs(gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[2], playerId)) + Math.abs(gdjs._extensionController.getNormalizedAxisValue(gamepad.axes[3], playerId)), 0, 1);
        break;

    default:
        eventsFunctionContext.returnValue = -1;
        break;
}
};
gdjs.evtsExt__Gamepads__StickForce.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__StickForce.userFunc0x1fdbaf0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__StickForce.func = function(runtimeScene, player_ID, stick, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Gamepads"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Gamepads"),
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
if (argName === "player_ID") return player_ID;
if (argName === "stick") return stick;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__StickForce.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Gamepads__StickForce.registeredGdjsCallbacks = [];