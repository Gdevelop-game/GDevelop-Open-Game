
gdjs.evtsExt__ToggleSwitch__ToggleSwitch = gdjs.evtsExt__ToggleSwitch__ToggleSwitch || {};

/**
 * Behavior generated from Toggle switch
 */
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch = class ToggleSwitch extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ThumbRadius = behaviorData.ThumbRadius !== undefined ? behaviorData.ThumbRadius : Number("10") || 0;
    this._behaviorData.ActiveThumbColor = behaviorData.ActiveThumbColor !== undefined ? behaviorData.ActiveThumbColor : "24;119;211";
    this._behaviorData.ThumbOpacity = behaviorData.ThumbOpacity !== undefined ? behaviorData.ThumbOpacity : Number("255") || 0;
    this._behaviorData.TrackWidth = behaviorData.TrackWidth !== undefined ? behaviorData.TrackWidth : Number("20") || 0;
    this._behaviorData.TrackHeight = behaviorData.TrackHeight !== undefined ? behaviorData.TrackHeight : Number("14") || 0;
    this._behaviorData.InactiveTrackColor = behaviorData.InactiveTrackColor !== undefined ? behaviorData.InactiveTrackColor : "150;150;150";
    this._behaviorData.InactiveTrackOpacity = behaviorData.InactiveTrackOpacity !== undefined ? behaviorData.InactiveTrackOpacity : Number("255") || 0;
    this._behaviorData.ActiveTrackColor = behaviorData.ActiveTrackColor !== undefined ? behaviorData.ActiveTrackColor : "";
    this._behaviorData.ActiveTrackOpacity = behaviorData.ActiveTrackOpacity !== undefined ? behaviorData.ActiveTrackOpacity : Number("128") || 0;
    this._behaviorData.HaloRadius = behaviorData.HaloRadius !== undefined ? behaviorData.HaloRadius : Number("24") || 0;
    this._behaviorData.HaloOpacityHover = behaviorData.HaloOpacityHover !== undefined ? behaviorData.HaloOpacityHover : Number("32") || 0;
    this._behaviorData.HaloOpacityPressed = behaviorData.HaloOpacityPressed !== undefined ? behaviorData.HaloOpacityPressed : Number("64") || 0;
    this._behaviorData.ThumbOffset = Number("0") || 0;
    this._behaviorData.Checked = behaviorData.Checked !== undefined ? behaviorData.Checked : false;
    this._behaviorData.Disabled = behaviorData.Disabled !== undefined ? behaviorData.Disabled : false;
    this._behaviorData.ToggleChanged = false;
    this._behaviorData.InactiveThumbColor = behaviorData.InactiveThumbColor !== undefined ? behaviorData.InactiveThumbColor : "255;255;255";
    this._behaviorData.IsPressed = false;
    this._behaviorData.ThumbShadowOffsetY = behaviorData.ThumbShadowOffsetY !== undefined ? behaviorData.ThumbShadowOffsetY : Number("4") || 0;
    this._behaviorData.ThumbShadowOffsetX = behaviorData.ThumbShadowOffsetX !== undefined ? behaviorData.ThumbShadowOffsetX : Number("0") || 0;
    this._behaviorData.ThumbShadowOpacity = behaviorData.ThumbShadowOpacity !== undefined ? behaviorData.ThumbShadowOpacity : Number("32") || 0;
    this._behaviorData.NeedRedaw = true;
    this._behaviorData.IsHovered = false;
    this._behaviorData.WasHovered = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ThumbRadius !== newBehaviorData.ThumbRadius)
      this._behaviorData.ThumbRadius = newBehaviorData.ThumbRadius;
    if (oldBehaviorData.ActiveThumbColor !== newBehaviorData.ActiveThumbColor)
      this._behaviorData.ActiveThumbColor = newBehaviorData.ActiveThumbColor;
    if (oldBehaviorData.ThumbOpacity !== newBehaviorData.ThumbOpacity)
      this._behaviorData.ThumbOpacity = newBehaviorData.ThumbOpacity;
    if (oldBehaviorData.TrackWidth !== newBehaviorData.TrackWidth)
      this._behaviorData.TrackWidth = newBehaviorData.TrackWidth;
    if (oldBehaviorData.TrackHeight !== newBehaviorData.TrackHeight)
      this._behaviorData.TrackHeight = newBehaviorData.TrackHeight;
    if (oldBehaviorData.InactiveTrackColor !== newBehaviorData.InactiveTrackColor)
      this._behaviorData.InactiveTrackColor = newBehaviorData.InactiveTrackColor;
    if (oldBehaviorData.InactiveTrackOpacity !== newBehaviorData.InactiveTrackOpacity)
      this._behaviorData.InactiveTrackOpacity = newBehaviorData.InactiveTrackOpacity;
    if (oldBehaviorData.ActiveTrackColor !== newBehaviorData.ActiveTrackColor)
      this._behaviorData.ActiveTrackColor = newBehaviorData.ActiveTrackColor;
    if (oldBehaviorData.ActiveTrackOpacity !== newBehaviorData.ActiveTrackOpacity)
      this._behaviorData.ActiveTrackOpacity = newBehaviorData.ActiveTrackOpacity;
    if (oldBehaviorData.HaloRadius !== newBehaviorData.HaloRadius)
      this._behaviorData.HaloRadius = newBehaviorData.HaloRadius;
    if (oldBehaviorData.HaloOpacityHover !== newBehaviorData.HaloOpacityHover)
      this._behaviorData.HaloOpacityHover = newBehaviorData.HaloOpacityHover;
    if (oldBehaviorData.HaloOpacityPressed !== newBehaviorData.HaloOpacityPressed)
      this._behaviorData.HaloOpacityPressed = newBehaviorData.HaloOpacityPressed;
    if (oldBehaviorData.ThumbOffset !== newBehaviorData.ThumbOffset)
      this._behaviorData.ThumbOffset = newBehaviorData.ThumbOffset;
    if (oldBehaviorData.Checked !== newBehaviorData.Checked)
      this._behaviorData.Checked = newBehaviorData.Checked;
    if (oldBehaviorData.Disabled !== newBehaviorData.Disabled)
      this._behaviorData.Disabled = newBehaviorData.Disabled;
    if (oldBehaviorData.ToggleChanged !== newBehaviorData.ToggleChanged)
      this._behaviorData.ToggleChanged = newBehaviorData.ToggleChanged;
    if (oldBehaviorData.InactiveThumbColor !== newBehaviorData.InactiveThumbColor)
      this._behaviorData.InactiveThumbColor = newBehaviorData.InactiveThumbColor;
    if (oldBehaviorData.IsPressed !== newBehaviorData.IsPressed)
      this._behaviorData.IsPressed = newBehaviorData.IsPressed;
    if (oldBehaviorData.ThumbShadowOffsetY !== newBehaviorData.ThumbShadowOffsetY)
      this._behaviorData.ThumbShadowOffsetY = newBehaviorData.ThumbShadowOffsetY;
    if (oldBehaviorData.ThumbShadowOffsetX !== newBehaviorData.ThumbShadowOffsetX)
      this._behaviorData.ThumbShadowOffsetX = newBehaviorData.ThumbShadowOffsetX;
    if (oldBehaviorData.ThumbShadowOpacity !== newBehaviorData.ThumbShadowOpacity)
      this._behaviorData.ThumbShadowOpacity = newBehaviorData.ThumbShadowOpacity;
    if (oldBehaviorData.NeedRedaw !== newBehaviorData.NeedRedaw)
      this._behaviorData.NeedRedaw = newBehaviorData.NeedRedaw;
    if (oldBehaviorData.IsHovered !== newBehaviorData.IsHovered)
      this._behaviorData.IsHovered = newBehaviorData.IsHovered;
    if (oldBehaviorData.WasHovered !== newBehaviorData.WasHovered)
      this._behaviorData.WasHovered = newBehaviorData.WasHovered;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    ThumbRadius: this._behaviorData.ThumbRadius,
    ActiveThumbColor: this._behaviorData.ActiveThumbColor,
    ThumbOpacity: this._behaviorData.ThumbOpacity,
    TrackWidth: this._behaviorData.TrackWidth,
    TrackHeight: this._behaviorData.TrackHeight,
    InactiveTrackColor: this._behaviorData.InactiveTrackColor,
    InactiveTrackOpacity: this._behaviorData.InactiveTrackOpacity,
    ActiveTrackColor: this._behaviorData.ActiveTrackColor,
    ActiveTrackOpacity: this._behaviorData.ActiveTrackOpacity,
    HaloRadius: this._behaviorData.HaloRadius,
    HaloOpacityHover: this._behaviorData.HaloOpacityHover,
    HaloOpacityPressed: this._behaviorData.HaloOpacityPressed,
    ThumbOffset: this._behaviorData.ThumbOffset,
    Checked: this._behaviorData.Checked,
    Disabled: this._behaviorData.Disabled,
    ToggleChanged: this._behaviorData.ToggleChanged,
    InactiveThumbColor: this._behaviorData.InactiveThumbColor,
    IsPressed: this._behaviorData.IsPressed,
    ThumbShadowOffsetY: this._behaviorData.ThumbShadowOffsetY,
    ThumbShadowOffsetX: this._behaviorData.ThumbShadowOffsetX,
    ThumbShadowOpacity: this._behaviorData.ThumbShadowOpacity,
    NeedRedaw: this._behaviorData.NeedRedaw,
    IsHovered: this._behaviorData.IsHovered,
    WasHovered: this._behaviorData.WasHovered,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.ThumbRadius !== undefined)
      this._behaviorData.ThumbRadius = networkSyncData.props.ThumbRadius;
    if (networkSyncData.props.ActiveThumbColor !== undefined)
      this._behaviorData.ActiveThumbColor = networkSyncData.props.ActiveThumbColor;
    if (networkSyncData.props.ThumbOpacity !== undefined)
      this._behaviorData.ThumbOpacity = networkSyncData.props.ThumbOpacity;
    if (networkSyncData.props.TrackWidth !== undefined)
      this._behaviorData.TrackWidth = networkSyncData.props.TrackWidth;
    if (networkSyncData.props.TrackHeight !== undefined)
      this._behaviorData.TrackHeight = networkSyncData.props.TrackHeight;
    if (networkSyncData.props.InactiveTrackColor !== undefined)
      this._behaviorData.InactiveTrackColor = networkSyncData.props.InactiveTrackColor;
    if (networkSyncData.props.InactiveTrackOpacity !== undefined)
      this._behaviorData.InactiveTrackOpacity = networkSyncData.props.InactiveTrackOpacity;
    if (networkSyncData.props.ActiveTrackColor !== undefined)
      this._behaviorData.ActiveTrackColor = networkSyncData.props.ActiveTrackColor;
    if (networkSyncData.props.ActiveTrackOpacity !== undefined)
      this._behaviorData.ActiveTrackOpacity = networkSyncData.props.ActiveTrackOpacity;
    if (networkSyncData.props.HaloRadius !== undefined)
      this._behaviorData.HaloRadius = networkSyncData.props.HaloRadius;
    if (networkSyncData.props.HaloOpacityHover !== undefined)
      this._behaviorData.HaloOpacityHover = networkSyncData.props.HaloOpacityHover;
    if (networkSyncData.props.HaloOpacityPressed !== undefined)
      this._behaviorData.HaloOpacityPressed = networkSyncData.props.HaloOpacityPressed;
    if (networkSyncData.props.ThumbOffset !== undefined)
      this._behaviorData.ThumbOffset = networkSyncData.props.ThumbOffset;
    if (networkSyncData.props.Checked !== undefined)
      this._behaviorData.Checked = networkSyncData.props.Checked;
    if (networkSyncData.props.Disabled !== undefined)
      this._behaviorData.Disabled = networkSyncData.props.Disabled;
    if (networkSyncData.props.ToggleChanged !== undefined)
      this._behaviorData.ToggleChanged = networkSyncData.props.ToggleChanged;
    if (networkSyncData.props.InactiveThumbColor !== undefined)
      this._behaviorData.InactiveThumbColor = networkSyncData.props.InactiveThumbColor;
    if (networkSyncData.props.IsPressed !== undefined)
      this._behaviorData.IsPressed = networkSyncData.props.IsPressed;
    if (networkSyncData.props.ThumbShadowOffsetY !== undefined)
      this._behaviorData.ThumbShadowOffsetY = networkSyncData.props.ThumbShadowOffsetY;
    if (networkSyncData.props.ThumbShadowOffsetX !== undefined)
      this._behaviorData.ThumbShadowOffsetX = networkSyncData.props.ThumbShadowOffsetX;
    if (networkSyncData.props.ThumbShadowOpacity !== undefined)
      this._behaviorData.ThumbShadowOpacity = networkSyncData.props.ThumbShadowOpacity;
    if (networkSyncData.props.NeedRedaw !== undefined)
      this._behaviorData.NeedRedaw = networkSyncData.props.NeedRedaw;
    if (networkSyncData.props.IsHovered !== undefined)
      this._behaviorData.IsHovered = networkSyncData.props.IsHovered;
    if (networkSyncData.props.WasHovered !== undefined)
      this._behaviorData.WasHovered = networkSyncData.props.WasHovered;
  }

  // Properties:
  
  _getThumbRadius() {
    return this._behaviorData.ThumbRadius !== undefined ? this._behaviorData.ThumbRadius : Number("10") || 0;
  }
  _setThumbRadius(newValue) {
    this._behaviorData.ThumbRadius = newValue;
  }
  _getActiveThumbColor() {
    return this._behaviorData.ActiveThumbColor !== undefined ? this._behaviorData.ActiveThumbColor : "24;119;211";
  }
  _setActiveThumbColor(newValue) {
    this._behaviorData.ActiveThumbColor = newValue;
  }
  _getThumbOpacity() {
    return this._behaviorData.ThumbOpacity !== undefined ? this._behaviorData.ThumbOpacity : Number("255") || 0;
  }
  _setThumbOpacity(newValue) {
    this._behaviorData.ThumbOpacity = newValue;
  }
  _getTrackWidth() {
    return this._behaviorData.TrackWidth !== undefined ? this._behaviorData.TrackWidth : Number("20") || 0;
  }
  _setTrackWidth(newValue) {
    this._behaviorData.TrackWidth = newValue;
  }
  _getTrackHeight() {
    return this._behaviorData.TrackHeight !== undefined ? this._behaviorData.TrackHeight : Number("14") || 0;
  }
  _setTrackHeight(newValue) {
    this._behaviorData.TrackHeight = newValue;
  }
  _getInactiveTrackColor() {
    return this._behaviorData.InactiveTrackColor !== undefined ? this._behaviorData.InactiveTrackColor : "150;150;150";
  }
  _setInactiveTrackColor(newValue) {
    this._behaviorData.InactiveTrackColor = newValue;
  }
  _getInactiveTrackOpacity() {
    return this._behaviorData.InactiveTrackOpacity !== undefined ? this._behaviorData.InactiveTrackOpacity : Number("255") || 0;
  }
  _setInactiveTrackOpacity(newValue) {
    this._behaviorData.InactiveTrackOpacity = newValue;
  }
  _getActiveTrackColor() {
    return this._behaviorData.ActiveTrackColor !== undefined ? this._behaviorData.ActiveTrackColor : "";
  }
  _setActiveTrackColor(newValue) {
    this._behaviorData.ActiveTrackColor = newValue;
  }
  _getActiveTrackOpacity() {
    return this._behaviorData.ActiveTrackOpacity !== undefined ? this._behaviorData.ActiveTrackOpacity : Number("128") || 0;
  }
  _setActiveTrackOpacity(newValue) {
    this._behaviorData.ActiveTrackOpacity = newValue;
  }
  _getHaloRadius() {
    return this._behaviorData.HaloRadius !== undefined ? this._behaviorData.HaloRadius : Number("24") || 0;
  }
  _setHaloRadius(newValue) {
    this._behaviorData.HaloRadius = newValue;
  }
  _getHaloOpacityHover() {
    return this._behaviorData.HaloOpacityHover !== undefined ? this._behaviorData.HaloOpacityHover : Number("32") || 0;
  }
  _setHaloOpacityHover(newValue) {
    this._behaviorData.HaloOpacityHover = newValue;
  }
  _getHaloOpacityPressed() {
    return this._behaviorData.HaloOpacityPressed !== undefined ? this._behaviorData.HaloOpacityPressed : Number("64") || 0;
  }
  _setHaloOpacityPressed(newValue) {
    this._behaviorData.HaloOpacityPressed = newValue;
  }
  _getThumbOffset() {
    return this._behaviorData.ThumbOffset !== undefined ? this._behaviorData.ThumbOffset : Number("0") || 0;
  }
  _setThumbOffset(newValue) {
    this._behaviorData.ThumbOffset = newValue;
  }
  _getChecked() {
    return this._behaviorData.Checked !== undefined ? this._behaviorData.Checked : false;
  }
  _setChecked(newValue) {
    this._behaviorData.Checked = newValue;
  }
  _toggleChecked() {
    this._setChecked(!this._getChecked());
  }
  _getDisabled() {
    return this._behaviorData.Disabled !== undefined ? this._behaviorData.Disabled : false;
  }
  _setDisabled(newValue) {
    this._behaviorData.Disabled = newValue;
  }
  _toggleDisabled() {
    this._setDisabled(!this._getDisabled());
  }
  _getToggleChanged() {
    return this._behaviorData.ToggleChanged !== undefined ? this._behaviorData.ToggleChanged : false;
  }
  _setToggleChanged(newValue) {
    this._behaviorData.ToggleChanged = newValue;
  }
  _toggleToggleChanged() {
    this._setToggleChanged(!this._getToggleChanged());
  }
  _getInactiveThumbColor() {
    return this._behaviorData.InactiveThumbColor !== undefined ? this._behaviorData.InactiveThumbColor : "255;255;255";
  }
  _setInactiveThumbColor(newValue) {
    this._behaviorData.InactiveThumbColor = newValue;
  }
  _getIsPressed() {
    return this._behaviorData.IsPressed !== undefined ? this._behaviorData.IsPressed : false;
  }
  _setIsPressed(newValue) {
    this._behaviorData.IsPressed = newValue;
  }
  _toggleIsPressed() {
    this._setIsPressed(!this._getIsPressed());
  }
  _getThumbShadowOffsetY() {
    return this._behaviorData.ThumbShadowOffsetY !== undefined ? this._behaviorData.ThumbShadowOffsetY : Number("4") || 0;
  }
  _setThumbShadowOffsetY(newValue) {
    this._behaviorData.ThumbShadowOffsetY = newValue;
  }
  _getThumbShadowOffsetX() {
    return this._behaviorData.ThumbShadowOffsetX !== undefined ? this._behaviorData.ThumbShadowOffsetX : Number("0") || 0;
  }
  _setThumbShadowOffsetX(newValue) {
    this._behaviorData.ThumbShadowOffsetX = newValue;
  }
  _getThumbShadowOpacity() {
    return this._behaviorData.ThumbShadowOpacity !== undefined ? this._behaviorData.ThumbShadowOpacity : Number("32") || 0;
  }
  _setThumbShadowOpacity(newValue) {
    this._behaviorData.ThumbShadowOpacity = newValue;
  }
  _getNeedRedaw() {
    return this._behaviorData.NeedRedaw !== undefined ? this._behaviorData.NeedRedaw : true;
  }
  _setNeedRedaw(newValue) {
    this._behaviorData.NeedRedaw = newValue;
  }
  _toggleNeedRedaw() {
    this._setNeedRedaw(!this._getNeedRedaw());
  }
  _getIsHovered() {
    return this._behaviorData.IsHovered !== undefined ? this._behaviorData.IsHovered : false;
  }
  _setIsHovered(newValue) {
    this._behaviorData.IsHovered = newValue;
  }
  _toggleIsHovered() {
    this._setIsHovered(!this._getIsHovered());
  }
  _getWasHovered() {
    return this._behaviorData.WasHovered !== undefined ? this._behaviorData.WasHovered : false;
  }
  _setWasHovered(newValue) {
    this._behaviorData.WasHovered = newValue;
  }
  _toggleWasHovered() {
    this._setWasHovered(!this._getWasHovered());
  }
}

/**
 * Shared data generated from Toggle switch
 */
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.SharedData = class ToggleSwitchSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer.__ToggleSwitchSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer.__ToggleSwitchSharedData = new gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.SharedData(
      initialData
    );
  }
  return instanceContainer.__ToggleSwitchSharedData;
}

// Methods:
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset() > 0.01 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset() < (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()) - 0.01 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsHoveredOver((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ToggleChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().get("__ToggleSwitchBehavior").getChild("IsPressed").setNumber(1);
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPressed(true);
}
}}

}


};gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasHovered(true);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setWasHovered(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHovered(false);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getLayer()), 0) >= (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getX()) - Math.max((( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()), (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getLayer()), 0) <= (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getX()) + (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()) + Math.max((( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()), (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getLayer()), 0) >= (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getY()) - (Math.max((( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()), (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius())) * 2 - (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight())) / 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorY(runtimeScene, (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getLayer()), 0) <= (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getY()) + (Math.max((( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()), (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius())) * 2 + (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight())) / 2;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHovered(true);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasHovered()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getWasHovered() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(27766284);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius() < (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrackHeight((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()) * 2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius() > (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()) / 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbRadius((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()) / 2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius() < (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()) * 1.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetHaloRadius((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()) * 1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOffsetX() > (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()) / 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbShadowOffsetX((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()) / 3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOffsetY() > (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()) / 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbShadowOffsetY((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()) / 3);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOffset(gdjs.evtTools.common.lerp((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), 0, 0.25));
}
}
{ //Subevents
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOffset(gdjs.evtTools.common.lerp((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()), 0.25));
}
}
{ //Subevents
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisabled()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ToggleSwitchBehavior").getChild("IsPressed")) == 0;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1);
{runtimeScene.getScene().getVariables().get("__ToggleSwitchBehavior").getChild("IsPressed").setNumber(0);
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsPressed(false);
}
}}

}


};gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor() == "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveThumbColor()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor() == "") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackOpacity()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity(0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawArc((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, 270, 90, false, true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), 0, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor() == "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveThumbColor()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor() == "") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackOpacity()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawArc(0, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, 90, 270, false, true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle(0, 0, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityHover()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveThumbColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsPressed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveThumbColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityPressed()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor("50;50;93");
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOpacity()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()) + (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOffsetX()), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2 + (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ThumbShadowOffsetY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor("0;0;0");
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOpacity()) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()) + (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOffsetX()) / 4, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2 + (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ThumbShadowOffsetY((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / 4, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity(128);
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineSize(0);
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOpacity()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveThumbColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ActiveTrackOpacity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveThumbColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineColor((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor()));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].setOutlineOpacity((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).InactiveTrackOpacity((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawCircle((gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset()), (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()) / 2, (gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbRadius()));
}
}}

}


};gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNeedRedaw() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(false);
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1[i].clear();
}
}
{ //Subevents
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.GDObjectObjects1[i].setClearBetweenFrames(false);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrackWidth((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidth = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrackHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeight = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetTrackHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInactiveTrackOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActiveTrackOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloOpacityPressed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressed = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloOpacityHover((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHover = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloOpacityHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbShadowOffsetY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetY = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbShadowOffsetX((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetX = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbShadowOpacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacity = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbShadowOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbRadius((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadius = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetThumbRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadius((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadius = function(Value, parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetHaloRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActiveTrackColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveTrackColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInactiveTrackColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveTrackColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInactiveThumbColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetInactiveThumbColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActiveThumbColor((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColor = function(Color, parentEventsFunctionContext) {

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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetActiveThumbColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggleChanged(false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(false);
}
}{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setToggleChanged(true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToggleChanged()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleChecked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ToggleCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabled = function(State, parentEventsFunctionContext) {

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
if (argName === "State") return State;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetDisabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("State") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setChecked(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedaw(true);
}
}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetChecked = function(State, parentEventsFunctionContext) {

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
if (argName === "State") return State;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.SetCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOver = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsHoveredOverContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackWidth()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidth = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackWidthContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackHeight()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeight = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.TrackHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOffsetY()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetY = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOffsetX()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetX = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOffsetXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShadowOpacity()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacity = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbShadowOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOpacity()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacity = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ThumbOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackOpacity()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacity = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackOpacity()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacity = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityPressed()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressed = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityPressedContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityHover()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHover = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloOpacityHoverContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadius = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.HaloRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveTrackColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveTrackColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveThumbColor()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.ActiveThumbColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisabled() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDisabled()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabled = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsDisabledContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getChecked()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1[k] = gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsChecked = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.IsCheckedContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext = {};
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.GDObjectObjects1= [];
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.GDObjectObjects2= [];


gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveThumbColor()); }}}

}


};

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColor = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.InactiveThumbColorContext.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("::ToggleSwitch", gdjs.evtsExt__ToggleSwitch__ToggleSwitch.ToggleSwitch);
