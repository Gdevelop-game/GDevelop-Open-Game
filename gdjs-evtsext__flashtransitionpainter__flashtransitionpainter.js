
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter || {};

/**
 * Behavior generated from Flash and transition painter
 */
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter = class FlashTransitionPainter extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Timer = Number("1") || 0;
    this._behaviorData.Color = "255;255;255";
    this._behaviorData.Type = "";
    this._behaviorData.Backward = false;
    this._behaviorData.Forward = false;
    this._behaviorData.MaxOpacity = Number("255") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Timer !== newBehaviorData.Timer)
      this._behaviorData.Timer = newBehaviorData.Timer;
    if (oldBehaviorData.Color !== newBehaviorData.Color)
      this._behaviorData.Color = newBehaviorData.Color;
    if (oldBehaviorData.Type !== newBehaviorData.Type)
      this._behaviorData.Type = newBehaviorData.Type;
    if (oldBehaviorData.Backward !== newBehaviorData.Backward)
      this._behaviorData.Backward = newBehaviorData.Backward;
    if (oldBehaviorData.Forward !== newBehaviorData.Forward)
      this._behaviorData.Forward = newBehaviorData.Forward;
    if (oldBehaviorData.MaxOpacity !== newBehaviorData.MaxOpacity)
      this._behaviorData.MaxOpacity = newBehaviorData.MaxOpacity;

    return true;
  }

  // Properties:
  
  _getTimer() {
    return this._behaviorData.Timer !== undefined ? this._behaviorData.Timer : Number("1") || 0;
  }
  _setTimer(newValue) {
    this._behaviorData.Timer = newValue;
  }
  _getColor() {
    return this._behaviorData.Color !== undefined ? this._behaviorData.Color : "255;255;255";
  }
  _setColor(newValue) {
    this._behaviorData.Color = newValue;
  }
  _getType() {
    return this._behaviorData.Type !== undefined ? this._behaviorData.Type : "";
  }
  _setType(newValue) {
    this._behaviorData.Type = newValue;
  }
  _getBackward() {
    return this._behaviorData.Backward !== undefined ? this._behaviorData.Backward : false;
  }
  _setBackward(newValue) {
    this._behaviorData.Backward = newValue;
  }
  _toggleBackward() {
    this._setBackward(!this._getBackward());
  }
  _getForward() {
    return this._behaviorData.Forward !== undefined ? this._behaviorData.Forward : false;
  }
  _setForward(newValue) {
    this._behaviorData.Forward = newValue;
  }
  _toggleForward() {
    this._setForward(!this._getForward());
  }
  _getMaxOpacity() {
    return this._behaviorData.MaxOpacity !== undefined ? this._behaviorData.MaxOpacity : Number("255") || 0;
  }
  _setMaxOpacity(newValue) {
    this._behaviorData.MaxOpacity = newValue;
  }
}

/**
 * Shared data generated from Flash and transition painter
 */
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.SharedData = class FlashTransitionPainterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._FlashTransitionPainter_FlashTransitionPainterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._FlashTransitionPainter_FlashTransitionPainterSharedData = new gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.SharedData(
      initialData
    );
  }
  return instanceContainer._FlashTransitionPainter_FlashTransitionPainterSharedData;
}

// Methods:
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreated = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBackward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_OpacityFlash")) >= (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxOpacity()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ReverseDirection")).setNumber(-(1));
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_OpacityFlash")) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_OpacityFlash")).setNumber(gdjs.evtTools.common.lerp(0, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxOpacity()), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_TimeProgressionEffect")))));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].setFillOpacity((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_OpacityFlash"))));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawRectangle(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBackward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveWidth")) >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ReverseDirection")).setNumber(-(1));
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveWidth")) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge")).setNumber(10);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveWidth")).setNumber(gdjs.evtTools.common.lerp(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_TimeProgressionEffect")))));
}
}}

}


{


const repeatCount2 = 5;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge")).sub(2);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity")).add(51);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity"))));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle(0, 0, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveWidth"))) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge"))), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBackward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveHeight")) >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ReverseDirection")).setNumber(-(1));
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveHeight")) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge")).setNumber(10);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveHeight")).setNumber(gdjs.evtTools.common.lerp(0, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_TimeProgressionEffect")))));
}
}}

}


{


const repeatCount2 = 5;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge")).sub(2);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity")).add(51);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity"))));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle(0, 0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveHeight"))) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge"))));
}
}}
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBackward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveWidth")) >= (Math.sqrt(Math.pow(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), 2) + Math.pow(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), 2))) / 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ReverseDirection")).setNumber(-(1));
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveWidth")) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveWidth")).setNumber(gdjs.evtTools.common.lerp(0, (Math.sqrt(Math.pow(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), 2) + Math.pow(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), 2))) / 2, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_TimeProgressionEffect")))));
}
}}

}


{


const repeatCount2 = 5;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge")).sub(0.2);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity")).add(51);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdgeOpacity"))));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_ProgressiveWidth"))) + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("_SmoothEdge"))));
}
}}
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(29948044);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].setClearBetweenFrames(true);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].setOutlineSize(0);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].resetTimer("_TimerEffect");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].setFillColor((gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_TimeProgressionEffect")).add((gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimer())) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("_ReverseDirection"))));
}
}}

}


{



}


{



}


{

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Flash" ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Horizontal" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Vertical" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Circular" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList11(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1[i].getVariables().get("_OpacityFlash")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1[i].getVariables().get("_ReverseDirection")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1[i].getVariables().get("_TimeProgressionEffect")).setNumber(0);
}
}}

}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivate = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects3= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") != "");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setType((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : ""));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") != "");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Forward") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForward(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Forward") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setForward(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Backward") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBackward(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Backward") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBackward(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBackward() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForward() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimer((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Timer")) || 0 : 0) / 2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimer() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimer(0.2);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getForward()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBackward() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getVariables().get("_ReverseDirection")).setNumber(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getVariables().get("_TimeProgressionEffect")).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxOpacity")) || 0 : 0) != 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxOpacity")) || 0 : 0));
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), true);
}
}}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(29975060);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("Behavior"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTimer((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Timer")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].resetTimer("_TimerEffect");
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffect = function(Color, Timer, Type, Forward, Backward, MaxOpacity, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
if (argName === "Timer") return Timer;
if (argName === "Type") return Type;
if (argName === "Forward") return Forward;
if (argName === "Backward") return Backward;
if (argName === "MaxOpacity") return MaxOpacity;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects2= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1[i].timerElapsedTime("_TimerEffect", (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTimer()) - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEnd = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("FlashTransitionPainter::FlashTransitionPainter", gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter);
