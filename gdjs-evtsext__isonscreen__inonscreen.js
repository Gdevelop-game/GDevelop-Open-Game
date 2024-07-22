
gdjs.evtsExt__IsOnScreen__InOnScreen = gdjs.evtsExt__IsOnScreen__InOnScreen || {};

/**
 * Behavior generated from Is on screen
 */
gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen = class InOnScreen extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from Is on screen
 */
gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.SharedData = class InOnScreenSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer.__InOnScreenSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer.__InOnScreenSharedData = new gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.SharedData(
      initialData
    );
  }
  return instanceContainer.__InOnScreenSharedData;
}

// Methods:
gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext = {};
gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext.GDObjectObjects1= [];


gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext.userFunc0x2079a08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/*
Get the object layer, convert the position from this layer to the screen coordinates.
Get the point on each side on the object on screen, and compare with the screen area.

This way even if the camera has a rotation or custom scale the object is always compared to the screen area.
*/


// Get the layer of the object.
const object = objects[0];
const layer = runtimeScene.getLayer(object.getLayer());

// Get the aabb of the object on his layer.
const aabb = object.getVisibilityAABB();

// Get the layer to convert the coordinates of the AABB to the screen coordinates
const topLeft = layer.convertInverseCoords(aabb.min[0], aabb.min[1]);
const topRight = layer.convertInverseCoords(aabb.max[0], aabb.min[1]);
const bottomRight = layer.convertInverseCoords(aabb.max[0], aabb.max[1]);
const bottomLeft = layer.convertInverseCoords(aabb.min[0], aabb.max[1]);

// Get the points on each side of the object on screen.
const posLeftObjectOnScreen = Math.min(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
const posRightObjectOnScreen = Math.max(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
const posUpObjectOnScreen = Math.min(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
const posDownObjectOnScreen = Math.max(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);

const padding = eventsFunctionContext.getArgument("Padding");

if (
    !(posLeftObjectOnScreen - padding > runtimeScene.getGame().getGameResolutionWidth() ||
        posUpObjectOnScreen - padding > runtimeScene.getGame().getGameResolutionHeight() ||
        posRightObjectOnScreen + padding < 0 ||
        posDownObjectOnScreen + padding < 0
        )
) {
    eventsFunctionContext.returnValue = true;
}

};
gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext.GDObjectObjects1);
gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext.userFunc0x2079a08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreen = function(Padding, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension(""),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension(""),
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
if (argName === "Padding") return Padding;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.IsOnScreenContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("::InOnScreen", gdjs.evtsExt__IsOnScreen__InOnScreen.InOnScreen);
