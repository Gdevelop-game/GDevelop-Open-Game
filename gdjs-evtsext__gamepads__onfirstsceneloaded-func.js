
if (typeof gdjs.evtsExt__Gamepads__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__onFirstSceneLoaded = {};


gdjs.evtsExt__Gamepads__onFirstSceneLoaded.userFunc0x1cc9480 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Define an new private object javascript for the gamepad extension
gdjs._extensionController = {
    players: {
        0: { mapping: 'DEFAULT', lastButtonUsed: -1, deadzone: 0.2, previousFrameStateButtons: {}, rumble: {} },
        1: { mapping: 'DEFAULT', lastButtonUsed: -1, deadzone: 0.2, previousFrameStateButtons: {}, rumble: {} },
        2: { mapping: 'DEFAULT', lastButtonUsed: -1, deadzone: 0.2, previousFrameStateButtons: {}, rumble: {} },
        3: { mapping: 'DEFAULT', lastButtonUsed: -1, deadzone: 0.2, previousFrameStateButtons: {}, rumble: {} },
    },
    lastActiveController: -1, // Last active controller
    controllerButtonNames: { //Map associating controller button ids to button names
        "XBOX": {
            0: "A",
            1: "B",
            2: "X",
            3: "Y",
            4: "LB",
            5: "RB",
            6: "LT",
            7: "RT",
            8: "BACK",
            9: "START",
            10: "CLICK_STICK_LEFT",
            11: "CLICK_STICK_RIGHT",
            12: "UP",
            13: "DOWN",
            14: "LEFT",
            15: "RIGHT",
            16: "NONE",
            17: "NONE"
        },
        "PS4": {
            0: "CROSS",
            1: "CIRCLE",
            2: "SQUARE",
            3: "TRIANGLE",
            4: "L1",
            5: "R1",
            6: "L2",
            7: "R2",
            8: "SHARE",
            9: "OPTIONS",
            10: "CLICK_STICK_LEFT",
            11: "CLICK_STICK_RIGHT",
            12: "UP",
            13: "DOWN",
            14: "LEFT",
            15: "RIGHT",
            16: "PS_BUTTON",
            17: "CLICK_TOUCHPAD"
        }
    }
};

gdjs._extensionController.getInputString = function (type, buttonId) {
    const controllerButtonNames = gdjs._extensionController.controllerButtonNames;
    if (controllerButtonNames[type] !== undefined) {
        return controllerButtonNames[type][buttonId];
    }

    return "UNKNOWN_BUTTON";
}

gdjs._extensionController.axisToAngle = function (deltaX, deltaY) {
    const rad = Math.atan2(deltaY, deltaX);
    const deg = rad * (180 / Math.PI);
    return deg;
}

gdjs._extensionController.isXbox = function (gamepad) {
    return (gamepad ? (
        gamepad.id.toUpperCase().indexOf("XBOX") !== -1
        // "XINPUT" cannot be used to check if it is a xbox controller is just a generic
        // name reported in Firefox corresponding to the driver being used by the controller
        // https://gamefaqs.gamespot.com/boards/916373-pc/73341312?page=1
    ) : false);
}

//Returns the new value taking into account the dead zone for the player_ID given
gdjs._extensionController.getNormalizedAxisValue = function (v, player_ID) {
    //    gdjs._extensionController = gdjs._extensionController || { deadzone: 0.2 };

    // Anything smaller than this is assumed to be 0,0
    const DEADZONE = gdjs._extensionController.players[player_ID].deadzone;

    if (Math.abs(v) < DEADZONE) {
        // In the dead zone, set to 0
        v = 0;

        if (v == null) {
            return 0;
        } else {
            return v;
        }

    } else {
        // We're outside the dead zone, but we'd like to smooth
        // this value out so it still runs nicely between 0..1.
        // That is, we don't want it to jump suddenly from 0 to
        // DEADZONE.

        // Remap v from
        //    DEADZONE..1 to 0..(1-DEADZONE)
        // or from
        //    -1..-DEADZONE to -(1-DEADZONE)..0

        v = v - Math.sign(v) * DEADZONE;

        // Remap v from
        //    0..(1-DEADZONE) to 0..1
        // or from
        //    -(1-DEADZONE)..0 to -1..0

        return v / (1 - DEADZONE);
    }
};
};
gdjs.evtsExt__Gamepads__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__Gamepads__onFirstSceneLoaded.userFunc0x1cc9480(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Gamepads__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Gamepads__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
