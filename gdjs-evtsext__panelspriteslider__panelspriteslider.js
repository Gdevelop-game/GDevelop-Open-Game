
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider || {};

/**
 * Object generated from Slider
 */
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider = class PanelSpriteSlider extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.BarLeftPadding = objectData.content.BarLeftPadding !== undefined ? objectData.content.BarLeftPadding : Number("0") || 0;
    this._objectData.BarTopPadding = objectData.content.BarTopPadding !== undefined ? objectData.content.BarTopPadding : Number("0") || 0;
    this._objectData.BarRightPadding = objectData.content.BarRightPadding !== undefined ? objectData.content.BarRightPadding : Number("0") || 0;
    this._objectData.BarBottomPadding = objectData.content.BarBottomPadding !== undefined ? objectData.content.BarBottomPadding : Number("0") || 0;
    this._objectData.ShowLabelAtChanges = objectData.content.ShowLabelAtChanges !== undefined ? objectData.content.ShowLabelAtChanges : true;
    this._objectData.LabelMargin = objectData.content.LabelMargin !== undefined ? objectData.content.LabelMargin : Number("8") || 0;
    this._objectData.MinValue = objectData.content.MinValue !== undefined ? objectData.content.MinValue : Number("0") || 0;
    this._objectData.MaxValue = objectData.content.MaxValue !== undefined ? objectData.content.MaxValue : Number("100") || 0;
    this._objectData.StepSize = objectData.content.StepSize !== undefined ? objectData.content.StepSize : Number("1") || 0;
    this._objectData.InitialValue = objectData.content.InitialValue !== undefined ? objectData.content.InitialValue : Number("50") || 0;
    this._objectData.PreviousInitialValue = Number("") || 0;
    this._objectData.ThumbAnchorOrigin = "Center-center";
    this._objectData.ThumbAnchorTarget = "Center-right";
    this._objectData.ShowLabel = false;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.BarLeftPadding !== newObjectData.content.BarLeftPadding)
      this._objectData.BarLeftPadding = newObjectData.content.BarLeftPadding;
    if (oldObjectData.content.BarTopPadding !== newObjectData.content.BarTopPadding)
      this._objectData.BarTopPadding = newObjectData.content.BarTopPadding;
    if (oldObjectData.content.BarRightPadding !== newObjectData.content.BarRightPadding)
      this._objectData.BarRightPadding = newObjectData.content.BarRightPadding;
    if (oldObjectData.content.BarBottomPadding !== newObjectData.content.BarBottomPadding)
      this._objectData.BarBottomPadding = newObjectData.content.BarBottomPadding;
    if (oldObjectData.content.ShowLabelAtChanges !== newObjectData.content.ShowLabelAtChanges)
      this._objectData.ShowLabelAtChanges = newObjectData.content.ShowLabelAtChanges;
    if (oldObjectData.content.LabelMargin !== newObjectData.content.LabelMargin)
      this._objectData.LabelMargin = newObjectData.content.LabelMargin;
    if (oldObjectData.content.MinValue !== newObjectData.content.MinValue)
      this._objectData.MinValue = newObjectData.content.MinValue;
    if (oldObjectData.content.MaxValue !== newObjectData.content.MaxValue)
      this._objectData.MaxValue = newObjectData.content.MaxValue;
    if (oldObjectData.content.StepSize !== newObjectData.content.StepSize)
      this._objectData.StepSize = newObjectData.content.StepSize;
    if (oldObjectData.content.InitialValue !== newObjectData.content.InitialValue)
      this._objectData.InitialValue = newObjectData.content.InitialValue;
    if (oldObjectData.content.PreviousInitialValue !== newObjectData.content.PreviousInitialValue)
      this._objectData.PreviousInitialValue = newObjectData.content.PreviousInitialValue;
    if (oldObjectData.content.ThumbAnchorOrigin !== newObjectData.content.ThumbAnchorOrigin)
      this._objectData.ThumbAnchorOrigin = newObjectData.content.ThumbAnchorOrigin;
    if (oldObjectData.content.ThumbAnchorTarget !== newObjectData.content.ThumbAnchorTarget)
      this._objectData.ThumbAnchorTarget = newObjectData.content.ThumbAnchorTarget;
    if (oldObjectData.content.ShowLabel !== newObjectData.content.ShowLabel)
      this._objectData.ShowLabel = newObjectData.content.ShowLabel;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getBarLeftPadding() {
    return this._objectData.BarLeftPadding !== undefined ? this._objectData.BarLeftPadding : Number("0") || 0;
  }
  _setBarLeftPadding(newValue) {
    this._objectData.BarLeftPadding = newValue;
  }
  _getBarTopPadding() {
    return this._objectData.BarTopPadding !== undefined ? this._objectData.BarTopPadding : Number("0") || 0;
  }
  _setBarTopPadding(newValue) {
    this._objectData.BarTopPadding = newValue;
  }
  _getBarRightPadding() {
    return this._objectData.BarRightPadding !== undefined ? this._objectData.BarRightPadding : Number("0") || 0;
  }
  _setBarRightPadding(newValue) {
    this._objectData.BarRightPadding = newValue;
  }
  _getBarBottomPadding() {
    return this._objectData.BarBottomPadding !== undefined ? this._objectData.BarBottomPadding : Number("0") || 0;
  }
  _setBarBottomPadding(newValue) {
    this._objectData.BarBottomPadding = newValue;
  }
  _getShowLabelAtChanges() {
    return this._objectData.ShowLabelAtChanges !== undefined ? this._objectData.ShowLabelAtChanges : true;
  }
  _setShowLabelAtChanges(newValue) {
    this._objectData.ShowLabelAtChanges = newValue;
  }
  _toggleShowLabelAtChanges() {
    this._setShowLabelAtChanges(!this._getShowLabelAtChanges());
  }
  _getLabelMargin() {
    return this._objectData.LabelMargin !== undefined ? this._objectData.LabelMargin : Number("8") || 0;
  }
  _setLabelMargin(newValue) {
    this._objectData.LabelMargin = newValue;
  }
  _getMinValue() {
    return this._objectData.MinValue !== undefined ? this._objectData.MinValue : Number("0") || 0;
  }
  _setMinValue(newValue) {
    this._objectData.MinValue = newValue;
  }
  _getMaxValue() {
    return this._objectData.MaxValue !== undefined ? this._objectData.MaxValue : Number("100") || 0;
  }
  _setMaxValue(newValue) {
    this._objectData.MaxValue = newValue;
  }
  _getStepSize() {
    return this._objectData.StepSize !== undefined ? this._objectData.StepSize : Number("1") || 0;
  }
  _setStepSize(newValue) {
    this._objectData.StepSize = newValue;
  }
  _getInitialValue() {
    return this._objectData.InitialValue !== undefined ? this._objectData.InitialValue : Number("50") || 0;
  }
  _setInitialValue(newValue) {
    this._objectData.InitialValue = newValue;
  }
  _getPreviousInitialValue() {
    return this._objectData.PreviousInitialValue !== undefined ? this._objectData.PreviousInitialValue : Number("") || 0;
  }
  _setPreviousInitialValue(newValue) {
    this._objectData.PreviousInitialValue = newValue;
  }
  _getThumbAnchorOrigin() {
    return this._objectData.ThumbAnchorOrigin !== undefined ? this._objectData.ThumbAnchorOrigin : "Center-center";
  }
  _setThumbAnchorOrigin(newValue) {
    this._objectData.ThumbAnchorOrigin = newValue;
  }
  _getThumbAnchorTarget() {
    return this._objectData.ThumbAnchorTarget !== undefined ? this._objectData.ThumbAnchorTarget : "Center-right";
  }
  _setThumbAnchorTarget(newValue) {
    this._objectData.ThumbAnchorTarget = newValue;
  }
  _getShowLabel() {
    return this._objectData.ShowLabel !== undefined ? this._objectData.ShowLabel : false;
  }
  _setShowLabel(newValue) {
    this._objectData.ShowLabel = newValue;
  }
  _toggleShowLabel() {
    this._setShowLabel(!this._getShowLabel());
  }

  

  
}

// Methods:
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDBackgroundObjects1Objects = Hashtable.newFrom({"Background": gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1});
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDFillBarObjects1Objects = Hashtable.newFrom({"FillBar": gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1});
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDThumbObjects1Objects = Hashtable.newFrom({"Thumb": gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1});
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDLabelObjects1Objects = Hashtable.newFrom({"Label": gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1});
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[i]._setPreviousInitialValue((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[i]._getInitialValue()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDBackgroundObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDFillBarObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDThumbObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1[i].setZOrder(3);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDLabelObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1[i].setZOrder(4);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1[i].setWrapping(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[i].UpdateSliderConfiguration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[i].SetValue((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[i]._getInitialValue()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1[i].setIncludedInParentCollisionMask(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1[i].setIncludedInParentCollisionMask(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1[i].setIncludedInParentCollisionMask(false);
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i].UpdateLayout((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i].UpdateSliderConfiguration((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i]._getInitialValue() != (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i]._getPreviousInitialValue()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i]._setPreviousInitialValue((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i]._getInitialValue()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i].SetValue((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i]._getInitialValue()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i]._getShowLabelAtChanges() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].resetTimer("HideBack");
}
}}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i]._getShowLabelAtChanges() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].hide(false);
}
}}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).wasJustDropped()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressedOutside((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetValue((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MinValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Size((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * (gdjs.evtTools.input.getTouchX(runtimeScene, (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).TouchId((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0) - (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].FullBarLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].FullBarWidth((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2);
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetValue((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MinValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Size((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * ((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[0].getCenterXInScene()) - (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].FullBarLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].FullBarWidth((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].resetTimer("HideBack");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i]._getShowLabelAtChanges() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseOnlyCursorX(runtimeScene, (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer()), 0), gdjs.evtTools.input.getMouseOnlyCursorY(runtimeScene, (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getLayer()), 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].resetTimer("HideBack");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i].getTimerElapsedTimeInSecondsOrNaN("HideBack") > 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i].removeTimer("HideBack");
}
}}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("ButtonFSM")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1_1final.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1_1final.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);
{isConditionTrue_1 = ((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[0].getWidth()) != Math.max((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getAABBRight()), Math.max((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[0].getAABBRight()), (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[0].getAABBRight()))) - Math.min((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getAABBLeft()), Math.min((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[0].getAABBLeft()), (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[0].getAABBLeft()))));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);
{isConditionTrue_1 = ((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[0].getHeight()) != Math.max((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getAABBBottom()), Math.max((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[0].getAABBBottom()), (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[0].getAABBBottom()))) - Math.min((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getAABBTop()), Math.min((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[0].getAABBTop()), (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[0].getAABBTop()))));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1 */
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].returnVariable(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].getVariables().get("Width")).setNumber((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].returnVariable(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].getVariables().get("Height")).setNumber((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScale(1);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].setWidth((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].getVariables().get("Width"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].setHeight((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].getVariables().get("Height"))));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[i].UpdateLayout((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(27987140);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[i].UpdateLayout((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[i].UpdateThumbPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressedOutside((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDragged = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.Value = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).SetValue((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1[i].UpdateThumbPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MinValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).SetMinValue((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1[i].UpdateLayout((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1[i].UpdateThumbPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MaxValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).SetMaxValue((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1[i].UpdateLayout((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1[i].UpdateThumbPosition((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).StepSize((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSize = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).SetStepSize((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSize = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1[i]._getShowLabelAtChanges() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShown = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1[i]._setShowLabelAtChanges(false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1[i]._setShowLabelAtChanges(true);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1[i].hide(false);
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShown = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects1[i].setPosition((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1[0]._getBarLeftPadding()),(( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1[0]._getBarTopPadding()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects1[i].setHeight(Math.round((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDBackgroundObjects1[0].getHeight()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1[0]._getBarTopPadding()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1[0]._getBarBottomPadding())));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayout = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateLayoutContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects3= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[i].setWidth((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2[0].FullBarWidth((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * ((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) - (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MinValue((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) / (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Size((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2[i].setCenterXInScene((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2[0].FullBarLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2[i].setCenterYInScene((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[0].getCenterYInScene()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].setString(gdjs.evtTools.common.toString((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].setCenterXInScene((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].setY((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1[0].getY()) - (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].getHeight()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1[0]._getLabelMargin()));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].setAngle(-((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1[0].getAngle())));
}
}}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Size((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPosition = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects3.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDObjectObjects1[0]._getBarLeftPadding()); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeft = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDBackgroundObjects1[0].getWidth()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDObjectObjects1[0]._getBarRightPadding()); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarRightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects1[0].getWidth()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1[0]._getBarLeftPadding()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1[0]._getBarRightPadding()); }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i].SetMinValue((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i]._getMinValue()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i].SetMaxValue((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i]._getMaxValue()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i].SetStepSize((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i]._getStepSize()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfiguration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldActivate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Draggable"), true);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("ShouldActivate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Draggable"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1[i].hide();
}
}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.Activate = function(ShouldActivate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "ShouldActivate") return ShouldActivate;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("ButtonFSM")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("::PanelSpriteSlider", gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider);
