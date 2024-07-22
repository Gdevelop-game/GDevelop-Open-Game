
gdjs.evtsExt__EllipseMovement__EllipseMovement = gdjs.evtsExt__EllipseMovement__EllipseMovement || {};

/**
 * Behavior generated from Ellipse movement
 */
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement = class EllipseMovement extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.RadiusX = behaviorData.RadiusX !== undefined ? behaviorData.RadiusX : Number("100") || 0;
    this._behaviorData.RadiusY = behaviorData.RadiusY !== undefined ? behaviorData.RadiusY : Number("0") || 0;
    this._behaviorData.LoopDuration = behaviorData.LoopDuration !== undefined ? behaviorData.LoopDuration : Number("6") || 0;
    this._behaviorData.InitialTurningLeft = behaviorData.InitialTurningLeft !== undefined ? behaviorData.InitialTurningLeft : false;
    this._behaviorData.InitialDirectionAngle = behaviorData.InitialDirectionAngle !== undefined ? behaviorData.InitialDirectionAngle : Number("0") || 0;
    this._behaviorData.ShouldRotate = behaviorData.ShouldRotate !== undefined ? behaviorData.ShouldRotate : false;
    this._behaviorData.RotationOffset = behaviorData.RotationOffset !== undefined ? behaviorData.RotationOffset : Number("0") || 0;
    this._behaviorData.CenterX = Number("0") || 0;
    this._behaviorData.CenterY = Number("0") || 0;
    this._behaviorData.MovementAngle = Number("0") || 0;
    this._behaviorData.OldX = Number("") || 0;
    this._behaviorData.OldY = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.RadiusX !== newBehaviorData.RadiusX)
      this._behaviorData.RadiusX = newBehaviorData.RadiusX;
    if (oldBehaviorData.RadiusY !== newBehaviorData.RadiusY)
      this._behaviorData.RadiusY = newBehaviorData.RadiusY;
    if (oldBehaviorData.LoopDuration !== newBehaviorData.LoopDuration)
      this._behaviorData.LoopDuration = newBehaviorData.LoopDuration;
    if (oldBehaviorData.InitialTurningLeft !== newBehaviorData.InitialTurningLeft)
      this._behaviorData.InitialTurningLeft = newBehaviorData.InitialTurningLeft;
    if (oldBehaviorData.InitialDirectionAngle !== newBehaviorData.InitialDirectionAngle)
      this._behaviorData.InitialDirectionAngle = newBehaviorData.InitialDirectionAngle;
    if (oldBehaviorData.ShouldRotate !== newBehaviorData.ShouldRotate)
      this._behaviorData.ShouldRotate = newBehaviorData.ShouldRotate;
    if (oldBehaviorData.RotationOffset !== newBehaviorData.RotationOffset)
      this._behaviorData.RotationOffset = newBehaviorData.RotationOffset;
    if (oldBehaviorData.CenterX !== newBehaviorData.CenterX)
      this._behaviorData.CenterX = newBehaviorData.CenterX;
    if (oldBehaviorData.CenterY !== newBehaviorData.CenterY)
      this._behaviorData.CenterY = newBehaviorData.CenterY;
    if (oldBehaviorData.MovementAngle !== newBehaviorData.MovementAngle)
      this._behaviorData.MovementAngle = newBehaviorData.MovementAngle;
    if (oldBehaviorData.OldX !== newBehaviorData.OldX)
      this._behaviorData.OldX = newBehaviorData.OldX;
    if (oldBehaviorData.OldY !== newBehaviorData.OldY)
      this._behaviorData.OldY = newBehaviorData.OldY;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    RadiusX: this._behaviorData.RadiusX,
    RadiusY: this._behaviorData.RadiusY,
    LoopDuration: this._behaviorData.LoopDuration,
    InitialTurningLeft: this._behaviorData.InitialTurningLeft,
    InitialDirectionAngle: this._behaviorData.InitialDirectionAngle,
    ShouldRotate: this._behaviorData.ShouldRotate,
    RotationOffset: this._behaviorData.RotationOffset,
    CenterX: this._behaviorData.CenterX,
    CenterY: this._behaviorData.CenterY,
    MovementAngle: this._behaviorData.MovementAngle,
    OldX: this._behaviorData.OldX,
    OldY: this._behaviorData.OldY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.RadiusX !== undefined)
      this._behaviorData.RadiusX = networkSyncData.props.RadiusX;
    if (networkSyncData.props.RadiusY !== undefined)
      this._behaviorData.RadiusY = networkSyncData.props.RadiusY;
    if (networkSyncData.props.LoopDuration !== undefined)
      this._behaviorData.LoopDuration = networkSyncData.props.LoopDuration;
    if (networkSyncData.props.InitialTurningLeft !== undefined)
      this._behaviorData.InitialTurningLeft = networkSyncData.props.InitialTurningLeft;
    if (networkSyncData.props.InitialDirectionAngle !== undefined)
      this._behaviorData.InitialDirectionAngle = networkSyncData.props.InitialDirectionAngle;
    if (networkSyncData.props.ShouldRotate !== undefined)
      this._behaviorData.ShouldRotate = networkSyncData.props.ShouldRotate;
    if (networkSyncData.props.RotationOffset !== undefined)
      this._behaviorData.RotationOffset = networkSyncData.props.RotationOffset;
    if (networkSyncData.props.CenterX !== undefined)
      this._behaviorData.CenterX = networkSyncData.props.CenterX;
    if (networkSyncData.props.CenterY !== undefined)
      this._behaviorData.CenterY = networkSyncData.props.CenterY;
    if (networkSyncData.props.MovementAngle !== undefined)
      this._behaviorData.MovementAngle = networkSyncData.props.MovementAngle;
    if (networkSyncData.props.OldX !== undefined)
      this._behaviorData.OldX = networkSyncData.props.OldX;
    if (networkSyncData.props.OldY !== undefined)
      this._behaviorData.OldY = networkSyncData.props.OldY;
  }

  // Properties:
  
  _getRadiusX() {
    return this._behaviorData.RadiusX !== undefined ? this._behaviorData.RadiusX : Number("100") || 0;
  }
  _setRadiusX(newValue) {
    this._behaviorData.RadiusX = newValue;
  }
  _getRadiusY() {
    return this._behaviorData.RadiusY !== undefined ? this._behaviorData.RadiusY : Number("0") || 0;
  }
  _setRadiusY(newValue) {
    this._behaviorData.RadiusY = newValue;
  }
  _getLoopDuration() {
    return this._behaviorData.LoopDuration !== undefined ? this._behaviorData.LoopDuration : Number("6") || 0;
  }
  _setLoopDuration(newValue) {
    this._behaviorData.LoopDuration = newValue;
  }
  _getInitialTurningLeft() {
    return this._behaviorData.InitialTurningLeft !== undefined ? this._behaviorData.InitialTurningLeft : false;
  }
  _setInitialTurningLeft(newValue) {
    this._behaviorData.InitialTurningLeft = newValue;
  }
  _toggleInitialTurningLeft() {
    this._setInitialTurningLeft(!this._getInitialTurningLeft());
  }
  _getInitialDirectionAngle() {
    return this._behaviorData.InitialDirectionAngle !== undefined ? this._behaviorData.InitialDirectionAngle : Number("0") || 0;
  }
  _setInitialDirectionAngle(newValue) {
    this._behaviorData.InitialDirectionAngle = newValue;
  }
  _getShouldRotate() {
    return this._behaviorData.ShouldRotate !== undefined ? this._behaviorData.ShouldRotate : false;
  }
  _setShouldRotate(newValue) {
    this._behaviorData.ShouldRotate = newValue;
  }
  _toggleShouldRotate() {
    this._setShouldRotate(!this._getShouldRotate());
  }
  _getRotationOffset() {
    return this._behaviorData.RotationOffset !== undefined ? this._behaviorData.RotationOffset : Number("0") || 0;
  }
  _setRotationOffset(newValue) {
    this._behaviorData.RotationOffset = newValue;
  }
  _getCenterX() {
    return this._behaviorData.CenterX !== undefined ? this._behaviorData.CenterX : Number("0") || 0;
  }
  _setCenterX(newValue) {
    this._behaviorData.CenterX = newValue;
  }
  _getCenterY() {
    return this._behaviorData.CenterY !== undefined ? this._behaviorData.CenterY : Number("0") || 0;
  }
  _setCenterY(newValue) {
    this._behaviorData.CenterY = newValue;
  }
  _getMovementAngle() {
    return this._behaviorData.MovementAngle !== undefined ? this._behaviorData.MovementAngle : Number("0") || 0;
  }
  _setMovementAngle(newValue) {
    this._behaviorData.MovementAngle = newValue;
  }
  _getOldX() {
    return this._behaviorData.OldX !== undefined ? this._behaviorData.OldX : Number("") || 0;
  }
  _setOldX(newValue) {
    this._behaviorData.OldX = newValue;
  }
  _getOldY() {
    return this._behaviorData.OldY !== undefined ? this._behaviorData.OldY : Number("") || 0;
  }
  _setOldY(newValue) {
    this._behaviorData.OldY = newValue;
  }
}

/**
 * Shared data generated from Ellipse movement
 */
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.SharedData = class EllipseMovementSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer.__EllipseMovementSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer.__EllipseMovementSharedData = new gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.SharedData(
      initialData
    );
  }
  return instanceContainer.__EllipseMovementSharedData;
}

// Methods:
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldX((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldY((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getY()));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialTurningLeft() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopDuration(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() * (-(1)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialDirectionAngle()) + 90);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInitialDirectionAngle()) - 90);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterX((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterY((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getY()) - (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterX(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterX() + ((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldX())));
}
}{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterY(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterY() + ((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()) - (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOldY())));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRadiusX() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setX((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterX()) + (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRadiusY() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterY()) + (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DeltaY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).DirectionAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotationOffset()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldX((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getX()));
}
}{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOldY((gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle() + (360 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration())));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterX(2 * (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getX()) - (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterX((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCenterY(2 * (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getY()) - (gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle() + (180));
}
}{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopDuration(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() * (-(1)));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeft = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.ToggleTurningLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("TurnLeft") : false);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1_1final.push(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_2 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("TurnLeft") : false);
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1_1final.push(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1_1final, gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeft = function(TurnLeft, parentEventsFunctionContext) {

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
if (argName === "TurnLeft") return TurnLeft;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetTurningLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeft = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.IsTurningLeftContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle()); }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.MovementAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.abs((( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration())); }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDuration = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.LoopDurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRadiusX()); }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRadiusY()); }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.RadiusYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterX()); }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterY()); }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.CenterYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRadiusX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusXContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRadiusY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetRadiusYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopDuration(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsTurningLeft((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setLoopDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDuration = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetLoopDurationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMovementAngle((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngle = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.SetMovementAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.cos(gdjs.toRad((( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle()))) * (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRadiusX()); }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = Math.sin(gdjs.toRad((( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle()))) * (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRadiusY()); }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DeltaYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext = {};
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle()) + 90; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLoopDuration() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1 */
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMovementAngle()) - 90; }}}

}


};

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngle = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement.prototype.DirectionAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("::EllipseMovement", gdjs.evtsExt__EllipseMovement__EllipseMovement.EllipseMovement);
