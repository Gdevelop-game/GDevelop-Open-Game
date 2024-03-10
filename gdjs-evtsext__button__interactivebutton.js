
gdjs.evtsExt__Button__InteractiveButton = gdjs.evtsExt__Button__InteractiveButton || {};

/**
 * Behavior generated from Interactive button
 */
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton = class InteractiveButton extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ANIMATION_UP = behaviorData.ANIMATION_UP !== undefined ? behaviorData.ANIMATION_UP : "up";
    this._behaviorData.ANIMATION_OVER = behaviorData.ANIMATION_OVER !== undefined ? behaviorData.ANIMATION_OVER : "over";
    this._behaviorData.ANIMATION_DOWN = behaviorData.ANIMATION_DOWN !== undefined ? behaviorData.ANIMATION_DOWN : "down";
    this._behaviorData.ANIMATION_DISABLED = behaviorData.ANIMATION_DISABLED !== undefined ? behaviorData.ANIMATION_DISABLED : "disabled";
    this._behaviorData.ENABLED = behaviorData.ENABLED !== undefined ? behaviorData.ENABLED : true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ANIMATION_UP !== newBehaviorData.ANIMATION_UP)
      this._behaviorData.ANIMATION_UP = newBehaviorData.ANIMATION_UP;
    if (oldBehaviorData.ANIMATION_OVER !== newBehaviorData.ANIMATION_OVER)
      this._behaviorData.ANIMATION_OVER = newBehaviorData.ANIMATION_OVER;
    if (oldBehaviorData.ANIMATION_DOWN !== newBehaviorData.ANIMATION_DOWN)
      this._behaviorData.ANIMATION_DOWN = newBehaviorData.ANIMATION_DOWN;
    if (oldBehaviorData.ANIMATION_DISABLED !== newBehaviorData.ANIMATION_DISABLED)
      this._behaviorData.ANIMATION_DISABLED = newBehaviorData.ANIMATION_DISABLED;
    if (oldBehaviorData.ENABLED !== newBehaviorData.ENABLED)
      this._behaviorData.ENABLED = newBehaviorData.ENABLED;

    return true;
  }

  // Properties:
  
  _getANIMATION_UP() {
    return this._behaviorData.ANIMATION_UP !== undefined ? this._behaviorData.ANIMATION_UP : "up";
  }
  _setANIMATION_UP(newValue) {
    this._behaviorData.ANIMATION_UP = newValue;
  }
  _getANIMATION_OVER() {
    return this._behaviorData.ANIMATION_OVER !== undefined ? this._behaviorData.ANIMATION_OVER : "over";
  }
  _setANIMATION_OVER(newValue) {
    this._behaviorData.ANIMATION_OVER = newValue;
  }
  _getANIMATION_DOWN() {
    return this._behaviorData.ANIMATION_DOWN !== undefined ? this._behaviorData.ANIMATION_DOWN : "down";
  }
  _setANIMATION_DOWN(newValue) {
    this._behaviorData.ANIMATION_DOWN = newValue;
  }
  _getANIMATION_DISABLED() {
    return this._behaviorData.ANIMATION_DISABLED !== undefined ? this._behaviorData.ANIMATION_DISABLED : "disabled";
  }
  _setANIMATION_DISABLED(newValue) {
    this._behaviorData.ANIMATION_DISABLED = newValue;
  }
  _getENABLED() {
    return this._behaviorData.ENABLED !== undefined ? this._behaviorData.ENABLED : true;
  }
  _setENABLED(newValue) {
    this._behaviorData.ENABLED = newValue;
  }
  _toggleENABLED() {
    this._setENABLED(!this._getENABLED());
  }
}

/**
 * Shared data generated from Interactive button
 */
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.SharedData = class InteractiveButtonSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Button_InteractiveButtonSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Button_InteractiveButtonSharedData = new gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.SharedData(
      initialData
    );
  }
  return instanceContainer._Button_InteractiveButtonSharedData;
}

// Methods:
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")).setNumber(-(1));
}
}}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_DISABLED()) != "");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_DISABLED()));
}
}{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("ClickCaptured")).setNumber(-(1));
}
}}

}


};gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_UP()) != "");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_UP()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).isHover((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_OVER()) != "");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAnimationName((gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_OVER()));
}
}}

}


{

/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).isDown((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_DOWN()) != "");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName((gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getANIMATION_DOWN()));
}
}}

}


};gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("ClickCaptured")).setNumber(1);
}
}}

}


{

/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")).setNumber(0);
}
}}

}


};gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects2= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546isClickedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1});
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546isClickedContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClicked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isClickedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects2= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546isHoverContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1});
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546isHoverContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHover = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects2= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546isDownContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1});
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.mapOfGDgdjs_9546evtsExt_9595_9595Button_9595_9595InteractiveButton_9546InteractiveButton_9546prototype_9546isDownContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDown = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isDownContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.isEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects2= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setENABLED(true);
}
}}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnable = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setEnableContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects2= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setENABLED(false);
}
}}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisable = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.setDisableContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")) > -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getENABLED() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("ClickCaptured")).setNumber(-(1));
}
}}

}


};

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Button__InteractiveButton.InteractiveButton.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Button::InteractiveButton", gdjs.evtsExt__Button__InteractiveButton.InteractiveButton);
