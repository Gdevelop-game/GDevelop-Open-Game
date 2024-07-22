
if (typeof gdjs.evtsExt__Gamepads__C_Axis_pushed !== "undefined") {
  gdjs.evtsExt__Gamepads__C_Axis_pushed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__C_Axis_pushed = {};


gdjs.evtsExt__Gamepads__C_Axis_pushed.userFunc0x1e8ad58 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const stick = eventsFunctionContext.getArgument("stick").toUpperCase();
const direction = eventsFunctionContext.getArgument("direction").toUpperCase();

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in condition: "Gamepad stick pushed (axis)", is not valid number, must be between 0 and 4.');
    return;
}
if (stick != "LEFT" && stick != "RIGHT") {
    console.error('Parameter stick in condition: "Gamepad stick pushed (axis)", is not valid, must be LEFT or RIGHT');
    return;
}
if (direction != "UP" && direction != "DOWN" && direction != "LEFT" && direction != "RIGHT" && direction != "ANY") {
    console.error('Parameter deadzone in condition: "Gamepad stick pushed (axis)", is not valid, must be UP, DOWN, LEFT or RIGHT');
    return;
}

const gamepad = gamepads[playerId];

//we need keep this condition because when use have not yet plug her controller we can't get the controller in the gamepad variable.
if (gamepad == null) {
    eventsFunctionContext.returnValue = false;
    return;
}


//Define in onFirstSceneLoaded function
const getNormalizedAxisValue = gdjs._extensionController.getNormalizedAxisValue;

switch (stick) {
    case 'LEFT':
        switch (direction) {
            case 'LEFT':
                if (getNormalizedAxisValue(gamepad.axes[0], playerId) < 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            case 'RIGHT':
                if (getNormalizedAxisValue(gamepad.axes[0], playerId) > 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            case 'UP':
                if (getNormalizedAxisValue(gamepad.axes[1], playerId) < 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            case 'DOWN':
                if (getNormalizedAxisValue(gamepad.axes[1], playerId) > 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            case 'ANY':
                if (   getNormalizedAxisValue(gamepad.axes[0], playerId) < 0
                    || getNormalizedAxisValue(gamepad.axes[0], playerId) > 0
                    || getNormalizedAxisValue(gamepad.axes[1], playerId) < 0 
                    || getNormalizedAxisValue(gamepad.axes[1], playerId) > 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            default:
                console.error('The value Direction on stick Left on the condition: "Gamepad stick pushed (axis)" is not valid.');
                eventsFunctionContext.returnValue = false;
                break;
        }
        break;

    case 'RIGHT':
        switch (direction) {
            case 'LEFT':
                if (getNormalizedAxisValue(gamepad.axes[2], playerId) < 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            case 'RIGHT':
                if (getNormalizedAxisValue(gamepad.axes[2], playerId) > 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            case 'UP':
                if (getNormalizedAxisValue(gamepad.axes[3], playerId) < 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            case 'DOWN':
                if (getNormalizedAxisValue(gamepad.axes[3], playerId) > 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            case 'ANY':
                if (   getNormalizedAxisValue(gamepad.axes[2], playerId) < 0
                    || getNormalizedAxisValue(gamepad.axes[2], playerId) > 0
                    || getNormalizedAxisValue(gamepad.axes[3], playerId) < 0 
                    || getNormalizedAxisValue(gamepad.axes[3], playerId) > 0) {
                    eventsFunctionContext.returnValue = true;
                    return;
                }
                break;

            default:
                console.error('The value Direction on stick Right on the condition: "Gamepad stick pushed (axis)" is not valid.');
                eventsFunctionContext.returnValue = false;
                break;
        }
        break;

    default:
        console.error('The value Stick on the condition: "Gamepad stick pushed (axis)" is not valid.');
        eventsFunctionContext.returnValue = false;
        break;
}

eventsFunctionContext.returnValue = false;

};
gdjs.evtsExt__Gamepads__C_Axis_pushed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Axis_pushed.userFunc0x1e8ad58(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__C_Axis_pushed.func = function(runtimeScene, player_ID, stick, direction, parentEventsFunctionContext) {
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
if (argName === "direction") return direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__C_Axis_pushed.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Gamepads__C_Axis_pushed.registeredGdjsCallbacks = [];