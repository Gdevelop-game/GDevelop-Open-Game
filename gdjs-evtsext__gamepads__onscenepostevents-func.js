
if (typeof gdjs.evtsExt__Gamepads__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__onScenePostEvents = {};


gdjs.evtsExt__Gamepads__onScenePostEvents.userFunc0x1d28690 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Each time a player press a button i save the last button pressed for the next frame
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameter
let countPlayers = Object.keys(gdjs._extensionController.players).length;

//Repeat for each players
for (let i = 0; i < countPlayers; i++) {
    let gamepad = gamepads[i]; // Get the gamepad of the player

    //We have to keep this condition because if the user hasn't plugged in his controller yet, we can't get the controller in the gamepad variable.
    if (gamepad == null) {
        continue;
    }

    for (let b = 0; b < Object.keys(gamepad.buttons).length; b++) { //For each buttons
        if (gamepad.buttons[b].pressed) { //One of them is pressed
            gdjs._extensionController.players[i].lastButtonUsed = b; //Save the button pressed

            //Save the state of the button for the next frame.
            gdjs._extensionController.players[i].previousFrameStateButtons[b] = { pressed: true };

            // Update Last Active Controller
            gdjs._extensionController.lastActiveController = i;
        } else {
            gdjs._extensionController.players[i].previousFrameStateButtons[b] = { pressed: false };
        }
    }


    gdjs._extensionController.players[i].rumble.elapsedTime += runtimeScene.getElapsedTime(runtimeScene) / 1000;
    if (
        gdjs._extensionController.players[i].rumble.duration - gdjs._extensionController.players[i].rumble.elapsedTime <= 0 &&
        (gdjs._extensionController.players[i].rumble.weakMagnitude || gdjs._extensionController.players[i].rumble.strongMagnitude)
    ) {
        gdjs._extensionController.players[i].rumble.weakMagnitude = 0;
        gdjs._extensionController.players[i].rumble.strongMagnitude = 0;
    }


}

};
gdjs.evtsExt__Gamepads__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__Gamepads__onScenePostEvents.userFunc0x1d28690(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Gamepads__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__Gamepads__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
