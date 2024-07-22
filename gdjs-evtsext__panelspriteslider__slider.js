
gdjs.evtsExt__PanelSpriteSlider__Slider = gdjs.evtsExt__PanelSpriteSlider__Slider || {};

/**
 * Behavior generated from Slider
 */
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider = class Slider extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Value = behaviorData.Value !== undefined ? behaviorData.Value : Number("0") || 0;
    this._behaviorData.MinValue = behaviorData.MinValue !== undefined ? behaviorData.MinValue : Number("0") || 0;
    this._behaviorData.MaxValue = behaviorData.MaxValue !== undefined ? behaviorData.MaxValue : Number("1") || 0;
    this._behaviorData.StepSize = behaviorData.StepSize !== undefined ? behaviorData.StepSize : Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Value !== newBehaviorData.Value)
      this._behaviorData.Value = newBehaviorData.Value;
    if (oldBehaviorData.MinValue !== newBehaviorData.MinValue)
      this._behaviorData.MinValue = newBehaviorData.MinValue;
    if (oldBehaviorData.MaxValue !== newBehaviorData.MaxValue)
      this._behaviorData.MaxValue = newBehaviorData.MaxValue;
    if (oldBehaviorData.StepSize !== newBehaviorData.StepSize)
      this._behaviorData.StepSize = newBehaviorData.StepSize;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Value: this._behaviorData.Value,
    MinValue: this._behaviorData.MinValue,
    MaxValue: this._behaviorData.MaxValue,
    StepSize: this._behaviorData.StepSize,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Value !== undefined)
      this._behaviorData.Value = networkSyncData.props.Value;
    if (networkSyncData.props.MinValue !== undefined)
      this._behaviorData.MinValue = networkSyncData.props.MinValue;
    if (networkSyncData.props.MaxValue !== undefined)
      this._behaviorData.MaxValue = networkSyncData.props.MaxValue;
    if (networkSyncData.props.StepSize !== undefined)
      this._behaviorData.StepSize = networkSyncData.props.StepSize;
  }

  // Properties:
  
  _getValue() {
    return this._behaviorData.Value !== undefined ? this._behaviorData.Value : Number("0") || 0;
  }
  _setValue(newValue) {
    this._behaviorData.Value = newValue;
  }
  _getMinValue() {
    return this._behaviorData.MinValue !== undefined ? this._behaviorData.MinValue : Number("0") || 0;
  }
  _setMinValue(newValue) {
    this._behaviorData.MinValue = newValue;
  }
  _getMaxValue() {
    return this._behaviorData.MaxValue !== undefined ? this._behaviorData.MaxValue : Number("1") || 0;
  }
  _setMaxValue(newValue) {
    this._behaviorData.MaxValue = newValue;
  }
  _getStepSize() {
    return this._behaviorData.StepSize !== undefined ? this._behaviorData.StepSize : Number("0") || 0;
  }
  _setStepSize(newValue) {
    this._behaviorData.StepSize = newValue;
  }
}

/**
 * Shared data generated from Slider
 */
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.SharedData = class SliderSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer.__SliderSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer.__SliderSharedData = new gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.SharedData(
      initialData
    );
  }
  return instanceContainer.__SliderSharedData;
}

// Methods:
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue()); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.Value = function(parentEventsFunctionContext) {

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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(gdjs.evtTools.common.clamp((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinValue()), (gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue())));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(gdjs.evtTools.common.clamp(Math.round((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0) / (gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize())) * (gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize()), (gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinValue()), (gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue())));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValue = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinValue()); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValue = function(parentEventsFunctionContext) {

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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMinValue((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValue = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue()); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValue = function(parentEventsFunctionContext) {

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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxValue((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValue = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MaxValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - (( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MinValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.Size = function(parentEventsFunctionContext) {

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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize()); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSize = function(parentEventsFunctionContext) {

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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStepSize((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSize = function(Value, parentEventsFunctionContext) {

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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("::Slider", gdjs.evtsExt__PanelSpriteSlider__Slider.Slider);
