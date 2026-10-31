gdjs.CityCode = {};
gdjs.CityCode.localVariables = [];
gdjs.CityCode.idToCallbackMap = new Map();
gdjs.CityCode.GDGroundObjects1= [];
gdjs.CityCode.GDGroundObjects2= [];
gdjs.CityCode.GDGroundObjects3= [];
gdjs.CityCode.GDGroundObjects4= [];
gdjs.CityCode.GDGroundObjects5= [];
gdjs.CityCode.GDPavementObjects1= [];
gdjs.CityCode.GDPavementObjects2= [];
gdjs.CityCode.GDPavementObjects3= [];
gdjs.CityCode.GDPavementObjects4= [];
gdjs.CityCode.GDPavementObjects5= [];
gdjs.CityCode.GDWallObjects1= [];
gdjs.CityCode.GDWallObjects2= [];
gdjs.CityCode.GDWallObjects3= [];
gdjs.CityCode.GDWallObjects4= [];
gdjs.CityCode.GDWallObjects5= [];
gdjs.CityCode.GDDoorZoneObjects1= [];
gdjs.CityCode.GDDoorZoneObjects2= [];
gdjs.CityCode.GDDoorZoneObjects3= [];
gdjs.CityCode.GDDoorZoneObjects4= [];
gdjs.CityCode.GDDoorZoneObjects5= [];
gdjs.CityCode.GDRoadStraightObjects1= [];
gdjs.CityCode.GDRoadStraightObjects2= [];
gdjs.CityCode.GDRoadStraightObjects3= [];
gdjs.CityCode.GDRoadStraightObjects4= [];
gdjs.CityCode.GDRoadStraightObjects5= [];
gdjs.CityCode.GDRoadCrossroadObjects1= [];
gdjs.CityCode.GDRoadCrossroadObjects2= [];
gdjs.CityCode.GDRoadCrossroadObjects3= [];
gdjs.CityCode.GDRoadCrossroadObjects4= [];
gdjs.CityCode.GDRoadCrossroadObjects5= [];
gdjs.CityCode.GDRoadIntersectionObjects1= [];
gdjs.CityCode.GDRoadIntersectionObjects2= [];
gdjs.CityCode.GDRoadIntersectionObjects3= [];
gdjs.CityCode.GDRoadIntersectionObjects4= [];
gdjs.CityCode.GDRoadIntersectionObjects5= [];
gdjs.CityCode.GDRoadBendObjects1= [];
gdjs.CityCode.GDRoadBendObjects2= [];
gdjs.CityCode.GDRoadBendObjects3= [];
gdjs.CityCode.GDRoadBendObjects4= [];
gdjs.CityCode.GDRoadBendObjects5= [];
gdjs.CityCode.GDBuildingAObjects1= [];
gdjs.CityCode.GDBuildingAObjects2= [];
gdjs.CityCode.GDBuildingAObjects3= [];
gdjs.CityCode.GDBuildingAObjects4= [];
gdjs.CityCode.GDBuildingAObjects5= [];
gdjs.CityCode.GDBuildingBObjects1= [];
gdjs.CityCode.GDBuildingBObjects2= [];
gdjs.CityCode.GDBuildingBObjects3= [];
gdjs.CityCode.GDBuildingBObjects4= [];
gdjs.CityCode.GDBuildingBObjects5= [];
gdjs.CityCode.GDBuildingCObjects1= [];
gdjs.CityCode.GDBuildingCObjects2= [];
gdjs.CityCode.GDBuildingCObjects3= [];
gdjs.CityCode.GDBuildingCObjects4= [];
gdjs.CityCode.GDBuildingCObjects5= [];
gdjs.CityCode.GDBuildingDObjects1= [];
gdjs.CityCode.GDBuildingDObjects2= [];
gdjs.CityCode.GDBuildingDObjects3= [];
gdjs.CityCode.GDBuildingDObjects4= [];
gdjs.CityCode.GDBuildingDObjects5= [];
gdjs.CityCode.GDBuildingFObjects1= [];
gdjs.CityCode.GDBuildingFObjects2= [];
gdjs.CityCode.GDBuildingFObjects3= [];
gdjs.CityCode.GDBuildingFObjects4= [];
gdjs.CityCode.GDBuildingFObjects5= [];
gdjs.CityCode.GDBuildingGObjects1= [];
gdjs.CityCode.GDBuildingGObjects2= [];
gdjs.CityCode.GDBuildingGObjects3= [];
gdjs.CityCode.GDBuildingGObjects4= [];
gdjs.CityCode.GDBuildingGObjects5= [];
gdjs.CityCode.GDBuildingHObjects1= [];
gdjs.CityCode.GDBuildingHObjects2= [];
gdjs.CityCode.GDBuildingHObjects3= [];
gdjs.CityCode.GDBuildingHObjects4= [];
gdjs.CityCode.GDBuildingHObjects5= [];
gdjs.CityCode.GDBuildingIObjects1= [];
gdjs.CityCode.GDBuildingIObjects2= [];
gdjs.CityCode.GDBuildingIObjects3= [];
gdjs.CityCode.GDBuildingIObjects4= [];
gdjs.CityCode.GDBuildingIObjects5= [];
gdjs.CityCode.GDBuildingLObjects1= [];
gdjs.CityCode.GDBuildingLObjects2= [];
gdjs.CityCode.GDBuildingLObjects3= [];
gdjs.CityCode.GDBuildingLObjects4= [];
gdjs.CityCode.GDBuildingLObjects5= [];
gdjs.CityCode.GDBuildingMObjects1= [];
gdjs.CityCode.GDBuildingMObjects2= [];
gdjs.CityCode.GDBuildingMObjects3= [];
gdjs.CityCode.GDBuildingMObjects4= [];
gdjs.CityCode.GDBuildingMObjects5= [];
gdjs.CityCode.GDSkyscraperAObjects1= [];
gdjs.CityCode.GDSkyscraperAObjects2= [];
gdjs.CityCode.GDSkyscraperAObjects3= [];
gdjs.CityCode.GDSkyscraperAObjects4= [];
gdjs.CityCode.GDSkyscraperAObjects5= [];
gdjs.CityCode.GDSkyscraperBObjects1= [];
gdjs.CityCode.GDSkyscraperBObjects2= [];
gdjs.CityCode.GDSkyscraperBObjects3= [];
gdjs.CityCode.GDSkyscraperBObjects4= [];
gdjs.CityCode.GDSkyscraperBObjects5= [];
gdjs.CityCode.GDSkyscraperCObjects1= [];
gdjs.CityCode.GDSkyscraperCObjects2= [];
gdjs.CityCode.GDSkyscraperCObjects3= [];
gdjs.CityCode.GDSkyscraperCObjects4= [];
gdjs.CityCode.GDSkyscraperCObjects5= [];
gdjs.CityCode.GDSkyscraperDObjects1= [];
gdjs.CityCode.GDSkyscraperDObjects2= [];
gdjs.CityCode.GDSkyscraperDObjects3= [];
gdjs.CityCode.GDSkyscraperDObjects4= [];
gdjs.CityCode.GDSkyscraperDObjects5= [];
gdjs.CityCode.GDSkyscraperEObjects1= [];
gdjs.CityCode.GDSkyscraperEObjects2= [];
gdjs.CityCode.GDSkyscraperEObjects3= [];
gdjs.CityCode.GDSkyscraperEObjects4= [];
gdjs.CityCode.GDSkyscraperEObjects5= [];
gdjs.CityCode.GDHouseAObjects1= [];
gdjs.CityCode.GDHouseAObjects2= [];
gdjs.CityCode.GDHouseAObjects3= [];
gdjs.CityCode.GDHouseAObjects4= [];
gdjs.CityCode.GDHouseAObjects5= [];
gdjs.CityCode.GDHouseBObjects1= [];
gdjs.CityCode.GDHouseBObjects2= [];
gdjs.CityCode.GDHouseBObjects3= [];
gdjs.CityCode.GDHouseBObjects4= [];
gdjs.CityCode.GDHouseBObjects5= [];
gdjs.CityCode.GDHouseCObjects1= [];
gdjs.CityCode.GDHouseCObjects2= [];
gdjs.CityCode.GDHouseCObjects3= [];
gdjs.CityCode.GDHouseCObjects4= [];
gdjs.CityCode.GDHouseCObjects5= [];
gdjs.CityCode.GDHouseDObjects1= [];
gdjs.CityCode.GDHouseDObjects2= [];
gdjs.CityCode.GDHouseDObjects3= [];
gdjs.CityCode.GDHouseDObjects4= [];
gdjs.CityCode.GDHouseDObjects5= [];
gdjs.CityCode.GDHouseEObjects1= [];
gdjs.CityCode.GDHouseEObjects2= [];
gdjs.CityCode.GDHouseEObjects3= [];
gdjs.CityCode.GDHouseEObjects4= [];
gdjs.CityCode.GDHouseEObjects5= [];
gdjs.CityCode.GDHouseFObjects1= [];
gdjs.CityCode.GDHouseFObjects2= [];
gdjs.CityCode.GDHouseFObjects3= [];
gdjs.CityCode.GDHouseFObjects4= [];
gdjs.CityCode.GDHouseFObjects5= [];
gdjs.CityCode.GDHouseGObjects1= [];
gdjs.CityCode.GDHouseGObjects2= [];
gdjs.CityCode.GDHouseGObjects3= [];
gdjs.CityCode.GDHouseGObjects4= [];
gdjs.CityCode.GDHouseGObjects5= [];
gdjs.CityCode.GDHouseHObjects1= [];
gdjs.CityCode.GDHouseHObjects2= [];
gdjs.CityCode.GDHouseHObjects3= [];
gdjs.CityCode.GDHouseHObjects4= [];
gdjs.CityCode.GDHouseHObjects5= [];
gdjs.CityCode.GDTreeLargeObjects1= [];
gdjs.CityCode.GDTreeLargeObjects2= [];
gdjs.CityCode.GDTreeLargeObjects3= [];
gdjs.CityCode.GDTreeLargeObjects4= [];
gdjs.CityCode.GDTreeLargeObjects5= [];
gdjs.CityCode.GDTreeSmallObjects1= [];
gdjs.CityCode.GDTreeSmallObjects2= [];
gdjs.CityCode.GDTreeSmallObjects3= [];
gdjs.CityCode.GDTreeSmallObjects4= [];
gdjs.CityCode.GDTreeSmallObjects5= [];
gdjs.CityCode.GDStreetLightObjects1= [];
gdjs.CityCode.GDStreetLightObjects2= [];
gdjs.CityCode.GDStreetLightObjects3= [];
gdjs.CityCode.GDStreetLightObjects4= [];
gdjs.CityCode.GDStreetLightObjects5= [];
gdjs.CityCode.GDTrafficLightObjects1= [];
gdjs.CityCode.GDTrafficLightObjects2= [];
gdjs.CityCode.GDTrafficLightObjects3= [];
gdjs.CityCode.GDTrafficLightObjects4= [];
gdjs.CityCode.GDTrafficLightObjects5= [];
gdjs.CityCode.GDDumpsterObjects1= [];
gdjs.CityCode.GDDumpsterObjects2= [];
gdjs.CityCode.GDDumpsterObjects3= [];
gdjs.CityCode.GDDumpsterObjects4= [];
gdjs.CityCode.GDDumpsterObjects5= [];
gdjs.CityCode.GDPlanterObjects1= [];
gdjs.CityCode.GDPlanterObjects2= [];
gdjs.CityCode.GDPlanterObjects3= [];
gdjs.CityCode.GDPlanterObjects4= [];
gdjs.CityCode.GDPlanterObjects5= [];
gdjs.CityCode.GDSedanObjects1= [];
gdjs.CityCode.GDSedanObjects2= [];
gdjs.CityCode.GDSedanObjects3= [];
gdjs.CityCode.GDSedanObjects4= [];
gdjs.CityCode.GDSedanObjects5= [];
gdjs.CityCode.GDTaxiObjects1= [];
gdjs.CityCode.GDTaxiObjects2= [];
gdjs.CityCode.GDTaxiObjects3= [];
gdjs.CityCode.GDTaxiObjects4= [];
gdjs.CityCode.GDTaxiObjects5= [];
gdjs.CityCode.GDPoliceObjects1= [];
gdjs.CityCode.GDPoliceObjects2= [];
gdjs.CityCode.GDPoliceObjects3= [];
gdjs.CityCode.GDPoliceObjects4= [];
gdjs.CityCode.GDPoliceObjects5= [];
gdjs.CityCode.GDSuvObjects1= [];
gdjs.CityCode.GDSuvObjects2= [];
gdjs.CityCode.GDSuvObjects3= [];
gdjs.CityCode.GDSuvObjects4= [];
gdjs.CityCode.GDSuvObjects5= [];
gdjs.CityCode.GDVanObjects1= [];
gdjs.CityCode.GDVanObjects2= [];
gdjs.CityCode.GDVanObjects3= [];
gdjs.CityCode.GDVanObjects4= [];
gdjs.CityCode.GDVanObjects5= [];
gdjs.CityCode.GDHatchbackObjects1= [];
gdjs.CityCode.GDHatchbackObjects2= [];
gdjs.CityCode.GDHatchbackObjects3= [];
gdjs.CityCode.GDHatchbackObjects4= [];
gdjs.CityCode.GDHatchbackObjects5= [];
gdjs.CityCode.GDSportsCarObjects1= [];
gdjs.CityCode.GDSportsCarObjects2= [];
gdjs.CityCode.GDSportsCarObjects3= [];
gdjs.CityCode.GDSportsCarObjects4= [];
gdjs.CityCode.GDSportsCarObjects5= [];
gdjs.CityCode.GDTruckObjects1= [];
gdjs.CityCode.GDTruckObjects2= [];
gdjs.CityCode.GDTruckObjects3= [];
gdjs.CityCode.GDTruckObjects4= [];
gdjs.CityCode.GDTruckObjects5= [];
gdjs.CityCode.GDAmbulanceObjects1= [];
gdjs.CityCode.GDAmbulanceObjects2= [];
gdjs.CityCode.GDAmbulanceObjects3= [];
gdjs.CityCode.GDAmbulanceObjects4= [];
gdjs.CityCode.GDAmbulanceObjects5= [];
gdjs.CityCode.GDDeliveryVanObjects1= [];
gdjs.CityCode.GDDeliveryVanObjects2= [];
gdjs.CityCode.GDDeliveryVanObjects3= [];
gdjs.CityCode.GDDeliveryVanObjects4= [];
gdjs.CityCode.GDDeliveryVanObjects5= [];
gdjs.CityCode.GDPedFemaleAObjects1= [];
gdjs.CityCode.GDPedFemaleAObjects2= [];
gdjs.CityCode.GDPedFemaleAObjects3= [];
gdjs.CityCode.GDPedFemaleAObjects4= [];
gdjs.CityCode.GDPedFemaleAObjects5= [];
gdjs.CityCode.GDPedFemaleBObjects1= [];
gdjs.CityCode.GDPedFemaleBObjects2= [];
gdjs.CityCode.GDPedFemaleBObjects3= [];
gdjs.CityCode.GDPedFemaleBObjects4= [];
gdjs.CityCode.GDPedFemaleBObjects5= [];
gdjs.CityCode.GDPedFemaleCObjects1= [];
gdjs.CityCode.GDPedFemaleCObjects2= [];
gdjs.CityCode.GDPedFemaleCObjects3= [];
gdjs.CityCode.GDPedFemaleCObjects4= [];
gdjs.CityCode.GDPedFemaleCObjects5= [];
gdjs.CityCode.GDPedFemaleDObjects1= [];
gdjs.CityCode.GDPedFemaleDObjects2= [];
gdjs.CityCode.GDPedFemaleDObjects3= [];
gdjs.CityCode.GDPedFemaleDObjects4= [];
gdjs.CityCode.GDPedFemaleDObjects5= [];
gdjs.CityCode.GDPedMaleBObjects1= [];
gdjs.CityCode.GDPedMaleBObjects2= [];
gdjs.CityCode.GDPedMaleBObjects3= [];
gdjs.CityCode.GDPedMaleBObjects4= [];
gdjs.CityCode.GDPedMaleBObjects5= [];
gdjs.CityCode.GDPedMaleCObjects1= [];
gdjs.CityCode.GDPedMaleCObjects2= [];
gdjs.CityCode.GDPedMaleCObjects3= [];
gdjs.CityCode.GDPedMaleCObjects4= [];
gdjs.CityCode.GDPedMaleCObjects5= [];
gdjs.CityCode.GDPedMaleDObjects1= [];
gdjs.CityCode.GDPedMaleDObjects2= [];
gdjs.CityCode.GDPedMaleDObjects3= [];
gdjs.CityCode.GDPedMaleDObjects4= [];
gdjs.CityCode.GDPedMaleDObjects5= [];
gdjs.CityCode.GDPedMaleEObjects1= [];
gdjs.CityCode.GDPedMaleEObjects2= [];
gdjs.CityCode.GDPedMaleEObjects3= [];
gdjs.CityCode.GDPedMaleEObjects4= [];
gdjs.CityCode.GDPedMaleEObjects5= [];
gdjs.CityCode.GDCashLeftTextObjects1= [];
gdjs.CityCode.GDCashLeftTextObjects2= [];
gdjs.CityCode.GDCashLeftTextObjects3= [];
gdjs.CityCode.GDCashLeftTextObjects4= [];
gdjs.CityCode.GDCashLeftTextObjects5= [];
gdjs.CityCode.GDSpeedTextObjects1= [];
gdjs.CityCode.GDSpeedTextObjects2= [];
gdjs.CityCode.GDSpeedTextObjects3= [];
gdjs.CityCode.GDSpeedTextObjects4= [];
gdjs.CityCode.GDSpeedTextObjects5= [];
gdjs.CityCode.GDPistolObjects1= [];
gdjs.CityCode.GDPistolObjects2= [];
gdjs.CityCode.GDPistolObjects3= [];
gdjs.CityCode.GDPistolObjects4= [];
gdjs.CityCode.GDPistolObjects5= [];
gdjs.CityCode.GDRifleObjects1= [];
gdjs.CityCode.GDRifleObjects2= [];
gdjs.CityCode.GDRifleObjects3= [];
gdjs.CityCode.GDRifleObjects4= [];
gdjs.CityCode.GDRifleObjects5= [];
gdjs.CityCode.GDCannonObjects1= [];
gdjs.CityCode.GDCannonObjects2= [];
gdjs.CityCode.GDCannonObjects3= [];
gdjs.CityCode.GDCannonObjects4= [];
gdjs.CityCode.GDCannonObjects5= [];
gdjs.CityCode.GDBulletObjects1= [];
gdjs.CityCode.GDBulletObjects2= [];
gdjs.CityCode.GDBulletObjects3= [];
gdjs.CityCode.GDBulletObjects4= [];
gdjs.CityCode.GDBulletObjects5= [];
gdjs.CityCode.GDShotgunObjects1= [];
gdjs.CityCode.GDShotgunObjects2= [];
gdjs.CityCode.GDShotgunObjects3= [];
gdjs.CityCode.GDShotgunObjects4= [];
gdjs.CityCode.GDShotgunObjects5= [];
gdjs.CityCode.GDSniperObjects1= [];
gdjs.CityCode.GDSniperObjects2= [];
gdjs.CityCode.GDSniperObjects3= [];
gdjs.CityCode.GDSniperObjects4= [];
gdjs.CityCode.GDSniperObjects5= [];
gdjs.CityCode.GDMinigunObjects1= [];
gdjs.CityCode.GDMinigunObjects2= [];
gdjs.CityCode.GDMinigunObjects3= [];
gdjs.CityCode.GDMinigunObjects4= [];
gdjs.CityCode.GDMinigunObjects5= [];
gdjs.CityCode.GDWeaponIconObjects1= [];
gdjs.CityCode.GDWeaponIconObjects2= [];
gdjs.CityCode.GDWeaponIconObjects3= [];
gdjs.CityCode.GDWeaponIconObjects4= [];
gdjs.CityCode.GDWeaponIconObjects5= [];
gdjs.CityCode.GDPlayerObjects1= [];
gdjs.CityCode.GDPlayerObjects2= [];
gdjs.CityCode.GDPlayerObjects3= [];
gdjs.CityCode.GDPlayerObjects4= [];
gdjs.CityCode.GDPlayerObjects5= [];
gdjs.CityCode.GDCashObjects1= [];
gdjs.CityCode.GDCashObjects2= [];
gdjs.CityCode.GDCashObjects3= [];
gdjs.CityCode.GDCashObjects4= [];
gdjs.CityCode.GDCashObjects5= [];
gdjs.CityCode.GDMoneyTextObjects1= [];
gdjs.CityCode.GDMoneyTextObjects2= [];
gdjs.CityCode.GDMoneyTextObjects3= [];
gdjs.CityCode.GDMoneyTextObjects4= [];
gdjs.CityCode.GDMoneyTextObjects5= [];
gdjs.CityCode.GDPromptTextObjects1= [];
gdjs.CityCode.GDPromptTextObjects2= [];
gdjs.CityCode.GDPromptTextObjects3= [];
gdjs.CityCode.GDPromptTextObjects4= [];
gdjs.CityCode.GDPromptTextObjects5= [];


gdjs.CityCode.userFunc0xdc3220 = function GDJSInlineCode(runtimeScene) {
"use strict";
// The sky box also lights the scene (image based lighting), which washes out the colors.
// Keep it as the background only: the "Sky" and "Sun" lights of the layer light the city.
const threeScene = runtimeScene.getLayer("").getRenderer().getThreeScene();
if (threeScene) threeScene.environment = null;
};
gdjs.CityCode.eventsList0 = function(runtimeScene) {

{


gdjs.CityCode.userFunc0xdc3220(runtimeScene);

}


};gdjs.CityCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DoorZone"), gdjs.CityCode.GDDoorZoneObjects2);
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.CityCode.GDPromptTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpeedText"), gdjs.CityCode.GDSpeedTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.CityCode.GDWallObjects2);
{gdjs.scene3d.camera.setFov(runtimeScene, 60, "", 0);
}
{for(var i = 0, len = gdjs.CityCode.GDSpeedTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSpeedTextObjects2[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.CityCode.GDPromptTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPromptTextObjects2[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.CityCode.GDDoorZoneObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDDoorZoneObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.CityCode.GDWallObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDWallObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.CityCode.userFunc0xd07120 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Pointer lock mouse look: click the game to capture the mouse, Esc to release.
const canvas = runtimeScene.getGame().getRenderer().getCanvas();
if (!gdjs.__openGameMouseLook) {
  const look = (gdjs.__openGameMouseLook = { dx: 0, dy: 0 });
  canvas.addEventListener("click", () => {
    if (document.pointerLockElement !== canvas) canvas.requestPointerLock();
  });
  document.addEventListener("mousemove", (e) => {
    if (document.pointerLockElement !== canvas) return;
    look.dx += e.movementX;
    look.dy += e.movementY;
  });
}
const look = gdjs.__openGameMouseLook;
runtimeScene.getVariables().get("MouseDX").setNumber(look.dx);
runtimeScene.getVariables().get("MouseDY").setNumber(look.dy);
look.dx = 0;
look.dy = 0;
};
gdjs.CityCode.eventsList2 = function(runtimeScene) {

{


gdjs.CityCode.userFunc0xd07120(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(2).add(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber() * 0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() * 0.12, 6, 60));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(120 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(120 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 6, 60));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() - 50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 6, 60));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}
}

}


};gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.CityCode.GDPlayerObjects1});
gdjs.CityCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CityCode.GDAmbulanceObjects1, gdjs.CityCode.GDAmbulanceObjects2);

gdjs.copyArray(gdjs.CityCode.GDDeliveryVanObjects1, gdjs.CityCode.GDDeliveryVanObjects2);

gdjs.copyArray(gdjs.CityCode.GDHatchbackObjects1, gdjs.CityCode.GDHatchbackObjects2);

gdjs.copyArray(gdjs.CityCode.GDPoliceObjects1, gdjs.CityCode.GDPoliceObjects2);

gdjs.copyArray(gdjs.CityCode.GDSedanObjects1, gdjs.CityCode.GDSedanObjects2);

gdjs.copyArray(gdjs.CityCode.GDSportsCarObjects1, gdjs.CityCode.GDSportsCarObjects2);

gdjs.copyArray(gdjs.CityCode.GDSuvObjects1, gdjs.CityCode.GDSuvObjects2);

gdjs.copyArray(gdjs.CityCode.GDTaxiObjects1, gdjs.CityCode.GDTaxiObjects2);

gdjs.copyArray(gdjs.CityCode.GDTruckObjects1, gdjs.CityCode.GDTruckObjects2);

gdjs.copyArray(gdjs.CityCode.GDVanObjects1, gdjs.CityCode.GDVanObjects2);

{for(var i = 0, len = gdjs.CityCode.GDSedanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSedanObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDTaxiObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTaxiObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDPoliceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPoliceObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDSuvObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSuvObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDVanObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDHatchbackObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDHatchbackObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDSportsCarObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSportsCarObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDTruckObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTruckObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDAmbulanceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDAmbulanceObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDDeliveryVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDDeliveryVanObjects2[i].getBehavior("PhysicsCar3D").simulateForwardKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CityCode.GDAmbulanceObjects1, gdjs.CityCode.GDAmbulanceObjects2);

gdjs.copyArray(gdjs.CityCode.GDDeliveryVanObjects1, gdjs.CityCode.GDDeliveryVanObjects2);

gdjs.copyArray(gdjs.CityCode.GDHatchbackObjects1, gdjs.CityCode.GDHatchbackObjects2);

gdjs.copyArray(gdjs.CityCode.GDPoliceObjects1, gdjs.CityCode.GDPoliceObjects2);

gdjs.copyArray(gdjs.CityCode.GDSedanObjects1, gdjs.CityCode.GDSedanObjects2);

gdjs.copyArray(gdjs.CityCode.GDSportsCarObjects1, gdjs.CityCode.GDSportsCarObjects2);

gdjs.copyArray(gdjs.CityCode.GDSuvObjects1, gdjs.CityCode.GDSuvObjects2);

gdjs.copyArray(gdjs.CityCode.GDTaxiObjects1, gdjs.CityCode.GDTaxiObjects2);

gdjs.copyArray(gdjs.CityCode.GDTruckObjects1, gdjs.CityCode.GDTruckObjects2);

gdjs.copyArray(gdjs.CityCode.GDVanObjects1, gdjs.CityCode.GDVanObjects2);

{for(var i = 0, len = gdjs.CityCode.GDSedanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSedanObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDTaxiObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTaxiObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDPoliceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPoliceObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDSuvObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSuvObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDVanObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDHatchbackObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDHatchbackObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDSportsCarObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSportsCarObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDTruckObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTruckObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDAmbulanceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDAmbulanceObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
for(var i = 0, len = gdjs.CityCode.GDDeliveryVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDDeliveryVanObjects2[i].getBehavior("PhysicsCar3D").simulateBackwardKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CityCode.GDAmbulanceObjects1, gdjs.CityCode.GDAmbulanceObjects2);

gdjs.copyArray(gdjs.CityCode.GDDeliveryVanObjects1, gdjs.CityCode.GDDeliveryVanObjects2);

gdjs.copyArray(gdjs.CityCode.GDHatchbackObjects1, gdjs.CityCode.GDHatchbackObjects2);

gdjs.copyArray(gdjs.CityCode.GDPoliceObjects1, gdjs.CityCode.GDPoliceObjects2);

gdjs.copyArray(gdjs.CityCode.GDSedanObjects1, gdjs.CityCode.GDSedanObjects2);

gdjs.copyArray(gdjs.CityCode.GDSportsCarObjects1, gdjs.CityCode.GDSportsCarObjects2);

gdjs.copyArray(gdjs.CityCode.GDSuvObjects1, gdjs.CityCode.GDSuvObjects2);

gdjs.copyArray(gdjs.CityCode.GDTaxiObjects1, gdjs.CityCode.GDTaxiObjects2);

gdjs.copyArray(gdjs.CityCode.GDTruckObjects1, gdjs.CityCode.GDTruckObjects2);

gdjs.copyArray(gdjs.CityCode.GDVanObjects1, gdjs.CityCode.GDVanObjects2);

{for(var i = 0, len = gdjs.CityCode.GDSedanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSedanObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDTaxiObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTaxiObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDPoliceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPoliceObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDSuvObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSuvObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDVanObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDHatchbackObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDHatchbackObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDSportsCarObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSportsCarObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDTruckObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTruckObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDAmbulanceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDAmbulanceObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
for(var i = 0, len = gdjs.CityCode.GDDeliveryVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDDeliveryVanObjects2[i].getBehavior("PhysicsCar3D").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CityCode.GDAmbulanceObjects1, gdjs.CityCode.GDAmbulanceObjects2);

gdjs.copyArray(gdjs.CityCode.GDDeliveryVanObjects1, gdjs.CityCode.GDDeliveryVanObjects2);

gdjs.copyArray(gdjs.CityCode.GDHatchbackObjects1, gdjs.CityCode.GDHatchbackObjects2);

gdjs.copyArray(gdjs.CityCode.GDPoliceObjects1, gdjs.CityCode.GDPoliceObjects2);

gdjs.copyArray(gdjs.CityCode.GDSedanObjects1, gdjs.CityCode.GDSedanObjects2);

gdjs.copyArray(gdjs.CityCode.GDSportsCarObjects1, gdjs.CityCode.GDSportsCarObjects2);

gdjs.copyArray(gdjs.CityCode.GDSuvObjects1, gdjs.CityCode.GDSuvObjects2);

gdjs.copyArray(gdjs.CityCode.GDTaxiObjects1, gdjs.CityCode.GDTaxiObjects2);

gdjs.copyArray(gdjs.CityCode.GDTruckObjects1, gdjs.CityCode.GDTruckObjects2);

gdjs.copyArray(gdjs.CityCode.GDVanObjects1, gdjs.CityCode.GDVanObjects2);

{for(var i = 0, len = gdjs.CityCode.GDSedanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSedanObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDTaxiObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTaxiObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDPoliceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPoliceObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDSuvObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSuvObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDVanObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDHatchbackObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDHatchbackObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDSportsCarObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSportsCarObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDTruckObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTruckObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDAmbulanceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDAmbulanceObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
for(var i = 0, len = gdjs.CityCode.GDDeliveryVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDDeliveryVanObjects2[i].getBehavior("PhysicsCar3D").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CityCode.GDAmbulanceObjects1, gdjs.CityCode.GDAmbulanceObjects2);

gdjs.copyArray(gdjs.CityCode.GDDeliveryVanObjects1, gdjs.CityCode.GDDeliveryVanObjects2);

gdjs.copyArray(gdjs.CityCode.GDHatchbackObjects1, gdjs.CityCode.GDHatchbackObjects2);

gdjs.copyArray(gdjs.CityCode.GDPoliceObjects1, gdjs.CityCode.GDPoliceObjects2);

gdjs.copyArray(gdjs.CityCode.GDSedanObjects1, gdjs.CityCode.GDSedanObjects2);

gdjs.copyArray(gdjs.CityCode.GDSportsCarObjects1, gdjs.CityCode.GDSportsCarObjects2);

gdjs.copyArray(gdjs.CityCode.GDSuvObjects1, gdjs.CityCode.GDSuvObjects2);

gdjs.copyArray(gdjs.CityCode.GDTaxiObjects1, gdjs.CityCode.GDTaxiObjects2);

gdjs.copyArray(gdjs.CityCode.GDTruckObjects1, gdjs.CityCode.GDTruckObjects2);

gdjs.copyArray(gdjs.CityCode.GDVanObjects1, gdjs.CityCode.GDVanObjects2);

{for(var i = 0, len = gdjs.CityCode.GDSedanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSedanObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDTaxiObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTaxiObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDPoliceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPoliceObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDSuvObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSuvObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDVanObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDHatchbackObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDHatchbackObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDSportsCarObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSportsCarObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDTruckObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTruckObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDAmbulanceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDAmbulanceObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
for(var i = 0, len = gdjs.CityCode.GDDeliveryVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDDeliveryVanObjects2[i].getBehavior("PhysicsCar3D").simulateHandBrakeKey();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.CityCode.GDAmbulanceObjects1, gdjs.CityCode.GDAmbulanceObjects2);

gdjs.copyArray(gdjs.CityCode.GDDeliveryVanObjects1, gdjs.CityCode.GDDeliveryVanObjects2);

gdjs.copyArray(gdjs.CityCode.GDHatchbackObjects1, gdjs.CityCode.GDHatchbackObjects2);

gdjs.copyArray(gdjs.CityCode.GDPoliceObjects1, gdjs.CityCode.GDPoliceObjects2);

gdjs.copyArray(gdjs.CityCode.GDSedanObjects1, gdjs.CityCode.GDSedanObjects2);

gdjs.copyArray(runtimeScene.getObjects("SpeedText"), gdjs.CityCode.GDSpeedTextObjects2);
gdjs.copyArray(gdjs.CityCode.GDSportsCarObjects1, gdjs.CityCode.GDSportsCarObjects2);

gdjs.copyArray(gdjs.CityCode.GDSuvObjects1, gdjs.CityCode.GDSuvObjects2);

gdjs.copyArray(gdjs.CityCode.GDTaxiObjects1, gdjs.CityCode.GDTaxiObjects2);

gdjs.copyArray(gdjs.CityCode.GDTruckObjects1, gdjs.CityCode.GDTruckObjects2);

gdjs.copyArray(gdjs.CityCode.GDVanObjects1, gdjs.CityCode.GDVanObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber((( gdjs.CityCode.GDDeliveryVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects2.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects2.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects2.length === 0 ) ? (( gdjs.CityCode.GDVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects2.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects2.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects2[0].getX()) :gdjs.CityCode.GDTaxiObjects2[0].getX()) :gdjs.CityCode.GDPoliceObjects2[0].getX()) :gdjs.CityCode.GDSuvObjects2[0].getX()) :gdjs.CityCode.GDVanObjects2[0].getX()) :gdjs.CityCode.GDHatchbackObjects2[0].getX()) :gdjs.CityCode.GDSportsCarObjects2[0].getX()) :gdjs.CityCode.GDTruckObjects2[0].getX()) :gdjs.CityCode.GDAmbulanceObjects2[0].getX()) :gdjs.CityCode.GDDeliveryVanObjects2[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber((( gdjs.CityCode.GDDeliveryVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects2.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects2.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects2.length === 0 ) ? (( gdjs.CityCode.GDVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects2.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects2.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects2[0].getY()) :gdjs.CityCode.GDTaxiObjects2[0].getY()) :gdjs.CityCode.GDPoliceObjects2[0].getY()) :gdjs.CityCode.GDSuvObjects2[0].getY()) :gdjs.CityCode.GDVanObjects2[0].getY()) :gdjs.CityCode.GDHatchbackObjects2[0].getY()) :gdjs.CityCode.GDSportsCarObjects2[0].getY()) :gdjs.CityCode.GDTruckObjects2[0].getY()) :gdjs.CityCode.GDAmbulanceObjects2[0].getY()) :gdjs.CityCode.GDDeliveryVanObjects2[0].getY()));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber((( gdjs.CityCode.GDDeliveryVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects2.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects2.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects2.length === 0 ) ? (( gdjs.CityCode.GDVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects2.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects2.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDTaxiObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDPoliceObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDSuvObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDVanObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDHatchbackObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDSportsCarObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDTruckObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDAmbulanceObjects2[0].getBehavior("Object3D").getZ()) :gdjs.CityCode.GDDeliveryVanObjects2[0].getBehavior("Object3D").getZ()) + 80);
}
{for(var i = 0, len = gdjs.CityCode.GDSpeedTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSpeedTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round((( gdjs.CityCode.GDDeliveryVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects2.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects2.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects2.length === 0 ) ? (( gdjs.CityCode.GDVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects2.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects2.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDTaxiObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDPoliceObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDSuvObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDVanObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDHatchbackObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDSportsCarObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDTruckObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDAmbulanceObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) :gdjs.CityCode.GDDeliveryVanObjects2[0].getBehavior("Physics3D").getLinearVelocityLength()) / 45 * 3.6)) + " km/h");
}
}
}

}


{

gdjs.copyArray(gdjs.CityCode.GDAmbulanceObjects1, gdjs.CityCode.GDAmbulanceObjects2);

gdjs.copyArray(gdjs.CityCode.GDDeliveryVanObjects1, gdjs.CityCode.GDDeliveryVanObjects2);

gdjs.copyArray(gdjs.CityCode.GDHatchbackObjects1, gdjs.CityCode.GDHatchbackObjects2);

gdjs.copyArray(gdjs.CityCode.GDPoliceObjects1, gdjs.CityCode.GDPoliceObjects2);

gdjs.copyArray(gdjs.CityCode.GDSedanObjects1, gdjs.CityCode.GDSedanObjects2);

gdjs.copyArray(gdjs.CityCode.GDSportsCarObjects1, gdjs.CityCode.GDSportsCarObjects2);

gdjs.copyArray(gdjs.CityCode.GDSuvObjects1, gdjs.CityCode.GDSuvObjects2);

gdjs.copyArray(gdjs.CityCode.GDTaxiObjects1, gdjs.CityCode.GDTaxiObjects2);

gdjs.copyArray(gdjs.CityCode.GDTruckObjects1, gdjs.CityCode.GDTruckObjects2);

gdjs.copyArray(gdjs.CityCode.GDVanObjects1, gdjs.CityCode.GDVanObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSedanObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSedanObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSedanObjects2[k] = gdjs.CityCode.GDSedanObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSedanObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTaxiObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDTaxiObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTaxiObjects2[k] = gdjs.CityCode.GDTaxiObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDTaxiObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPoliceObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPoliceObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPoliceObjects2[k] = gdjs.CityCode.GDPoliceObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPoliceObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSuvObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSuvObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSuvObjects2[k] = gdjs.CityCode.GDSuvObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSuvObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDVanObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDVanObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDVanObjects2[k] = gdjs.CityCode.GDVanObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDVanObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDHatchbackObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDHatchbackObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDHatchbackObjects2[k] = gdjs.CityCode.GDHatchbackObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDHatchbackObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSportsCarObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSportsCarObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSportsCarObjects2[k] = gdjs.CityCode.GDSportsCarObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSportsCarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTruckObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDTruckObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTruckObjects2[k] = gdjs.CityCode.GDTruckObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDTruckObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDAmbulanceObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDAmbulanceObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDAmbulanceObjects2[k] = gdjs.CityCode.GDAmbulanceObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDAmbulanceObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDDeliveryVanObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDDeliveryVanObjects2[i].getBehavior("Physics3D").getLinearVelocityLength() > 90 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDDeliveryVanObjects2[k] = gdjs.CityCode.GDDeliveryVanObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDDeliveryVanObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDAmbulanceObjects2 */
/* Reuse gdjs.CityCode.GDDeliveryVanObjects2 */
/* Reuse gdjs.CityCode.GDHatchbackObjects2 */
/* Reuse gdjs.CityCode.GDPoliceObjects2 */
/* Reuse gdjs.CityCode.GDSedanObjects2 */
/* Reuse gdjs.CityCode.GDSportsCarObjects2 */
/* Reuse gdjs.CityCode.GDSuvObjects2 */
/* Reuse gdjs.CityCode.GDTaxiObjects2 */
/* Reuse gdjs.CityCode.GDTruckObjects2 */
/* Reuse gdjs.CityCode.GDVanObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(2).add(gdjs.evtTools.common.angleDifference((( gdjs.CityCode.GDDeliveryVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects2.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects2.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects2.length === 0 ) ? (( gdjs.CityCode.GDVanObjects2.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects2.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects2.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects2.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects2[0].getAngle()) :gdjs.CityCode.GDTaxiObjects2[0].getAngle()) :gdjs.CityCode.GDPoliceObjects2[0].getAngle()) :gdjs.CityCode.GDSuvObjects2[0].getAngle()) :gdjs.CityCode.GDVanObjects2[0].getAngle()) :gdjs.CityCode.GDHatchbackObjects2[0].getAngle()) :gdjs.CityCode.GDSportsCarObjects2[0].getAngle()) :gdjs.CityCode.GDTruckObjects2[0].getAngle()) :gdjs.CityCode.GDAmbulanceObjects2[0].getAngle()) :gdjs.CityCode.GDDeliveryVanObjects2[0].getAngle()), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) * Math.min(1, 2.5 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDAmbulanceObjects1 */
/* Reuse gdjs.CityCode.GDDeliveryVanObjects1 */
/* Reuse gdjs.CityCode.GDHatchbackObjects1 */
/* Reuse gdjs.CityCode.GDPoliceObjects1 */
/* Reuse gdjs.CityCode.GDSedanObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SpeedText"), gdjs.CityCode.GDSpeedTextObjects1);
/* Reuse gdjs.CityCode.GDSportsCarObjects1 */
/* Reuse gdjs.CityCode.GDSuvObjects1 */
/* Reuse gdjs.CityCode.GDTaxiObjects1 */
/* Reuse gdjs.CityCode.GDTruckObjects1 */
/* Reuse gdjs.CityCode.GDVanObjects1 */
gdjs.CityCode.GDPlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects1Objects, (( gdjs.CityCode.GDDeliveryVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects1.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects1.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects1.length === 0 ) ? (( gdjs.CityCode.GDVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects1.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects1.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects1.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects1[0].getX()) :gdjs.CityCode.GDTaxiObjects1[0].getX()) :gdjs.CityCode.GDPoliceObjects1[0].getX()) :gdjs.CityCode.GDSuvObjects1[0].getX()) :gdjs.CityCode.GDVanObjects1[0].getX()) :gdjs.CityCode.GDHatchbackObjects1[0].getX()) :gdjs.CityCode.GDSportsCarObjects1[0].getX()) :gdjs.CityCode.GDTruckObjects1[0].getX()) :gdjs.CityCode.GDAmbulanceObjects1[0].getX()) :gdjs.CityCode.GDDeliveryVanObjects1[0].getX()) + Math.cos(gdjs.toRad((( gdjs.CityCode.GDDeliveryVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects1.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects1.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects1.length === 0 ) ? (( gdjs.CityCode.GDVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects1.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects1.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects1.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects1[0].getAngle()) :gdjs.CityCode.GDTaxiObjects1[0].getAngle()) :gdjs.CityCode.GDPoliceObjects1[0].getAngle()) :gdjs.CityCode.GDSuvObjects1[0].getAngle()) :gdjs.CityCode.GDVanObjects1[0].getAngle()) :gdjs.CityCode.GDHatchbackObjects1[0].getAngle()) :gdjs.CityCode.GDSportsCarObjects1[0].getAngle()) :gdjs.CityCode.GDTruckObjects1[0].getAngle()) :gdjs.CityCode.GDAmbulanceObjects1[0].getAngle()) :gdjs.CityCode.GDDeliveryVanObjects1[0].getAngle()) - 90)) * 110, (( gdjs.CityCode.GDDeliveryVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects1.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects1.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects1.length === 0 ) ? (( gdjs.CityCode.GDVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects1.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects1.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects1.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects1[0].getY()) :gdjs.CityCode.GDTaxiObjects1[0].getY()) :gdjs.CityCode.GDPoliceObjects1[0].getY()) :gdjs.CityCode.GDSuvObjects1[0].getY()) :gdjs.CityCode.GDVanObjects1[0].getY()) :gdjs.CityCode.GDHatchbackObjects1[0].getY()) :gdjs.CityCode.GDSportsCarObjects1[0].getY()) :gdjs.CityCode.GDTruckObjects1[0].getY()) :gdjs.CityCode.GDAmbulanceObjects1[0].getY()) :gdjs.CityCode.GDDeliveryVanObjects1[0].getY()) + Math.sin(gdjs.toRad((( gdjs.CityCode.GDDeliveryVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects1.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects1.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects1.length === 0 ) ? (( gdjs.CityCode.GDVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects1.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects1.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects1.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects1[0].getAngle()) :gdjs.CityCode.GDTaxiObjects1[0].getAngle()) :gdjs.CityCode.GDPoliceObjects1[0].getAngle()) :gdjs.CityCode.GDSuvObjects1[0].getAngle()) :gdjs.CityCode.GDVanObjects1[0].getAngle()) :gdjs.CityCode.GDHatchbackObjects1[0].getAngle()) :gdjs.CityCode.GDSportsCarObjects1[0].getAngle()) :gdjs.CityCode.GDTruckObjects1[0].getAngle()) :gdjs.CityCode.GDAmbulanceObjects1[0].getAngle()) :gdjs.CityCode.GDDeliveryVanObjects1[0].getAngle()) - 90)) * 110, "");
}
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects1[i].getBehavior("PhysicsCharacter3D").setForwardAngle((( gdjs.CityCode.GDDeliveryVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDAmbulanceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTruckObjects1.length === 0 ) ? (( gdjs.CityCode.GDSportsCarObjects1.length === 0 ) ? (( gdjs.CityCode.GDHatchbackObjects1.length === 0 ) ? (( gdjs.CityCode.GDVanObjects1.length === 0 ) ? (( gdjs.CityCode.GDSuvObjects1.length === 0 ) ? (( gdjs.CityCode.GDPoliceObjects1.length === 0 ) ? (( gdjs.CityCode.GDTaxiObjects1.length === 0 ) ? (( gdjs.CityCode.GDSedanObjects1.length === 0 ) ? 0 :gdjs.CityCode.GDSedanObjects1[0].getAngle()) :gdjs.CityCode.GDTaxiObjects1[0].getAngle()) :gdjs.CityCode.GDPoliceObjects1[0].getAngle()) :gdjs.CityCode.GDSuvObjects1[0].getAngle()) :gdjs.CityCode.GDVanObjects1[0].getAngle()) :gdjs.CityCode.GDHatchbackObjects1[0].getAngle()) :gdjs.CityCode.GDSportsCarObjects1[0].getAngle()) :gdjs.CityCode.GDTruckObjects1[0].getAngle()) :gdjs.CityCode.GDAmbulanceObjects1[0].getAngle()) :gdjs.CityCode.GDDeliveryVanObjects1[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.CityCode.GDSedanObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDSedanObjects1[i].returnVariable(gdjs.CityCode.GDSedanObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDTaxiObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDTaxiObjects1[i].returnVariable(gdjs.CityCode.GDTaxiObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDPoliceObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPoliceObjects1[i].returnVariable(gdjs.CityCode.GDPoliceObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDSuvObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDSuvObjects1[i].returnVariable(gdjs.CityCode.GDSuvObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDVanObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDVanObjects1[i].returnVariable(gdjs.CityCode.GDVanObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDHatchbackObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDHatchbackObjects1[i].returnVariable(gdjs.CityCode.GDHatchbackObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDSportsCarObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDSportsCarObjects1[i].returnVariable(gdjs.CityCode.GDSportsCarObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDTruckObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDTruckObjects1[i].returnVariable(gdjs.CityCode.GDTruckObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDAmbulanceObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDAmbulanceObjects1[i].returnVariable(gdjs.CityCode.GDAmbulanceObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDDeliveryVanObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDDeliveryVanObjects1[i].returnVariable(gdjs.CityCode.GDDeliveryVanObjects1[i].getVariables().get("Driven")).setBoolean(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{for(var i = 0, len = gdjs.CityCode.GDSpeedTextObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDSpeedTextObjects1[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/car_door.ogg", false, 60, 1);
}
}

}


};gdjs.CityCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ambulance"), gdjs.CityCode.GDAmbulanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("DeliveryVan"), gdjs.CityCode.GDDeliveryVanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hatchback"), gdjs.CityCode.GDHatchbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Police"), gdjs.CityCode.GDPoliceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.CityCode.GDSedanObjects1);
gdjs.copyArray(runtimeScene.getObjects("SportsCar"), gdjs.CityCode.GDSportsCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Suv"), gdjs.CityCode.GDSuvObjects1);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.CityCode.GDTaxiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.CityCode.GDTruckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Van"), gdjs.CityCode.GDVanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSedanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSedanObjects1[i].getVariableBoolean(gdjs.CityCode.GDSedanObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSedanObjects1[k] = gdjs.CityCode.GDSedanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSedanObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTaxiObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDTaxiObjects1[i].getVariableBoolean(gdjs.CityCode.GDTaxiObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTaxiObjects1[k] = gdjs.CityCode.GDTaxiObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDTaxiObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPoliceObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPoliceObjects1[i].getVariableBoolean(gdjs.CityCode.GDPoliceObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPoliceObjects1[k] = gdjs.CityCode.GDPoliceObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPoliceObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSuvObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSuvObjects1[i].getVariableBoolean(gdjs.CityCode.GDSuvObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSuvObjects1[k] = gdjs.CityCode.GDSuvObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSuvObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDVanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDVanObjects1[i].getVariableBoolean(gdjs.CityCode.GDVanObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDVanObjects1[k] = gdjs.CityCode.GDVanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDVanObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDHatchbackObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDHatchbackObjects1[i].getVariableBoolean(gdjs.CityCode.GDHatchbackObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDHatchbackObjects1[k] = gdjs.CityCode.GDHatchbackObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDHatchbackObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSportsCarObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSportsCarObjects1[i].getVariableBoolean(gdjs.CityCode.GDSportsCarObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSportsCarObjects1[k] = gdjs.CityCode.GDSportsCarObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSportsCarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTruckObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDTruckObjects1[i].getVariableBoolean(gdjs.CityCode.GDTruckObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTruckObjects1[k] = gdjs.CityCode.GDTruckObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDTruckObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDAmbulanceObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDAmbulanceObjects1[i].getVariableBoolean(gdjs.CityCode.GDAmbulanceObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDAmbulanceObjects1[k] = gdjs.CityCode.GDAmbulanceObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDAmbulanceObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDDeliveryVanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDDeliveryVanObjects1[i].getVariableBoolean(gdjs.CityCode.GDDeliveryVanObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDDeliveryVanObjects1[k] = gdjs.CityCode.GDDeliveryVanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDDeliveryVanObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.CityCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.CityCode.GDPlayerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects3[i].getBehavior("Animation").getAnimationName() == "jump") ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects3[k] = gdjs.CityCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("jump");
}
}
}

}


};gdjs.CityCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.CityCode.GDPlayerObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects4.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects4[i].getBehavior("Animation").getAnimationName() == "sprint") ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects4[k] = gdjs.CityCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("sprint");
}
}
}

}


};gdjs.CityCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.CityCode.GDPlayerObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects4.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects4[i].getBehavior("Animation").getAnimationName() == "walk") ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects4[k] = gdjs.CityCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("walk");
}
}
}

}


};gdjs.CityCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.CityCode.GDPlayerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects3[i].getBehavior("Animation").getAnimationName() == "idle") ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects3[k] = gdjs.CityCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects3[i].getBehavior("Animation").getAnimationName() == "holding-right") ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects3[k] = gdjs.CityCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects3[i].getBehavior("Animation").getAnimationName() == "holding-right-shoot") ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects3[k] = gdjs.CityCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


};gdjs.CityCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CityCode.GDPlayerObjects3, gdjs.CityCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.CityCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects4[0].getBehavior("PhysicsCharacter3D").getCurrentForwardSpeed()) > 250);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.CityCode.GDPlayerObjects3, gdjs.CityCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.CityCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects4[0].getBehavior("PhysicsCharacter3D").getCurrentForwardSpeed()) > 15);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.CityCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects4[0].getBehavior("PhysicsCharacter3D").getCurrentForwardSpeed()) <= 250);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.CityCode.GDPlayerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.CityCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects3[0].getBehavior("PhysicsCharacter3D").getCurrentForwardSpeed()) <= 15);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects3ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects3ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects3ObjectsGDgdjs_9546CityCode_9546GDSuvObjects3ObjectsGDgdjs_9546CityCode_9546GDVanObjects3ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects3ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects3ObjectsGDgdjs_9546CityCode_9546GDTruckObjects3ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects3ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects3Objects = Hashtable.newFrom({"Sedan": gdjs.CityCode.GDSedanObjects3, "Taxi": gdjs.CityCode.GDTaxiObjects3, "Police": gdjs.CityCode.GDPoliceObjects3, "Suv": gdjs.CityCode.GDSuvObjects3, "Van": gdjs.CityCode.GDVanObjects3, "Hatchback": gdjs.CityCode.GDHatchbackObjects3, "SportsCar": gdjs.CityCode.GDSportsCarObjects3, "Truck": gdjs.CityCode.GDTruckObjects3, "Ambulance": gdjs.CityCode.GDAmbulanceObjects3, "DeliveryVan": gdjs.CityCode.GDDeliveryVanObjects3});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.CityCode.GDPlayerObjects3});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.CityCode.GDPlayerObjects3});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDDoorZoneObjects3Objects = Hashtable.newFrom({"DoorZone": gdjs.CityCode.GDDoorZoneObjects3});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.CityCode.GDPlayerObjects3});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDDoorZoneObjects3Objects = Hashtable.newFrom({"DoorZone": gdjs.CityCode.GDDoorZoneObjects3});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDDoorZoneObjects3Objects = Hashtable.newFrom({"DoorZone": gdjs.CityCode.GDDoorZoneObjects3});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects2ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects2ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects2ObjectsGDgdjs_9546CityCode_9546GDSuvObjects2ObjectsGDgdjs_9546CityCode_9546GDVanObjects2ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects2ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects2ObjectsGDgdjs_9546CityCode_9546GDTruckObjects2ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects2ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects2Objects = Hashtable.newFrom({"Sedan": gdjs.CityCode.GDSedanObjects2, "Taxi": gdjs.CityCode.GDTaxiObjects2, "Police": gdjs.CityCode.GDPoliceObjects2, "Suv": gdjs.CityCode.GDSuvObjects2, "Van": gdjs.CityCode.GDVanObjects2, "Hatchback": gdjs.CityCode.GDHatchbackObjects2, "SportsCar": gdjs.CityCode.GDSportsCarObjects2, "Truck": gdjs.CityCode.GDTruckObjects2, "Ambulance": gdjs.CityCode.GDAmbulanceObjects2, "DeliveryVan": gdjs.CityCode.GDDeliveryVanObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.CityCode.GDPlayerObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects2ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects2ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects2ObjectsGDgdjs_9546CityCode_9546GDSuvObjects2ObjectsGDgdjs_9546CityCode_9546GDVanObjects2ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects2ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects2ObjectsGDgdjs_9546CityCode_9546GDTruckObjects2ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects2ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects2Objects = Hashtable.newFrom({"Sedan": gdjs.CityCode.GDSedanObjects2, "Taxi": gdjs.CityCode.GDTaxiObjects2, "Police": gdjs.CityCode.GDPoliceObjects2, "Suv": gdjs.CityCode.GDSuvObjects2, "Van": gdjs.CityCode.GDVanObjects2, "Hatchback": gdjs.CityCode.GDHatchbackObjects2, "SportsCar": gdjs.CityCode.GDSportsCarObjects2, "Truck": gdjs.CityCode.GDTruckObjects2, "Ambulance": gdjs.CityCode.GDAmbulanceObjects2, "DeliveryVan": gdjs.CityCode.GDDeliveryVanObjects2});
gdjs.CityCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).sub(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber()) + Math.abs(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()) > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.CityCode.GDPlayerObjects3[i].getVariableBoolean(gdjs.CityCode.GDPlayerObjects3[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects3[k] = gdjs.CityCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").setForwardAngle((gdjs.CityCode.GDPlayerObjects3[i].getAngle()) + gdjs.evtTools.common.angleDifference(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + gdjs.toDegrees(Math.atan2(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber())), (gdjs.CityCode.GDPlayerObjects3[i].getAngle())) * Math.min(1, 14 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateForwardKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(420);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").setForwardSpeedMax(180);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects3[k] = gdjs.CityCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.CityCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects3[k] = gdjs.CityCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber((( gdjs.CityCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects3[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber((( gdjs.CityCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects3[0].getY()));
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber((( gdjs.CityCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects3[0].getBehavior("Object3D").getZ()) + 70);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.CityCode.GDPromptTextObjects3);
{for(var i = 0, len = gdjs.CityCode.GDPromptTextObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPromptTextObjects3[i].getBehavior("Text").setText("");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ambulance"), gdjs.CityCode.GDAmbulanceObjects3);
gdjs.copyArray(runtimeScene.getObjects("DeliveryVan"), gdjs.CityCode.GDDeliveryVanObjects3);
gdjs.copyArray(runtimeScene.getObjects("Hatchback"), gdjs.CityCode.GDHatchbackObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Police"), gdjs.CityCode.GDPoliceObjects3);
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.CityCode.GDSedanObjects3);
gdjs.copyArray(runtimeScene.getObjects("SportsCar"), gdjs.CityCode.GDSportsCarObjects3);
gdjs.copyArray(runtimeScene.getObjects("Suv"), gdjs.CityCode.GDSuvObjects3);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.CityCode.GDTaxiObjects3);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.CityCode.GDTruckObjects3);
gdjs.copyArray(runtimeScene.getObjects("Van"), gdjs.CityCode.GDVanObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects3ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects3ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects3ObjectsGDgdjs_9546CityCode_9546GDSuvObjects3ObjectsGDgdjs_9546CityCode_9546GDVanObjects3ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects3ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects3ObjectsGDgdjs_9546CityCode_9546GDTruckObjects3ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects3ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects3Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects3Objects, 230, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.CityCode.GDPromptTextObjects3);
{for(var i = 0, len = gdjs.CityCode.GDPromptTextObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPromptTextObjects3[i].getBehavior("Text").setText("Press E to drive");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorZone"), gdjs.CityCode.GDDoorZoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects3Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDDoorZoneObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.CityCode.GDPromptTextObjects3);
{for(var i = 0, len = gdjs.CityCode.GDPromptTextObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPromptTextObjects3[i].getBehavior("Text").setText("Press E to enter");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DoorZone"), gdjs.CityCode.GDDoorZoneObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects3Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDDoorZoneObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDDoorZoneObjects3Objects, (( gdjs.CityCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects3[0].getX()), (( gdjs.CityCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects3[0].getY()), false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDDoorZoneObjects3 */
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.CityCode.GDPromptTextObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(((gdjs.CityCode.GDDoorZoneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDDoorZoneObjects3[0].getVariables()).getFromIndex(0).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(((gdjs.CityCode.GDDoorZoneObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDDoorZoneObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{for(var i = 0, len = gdjs.CityCode.GDPromptTextObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPromptTextObjects3[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/car_door.ogg", false, 60, 1);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Interior");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ambulance"), gdjs.CityCode.GDAmbulanceObjects2);
gdjs.copyArray(runtimeScene.getObjects("DeliveryVan"), gdjs.CityCode.GDDeliveryVanObjects2);
gdjs.copyArray(runtimeScene.getObjects("Hatchback"), gdjs.CityCode.GDHatchbackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Police"), gdjs.CityCode.GDPoliceObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.CityCode.GDSedanObjects2);
gdjs.copyArray(runtimeScene.getObjects("SportsCar"), gdjs.CityCode.GDSportsCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Suv"), gdjs.CityCode.GDSuvObjects2);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.CityCode.GDTaxiObjects2);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.CityCode.GDTruckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Van"), gdjs.CityCode.GDVanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects2ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects2ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects2ObjectsGDgdjs_9546CityCode_9546GDSuvObjects2ObjectsGDgdjs_9546CityCode_9546GDVanObjects2ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects2ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects2ObjectsGDgdjs_9546CityCode_9546GDTruckObjects2ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects2ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects2Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects2Objects, 230, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects2ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects2ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects2ObjectsGDgdjs_9546CityCode_9546GDSuvObjects2ObjectsGDgdjs_9546CityCode_9546GDVanObjects2ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects2ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects2ObjectsGDgdjs_9546CityCode_9546GDTruckObjects2ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects2ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects2Objects, (( gdjs.CityCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects2[0].getX()), (( gdjs.CityCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects2[0].getY()), false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDAmbulanceObjects2 */
/* Reuse gdjs.CityCode.GDDeliveryVanObjects2 */
/* Reuse gdjs.CityCode.GDHatchbackObjects2 */
/* Reuse gdjs.CityCode.GDPlayerObjects2 */
/* Reuse gdjs.CityCode.GDPoliceObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.CityCode.GDPromptTextObjects2);
/* Reuse gdjs.CityCode.GDSedanObjects2 */
/* Reuse gdjs.CityCode.GDSportsCarObjects2 */
/* Reuse gdjs.CityCode.GDSuvObjects2 */
/* Reuse gdjs.CityCode.GDTaxiObjects2 */
/* Reuse gdjs.CityCode.GDTruckObjects2 */
/* Reuse gdjs.CityCode.GDVanObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDSedanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSedanObjects2[i].returnVariable(gdjs.CityCode.GDSedanObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDTaxiObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTaxiObjects2[i].returnVariable(gdjs.CityCode.GDTaxiObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPoliceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPoliceObjects2[i].returnVariable(gdjs.CityCode.GDPoliceObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDSuvObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSuvObjects2[i].returnVariable(gdjs.CityCode.GDSuvObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDVanObjects2[i].returnVariable(gdjs.CityCode.GDVanObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDHatchbackObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDHatchbackObjects2[i].returnVariable(gdjs.CityCode.GDHatchbackObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDSportsCarObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSportsCarObjects2[i].returnVariable(gdjs.CityCode.GDSportsCarObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDTruckObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTruckObjects2[i].returnVariable(gdjs.CityCode.GDTruckObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDAmbulanceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDAmbulanceObjects2[i].returnVariable(gdjs.CityCode.GDAmbulanceObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDDeliveryVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDDeliveryVanObjects2[i].returnVariable(gdjs.CityCode.GDDeliveryVanObjects2[i].getVariables().get("Driven")).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPromptTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPromptTextObjects2[i].getBehavior("Text").setText("");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/car_door.ogg", false, 60, 1);
}
}

}


};gdjs.CityCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}
}

}


};gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPistolObjects2ObjectsGDgdjs_9546CityCode_9546GDRifleObjects2ObjectsGDgdjs_9546CityCode_9546GDCannonObjects2ObjectsGDgdjs_9546CityCode_9546GDShotgunObjects2ObjectsGDgdjs_9546CityCode_9546GDSniperObjects2ObjectsGDgdjs_9546CityCode_9546GDMinigunObjects2Objects = Hashtable.newFrom({"Pistol": gdjs.CityCode.GDPistolObjects2, "Rifle": gdjs.CityCode.GDRifleObjects2, "Cannon": gdjs.CityCode.GDCannonObjects2, "Shotgun": gdjs.CityCode.GDShotgunObjects2, "Sniper": gdjs.CityCode.GDSniperObjects2, "Minigun": gdjs.CityCode.GDMinigunObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.CityCode.GDPlayerObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPistolObjects2ObjectsGDgdjs_9546CityCode_9546GDRifleObjects2ObjectsGDgdjs_9546CityCode_9546GDCannonObjects2ObjectsGDgdjs_9546CityCode_9546GDShotgunObjects2ObjectsGDgdjs_9546CityCode_9546GDSniperObjects2ObjectsGDgdjs_9546CityCode_9546GDMinigunObjects2Objects = Hashtable.newFrom({"Pistol": gdjs.CityCode.GDPistolObjects2, "Rifle": gdjs.CityCode.GDRifleObjects2, "Cannon": gdjs.CityCode.GDCannonObjects2, "Shotgun": gdjs.CityCode.GDShotgunObjects2, "Sniper": gdjs.CityCode.GDSniperObjects2, "Minigun": gdjs.CityCode.GDMinigunObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBulletObjects4Objects = Hashtable.newFrom({"Bullet": gdjs.CityCode.GDBulletObjects4});
gdjs.CityCode.eventsList12 = function(runtimeScene) {

};gdjs.CityCode.eventsList13 = function(runtimeScene) {

{


const repeatCount4 = runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber();
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.CityCode.GDBulletObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBulletObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(21).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects4.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects4[i].getBehavior("Object3D").setZ(runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber());
}
}
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects4.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects4[i].setAngle(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + gdjs.randomFloatInRange(-(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()), runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects4.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects4[i].getBehavior("Scale").setScale(runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber());
}
}
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects4.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects4[i].returnVariable(gdjs.CityCode.GDBulletObjects4[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber());
}
}
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects4.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects4[i].resetTimer("life");
}
}
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects4.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects4[i].addPolarForce((gdjs.CityCode.GDBulletObjects4[i].getAngle()), runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber(), 1);
}
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() == "Cannon");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/blaster_heavy.ogg", false, 80, 0.8);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() == "Shotgun");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/blaster_heavy.ogg", false, 70, 1.3);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() == "Sniper");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/blaster.ogg", false, 75, 0.55);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() != "Cannon");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() != "Shotgun");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() != "Sniper");
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/blaster.ogg", false, 45, gdjs.randomFloatInRange(0.9, 1.15));
}
}

}


};gdjs.CityCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber()) + Math.abs(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()) > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.CityCode.GDPlayerObjects2, gdjs.CityCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("PhysicsCharacter3D").simulateStick(gdjs.toDegrees(Math.atan2(-(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()), runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber())), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(30).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(0.25);
}

{ //Subevents
gdjs.CityCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.CityCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CityCode.GDPlayerObjects2, gdjs.CityCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects3[i].getBehavior("Animation").getAnimationName() == "holding-right-shoot") ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects3[k] = gdjs.CityCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("holding-right-shoot");
}
}
}

}


{

/* Reuse gdjs.CityCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.CityCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "holding-right") ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects2[k] = gdjs.CityCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("holding-right");
}
}
}

}


};gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.CityCode.GDBulletObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPedFemaleAObjects2ObjectsGDgdjs_9546CityCode_9546GDPedFemaleBObjects2ObjectsGDgdjs_9546CityCode_9546GDPedFemaleCObjects2ObjectsGDgdjs_9546CityCode_9546GDPedFemaleDObjects2ObjectsGDgdjs_9546CityCode_9546GDPedMaleBObjects2ObjectsGDgdjs_9546CityCode_9546GDPedMaleCObjects2ObjectsGDgdjs_9546CityCode_9546GDPedMaleDObjects2ObjectsGDgdjs_9546CityCode_9546GDPedMaleEObjects2Objects = Hashtable.newFrom({"PedFemaleA": gdjs.CityCode.GDPedFemaleAObjects2, "PedFemaleB": gdjs.CityCode.GDPedFemaleBObjects2, "PedFemaleC": gdjs.CityCode.GDPedFemaleCObjects2, "PedFemaleD": gdjs.CityCode.GDPedFemaleDObjects2, "PedMaleB": gdjs.CityCode.GDPedMaleBObjects2, "PedMaleC": gdjs.CityCode.GDPedMaleCObjects2, "PedMaleD": gdjs.CityCode.GDPedMaleDObjects2, "PedMaleE": gdjs.CityCode.GDPedMaleEObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.CityCode.GDBulletObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects2ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects2ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects2ObjectsGDgdjs_9546CityCode_9546GDSuvObjects2ObjectsGDgdjs_9546CityCode_9546GDVanObjects2ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects2ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects2ObjectsGDgdjs_9546CityCode_9546GDTruckObjects2ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects2ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects2Objects = Hashtable.newFrom({"Sedan": gdjs.CityCode.GDSedanObjects2, "Taxi": gdjs.CityCode.GDTaxiObjects2, "Police": gdjs.CityCode.GDPoliceObjects2, "Suv": gdjs.CityCode.GDSuvObjects2, "Van": gdjs.CityCode.GDVanObjects2, "Hatchback": gdjs.CityCode.GDHatchbackObjects2, "SportsCar": gdjs.CityCode.GDSportsCarObjects2, "Truck": gdjs.CityCode.GDTruckObjects2, "Ambulance": gdjs.CityCode.GDAmbulanceObjects2, "DeliveryVan": gdjs.CityCode.GDDeliveryVanObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.CityCode.GDBulletObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBuildingAObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingBObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingCObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingDObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingFObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingGObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingHObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingIObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingLObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingMObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperAObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperBObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperCObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperDObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperEObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseAObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseBObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseCObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseDObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseEObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseFObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseGObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseHObjects2Objects = Hashtable.newFrom({"BuildingA": gdjs.CityCode.GDBuildingAObjects2, "BuildingB": gdjs.CityCode.GDBuildingBObjects2, "BuildingC": gdjs.CityCode.GDBuildingCObjects2, "BuildingD": gdjs.CityCode.GDBuildingDObjects2, "BuildingF": gdjs.CityCode.GDBuildingFObjects2, "BuildingG": gdjs.CityCode.GDBuildingGObjects2, "BuildingH": gdjs.CityCode.GDBuildingHObjects2, "BuildingI": gdjs.CityCode.GDBuildingIObjects2, "BuildingL": gdjs.CityCode.GDBuildingLObjects2, "BuildingM": gdjs.CityCode.GDBuildingMObjects2, "SkyscraperA": gdjs.CityCode.GDSkyscraperAObjects2, "SkyscraperB": gdjs.CityCode.GDSkyscraperBObjects2, "SkyscraperC": gdjs.CityCode.GDSkyscraperCObjects2, "SkyscraperD": gdjs.CityCode.GDSkyscraperDObjects2, "SkyscraperE": gdjs.CityCode.GDSkyscraperEObjects2, "HouseA": gdjs.CityCode.GDHouseAObjects2, "HouseB": gdjs.CityCode.GDHouseBObjects2, "HouseC": gdjs.CityCode.GDHouseCObjects2, "HouseD": gdjs.CityCode.GDHouseDObjects2, "HouseE": gdjs.CityCode.GDHouseEObjects2, "HouseF": gdjs.CityCode.GDHouseFObjects2, "HouseG": gdjs.CityCode.GDHouseGObjects2, "HouseH": gdjs.CityCode.GDHouseHObjects2});
gdjs.CityCode.userFunc0xb8dca8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Keep the held blaster in the player's right hand (the "arm-right" bone of the Kenney character)
// and remember the muzzle position for the shooting events.
const vars = runtimeScene.getVariables();
// GunOut tells the shooting events (next frame) that the blaster is in hand and the muzzle is up to date.
vars.get("GunOut").setBoolean(false);
const weapon = vars.get("Weapon").getAsString();
if (weapon !== "") {
  const held = runtimeScene.getObjects(weapon).find((g) => g.getVariables().get("Held").getAsBoolean());
  const player = runtimeScene.getObjects("Player")[0];
  if (held) {
    // The blaster is only in hand when standing still or aiming: walking (or driving) puts it away.
    const moving = player && Math.abs(player.getBehavior("PhysicsCharacter3D").getCurrentForwardSpeed()) > 15;
    const aiming = player && player.getVariables().get("Aiming").getAsBoolean();
    if (!player || vars.get("Driving").getAsBoolean() || (moving && !aiming)) {
      held.hide(true);
    } else {
      held.hide(false);
      vars.get("GunOut").setBoolean(true);
      const angle = player.getAngle();
      const rad = gdjs.toRad(angle);
      const gv = held.getVariables();
      let x = player.getX() + Math.cos(rad + Math.PI / 2) * 14;
      let y = player.getY() + Math.sin(rad + Math.PI / 2) * 14;
      let z = player.getZ() + 34;
      const root = player.get3DRendererObject();
      const arm = root && root.getObjectByName("arm-right");
      if (arm && root.parent) {
        root.updateWorldMatrix(true, true);
        const hand = new THREE.Vector3(-0.25, 0, 0.02);
        arm.localToWorld(hand);
        root.parent.worldToLocal(hand);
        x = hand.x; y = hand.y; z = hand.z;
      }
      const forward = gv.get("GripForward").getAsNumber();
      const cx = x + Math.cos(rad) * forward;
      const cy = y + Math.sin(rad) * forward;
      const cz = z + gv.get("GripUp").getAsNumber();
      held.setAngle(angle);
      held.setCenterXInScene(cx);
      held.setCenterYInScene(cy);
      held.setCenterZInScene(cz);
      const half = held.getWidth() / 2 + 4;
      vars.get("MuzzleX").setNumber(cx + Math.cos(rad) * half);
      vars.get("MuzzleY").setNumber(cy + Math.sin(rad) * half);
      vars.get("MuzzleZ").setNumber(cz);
    }
  }
}
};
gdjs.CityCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.CityCode.GDCannonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Minigun"), gdjs.CityCode.GDMinigunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pistol"), gdjs.CityCode.GDPistolObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rifle"), gdjs.CityCode.GDRifleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shotgun"), gdjs.CityCode.GDShotgunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sniper"), gdjs.CityCode.GDSniperObjects2);
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].returnVariable(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("BaseZ")).setNumber((gdjs.CityCode.GDPistolObjects2[i].getBehavior("Object3D").getZ()));
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].returnVariable(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("BaseZ")).setNumber((gdjs.CityCode.GDRifleObjects2[i].getBehavior("Object3D").getZ()));
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].returnVariable(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("BaseZ")).setNumber((gdjs.CityCode.GDCannonObjects2[i].getBehavior("Object3D").getZ()));
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].returnVariable(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("BaseZ")).setNumber((gdjs.CityCode.GDShotgunObjects2[i].getBehavior("Object3D").getZ()));
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].returnVariable(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("BaseZ")).setNumber((gdjs.CityCode.GDSniperObjects2[i].getBehavior("Object3D").getZ()));
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].returnVariable(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("BaseZ")).setNumber((gdjs.CityCode.GDMinigunObjects2[i].getBehavior("Object3D").getZ()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(14).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(19).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.CityCode.GDCannonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Minigun"), gdjs.CityCode.GDMinigunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pistol"), gdjs.CityCode.GDPistolObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rifle"), gdjs.CityCode.GDRifleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shotgun"), gdjs.CityCode.GDShotgunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sniper"), gdjs.CityCode.GDSniperObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPistolObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPistolObjects2[i].getVariableBoolean(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPistolObjects2[k] = gdjs.CityCode.GDPistolObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPistolObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDRifleObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDRifleObjects2[i].getVariableBoolean(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDRifleObjects2[k] = gdjs.CityCode.GDRifleObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDRifleObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDCannonObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDCannonObjects2[i].getVariableBoolean(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDCannonObjects2[k] = gdjs.CityCode.GDCannonObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDCannonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDShotgunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDShotgunObjects2[i].getVariableBoolean(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDShotgunObjects2[k] = gdjs.CityCode.GDShotgunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDShotgunObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSniperObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSniperObjects2[i].getVariableBoolean(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSniperObjects2[k] = gdjs.CityCode.GDSniperObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSniperObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDMinigunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDMinigunObjects2[i].getVariableBoolean(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDMinigunObjects2[k] = gdjs.CityCode.GDMinigunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDMinigunObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDCannonObjects2 */
/* Reuse gdjs.CityCode.GDMinigunObjects2 */
/* Reuse gdjs.CityCode.GDPistolObjects2 */
/* Reuse gdjs.CityCode.GDRifleObjects2 */
/* Reuse gdjs.CityCode.GDShotgunObjects2 */
/* Reuse gdjs.CityCode.GDSniperObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].getBehavior("Object3D").turnAroundZ(90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].getBehavior("Object3D").turnAroundZ(90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].getBehavior("Object3D").turnAroundZ(90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].getBehavior("Object3D").turnAroundZ(90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].getBehavior("Object3D").turnAroundZ(90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].getBehavior("Object3D").turnAroundZ(90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].getBehavior("Object3D").setZ(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("BaseZ").getAsNumber() + 5 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 3));
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].getBehavior("Object3D").setZ(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("BaseZ").getAsNumber() + 5 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 3));
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].getBehavior("Object3D").setZ(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("BaseZ").getAsNumber() + 5 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 3));
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].getBehavior("Object3D").setZ(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("BaseZ").getAsNumber() + 5 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 3));
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].getBehavior("Object3D").setZ(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("BaseZ").getAsNumber() + 5 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 3));
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].getBehavior("Object3D").setZ(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("BaseZ").getAsNumber() + 5 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 3));
}
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].returnVariable(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Cooldown")).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].returnVariable(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Cooldown")).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].returnVariable(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Cooldown")).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].returnVariable(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Cooldown")).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].returnVariable(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Cooldown")).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].returnVariable(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Cooldown")).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.CityCode.GDCannonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Minigun"), gdjs.CityCode.GDMinigunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pistol"), gdjs.CityCode.GDPistolObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rifle"), gdjs.CityCode.GDRifleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shotgun"), gdjs.CityCode.GDShotgunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sniper"), gdjs.CityCode.GDSniperObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPistolObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPistolObjects2[i].getVariableBoolean(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPistolObjects2[k] = gdjs.CityCode.GDPistolObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPistolObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDRifleObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDRifleObjects2[i].getVariableBoolean(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDRifleObjects2[k] = gdjs.CityCode.GDRifleObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDRifleObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDCannonObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDCannonObjects2[i].getVariableBoolean(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDCannonObjects2[k] = gdjs.CityCode.GDCannonObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDCannonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDShotgunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDShotgunObjects2[i].getVariableBoolean(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDShotgunObjects2[k] = gdjs.CityCode.GDShotgunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDShotgunObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSniperObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSniperObjects2[i].getVariableBoolean(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSniperObjects2[k] = gdjs.CityCode.GDSniperObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSniperObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDMinigunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDMinigunObjects2[i].getVariableBoolean(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Held"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDMinigunObjects2[k] = gdjs.CityCode.GDMinigunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDMinigunObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPistolObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPistolObjects2[i].getVariableNumber(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Cooldown")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPistolObjects2[k] = gdjs.CityCode.GDPistolObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPistolObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDRifleObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDRifleObjects2[i].getVariableNumber(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Cooldown")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDRifleObjects2[k] = gdjs.CityCode.GDRifleObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDRifleObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDCannonObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDCannonObjects2[i].getVariableNumber(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Cooldown")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDCannonObjects2[k] = gdjs.CityCode.GDCannonObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDCannonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDShotgunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDShotgunObjects2[i].getVariableNumber(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Cooldown")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDShotgunObjects2[k] = gdjs.CityCode.GDShotgunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDShotgunObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSniperObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSniperObjects2[i].getVariableNumber(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Cooldown")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSniperObjects2[k] = gdjs.CityCode.GDSniperObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSniperObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDMinigunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDMinigunObjects2[i].getVariableNumber(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Cooldown")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDMinigunObjects2[k] = gdjs.CityCode.GDMinigunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDMinigunObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPistolObjects2ObjectsGDgdjs_9546CityCode_9546GDRifleObjects2ObjectsGDgdjs_9546CityCode_9546GDCannonObjects2ObjectsGDgdjs_9546CityCode_9546GDShotgunObjects2ObjectsGDgdjs_9546CityCode_9546GDSniperObjects2ObjectsGDgdjs_9546CityCode_9546GDMinigunObjects2Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects2Objects, 70, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPistolObjects2ObjectsGDgdjs_9546CityCode_9546GDRifleObjects2ObjectsGDgdjs_9546CityCode_9546GDCannonObjects2ObjectsGDgdjs_9546CityCode_9546GDShotgunObjects2ObjectsGDgdjs_9546CityCode_9546GDSniperObjects2ObjectsGDgdjs_9546CityCode_9546GDMinigunObjects2Objects, (( gdjs.CityCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects2[0].getX()), (( gdjs.CityCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects2[0].getY()), false);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDCannonObjects2 */
/* Reuse gdjs.CityCode.GDMinigunObjects2 */
/* Reuse gdjs.CityCode.GDPistolObjects2 */
/* Reuse gdjs.CityCode.GDRifleObjects2 */
/* Reuse gdjs.CityCode.GDShotgunObjects2 */
/* Reuse gdjs.CityCode.GDSniperObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(23).setBoolean(true);
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].returnVariable(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Grab")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].returnVariable(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Grab")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].returnVariable(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Grab")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].returnVariable(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Grab")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].returnVariable(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Grab")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].returnVariable(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Grab")).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber((( gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? (( gdjs.CityCode.GDSniperObjects2.length === 0 ) ? (( gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? (( gdjs.CityCode.GDCannonObjects2.length === 0 ) ? (( gdjs.CityCode.GDRifleObjects2.length === 0 ) ? (( gdjs.CityCode.GDPistolObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDPistolObjects2[0].getX()) :gdjs.CityCode.GDRifleObjects2[0].getX()) :gdjs.CityCode.GDCannonObjects2[0].getX()) :gdjs.CityCode.GDShotgunObjects2[0].getX()) :gdjs.CityCode.GDSniperObjects2[0].getX()) :gdjs.CityCode.GDMinigunObjects2[0].getX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber((( gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? (( gdjs.CityCode.GDSniperObjects2.length === 0 ) ? (( gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? (( gdjs.CityCode.GDCannonObjects2.length === 0 ) ? (( gdjs.CityCode.GDRifleObjects2.length === 0 ) ? (( gdjs.CityCode.GDPistolObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDPistolObjects2[0].getY()) :gdjs.CityCode.GDRifleObjects2[0].getY()) :gdjs.CityCode.GDCannonObjects2[0].getY()) :gdjs.CityCode.GDShotgunObjects2[0].getY()) :gdjs.CityCode.GDSniperObjects2[0].getY()) :gdjs.CityCode.GDMinigunObjects2[0].getY()));
}
{runtimeScene.getScene().getVariables().getFromIndex(26).setNumber(((gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? ((gdjs.CityCode.GDSniperObjects2.length === 0 ) ? ((gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? ((gdjs.CityCode.GDCannonObjects2.length === 0 ) ? ((gdjs.CityCode.GDRifleObjects2.length === 0 ) ? ((gdjs.CityCode.GDPistolObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDPistolObjects2[0].getVariables()) : gdjs.CityCode.GDRifleObjects2[0].getVariables()) : gdjs.CityCode.GDCannonObjects2[0].getVariables()) : gdjs.CityCode.GDShotgunObjects2[0].getVariables()) : gdjs.CityCode.GDSniperObjects2[0].getVariables()) : gdjs.CityCode.GDMinigunObjects2[0].getVariables()).get("BaseZ").getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.CityCode.GDCannonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Minigun"), gdjs.CityCode.GDMinigunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pistol"), gdjs.CityCode.GDPistolObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rifle"), gdjs.CityCode.GDRifleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shotgun"), gdjs.CityCode.GDShotgunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sniper"), gdjs.CityCode.GDSniperObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(23).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPistolObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPistolObjects2[i].getVariableBoolean(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Held"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPistolObjects2[k] = gdjs.CityCode.GDPistolObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPistolObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDRifleObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDRifleObjects2[i].getVariableBoolean(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Held"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDRifleObjects2[k] = gdjs.CityCode.GDRifleObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDRifleObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDCannonObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDCannonObjects2[i].getVariableBoolean(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Held"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDCannonObjects2[k] = gdjs.CityCode.GDCannonObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDCannonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDShotgunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDShotgunObjects2[i].getVariableBoolean(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Held"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDShotgunObjects2[k] = gdjs.CityCode.GDShotgunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDShotgunObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSniperObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSniperObjects2[i].getVariableBoolean(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Held"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSniperObjects2[k] = gdjs.CityCode.GDSniperObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSniperObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDMinigunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDMinigunObjects2[i].getVariableBoolean(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Held"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDMinigunObjects2[k] = gdjs.CityCode.GDMinigunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDMinigunObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDCannonObjects2 */
/* Reuse gdjs.CityCode.GDMinigunObjects2 */
/* Reuse gdjs.CityCode.GDPistolObjects2 */
/* Reuse gdjs.CityCode.GDRifleObjects2 */
/* Reuse gdjs.CityCode.GDShotgunObjects2 */
/* Reuse gdjs.CityCode.GDSniperObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].returnVariable(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Held")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].returnVariable(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Held")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].returnVariable(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Held")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].returnVariable(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Held")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].returnVariable(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Held")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].returnVariable(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Held")).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].returnVariable(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Cooldown")).setNumber(1.5);
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].returnVariable(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Cooldown")).setNumber(1.5);
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].returnVariable(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Cooldown")).setNumber(1.5);
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].returnVariable(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Cooldown")).setNumber(1.5);
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].returnVariable(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Cooldown")).setNumber(1.5);
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].returnVariable(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Cooldown")).setNumber(1.5);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber());
}
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].returnVariable(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("BaseZ")).setNumber(runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].returnVariable(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("BaseZ")).setNumber(runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].returnVariable(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("BaseZ")).setNumber(runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].returnVariable(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("BaseZ")).setNumber(runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].returnVariable(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("BaseZ")).setNumber(runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].returnVariable(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("BaseZ")).setNumber(runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].setAngle(0);
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].setAngle(0);
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].setAngle(0);
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].setAngle(0);
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].setAngle(0);
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cannon"), gdjs.CityCode.GDCannonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Minigun"), gdjs.CityCode.GDMinigunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pistol"), gdjs.CityCode.GDPistolObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rifle"), gdjs.CityCode.GDRifleObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shotgun"), gdjs.CityCode.GDShotgunObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sniper"), gdjs.CityCode.GDSniperObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(23).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPistolObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPistolObjects2[i].getVariableBoolean(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Grab"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPistolObjects2[k] = gdjs.CityCode.GDPistolObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPistolObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDRifleObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDRifleObjects2[i].getVariableBoolean(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Grab"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDRifleObjects2[k] = gdjs.CityCode.GDRifleObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDRifleObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDCannonObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDCannonObjects2[i].getVariableBoolean(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Grab"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDCannonObjects2[k] = gdjs.CityCode.GDCannonObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDCannonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDShotgunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDShotgunObjects2[i].getVariableBoolean(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Grab"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDShotgunObjects2[k] = gdjs.CityCode.GDShotgunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDShotgunObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSniperObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSniperObjects2[i].getVariableBoolean(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Grab"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSniperObjects2[k] = gdjs.CityCode.GDSniperObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSniperObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDMinigunObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDMinigunObjects2[i].getVariableBoolean(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Grab"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDMinigunObjects2[k] = gdjs.CityCode.GDMinigunObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDMinigunObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDCannonObjects2 */
/* Reuse gdjs.CityCode.GDMinigunObjects2 */
/* Reuse gdjs.CityCode.GDPistolObjects2 */
/* Reuse gdjs.CityCode.GDRifleObjects2 */
/* Reuse gdjs.CityCode.GDShotgunObjects2 */
/* Reuse gdjs.CityCode.GDSniperObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].returnVariable(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Grab")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].returnVariable(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Grab")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].returnVariable(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Grab")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].returnVariable(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Grab")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].returnVariable(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Grab")).setBoolean(false);
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].returnVariable(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Grab")).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPistolObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPistolObjects2[i].returnVariable(gdjs.CityCode.GDPistolObjects2[i].getVariables().get("Held")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDRifleObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDRifleObjects2[i].returnVariable(gdjs.CityCode.GDRifleObjects2[i].getVariables().get("Held")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDCannonObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCannonObjects2[i].returnVariable(gdjs.CityCode.GDCannonObjects2[i].getVariables().get("Held")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDShotgunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDShotgunObjects2[i].returnVariable(gdjs.CityCode.GDShotgunObjects2[i].getVariables().get("Held")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDSniperObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSniperObjects2[i].returnVariable(gdjs.CityCode.GDSniperObjects2[i].getVariables().get("Held")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDMinigunObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMinigunObjects2[i].returnVariable(gdjs.CityCode.GDMinigunObjects2[i].getVariables().get("Held")).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setString((( gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? (( gdjs.CityCode.GDSniperObjects2.length === 0 ) ? (( gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? (( gdjs.CityCode.GDCannonObjects2.length === 0 ) ? (( gdjs.CityCode.GDRifleObjects2.length === 0 ) ? (( gdjs.CityCode.GDPistolObjects2.length === 0 ) ? "" :gdjs.CityCode.GDPistolObjects2[0].getName()) :gdjs.CityCode.GDRifleObjects2[0].getName()) :gdjs.CityCode.GDCannonObjects2[0].getName()) :gdjs.CityCode.GDShotgunObjects2[0].getName()) :gdjs.CityCode.GDSniperObjects2[0].getName()) :gdjs.CityCode.GDMinigunObjects2[0].getName()));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(((gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? ((gdjs.CityCode.GDSniperObjects2.length === 0 ) ? ((gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? ((gdjs.CityCode.GDCannonObjects2.length === 0 ) ? ((gdjs.CityCode.GDRifleObjects2.length === 0 ) ? ((gdjs.CityCode.GDPistolObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDPistolObjects2[0].getVariables()) : gdjs.CityCode.GDRifleObjects2[0].getVariables()) : gdjs.CityCode.GDCannonObjects2[0].getVariables()) : gdjs.CityCode.GDShotgunObjects2[0].getVariables()) : gdjs.CityCode.GDSniperObjects2[0].getVariables()) : gdjs.CityCode.GDMinigunObjects2[0].getVariables()).get("FireRate").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(((gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? ((gdjs.CityCode.GDSniperObjects2.length === 0 ) ? ((gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? ((gdjs.CityCode.GDCannonObjects2.length === 0 ) ? ((gdjs.CityCode.GDRifleObjects2.length === 0 ) ? ((gdjs.CityCode.GDPistolObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDPistolObjects2[0].getVariables()) : gdjs.CityCode.GDRifleObjects2[0].getVariables()) : gdjs.CityCode.GDCannonObjects2[0].getVariables()) : gdjs.CityCode.GDShotgunObjects2[0].getVariables()) : gdjs.CityCode.GDSniperObjects2[0].getVariables()) : gdjs.CityCode.GDMinigunObjects2[0].getVariables()).get("Pellets").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(((gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? ((gdjs.CityCode.GDSniperObjects2.length === 0 ) ? ((gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? ((gdjs.CityCode.GDCannonObjects2.length === 0 ) ? ((gdjs.CityCode.GDRifleObjects2.length === 0 ) ? ((gdjs.CityCode.GDPistolObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDPistolObjects2[0].getVariables()) : gdjs.CityCode.GDRifleObjects2[0].getVariables()) : gdjs.CityCode.GDCannonObjects2[0].getVariables()) : gdjs.CityCode.GDShotgunObjects2[0].getVariables()) : gdjs.CityCode.GDSniperObjects2[0].getVariables()) : gdjs.CityCode.GDMinigunObjects2[0].getVariables()).get("BulletSpeed").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(((gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? ((gdjs.CityCode.GDSniperObjects2.length === 0 ) ? ((gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? ((gdjs.CityCode.GDCannonObjects2.length === 0 ) ? ((gdjs.CityCode.GDRifleObjects2.length === 0 ) ? ((gdjs.CityCode.GDPistolObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDPistolObjects2[0].getVariables()) : gdjs.CityCode.GDRifleObjects2[0].getVariables()) : gdjs.CityCode.GDCannonObjects2[0].getVariables()) : gdjs.CityCode.GDShotgunObjects2[0].getVariables()) : gdjs.CityCode.GDSniperObjects2[0].getVariables()) : gdjs.CityCode.GDMinigunObjects2[0].getVariables()).get("Damage").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(((gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? ((gdjs.CityCode.GDSniperObjects2.length === 0 ) ? ((gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? ((gdjs.CityCode.GDCannonObjects2.length === 0 ) ? ((gdjs.CityCode.GDRifleObjects2.length === 0 ) ? ((gdjs.CityCode.GDPistolObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDPistolObjects2[0].getVariables()) : gdjs.CityCode.GDRifleObjects2[0].getVariables()) : gdjs.CityCode.GDCannonObjects2[0].getVariables()) : gdjs.CityCode.GDShotgunObjects2[0].getVariables()) : gdjs.CityCode.GDSniperObjects2[0].getVariables()) : gdjs.CityCode.GDMinigunObjects2[0].getVariables()).get("Spread").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(((gdjs.CityCode.GDMinigunObjects2.length === 0 ) ? ((gdjs.CityCode.GDSniperObjects2.length === 0 ) ? ((gdjs.CityCode.GDShotgunObjects2.length === 0 ) ? ((gdjs.CityCode.GDCannonObjects2.length === 0 ) ? ((gdjs.CityCode.GDRifleObjects2.length === 0 ) ? ((gdjs.CityCode.GDPistolObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDPistolObjects2[0].getVariables()) : gdjs.CityCode.GDRifleObjects2[0].getVariables()) : gdjs.CityCode.GDCannonObjects2[0].getVariables()) : gdjs.CityCode.GDShotgunObjects2[0].getVariables()) : gdjs.CityCode.GDSniperObjects2[0].getVariables()) : gdjs.CityCode.GDMinigunObjects2[0].getVariables()).get("BulletScale").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(0.3);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/click.ogg", false, 70, 1.4);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(23).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects2[i].returnVariable(gdjs.CityCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.CityCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects2[0].getBehavior("PhysicsCharacter3D").getCurrentForwardSpeed())) <= 250);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects2[i].returnVariable(gdjs.CityCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").setForwardAngle(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}

{ //Subevents
gdjs.CityCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() != "");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(42);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() != "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPlayerObjects2[i].getBehavior("PhysicsCharacter3D").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPlayerObjects2[k] = gdjs.CityCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs((( gdjs.CityCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDPlayerObjects2[0].getBehavior("PhysicsCharacter3D").getCurrentForwardSpeed())) <= 15);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CityCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.CityCode.GDBulletObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDBulletObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDBulletObjects2[i].getTimerElapsedTimeInSecondsOrNaN("life") >= 1.2 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDBulletObjects2[k] = gdjs.CityCode.GDBulletObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDBulletObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDBulletObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.CityCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("PedFemaleA"), gdjs.CityCode.GDPedFemaleAObjects2);
gdjs.copyArray(runtimeScene.getObjects("PedFemaleB"), gdjs.CityCode.GDPedFemaleBObjects2);
gdjs.copyArray(runtimeScene.getObjects("PedFemaleC"), gdjs.CityCode.GDPedFemaleCObjects2);
gdjs.copyArray(runtimeScene.getObjects("PedFemaleD"), gdjs.CityCode.GDPedFemaleDObjects2);
gdjs.copyArray(runtimeScene.getObjects("PedMaleB"), gdjs.CityCode.GDPedMaleBObjects2);
gdjs.copyArray(runtimeScene.getObjects("PedMaleC"), gdjs.CityCode.GDPedMaleCObjects2);
gdjs.copyArray(runtimeScene.getObjects("PedMaleD"), gdjs.CityCode.GDPedMaleDObjects2);
gdjs.copyArray(runtimeScene.getObjects("PedMaleE"), gdjs.CityCode.GDPedMaleEObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedFemaleAObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedFemaleAObjects2[i].getVariableBoolean(gdjs.CityCode.GDPedFemaleAObjects2[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedFemaleAObjects2[k] = gdjs.CityCode.GDPedFemaleAObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPedFemaleAObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedFemaleBObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedFemaleBObjects2[i].getVariableBoolean(gdjs.CityCode.GDPedFemaleBObjects2[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedFemaleBObjects2[k] = gdjs.CityCode.GDPedFemaleBObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPedFemaleBObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedFemaleCObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedFemaleCObjects2[i].getVariableBoolean(gdjs.CityCode.GDPedFemaleCObjects2[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedFemaleCObjects2[k] = gdjs.CityCode.GDPedFemaleCObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPedFemaleCObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedFemaleDObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedFemaleDObjects2[i].getVariableBoolean(gdjs.CityCode.GDPedFemaleDObjects2[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedFemaleDObjects2[k] = gdjs.CityCode.GDPedFemaleDObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPedFemaleDObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedMaleBObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedMaleBObjects2[i].getVariableBoolean(gdjs.CityCode.GDPedMaleBObjects2[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedMaleBObjects2[k] = gdjs.CityCode.GDPedMaleBObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPedMaleBObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedMaleCObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedMaleCObjects2[i].getVariableBoolean(gdjs.CityCode.GDPedMaleCObjects2[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedMaleCObjects2[k] = gdjs.CityCode.GDPedMaleCObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPedMaleCObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedMaleDObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedMaleDObjects2[i].getVariableBoolean(gdjs.CityCode.GDPedMaleDObjects2[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedMaleDObjects2[k] = gdjs.CityCode.GDPedMaleDObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPedMaleDObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedMaleEObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedMaleEObjects2[i].getVariableBoolean(gdjs.CityCode.GDPedMaleEObjects2[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedMaleEObjects2[k] = gdjs.CityCode.GDPedMaleEObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPedMaleEObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBulletObjects2Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPedFemaleAObjects2ObjectsGDgdjs_9546CityCode_9546GDPedFemaleBObjects2ObjectsGDgdjs_9546CityCode_9546GDPedFemaleCObjects2ObjectsGDgdjs_9546CityCode_9546GDPedFemaleDObjects2ObjectsGDgdjs_9546CityCode_9546GDPedMaleBObjects2ObjectsGDgdjs_9546CityCode_9546GDPedMaleCObjects2ObjectsGDgdjs_9546CityCode_9546GDPedMaleDObjects2ObjectsGDgdjs_9546CityCode_9546GDPedMaleEObjects2Objects, 40, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDBulletObjects2 */
/* Reuse gdjs.CityCode.GDPedFemaleAObjects2 */
/* Reuse gdjs.CityCode.GDPedFemaleBObjects2 */
/* Reuse gdjs.CityCode.GDPedFemaleCObjects2 */
/* Reuse gdjs.CityCode.GDPedFemaleDObjects2 */
/* Reuse gdjs.CityCode.GDPedMaleBObjects2 */
/* Reuse gdjs.CityCode.GDPedMaleCObjects2 */
/* Reuse gdjs.CityCode.GDPedMaleDObjects2 */
/* Reuse gdjs.CityCode.GDPedMaleEObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDPedFemaleAObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleAObjects2[i].returnVariable(gdjs.CityCode.GDPedFemaleAObjects2[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleBObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleBObjects2[i].returnVariable(gdjs.CityCode.GDPedFemaleBObjects2[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleCObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleCObjects2[i].returnVariable(gdjs.CityCode.GDPedFemaleCObjects2[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleDObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleDObjects2[i].returnVariable(gdjs.CityCode.GDPedFemaleDObjects2[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleBObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleBObjects2[i].returnVariable(gdjs.CityCode.GDPedMaleBObjects2[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleCObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleCObjects2[i].returnVariable(gdjs.CityCode.GDPedMaleCObjects2[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleDObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleDObjects2[i].returnVariable(gdjs.CityCode.GDPedMaleDObjects2[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleEObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleEObjects2[i].returnVariable(gdjs.CityCode.GDPedMaleEObjects2[i].getVariables().get("Down")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPedFemaleAObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleAObjects2[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleBObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleBObjects2[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleCObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleCObjects2[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleDObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleDObjects2[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleBObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleBObjects2[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleCObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleCObjects2[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleDObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleDObjects2[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleEObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleEObjects2[i].getBehavior("Animation").setAnimationName("die");
}
}
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/hit_body.ogg", false, 70, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ambulance"), gdjs.CityCode.GDAmbulanceObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.CityCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("DeliveryVan"), gdjs.CityCode.GDDeliveryVanObjects2);
gdjs.copyArray(runtimeScene.getObjects("Hatchback"), gdjs.CityCode.GDHatchbackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Police"), gdjs.CityCode.GDPoliceObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.CityCode.GDSedanObjects2);
gdjs.copyArray(runtimeScene.getObjects("SportsCar"), gdjs.CityCode.GDSportsCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Suv"), gdjs.CityCode.GDSuvObjects2);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.CityCode.GDTaxiObjects2);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.CityCode.GDTruckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Van"), gdjs.CityCode.GDVanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBulletObjects2Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects2ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects2ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects2ObjectsGDgdjs_9546CityCode_9546GDSuvObjects2ObjectsGDgdjs_9546CityCode_9546GDVanObjects2ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects2ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects2ObjectsGDgdjs_9546CityCode_9546GDTruckObjects2ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects2ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDAmbulanceObjects2 */
/* Reuse gdjs.CityCode.GDBulletObjects2 */
/* Reuse gdjs.CityCode.GDDeliveryVanObjects2 */
/* Reuse gdjs.CityCode.GDHatchbackObjects2 */
/* Reuse gdjs.CityCode.GDPoliceObjects2 */
/* Reuse gdjs.CityCode.GDSedanObjects2 */
/* Reuse gdjs.CityCode.GDSportsCarObjects2 */
/* Reuse gdjs.CityCode.GDSuvObjects2 */
/* Reuse gdjs.CityCode.GDTaxiObjects2 */
/* Reuse gdjs.CityCode.GDTruckObjects2 */
/* Reuse gdjs.CityCode.GDVanObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDSedanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSedanObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDTaxiObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTaxiObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDPoliceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPoliceObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDSuvObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSuvObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDVanObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDHatchbackObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDHatchbackObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDSportsCarObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDSportsCarObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDTruckObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDTruckObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDAmbulanceObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDAmbulanceObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
for(var i = 0, len = gdjs.CityCode.GDDeliveryVanObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDDeliveryVanObjects2[i].getBehavior("Physics3D").applyImpulseAtCenter(Math.cos(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), Math.sin(gdjs.toRad((( gdjs.CityCode.GDBulletObjects2.length === 0 ) ? 0 :gdjs.CityCode.GDBulletObjects2[0].getAngle()))) * 1500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber(), 500 * ((gdjs.CityCode.GDBulletObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CityCode.GDBulletObjects2[0].getVariables()).getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/hit_metal.ogg", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuildingA"), gdjs.CityCode.GDBuildingAObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingB"), gdjs.CityCode.GDBuildingBObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingC"), gdjs.CityCode.GDBuildingCObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingD"), gdjs.CityCode.GDBuildingDObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingF"), gdjs.CityCode.GDBuildingFObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingG"), gdjs.CityCode.GDBuildingGObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingH"), gdjs.CityCode.GDBuildingHObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingI"), gdjs.CityCode.GDBuildingIObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingL"), gdjs.CityCode.GDBuildingLObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingM"), gdjs.CityCode.GDBuildingMObjects2);
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.CityCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseA"), gdjs.CityCode.GDHouseAObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseB"), gdjs.CityCode.GDHouseBObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseC"), gdjs.CityCode.GDHouseCObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseD"), gdjs.CityCode.GDHouseDObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseE"), gdjs.CityCode.GDHouseEObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseF"), gdjs.CityCode.GDHouseFObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseG"), gdjs.CityCode.GDHouseGObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseH"), gdjs.CityCode.GDHouseHObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperA"), gdjs.CityCode.GDSkyscraperAObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperB"), gdjs.CityCode.GDSkyscraperBObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperC"), gdjs.CityCode.GDSkyscraperCObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperD"), gdjs.CityCode.GDSkyscraperDObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperE"), gdjs.CityCode.GDSkyscraperEObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBulletObjects2Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDBuildingAObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingBObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingCObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingDObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingFObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingGObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingHObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingIObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingLObjects2ObjectsGDgdjs_9546CityCode_9546GDBuildingMObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperAObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperBObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperCObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperDObjects2ObjectsGDgdjs_9546CityCode_9546GDSkyscraperEObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseAObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseBObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseCObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseDObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseEObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseFObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseGObjects2ObjectsGDgdjs_9546CityCode_9546GDHouseHObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDBulletObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


gdjs.CityCode.userFunc0xb8dca8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WeaponIcon"), gdjs.CityCode.GDWeaponIconObjects2);
{for(var i = 0, len = gdjs.CityCode.GDWeaponIconObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDWeaponIconObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsString() != "");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WeaponIcon"), gdjs.CityCode.GDWeaponIconObjects1);
{for(var i = 0, len = gdjs.CityCode.GDWeaponIconObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDWeaponIconObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CityCode.GDWeaponIconObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDWeaponIconObjects1[i].getBehavior("Animation").setAnimationName(runtimeScene.getScene().getVariables().getFromIndex(13).getAsString());
}
}
{for(var i = 0, len = gdjs.CityCode.GDWeaponIconObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDWeaponIconObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CityCode.GDWeaponIconObjects1[i].getWidth()) - 28,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.CityCode.GDWeaponIconObjects1[i].getHeight()) - 24);
}
}
}

}


};gdjs.CityCode.userFunc0xb9ecb8 = function GDJSInlineCode(runtimeScene, objects) {
"use strict";
// Keep the camera out of walls. The shoulder offset (CamShoulder) is shortened when a wall is
// right beside the target, then a ray is cast back from the target to where the camera wants to be,
// and the camera stops just in front of the first CameraBlockers object hit.
const vars = runtimeScene.getVariables();
const yaw = gdjs.toRad(vars.get("CamYaw").getAsNumber());
const pitch = gdjs.toRad(vars.get("CamPitch").getAsNumber());
const wanted = vars.get("CamDist").getAsNumber();
let tx = vars.get("TargetX").getAsNumber();
let ty = vars.get("TargetY").getAsNumber();
const tz = vars.get("TargetZ").getAsNumber();
const dx = -Math.cos(yaw) * Math.cos(pitch);
const dy = -Math.sin(yaw) * Math.cos(pitch);
const dz = Math.sin(pitch);
const rightX = -Math.sin(yaw);
const rightY = Math.cos(yaw);
const radius = 14;
let shoulder = vars.get("CamShoulder").getAsNumber();
let limit = wanted;
const reach = wanted + shoulder;
const roots = objects
  .filter((o) => {
    const size = reach + Math.max(o.getWidth(), o.getHeight());
    return Math.abs(o.getCenterXInScene() - tx) < size && Math.abs(o.getCenterYInScene() - ty) < size;
  })
  .map((o) => o.get3DRendererObject())
  .filter((r) => r);
if (roots.length > 0 && roots[0].parent) {
  const layerGroup = roots[0].parent;
  layerGroup.updateWorldMatrix(true, false);
  const raycaster = new THREE.Raycaster();
  const cast = (ox, oy, oz, vx, vy, vz, length) => {
    const from = layerGroup.localToWorld(new THREE.Vector3(ox, oy, oz));
    const to = layerGroup.localToWorld(new THREE.Vector3(ox + vx * length, oy + vy * length, oz + vz * length));
    raycaster.set(from, to.sub(from).normalize());
    raycaster.far = length;
    const hit = raycaster.intersectObjects(roots, true)[0];
    return hit ? hit.distance : Infinity;
  };
  if (shoulder > 0) shoulder = Math.max(0, Math.min(shoulder, cast(tx, ty, tz, rightX, rightY, 0, shoulder + radius) - radius));
  tx += rightX * shoulder;
  ty += rightY * shoulder;
  // Hits right at the start are the wall the player is touching, not something behind them.
  const hit = cast(tx + dx * radius, ty + dy * radius, tz + dz * radius, dx, dy, dz, wanted - radius);
  if (hit < Infinity) limit = Math.max(radius, hit);
} else {
  tx += rightX * shoulder;
  ty += rightY * shoulder;
}
vars.get("TargetX").setNumber(tx);
vars.get("TargetY").setNumber(ty);
// Move in quickly when something gets in the way, ease back out slowly when it's gone.
let dist = vars.get("CamDistUsed").getAsNumber();
const dt = runtimeScene.getElapsedTime() / 1000;
if (dist <= 0) dist = limit;
else dist += (limit - dist) * Math.min(1, (limit < dist ? 12 : 3) * dt);
vars.get("CamDistUsed").setNumber(dist);
// When the camera is pushed right up against the player (back to a wall), fade the player and the held
// blaster out so the view isn't just the back of their head.
const opacity = Math.max(0, Math.min(1, (dist - 30) / 50));
const faded = [runtimeScene.getObjects("Player") || []];
const weapon = vars.has("Weapon") ? vars.get("Weapon").getAsString() : "";
if (weapon !== "") faded.push((runtimeScene.getObjects(weapon) || []).filter((g) => g.getVariables().get("Held").getAsBoolean()));
for (const object of faded.flat()) {
  const root = object.get3DRendererObject();
  if (!root || root.userData.cameraOpacity === opacity) continue;
  root.userData.cameraOpacity = opacity;
  root.traverse((node) => {
    if (!node.isMesh) return;
    // Materials are shared with other instances of the same model: give this one its own copies.
    if (!node.userData.ownMaterial) {
      node.material = Array.isArray(node.material) ? node.material.map((m) => m.clone()) : node.material.clone();
      node.userData.ownMaterial = true;
    }
    for (const material of [].concat(node.material)) {
      material.transparent = opacity < 1;
      material.opacity = opacity;
      material.visible = opacity > 0.05;
    }
  });
}
};
gdjs.CityCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(330);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(620);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.common.lerp(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), Math.min(1, 3 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BuildingA"), gdjs.CityCode.GDBuildingAObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingB"), gdjs.CityCode.GDBuildingBObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingC"), gdjs.CityCode.GDBuildingCObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingD"), gdjs.CityCode.GDBuildingDObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingF"), gdjs.CityCode.GDBuildingFObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingG"), gdjs.CityCode.GDBuildingGObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingH"), gdjs.CityCode.GDBuildingHObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingI"), gdjs.CityCode.GDBuildingIObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingL"), gdjs.CityCode.GDBuildingLObjects2);
gdjs.copyArray(runtimeScene.getObjects("BuildingM"), gdjs.CityCode.GDBuildingMObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseA"), gdjs.CityCode.GDHouseAObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseB"), gdjs.CityCode.GDHouseBObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseC"), gdjs.CityCode.GDHouseCObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseD"), gdjs.CityCode.GDHouseDObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseE"), gdjs.CityCode.GDHouseEObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseF"), gdjs.CityCode.GDHouseFObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseG"), gdjs.CityCode.GDHouseGObjects2);
gdjs.copyArray(runtimeScene.getObjects("HouseH"), gdjs.CityCode.GDHouseHObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperA"), gdjs.CityCode.GDSkyscraperAObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperB"), gdjs.CityCode.GDSkyscraperBObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperC"), gdjs.CityCode.GDSkyscraperCObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperD"), gdjs.CityCode.GDSkyscraperDObjects2);
gdjs.copyArray(runtimeScene.getObjects("SkyscraperE"), gdjs.CityCode.GDSkyscraperEObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.CityCode.GDWallObjects2);

const objects = [];
objects.push.apply(objects,gdjs.CityCode.GDBuildingAObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingBObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingCObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingDObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingFObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingGObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingHObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingIObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingLObjects2);
objects.push.apply(objects,gdjs.CityCode.GDBuildingMObjects2);
objects.push.apply(objects,gdjs.CityCode.GDSkyscraperAObjects2);
objects.push.apply(objects,gdjs.CityCode.GDSkyscraperBObjects2);
objects.push.apply(objects,gdjs.CityCode.GDSkyscraperCObjects2);
objects.push.apply(objects,gdjs.CityCode.GDSkyscraperDObjects2);
objects.push.apply(objects,gdjs.CityCode.GDSkyscraperEObjects2);
objects.push.apply(objects,gdjs.CityCode.GDHouseAObjects2);
objects.push.apply(objects,gdjs.CityCode.GDHouseBObjects2);
objects.push.apply(objects,gdjs.CityCode.GDHouseCObjects2);
objects.push.apply(objects,gdjs.CityCode.GDHouseDObjects2);
objects.push.apply(objects,gdjs.CityCode.GDHouseEObjects2);
objects.push.apply(objects,gdjs.CityCode.GDHouseFObjects2);
objects.push.apply(objects,gdjs.CityCode.GDHouseGObjects2);
objects.push.apply(objects,gdjs.CityCode.GDHouseHObjects2);
objects.push.apply(objects,gdjs.CityCode.GDWallObjects2);
gdjs.CityCode.userFunc0xb9ecb8(runtimeScene, objects);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() - Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber(), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() - Math.sin(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber())) * Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber(), "", 0);
}
{gdjs.scene3d.camera.setCameraZ(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() + Math.sin(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber(), "", 0);
}
{gdjs.scene3d.camera.turnCameraTowardPosition(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber(), "", 0, false);
}
}

}


};gdjs.CityCode.userFunc0xba3de0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// City life: AI traffic that follows the lanes and obeys traffic lights,
// and pedestrians that walk around the blocks and cross at the lights.
// Roads form a grid: a road every 1600 px on both axes, from 200 to 8200.
const S = runtimeScene;
const tm = S.getTimeManager();
const dt = Math.min(0.05, tm.getElapsedTime() / 1000);
const ROADS = [200, 1800, 3400, 5000, 6600, 8200];
const MIN = 200, MAX = 8200, STEP = 1600;
const LANE = 88; // distance from the road center to the middle of a lane
// Where cars wait for a red light (from the crossing center), behind the crosswalk.
// The front of a waiting car stays this far back, so long cars turning right
// (their nose swings wide at the end of the turn) have room to get by.
const stopLine = (len) => -330 - len / 2;
const CROSS = 150; // half the width of the crossing lanes (cars on the other road)
const BRAKE = 300; // how hard the AI brakes (px/s², the cars can do about 350)
const STEER_AI = 50; // AI drivers turn the wheels further than the player can, for tighter turns
const DX = [1, 0, -1, 0], DY = [0, 1, 0, -1]; // direction 0 = east, 1 = south...
const CAR_NAMES = ["Sedan", "Taxi", "Police", "Suv", "Van", "Hatchback", "SportsCar", "Truck", "Ambulance", "DeliveryVan"];
const PED_NAMES = ["PedFemaleA", "PedFemaleB", "PedFemaleC", "PedFemaleD", "PedMaleB", "PedMaleC", "PedMaleD", "PedMaleE"];
const CAR_COUNT = 44, PED_COUNT = 60;

const L = S.__cityLife || (S.__cityLife = { time: 0, ready: false, recycle: 0, carTurn: false });
L.time += dt;
const now = L.time;

const rnd = (a, b) => a + Math.random() * (b - a);
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const angDiff = (a, b) => ((((a - b) % 360) + 540) % 360) - 180;
const snap = (v) => ROADS.reduce((b, r) => (Math.abs(r - v) < Math.abs(b - v) ? r : b), ROADS[0]);
const cx = (o) => o.getCenterXInScene();
const cy = (o) => o.getCenterYInScene();
const place = (o, x, y) => { o.setX(o.getX() + x - cx(o)); o.setY(o.getY() + y - cy(o)); };
const all = (names) => { const r = []; for (const n of names) for (const o of S.getObjects(n)) r.push(o); return r; };
const inMap = (x, y) => x >= MIN && x <= MAX && y >= MIN && y <= MAX;
const validDir = (x, y, d) => inMap(x + DX[d] * STEP, y + DY[d] * STEP);
const degree = (x, y) => [0, 1, 2, 3].filter((d) => validDir(x, y, d)).length;

// Traffic lights. Every crossing with 3+ roads alternates between the east-west
// axis (0) and the north-south axis (1), with an all red step in between.
const GREEN = 9, RED = 2, CYCLE = 2 * (GREEN + RED);
function light(x, y) {
  if (degree(x, y) < 3) return { axis: 2, left: 99 };
  const t = (now + ((x + y * 0.7) / STEP) * 3.1) % CYCLE;
  if (t < GREEN) return { axis: 0, left: GREEN - t };
  if (t < GREEN + RED) return { axis: -1, left: 0 };
  if (t < 2 * GREEN + RED) return { axis: 1, left: 2 * GREEN + RED - t };
  return { axis: -1, left: 0 };
}

// Where the player is (on foot or in a car), to keep spawns out of sight.
const player = S.getObjects("Player")[0];
const cars = all(CAR_NAMES);
const isDriven = (c) => c.getVariables().get("Driven").getAsBoolean();
const carLen = (c) => c.getWidth(); // the models face the object angle, so width is the length
// Where a car of this length waits for a busy crossing, and where it is out of it.
const boxIn = (len) => -CROSS - len / 2 - 15;
const boxOut = (len) => CROSS + len / 2 + 15;
let fx = 0, fy = 0;
if (player) { fx = cx(player); fy = cy(player); }
else { const d = cars.find(isDriven); if (d) { fx = cx(d); fy = cy(d); } }
const focusDist = (x, y) => Math.hypot(x - fx, y - fy);

// ---------------------------------------------------------------- Traffic
function chooseNext(nx, ny, d) {
  const opts = [], free = [];
  for (let o = 0; o < 4; o++) {
    if (o === (d + 2) % 4 || !validDir(nx, ny, o)) continue;
    const n = o === d ? 3 : 1; // going straight is more common
    for (let i = 0; i < n; i++) opts.push(o);
    if (!laneBlocked(nx, ny, o)) for (let i = 0; i < n; i++) free.push(o);
  }
  // Drive around a block with a car parked in its lane (like the player's) rather than wait behind it.
  return pick(free.length ? free : opts);
}

// A parked car (or the player's, standing still) in the lane after this crossing.
function laneBlocked(nx, ny, o) {
  const r = (o + 1) % 4;
  for (const [px, py] of L.parkedSpots || []) {
    const along = (px - nx) * DX[o] + (py - ny) * DY[o], lat = (px - nx) * DX[r] + (py - ny) * DY[r];
    if (along > 150 && along < STEP - 150 && lat > LANE - 90 && lat < LANE + 90) return true;
  }
  return false;
}

// Finds the lane, direction and next crossing of a car from where it is.
function route(c, st) {
  const x = cx(c), y = cy(c), h = c.getAngle();
  const rx = snap(x), ry = snap(y);
  const vertical = Math.abs(x - rx) < Math.abs(y - ry);
  let d = vertical ? (Math.sin((h * Math.PI) / 180) >= 0 ? 1 : 3) : Math.cos((h * Math.PI) / 180) >= 0 ? 0 : 2;
  for (let tries = 0; tries < 2; tries++) {
    const along = vertical ? y : x;
    const sign = d < 2 ? 1 : -1;
    const ahead = ROADS.filter((r) => (r - along) * sign > 60).sort((a, b) => (a - along) * sign - (b - along) * sign);
    if (ahead.length) {
      st.d = d;
      st.nx = vertical ? rx : ahead[0];
      st.ny = vertical ? ahead[0] : ry;
      st.next = chooseNext(st.nx, st.ny, d);
      return;
    }
    d = (d + 2) % 4;
  }
}

function newCarState(c) {
  const old = c.__ai;
  const st = (c.__ai = {
    cruise: rnd(430, 600), yieldTo: null, prev: null, off: LANE, passCar: null, idle: 0,
    stuck: 0, unstuck: 0, reverse: 0, parked: false, parkedAt: 0, wasDriven: false, speed: 0,
    steerMax: old ? old.steerMax : c.getBehavior("PhysicsCar3D").getSteerAngleMax(),
  });
  route(c, st);
  return st;
}

// Puts a car on a lane somewhere along a road, facing the traffic direction.
function putOnLane(c, x, y, d, lane = LANE) {
  const r = (d + 1) % 4;
  c.setAngle(d * 90);
  c.setRotationX(0);
  c.setRotationY(0);
  c.setZ(5);
  place(c, x + DX[r] * lane, y + DY[r] * lane);
  const p = c.getBehavior("Physics3D");
  p.setLinearVelocityX(0); p.setLinearVelocityY(0); p.setLinearVelocityZ(0);
  p.setAngularVelocityX(0); p.setAngularVelocityY(0); p.setAngularVelocityZ(0);
  newCarState(c);
}

// A random free spot on a road, away from the crossings (and the player).
// With a test, the spot is picked around the player.
function randomLaneSpot(minFocus, test) {
  for (let i = 0; i < 40; i++) {
    const vertical = Math.random() < 0.5;
    let line, along;
    if (test) {
      line = snap((vertical ? fx : fy) + rnd(-2200, 2200));
      along = clamp((vertical ? fy : fx) + rnd(-2200, 2200), MIN + 380, MAX - 380);
      if (Math.abs(along - snap(along)) < 380) continue;
    } else {
      line = pick(ROADS);
      along = ROADS[Math.floor(Math.random() * (ROADS.length - 1))] + rnd(380, STEP - 380);
    }
    const d = vertical ? pick([1, 3]) : pick([0, 2]);
    const x = vertical ? line : along, y = vertical ? along : line;
    if (focusDist(x, y) < minFocus || (test && !test(x, y))) continue;
    if (all(CAR_NAMES).some((o) => Math.hypot(cx(o) - x, cy(o) - y) < 420)) continue;
    return { x, y, d };
  }
  return null;
}

function spawnCar(minFocus) {
  const spot = randomLaneSpot(minFocus);
  if (!spot) return;
  const c = S.createObject(pick(CAR_NAMES));
  if (c) putOnLane(c, spot.x, spot.y, spot.d);
}

// ------------------------------------------------------------ Pedestrians
// Each block has a sidewalk loop. Walking clockwise and counter-clockwise use
// slightly different lines so people mostly pass each other.
const blockOf = (v) => clamp(Math.floor((v - MIN) / STEP), 0, ROADS.length - 2);
const BUILDINGS = ["BuildingA", "BuildingB", "BuildingC", "BuildingD", "BuildingF", "BuildingG", "BuildingH", "BuildingI", "BuildingL", "BuildingM",
  "SkyscraperA", "SkyscraperB", "SkyscraperC", "SkyscraperD", "SkyscraperE", "HouseA", "HouseB", "HouseC", "HouseD", "HouseE", "HouseF", "HouseG", "HouseH"];
// How far from the curb people walk on each side of a block: in the middle of
// the sidewalk, or closer to the curb where a building comes near the road.
function sidewalk(bi, bj) {
  const key = bi + "," + bj;
  if (!L.sidewalks) L.sidewalks = new Map();
  let sw = L.sidewalks.get(key);
  if (sw) return sw;
  const x0 = ROADS[bi] + 200, x1 = ROADS[bi + 1] - 200, y0 = ROADS[bj] + 200, y1 = ROADS[bj + 1] - 200;
  const room = { l: 90, r: 90, t: 90, b: 90 };
  for (const n of BUILDINGS) for (const o of S.getObjects(n)) {
    const a = o.getAABB();
    if (a.max[0] < x0 || a.min[0] > x1 || a.max[1] < y0 || a.min[1] > y1) continue;
    room.l = Math.min(room.l, a.min[0] - x0); room.r = Math.min(room.r, x1 - a.max[0]);
    room.t = Math.min(room.t, a.min[1] - y0); room.b = Math.min(room.b, y1 - a.max[1]);
  }
  // People are about 20 px wide from their center. Where a building leaves
  // no room on the sidewalk, they walk on the road along the curb instead.
  const lane = (r) => (r < 38 ? -26 : clamp(r - 26, 12, 52));
  sw = { x0, x1, y0, y1, l: lane(room.l), r: lane(room.r), t: lane(room.t), b: lane(room.b) };
  L.sidewalks.set(key, sw);
  return sw;
}
function corner(bi, bj, k, dir) {
  const sw = sidewalk(bi, bj);
  // Walking the other way: a bit further from the curb when there is room.
  const e = (v) => (dir > 0 || v < 40 ? v : v + 12);
  const x0 = sw.x0 + e(sw.l), x1 = sw.x1 - e(sw.r), y0 = sw.y0 + e(sw.t), y1 = sw.y1 - e(sw.b);
  return [[x0, y0], [x1, y0], [x1, y1], [x0, y1]][k];
}
// Crossings from a corner: [neighbor block di, dj, its corner, crossing node x, y, axis of the crossed road].
function crossings(bi, bj, k) {
  const L = ROADS[bi], R = ROADS[bi + 1], T = ROADS[bj], B = ROADS[bj + 1];
  const opts = {
    0: [[-1, 0, 1, L, T, 1], [0, -1, 3, L, T, 0]],
    1: [[1, 0, 0, R, T, 1], [0, -1, 2, R, T, 0]],
    2: [[1, 0, 3, R, B, 1], [0, 1, 1, R, B, 0]],
    3: [[-1, 0, 2, L, B, 1], [0, 1, 0, L, B, 0]],
  }[k];
  return opts.filter((o) => bi + o[0] >= 0 && bi + o[0] <= 4 && bj + o[1] >= 0 && bj + o[1] <= 4);
}

function newPedState(p) {
  const x = cx(p), y = cy(p);
  const st = (p.__ai = { bi: blockOf(x), bj: blockOf(y), k: 0, dir: Math.random() < 0.5 ? 1 : -1, mode: "walk", t: 0, tx: 0, ty: 0, cross: null, downAt: -1 });
  let best = 1e9;
  for (let k = 0; k < 4; k++) {
    const [qx, qy] = corner(st.bi, st.bj, k, st.dir);
    const dd = Math.hypot(qx - x, qy - y);
    if (dd < best) { best = dd; st.k = k; }
  }
  const sp = rnd(58, 82);
  p.getBehavior("PhysicsCharacter3D").setForwardSpeedMax(sp);
  st.walkSpeed = sp;
  return st;
}

function randomSidewalkSpot(minFocus, test) {
  for (let i = 0; i < 40; i++) {
    const bi = test ? blockOf(fx + rnd(-2200, 2200)) : Math.floor(Math.random() * 5);
    const bj = test ? blockOf(fy + rnd(-2200, 2200)) : Math.floor(Math.random() * 5);
    const k = Math.floor(Math.random() * 4), dir = Math.random() < 0.5 ? 1 : -1;
    const a = corner(bi, bj, k, dir), b = corner(bi, bj, (k + 1) % 4, dir);
    const t = Math.random();
    const x = a[0] + (b[0] - a[0]) * t, y = a[1] + (b[1] - a[1]) * t;
    if (focusDist(x, y) < minFocus || (test && !test(x, y))) continue;
    return { x, y };
  }
  return null;
}

function putOnSidewalk(p, spot) {
  const ch = p.getBehavior("PhysicsCharacter3D");
  if (p.__decel) ch.setForwardDeceleration(p.__decel); // after being thrown by a car
  ch.setCurrentForwardSpeed(0);
  place(p, spot.x, spot.y);
  p.setZ(9);
  p.getVariables().get("Down").setBoolean(false);
  p.setAnimationName("walk");
  newPedState(p);
}

function spawnPed(minFocus) {
  const spot = randomSidewalkSpot(minFocus);
  if (!spot) return;
  const p = S.createObject(pick(PED_NAMES));
  if (p) putOnSidewalk(p, spot);
}

// ------------------------------------------------------------------ Setup
if (!L.ready) {
  L.ready = true;
  // Street furniture people walk around (they don't collide with it).
  L.avoid = new Map();
  for (const [name, r] of [["StreetLight", 34], ["TrafficLight", 38], ["TreeLarge", 48], ["TreeSmall", 44], ["Dumpster", 110]]) {
    for (const o of S.getObjects(name)) {
      const x = cx(o), y = cy(o);
      const k = blockOf(x) + "," + blockOf(y);
      if (!L.avoid.has(k)) L.avoid.set(k, []);
      L.avoid.get(k).push([x, y, r]);
    }
  }
  // Line the parked cars up on the lanes. The one next to the player stays parked.
  let nearest = null, nd = 1e9;
  for (const c of cars) {
    const x = cx(c), y = cy(c), rx = snap(x), ry = snap(y);
    const vertical = Math.abs(x - rx) < Math.abs(y - ry);
    // Keep the side of the road the car is on: drive on the right.
    putOnLane(c, vertical ? rx : x, vertical ? y : ry, vertical ? (x > rx ? 3 : 1) : y > ry ? 0 : 2);
    const dd = focusDist(cx(c), cy(c));
    if (dd < nd) { nd = dd; nearest = c; }
  }
  if (nearest && nd < 500) {
    // Park it next to the player, against the curb (so traffic can get by), ready to drive.
    const x = cx(nearest), y = cy(nearest), rx = snap(x), ry = snap(y);
    const kerb = 200 - nearest.getHeight() / 2 - 12;
    if (Math.abs(x - rx) < Math.abs(y - ry)) putOnLane(nearest, rx, y, fx < rx ? 1 : 3, kerb);
    else putOnLane(nearest, x, ry, fy < ry ? 2 : 0, kerb);
    nearest.__ai.parked = true; nearest.__ai.parkedAt = now;
  }
  for (let i = cars.length; i < CAR_COUNT; i++) spawnCar(900);
  const peds = all(PED_NAMES);
  for (const p of peds) putOnSidewalk(p, randomSidewalkSpot(0));
  for (let i = peds.length; i < PED_COUNT; i++) spawnPed(0);
}

const allCars = all(CAR_NAMES);
const peds = all(PED_NAMES);

// Positions are read once per frame.
const carInfo = allCars.map((o) => ({ o, x: cx(o), y: cy(o), a: o.getAngle() }));
const bodySpeed = (o) => { const b = o.getBehavior("Physics3D"); return Math.hypot(b.getLinearVelocityX(), b.getLinearVelocityY()); };
L.parkedSpots = carInfo.filter((ci) => (ci.o.__ai && ci.o.__ai.parked) || (isDriven(ci.o) && bodySpeed(ci.o) < 30)).map((ci) => [ci.x, ci.y]);
// Things a car has to stop for.
const walkers = [];
const onRoad = (x, y) => Math.abs(x - snap(x)) < 215 || Math.abs(y - snap(y)) < 215;
for (const p of peds) {
  if (p.getVariables().get("Down").getAsBoolean()) continue;
  const x = cx(p), y = cy(p);
  if (!onRoad(x, y)) continue;
  // Where they will be in a moment, too.
  const v = p.getBehavior("PhysicsCharacter3D").getCurrentForwardSpeed() * 0.7, a = (p.getAngle() * Math.PI) / 180;
  walkers.push({ x, y, px: x + Math.cos(a) * v, py: y + Math.sin(a) * v });
}
if (player && onRoad(fx, fy)) walkers.push({ x: fx, y: fy, px: fx, py: fy });
// Out of the player's sight: far away, or outside the camera view.
const camYaw = S.getVariables().get("CamYaw").getAsNumber();
const camLayer = S.getLayer("");
const camX = camLayer.getCameraX(), camY = camLayer.getCameraY();
const unseen = (x, y) => {
  if (Math.hypot(x - camX, y - camY) > 2600) return true;
  return focusDist(x, y) > 350 && Math.abs(angDiff((Math.atan2(y - camY, x - camX) * 180) / Math.PI, camYaw)) > 70;
};
// Keep the streets around the player busy: people and cars far away come back
// near the player, where nobody sees them appear.
L.recycle -= dt;
if (L.recycle <= 0 && (player || cars.some(isDriven))) {
  L.recycle = 0.25;
  L.carTurn = !L.carTurn;
  const nearOk = (x, y) => { const dd = focusDist(x, y); return dd > 700 && dd < 2200 && unseen(x, y); };
  const nearPeds = peds.filter((p) => focusDist(cx(p), cy(p)) < 2200).length;
  const far = nearPeds < 32 && peds.find((p) => p.__ai && p.__ai.mode === "walk" && !p.getVariables().get("Down").getAsBoolean() && focusDist(cx(p), cy(p)) > 2800);
  if (far) { const spot = randomSidewalkSpot(0, nearOk); if (spot) putOnSidewalk(far, spot); }
  const nearCars = allCars.filter((c) => focusDist(cx(c), cy(c)) < 2400).length;
  const farCar = L.carTurn && nearCars < 16 && allCars.find((c) => c.__ai && !c.__ai.parked && !isDriven(c) && focusDist(cx(c), cy(c)) > 3400);
  if (farCar) { const spot = randomLaneSpot(0, nearOk); if (spot) putOnLane(farCar, spot.x, spot.y, spot.d); }
}
// Who is using each crossing. A car past the stop line holds its crossing;
// other cars only go in if their way doesn't cut across (d = -1: blocks all).
const holders = new Map();
const hold = (x, y, h) => { const k = x + "," + y; if (!holders.has(k)) holders.set(k, []); holders.get(k).push(h); };
for (const ci of carInfo) {
  const st = ci.o.__ai;
  const len = carLen(ci.o);
  const rx = snap(ci.x), ry = snap(ci.y);
  const reach = CROSS + len / 2 + 15; // the car touches the crossing lanes
  const inside = Math.abs(ci.x - rx) < reach && Math.abs(ci.y - ry) < reach && (Math.abs(ci.x - rx) < 215 || Math.abs(ci.y - ry) < 215);
  if (!st || st.parked || isDriven(ci.o)) { if (inside) hold(rx, ry, { c: ci.o, d: -1 }); continue; }
  const s = (ci.x - st.nx) * DX[st.d] + (ci.y - st.ny) * DY[st.d];
  if (s > boxIn(len) || (st.res === st.nx + "," + st.ny && s > boxIn(len) - 170)) hold(st.nx, st.ny, { c: ci.o, d: st.d, left: st.next === (st.d + 3) % 4 });
  // Still finishing the way across the last crossing: until the back of the car is out.
  const pv = st.prev;
  const out = pv ? (ci.x - pv.x) * DX[st.d] + (ci.y - pv.y) * DY[st.d] : 0;
  if (pv && out < boxOut(len) && Math.abs(ci.x - pv.x) < 700 && Math.abs(ci.y - pv.y) < 700) hold(pv.x, pv.y, { c: ci.o, d: pv.d, left: pv.left });
  else {
    st.prev = null;
    // Out of the last crossing: its claim (and the right of way it gave) is over.
    if (st.res && st.res !== st.nx + "," + st.ny) st.res = null;
  }
  if (inside && !st.prev && (rx !== st.nx || ry !== st.ny) && Math.abs(st.speed) < 100) hold(rx, ry, { c: ci.o, d: -1 });
}
// Same way in, or straight/right turns from opposite sides. Left turns cut across everything else.
const compatible = (d, left, h) => h.d === d || (h.d >= 0 && h.d === (d + 2) % 4 && !left && !h.left);

// Is the lane after the crossing free enough to get out of it?
function exitBlocked(c, st, len) {
  const d2 = st.next, r2 = (d2 + 1) % 4;
  for (const oi of carInfo) {
    if (oi.o === c) continue;
    const ox = oi.x - st.nx, oy = oi.y - st.ny;
    const along = ox * DX[d2] + oy * DY[d2];
    const lat = ox * DX[r2] + oy * DY[r2];
    if (along < 100 || along > CROSS + len + carLen(oi.o) / 2 + 60 || Math.abs(lat - LANE) > 75) continue;
    const os = oi.o.__ai;
    if (!os || os.parked || isDriven(oi.o) || Math.abs(os.speed) < 120) return true;
  }
  return false;
}

// Turns the front wheels to an angle (in degrees). The car behavior only has a
// "steering stick" that turns the wheels at a fixed speed for as long as it is
// held, so the AI sets the angle directly and holds the stick just enough to keep it.
// How far the front wheels can turn. The physics engine reads the behavior's value only
// when it builds the car, so it is changed on the wheels themselves too.
function setSteerMax(car, deg) {
  if (car.getSteerAngleMax() !== deg) car.setSteerAngleMax(deg);
  const vc = car._vehicleController;
  if (!vc || typeof Jolt === "undefined") return;
  // (Checked on the wheels every time: the car can be rebuilt by the engine.)
  const con = vc.GetConstraint(), rad = (deg * Math.PI) / 180;
  for (let i = 0; i < 2; i++) {
    const w = Jolt.castObject(con.GetWheel(i).GetSettings(), Jolt.WheelSettingsWV);
    if (Math.abs(w.get_mMaxSteerAngle() - rad) > 0.001) w.set_mMaxSteerAngle(rad);
  }
}

function steerTo(c, car, st, angle) {
  setSteerMax(car, STEER_AI);
  const ratio = clamp(angle / STEER_AI, -1, 1);
  if (Math.abs(ratio) < 0.01) return;
  if ("_currentSteerRatio" in car) {
    car._currentSteerRatio = ratio;
    car.simulateSteeringStick(Math.sign(ratio) * 0.0001);
  } else car.simulateSteeringStick(clamp(ratio * 2, -1, 1));
}

for (const info of carInfo) {
  const c = info.o;
  const st = c.__ai || newCarState(c);
  const car = c.getBehavior("PhysicsCar3D");
  const body = c.getBehavior("Physics3D");
  const x = info.x, y = info.y;
  const h = info.a;
  const len = carLen(c);
  const lastWhy = st.why;
  st.why = "";
  const hx = Math.cos((h * Math.PI) / 180), hy = Math.sin((h * Math.PI) / 180);
  const vf = body.getLinearVelocityX() * hx + body.getLinearVelocityY() * hy;
  st.speed = vf;

  if (isDriven(c)) {
    // The player drives it: give the wheels back.
    if (!st.wasDriven) setSteerMax(car, st.steerMax);
    st.wasDriven = true;
    continue;
  }
  if (st.wasDriven) { st.wasDriven = false; st.parked = true; st.parkedAt = now; }
  if (st.parked) {
    car.simulateHandBrakeKey();
    // Someone else drives it away once the player is gone.
    if (now - st.parkedAt > 10 && focusDist(x, y) > 1600) { st.parked = false; route(c, st); }
    continue;
  }

  // Wrecked, flipped or lost cars come back somewhere else, out of sight.
  const flipped = Math.abs(angDiff(c.getRotationX(), 0)) > 60 || Math.abs(angDiff(c.getRotationY(), 0)) > 60;
  const lateral = Math.min(Math.abs(x - snap(x)), Math.abs(y - snap(y)));
  st.idle = Math.abs(vf) < 20 ? st.idle + dt : 0;
  const sNow = (x - st.nx) * DX[st.d] + (y - st.ny) * DY[st.d];
  const idleMax = sNow > boxIn(len) || st.prev ? 10 : lastWhy === "light" ? 60 : 25; // stuck in a crossing blocks everyone
  if ((flipped || lateral > 320 || st.unstuck >= 3 || st.idle > idleMax || !inMap(x, y)) && unseen(x, y)) {
    const spot = randomLaneSpot(1800);
    if (spot) putOnLane(c, spot.x, spot.y, spot.d);
    continue;
  }

  // Going around a parked car: on the other side of the road, until past it.
  if (st.passCar) {
    const pc = st.passCar, ps = pc.__ai;
    const along = (cx(pc) - x) * hx + (cy(pc) - y) * hy;
    if (!allCars.includes(pc) || along < -(len + carLen(pc)) / 2 - 20 || now - st.passT > 12 || (ps && !ps.parked && !isDriven(pc) && Math.abs(ps.speed) > 60)) st.passCar = null;
  }
  st.off += clamp((st.passCar ? st.passOff : LANE) - st.off, -150 * dt, 220 * dt);

  // Pushed back past the last crossing: find the way again.
  if (sNow < -STEP - 60) { route(c, st); st.prev = null; }

  // Follow the lane (look-ahead point). Turns follow a quarter circle that
  // joins the two lanes. For right turns the car first moves a bit towards the
  // middle of the road, or its side would hit the curb at the corner.
  const d1 = st.d, d2 = st.next;
  const r1 = (d1 + 1) % 4, r2 = (d2 + 1) % 4;
  const s = (x - st.nx) * DX[d1] + (y - st.ny) * DY[d1];
  // Looking far ahead keeps the car steady on straight roads; in turns it would cut the corner.
  const look = d2 === d1 ? 90 + len * 0.3 + Math.max(0, vf) * 0.25 : 55 + len * 0.15 + Math.max(0, vf) * 0.15;
  let tx, ty, toTurn = 1e9, turnR = 0, radial = 0, turnSign = 0;
  // Where the steering aims from. In turns that is the point the car turns about
  // (measured: 0.35 of its length behind the middle, like a back axle): steering the
  // middle of the car along the arc leaves it pointing ~20° short at the end of the
  // turn, with its nose in the other lane.
  let gx = x, gy = y, base = len * 0.8, arcSteer = null;
  let pathAt; // the point the car will be at, some distance further along its way
  if (d2 === d1) {
    const nx0 = st.nx, ny0 = st.ny, off = st.off;
    pathAt = (dist) => [nx0 + DX[r1] * off + DX[d1] * (s + dist), ny0 + DY[r1] * off + DY[d1] * (s + dist)];
    [tx, ty] = pathAt(look);
    if (s > 0) {
      st.prev = { x: st.nx, y: st.ny, d: d1, left: false };
      st.nx += DX[d1] * STEP; st.ny += DY[d1] * STEP;
      st.next = chooseNext(st.nx, st.ny, d1);
    }
  } else {
    const left = d2 === (d1 + 3) % 4;
    const piv = len * 0.35;
    gx = x - hx * piv; gy = y - hy * piv; base = len * 0.9;
    // Right turns, like a truck driver: as tight as the car can (measured: about 0.85 of
    // its length), ending close to the curb because the nose swings out about half the
    // car's length (it would hit the cars waiting on the other side), and coming in
    // towards the middle of the road just enough for the inner side to clear the curb
    // corner by 15 px.
    // Left turns end near the middle of the new road: the nose swings wide towards its curb.
    turnR = left ? Math.max(300, len * 1.3) : clamp(len * 0.92, 185, 240);
    const ln = left ? (len > 230 ? LANE - 20 : LANE - 10) : Math.min(105, len * 0.5 - 15);
    const lnIn = left ? LANE : Math.min(LANE, 200 - turnR + Math.sqrt(Math.max(0, (turnR - 75) ** 2 - (turnR + ln - 200) ** 2)));
    const kx = st.nx + DX[r1] * lnIn + DX[r2] * ln, ky = st.ny + DY[r1] * lnIn + DY[r2] * ln; // where the lanes meet
    const t1x = kx - DX[d1] * turnR, t1y = ky - DY[d1] * turnR; // the arc starts
    const t2x = kx + DX[d2] * turnR, t2y = ky + DY[d2] * turnR; // and ends
    const ox = t1x + DX[d2] * turnR, oy = t1y + DY[d2] * turnR; // its center
    const arcLen = (turnR * Math.PI) / 2;
    const sT1 = (t1x - st.nx) * DX[d1] + (t1y - st.ny) * DY[d1];
    const sG = (gx - st.nx) * DX[d1] + (gy - st.ny) * DY[d1];
    const past = (gx - t2x) * DX[d2] + (gy - t2y) * DY[d2];
    let u; // how far the turning point is along the turn
    if (sG < sT1) u = sG - sT1;
    else if (past > 0) u = arcLen + past;
    else {
      const px = gx - ox, py = gy - oy;
      u = turnR * clamp(Math.atan2(px * DX[d1] + py * DY[d1], -(px * DX[d2] + py * DY[d2])), 0, Math.PI / 2);
    }
    toTurn = -Math.min(0, u);
    const R = turnR;
    const along = (v) => {
      if (v < 0) {
        // The lane (or going around a parked car) until near the turn: past the stop line,
        // so cars waiting at a red light stay in their lane.
        const shift = (st.off - lnIn) * clamp(-v / 150, 0, 1);
        return [t1x + DX[d1] * v + DX[r1] * shift, t1y + DY[d1] * v + DY[r1] * shift];
      }
      if (v < arcLen) {
        const th = v / R;
        return [ox - DX[d2] * R * Math.cos(th) + DX[d1] * R * Math.sin(th), oy - DY[d2] * R * Math.cos(th) + DY[d1] * R * Math.sin(th)];
      }
      const back = (LANE - ln) * Math.min(1, (v - arcLen) / 150); // back to the middle of the lane
      return [t2x + DX[d2] * (v - arcLen) + DX[r2] * back, t2y + DY[d2] * (v - arcLen) + DY[r2] * back];
    };
    pathAt = (dist) => along(u + piv + dist); // where the middle of the car will be
    [tx, ty] = along(u + look);
    // How far the car is from the arc (inside < 0), to steer back onto it.
    if (u >= 0 && u <= arcLen) {
      radial = Math.hypot(gx - ox, gy - oy) - R;
      turnSign = left ? -1 : 1;
      // On the arc: the wheel angle for that circle (measured: wheelbase about 0.9 of the
      // car's length), plus whatever the heading is off. Only reacting to errors leaves the car
      // behind the turn, and then even full lock can't catch up.
      const hWant = d1 * 90 + (turnSign * u * 180) / (R * Math.PI);
      arcSteer = (turnSign * Math.atan((len * 0.9) / R) * 180) / Math.PI + angDiff(hWant, h) * 1.5;
    }
    // Done turning (or facing the new road after a wide turn): follow the new road.
    if (u > arcLen - 20 || (u > arcLen * 0.6 && Math.abs(angDiff(h, d2 * 90)) < 8)) {
      st.prev = { x: st.nx, y: st.ny, d: d1, left };
      st.off = ln + (LANE - ln) * clamp((u - arcLen) / 150, 0, 1);
      st.d = d2;
      st.nx += DX[d2] * STEP; st.ny += DY[d2] * STEP;
      st.next = chooseNext(st.nx, st.ny, d2);
    }
  }
  const err = angDiff((Math.atan2(ty - gy, tx - gx) * 180) / Math.PI, h);

  // Speed: cruise, slow down for turns, red lights and anything in front.
  // Braking distances use what the cars can really do (BRAKE).
  const stopIn = (dist) => Math.sqrt(2 * BRAKE * Math.max(0, dist));
  let want = st.cruise;
  // Brake early enough to take the turn slowly: the tires don't grip much, and
  // a car going faster than this can't turn that tight (it slides wide).
  // (Long cars turn slower: they rotate slowly and their nose swings wide.)
  if (turnR) want = Math.min(want, Math.sqrt(Math.min(45 * (204 / len) ** 3 * turnR + 2 * (BRAKE - 80) * toTurn, 1e7)));
  want = Math.min(want, Math.max(140, st.cruise - Math.abs(err) * 8));
  const lt = light(st.nx, st.ny);
  const SL = stopLine(len);
  let redStop = false;
  if (lt.axis !== 2 && (lt.axis !== st.d % 2 || lt.left < 1.2) && s < SL + 10) {
    const dist = SL - s;
    // Stop at the line, unless it is too late to stop.
    if (dist > (vf * vf) / (2 * 350) - 30) {
      redStop = true;
      const w = stopIn(dist - 5);
      if (w < want) { want = w; st.why = "light"; }
      // Waiting for the green: no right of way over the cars in the crossing.
      if (st.res === st.nx + "," + st.ny) st.res = null;
    }
  }
  // Don't enter a crossing someone is driving across, or with no room to get out of it.
  const bIn = boxIn(len);
  // Slow down near crossings, to have time to react to what comes out of the side roads.
  if (s < bIn) want = Math.min(want, 280 + (bIn - s) * 0.4);
  if (s <= bIn && s > SL - 600 && degree(st.nx, st.ny) >= 3) {
    const left = st.next === (st.d + 3) % 4;
    const key = st.nx + "," + st.ny;
    const hs = holders.get(key);
    const busy = hs && hs.some((hh) => hh.c !== c && !compatible(st.d, left, hh));
    if (busy || exitBlocked(c, st, len)) {
      // Wait behind the stop line (and the crosswalk) when there is still room to.
      const stopAt = SL - s + 40 >= (vf * vf) / (2 * 350) ? SL : bIn - 5;
      const w = stopIn(stopAt - s - 5);
      if (w < want) { want = w; st.why = busy ? "box" : "exit"; }
      if (st.res === key && s <= bIn) st.res = null;
    } else if (s > bIn - 170 && (want > 60 || s > bIn - 25) && !redStop && st.res !== key) {
      // Claim the crossing just before going in, so others see it right away.
      st.res = key;
      st.resT = now;
      hold(st.nx, st.ny, { c, d: st.d, left });
    }
  }
  const rx = -hy, ry = hx; // right of the car
  let headOn = false, parkedAhead = null, backRoom = 1e9, yieldTo = null, parkedFree = 0;
  const oncomers = []; // cars on the other side of the road ahead
  // Right of way in a crossing: whoever claimed it first (then the older car).
  const prio = (o) => (o.__ai && o.__ai.res ? o.__ai.resT : 1e9) + o.id * 1e-6;
  const myPrio = prio(c);
  for (const oi of carInfo) {
    const o = oi.o;
    if (o === c) continue;
    const ox = oi.x - x, oy = oi.y - y;
    if (Math.abs(ox) > 1000 || Math.abs(oy) > 1000) continue;
    const f = ox * hx + oy * hy;
    const lat = ox * rx + oy * ry;
    const oLen = carLen(o);
    const gap = (len + oLen) / 2 + 45; // bumper to bumper, plus a bit
    // Room to back up: how far the car can go straight back before touching another one.
    if (f < 20 && f > -len - 300) {
      const oa0 = (oi.a * Math.PI) / 180, ch = Math.cos(oa0), sh = Math.sin(oa0);
      for (let dd = 0; dd <= len / 2 + 200; dd += 20) {
        const qx = x - hx * dd - oi.x, qy = y - hy * dd - oi.y;
        const a = Math.abs(qx * ch + qy * sh) - oLen / 2, b = Math.abs(qy * ch - qx * sh) - 60;
        if (Math.hypot(Math.max(a, 0), Math.max(b, 0)) < 74) { backRoom = Math.min(backRoom, dd + 29 - len / 2); break; }
      }
    }
    if (f > -150 && lat < -40 && lat > -300) {
      const os2 = o.__ai, sp = os2 ? os2.speed : 0;
      oncomers.push({ f, v: Math.max(0, sp), stopped: Math.abs(sp) < 30 });
    }
    const range = gap + (vf * vf) / (2 * BRAKE) + 200;
    if (f <= 0 || f > range + oLen) continue;
    const side = Math.abs(lat);
    const os = o.__ai;
    const oSpeed = os ? os.speed : 0;
    const stopped = (!os || os.parked || isDriven(o)) && Math.abs(oSpeed) < 30;
    if (st.passCar === o) continue;
    // Where along its way (the lane, or the turn) would the car run into it?
    const oa = (oi.a * Math.PI) / 180, ohx = Math.cos(oa), ohy = Math.sin(oa);
    let hitAt = -1;
    for (let dd = 0; dd <= range; dd += 20) {
      const [px, py] = pathAt(dd);
      const qx = px - oi.x, qy = py - oi.y;
      const a = Math.abs(qx * ohx + qy * ohy) - oLen / 2, b = Math.abs(qy * ohx - qx * ohy) - 60;
      if (Math.hypot(Math.max(a, 0), Math.max(b, 0)) < 74) { hitAt = dd; break; }
    }
    if (hitAt < 0) continue;
    const turned = Math.abs(angDiff(oi.a, h));
    const crossing = turned > 50;
    // Room left in front of the bumper. Stay further back from a parked car, to steer around it.
    const free = hitAt + 29 - len / 2 - (stopped && !crossing ? 50 : 0);
    if (turned > 140 && st.passCar) {
      // Face to face while going around a parked car: if not beside it yet, give up and back off.
      const pc = st.passCar;
      if ((cx(pc) - x) * hx + (cy(pc) - y) * hy > (len + carLen(pc)) / 2 + 20) {
        st.passCar = null;
        if (free < 200 && st.reverse <= 0 && backRoom > 50) st.reverse = 1.5;
      }
    } else if (turned > 140 && os && os.passCar && free < 120) {
      // Someone going around a parked car is in our lane: wait, and make room if very close.
      if (free < 60 && st.reverse <= 0 && backRoom > 60 && now - (st.gaveWayT || 0) > 4) { st.reverse = 0.8; st.gaveWayT = now; }
    } else if (turned > 140 && side > 100) {
      // Coming the other way slightly off its lane: both keep right and pass.
      headOn = true;
      continue;
    }
    const os3 = o.__ai;
    if (crossing && os3 && !os3.parked && !isDriven(o) && myPrio > prio(o)) yieldTo = o;
    // Follow at a distance we can always stop in, going as fast as the car ahead.
    const ahead = crossing ? 0 : Math.max(0, o.getBehavior("Physics3D").getLinearVelocityX() * hx + o.getBehavior("Physics3D").getLinearVelocityY() * hy);
    const allowed = Math.sqrt(ahead * ahead * 0.5 + 2 * (BRAKE - 40) * Math.max(0, free));
    if (allowed < want) {
      want = allowed;
      st.why = crossing ? "cross" : "car";
      parkedAhead = stopped && !crossing && free < 350 ? o : null;
      parkedFree = free;
    }
  }
  for (const p of walkers) {
    const ox = p.x - x, oy = p.y - y;
    if (Math.abs(ox) > 900 || Math.abs(oy) > 900) continue;
    const f = ox * hx + oy * hy;
    const range = len / 2 + 70 + (vf * vf) / (2 * BRAKE) + 120;
    if (f <= 0 || f > range) continue;
    let hitAt = -1;
    for (let dd = 0; dd <= range; dd += 20) {
      const [px, py] = pathAt(dd);
      if (Math.hypot(px - p.x, py - p.y) < 95 || Math.hypot(px - p.px, py - p.py) < 95) { hitAt = dd; break; }
    }
    if (hitAt < 0) continue;
    const w = stopIn(hitAt + 40 - len / 2);
    if (w < want) { want = w; st.why = "walker"; }
  }
  // Stuck behind a parked car: go around it when the other side of the road is
  // free long enough. Oncoming cars that are far enough to stop will wait.
  if (parkedAhead && parkedFree < 220 && !st.prev && !st.passCar) {
    const pc = parkedAhead;
    const clear = (cx(pc) - x) * hx + (cy(pc) - y) * hy + (len + carLen(pc)) / 2 + 20;
    const fits = s + clear + 60 < SL; // done (and back in the lane) before the next crossing
    // Only as far out as needed: a car parked against the curb leaves part of the lane.
    const latPc = (cx(pc) - st.nx) * DX[r1] + (cy(pc) - st.ny) * DY[r1];
    const passOff = clamp(latPc - (pc.getHeight() + c.getHeight()) / 2 - 40, -60, LANE);
    const free2 = oncomers.every((q) => q.f < -100 || q.f > clear + 250 + (q.stopped ? 0 : (q.v * q.v) / (2 * 260)));
    if (fits && free2) {
      st.passCar = pc; st.passOff = passOff; st.passT = now;
      if (parkedFree < 25 && backRoom > 50) st.reverse = 0.8; // too close to steer around it: back up first
    }
  }
  if (st.passCar) want = Math.min(want, 220);
  // Two cars in each other's way in a crossing: the one without the right of way
  // backs up a little once, then waits until the other one has gone by. (Both
  // backing up and trying again made them crash into each other over and over.)
  if (yieldTo && want < 40 && st.yieldTo !== yieldTo) { st.yieldTo = yieldTo; st.yieldT = now; st.backedUp = false; }
  if (st.yieldTo) {
    const yo = st.yieldTo;
    if (!yo.__ai || Math.hypot(cx(yo) - x, cy(yo) - y) > 380 || now - st.yieldT > 7) st.yieldTo = null;
    else {
      want = 0;
      st.why = "yield";
      if (!st.backedUp && now - st.yieldT > 0.8 && backRoom > 160) { st.backedUp = true; st.reverse = 0.8; }
    }
  }

  // Not moving while it should: back up a bit.
  if (st.reverse <= 0) {
    st.stuck = want > 50 && vf < 25 ? st.stuck + dt : 0;
    if (st.stuck > 3) { st.stuck = 0; st.unstuck++; if (backRoom > 50) st.reverse = 1.3; }
    if (vf > 200) st.unstuck = Math.max(0, st.unstuck - dt * 0.2);
  }

  // Pure pursuit: the wheel angle that drives the car through the look-ahead point.
  const ld = Math.max(60, Math.hypot(tx - gx, ty - gy));
  // (base, measured: the cars turn like this wheelbase, from the middle or from the turning point)
  let angle = arcSteer !== null ? arcSteer : (Math.atan((2 * base * Math.sin((err * Math.PI) / 180)) / ld) * 180) / Math.PI;
  // In a turn the car tends to end up inside the arc (and hit the curb): push it back out.
  angle += turnSign * clamp(radial, -60, 60) * 0.6;
  if (headOn) { angle += 8; want = Math.min(want, 200); }
  if (st.reverse > 0) {
    st.reverse -= dt;
    if (backRoom < 50) st.reverse = 0; // about to touch the car behind
    car.simulateAcceleratorStick(-0.6);
    steerTo(c, car, st, -angle);
    continue;
  }
  steerTo(c, car, st, angle);
  // The hand brake barely slows a rolling car: brake to a stop, then hold it.
  if (want < 15 && vf < 60) { if (vf > 8) car.simulateAcceleratorStick(-1); else car.simulateHandBrakeKey(); }
  else if (vf > want + 8) {
    // In a turn, let the car roll and slow down by itself: any brake input is a full
    // brake, which makes the front tires slide and the car run wide.
    if (!turnSign || vf > want + 50) car.simulateAcceleratorStick(-clamp((vf - want) / 30, 0.3, 1));
  }
  // (Even the lightest throttle speeds a car up: in turns it gets just a touch.)
  else if (want > vf) car.simulateAcceleratorStick(clamp((want - vf) / 140, turnSign ? 0.0001 : 0.15, 1));
}

// ------------------------------------------------------------- Pedestrians
// Gunshots and people getting hit make the people around run away.
const scares = [];
if (player && S.getVariables().get("ShootAnim").getAsNumber() > 0.2) scares.push([cx(player), cy(player), 900]);

// Who is walking where, to pass each other on the sidewalk (and the player).
const pedPos = peds.map((p) => [p, cx(p), cy(p), 40]);
if (player) pedPos.push([player, fx, fy, 60]);
const carNear = (x, y, r) => carInfo.some((ci) => Math.abs(ci.x - x) < r && Math.abs(ci.y - y) < r);
// How close counts as there: further when a pole or a tree stands on the spot.
const reach = (t) => {
  let r = 25;
  for (const [ox, oy, pr] of L.avoid.get(blockOf(t[0]) + "," + blockOf(t[1])) || []) {
    if (Math.hypot(ox - t[0], oy - t[1]) < pr + 10) r = Math.max(r, pr + 25);
  }
  return r;
};
for (const p of peds) {
  const st = p.__ai || newPedState(p);
  const ch = p.getBehavior("PhysicsCharacter3D");
  const x = cx(p), y = cy(p);
  // Hit by a car: the person falls and is thrown the way the car was going.
  const down = p.getVariables().get("Down");
  if (!down.getAsBoolean()) {
    for (const ci of carInfo) {
      if (Math.abs(ci.x - x) > 200 || Math.abs(ci.y - y) > 200) continue;
      const b = ci.o.getBehavior("Physics3D");
      const vx = b.getLinearVelocityX(), vy = b.getLinearVelocityY();
      // The player's car knocks people over easily; the other drivers only when they really hit someone.
      const mine = isDriven(ci.o);
      if (vx * vx + vy * vy < (mine ? 90 : 150) ** 2) continue;
      const a = (ci.a * Math.PI) / 180, hx = Math.cos(a), hy = Math.sin(a), dx = x - ci.x, dy = y - ci.y;
      const along = Math.abs(dx * hx + dy * hy) - carLen(ci.o) / 2, side = Math.abs(dy * hx - dx * hy) - 60;
      if (Math.hypot(Math.max(along, 0), Math.max(side, 0)) > (mine ? 40 : 22)) continue;
      down.setBoolean(true);
      p.setAnimationName("die");
      st.hitBy = [vx, vy];
      if (mine) gdjs.evtTools.sound.playSound(S, "assets/audio/crash.ogg", false, 70, 1);
      break;
    }
  }
  if (down.getAsBoolean()) {
    if (st.downAt < 0) {
      st.downAt = now;
      scares.push([x, y, 600]);
      // (Knocked over elsewhere, like by the player's car: find the car.)
      if (!st.hitBy) {
        for (const ci of carInfo) {
          const b = ci.o.getBehavior("Physics3D");
          const vx = b.getLinearVelocityX(), vy = b.getLinearVelocityY();
          if (Math.hypot(ci.x - x, ci.y - y) < 260 && vx * vx + vy * vy > 60 * 60) { st.hitBy = [vx, vy]; break; }
        }
      }
      if (st.hitBy) {
        const [vx, vy] = st.hitBy;
        const v = Math.min(520, Math.hypot(vx, vy) * 1.1);
        p.__decel = p.__decel || ch.getForwardDeceleration();
        ch.setForwardDeceleration(500); // slides a bit before stopping
        ch.setForwardSpeedMax(v);
        ch.setForwardAngle((Math.atan2(vy, vx) * 180) / Math.PI);
        ch.setCurrentForwardSpeed(v);
      }
      st.hitBy = null;
    }
    // Bodies are cleared away once out of sight.
    if (now - st.downAt > 20 && focusDist(x, y) > 1600) {
      const spot = randomSidewalkSpot(1600);
      if (spot) putOnSidewalk(p, spot);
    }
    continue;
  }
  st.downAt = -1;
  for (const [sx, sy, sr] of scares) {
    if (Math.hypot(x - sx, y - sy) >= sr) continue;
    st.scared = rnd(4, 7);
    if (st.mode === "cross" || st.mode === "flee") continue;
    // Run along the sidewalk, the way that goes away from the danger.
    const back = (st.k - st.dir + 4) % 4;
    const a = corner(st.bi, st.bj, st.k, st.dir), b = corner(st.bi, st.bj, back, -st.dir);
    const away = (q) => (q[0] - x) * (x - sx) + (q[1] - y) * (y - sy);
    if (away(b) > away(a)) { st.k = back; st.dir = -st.dir; }
    st.mode = "flee";
  }
  st.scared = (st.scared || 0) - dt;

  // Not getting anywhere (someone or something in the way): turn back.
  if (!st.chk || st.mode === "idle" || st.mode === "wait") st.chk = { x, y, t: now };
  else if (now - st.chk.t > 2) {
    if (Math.hypot(x - st.chk.x, y - st.chk.y) < 20) {
      st.stuckN = (st.stuckN || 0) + 1;
      if (st.stuckN >= 4 && unseen(x, y)) {
        const spot = randomSidewalkSpot(1200);
        if (spot) { putOnSidewalk(p, spot); continue; }
      }
      if (st.mode === "cross") st.mode = "walk"; // back to the corner it came from
      else { st.k = (st.k - st.dir + 4) % 4; st.dir = -st.dir; }
    } else st.stuckN = 0;
    st.chk = { x, y, t: now };
  }

  let anim = "walk", target = null, speed = st.walkSpeed;
  if (st.mode === "flee") {
    speed = 230;
    anim = "sprint";
    target = corner(st.bi, st.bj, st.k, st.dir);
    if (Math.hypot(target[0] - x, target[1] - y) < reach(target) + 5) st.k = (st.k + st.dir + 4) % 4;
    if (st.scared <= 0) st.mode = "walk";
  } else if (st.mode === "idle") {
    st.t -= dt;
    anim = "idle";
    if (st.t <= 0) st.mode = "walk";
  } else if (st.mode === "wait") {
    // Waiting at the curb for the cars on that road to get a red light,
    // with enough time left to get across.
    const c = st.cross;
    const lt = light(c[3], c[4]);
    st.t -= dt;
    anim = "idle";
    ch.setForwardAngle((Math.atan2(c[7] - y, c[6] - x) * 180) / Math.PI);
    const time = Math.hypot(c[6] - x, c[7] - y) / (st.walkSpeed * 1.4);
    const go = lt.axis === 2 ? !carNear(c[3], c[4], 600) : lt.axis === 1 - c[5] && lt.left > time - RED + 0.5;
    if (go) st.mode = "cross";
    else if (st.t <= 0) { st.mode = "walk"; st.k = (st.k + st.dir + 4) % 4; }
  } else if (st.mode === "cross") {
    const c = st.cross;
    target = [c[6], c[7]];
    speed = st.walkSpeed * 1.4; // people hurry across the road
    if (st.scared > 0) { speed = 230; anim = "sprint"; }
    if (Math.hypot(c[6] - x, c[7] - y) < reach(target)) {
      st.bi += c[0]; st.bj += c[1]; st.k = c[2];
      st.mode = "walk";
      st.k = (st.k + st.dir + 4) % 4;
      target = null;
    }
  } else {
    target = corner(st.bi, st.bj, st.k, st.dir);
    if (Math.hypot(target[0] - x, target[1] - y) < reach(target)) {
      const r = Math.random();
      const opts = crossings(st.bi, st.bj, st.k);
      if (r < 0.1) { st.mode = "idle"; st.t = rnd(2, 5); }
      else if (r < 0.5 && opts.length) {
        const o = pick(opts);
        const to = corner(st.bi + o[0], st.bj + o[1], o[2], st.dir);
        st.cross = [...o, to[0], to[1]];
        st.mode = "wait"; st.t = 25;
      } else {
        if (Math.random() < 0.1) st.dir = -st.dir;
        st.k = (st.k + st.dir + 4) % 4;
      }
      target = null;
    }
  }
  if (target) {
    let ax = target[0] - x, ay = target[1] - y;
    const n = Math.hypot(ax, ay) || 1;
    ax /= n; ay /= n;
    // Step around poles, trees and dumpsters: sideways, without stopping.
    let sx = 0, sy = 0;
    for (const [ox, oy, r] of L.avoid.get(blockOf(x) + "," + blockOf(y)) || []) {
      const dx = ox - x, dy = oy - y, dd = Math.hypot(dx, dy);
      if (dd >= r + 30 || dd < 1) continue;
      const f = dx * ax + dy * ay, lat = -dx * ay + dy * ax;
      if (f < -10 || Math.abs(lat) >= r) continue;
      const w = ((r + 30 - dd) / (r + 30)) * 2.5;
      const side = lat >= 0 ? -1 : 1; // pass on the side away from it
      sx += -ay * side * w; sy += ax * side * w;
    }
    ax += sx; ay += sy;
    // Someone right in front: both keep to their right.
    for (const [q, qx, qy, qr] of pedPos) {
      if (q === p) continue;
      const dx = qx - x, dy = qy - y;
      if (Math.abs(dx) > qr + 30 || Math.abs(dy) > qr + 30) continue;
      const f = dx * ax + dy * ay, lat = -dx * ay + dy * ax;
      if (f > 0 && f < qr + 25 && Math.abs(lat) < qr) { const w = 1.2, nx = -ay * w, ny = ax * w; ax += nx; ay += ny; break; }
    }
    if (ch.getForwardSpeedMax() !== speed) ch.setForwardSpeedMax(speed);
    ch.setForwardAngle((Math.atan2(ay, ax) * 180) / Math.PI);
    ch.simulateForwardKey();
  }
  if (p.getAnimationName() !== anim) p.setAnimationName(anim);
}
};
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPedFemaleAObjects1ObjectsGDgdjs_9546CityCode_9546GDPedFemaleBObjects1ObjectsGDgdjs_9546CityCode_9546GDPedFemaleCObjects1ObjectsGDgdjs_9546CityCode_9546GDPedFemaleDObjects1ObjectsGDgdjs_9546CityCode_9546GDPedMaleBObjects1ObjectsGDgdjs_9546CityCode_9546GDPedMaleCObjects1ObjectsGDgdjs_9546CityCode_9546GDPedMaleDObjects1ObjectsGDgdjs_9546CityCode_9546GDPedMaleEObjects1Objects = Hashtable.newFrom({"PedFemaleA": gdjs.CityCode.GDPedFemaleAObjects1, "PedFemaleB": gdjs.CityCode.GDPedFemaleBObjects1, "PedFemaleC": gdjs.CityCode.GDPedFemaleCObjects1, "PedFemaleD": gdjs.CityCode.GDPedFemaleDObjects1, "PedMaleB": gdjs.CityCode.GDPedMaleBObjects1, "PedMaleC": gdjs.CityCode.GDPedMaleCObjects1, "PedMaleD": gdjs.CityCode.GDPedMaleDObjects1, "PedMaleE": gdjs.CityCode.GDPedMaleEObjects1});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects1ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects1ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects1ObjectsGDgdjs_9546CityCode_9546GDSuvObjects1ObjectsGDgdjs_9546CityCode_9546GDVanObjects1ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects1ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects1ObjectsGDgdjs_9546CityCode_9546GDTruckObjects1ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects1ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects1Objects = Hashtable.newFrom({"Sedan": gdjs.CityCode.GDSedanObjects1, "Taxi": gdjs.CityCode.GDTaxiObjects1, "Police": gdjs.CityCode.GDPoliceObjects1, "Suv": gdjs.CityCode.GDSuvObjects1, "Van": gdjs.CityCode.GDVanObjects1, "Hatchback": gdjs.CityCode.GDHatchbackObjects1, "SportsCar": gdjs.CityCode.GDSportsCarObjects1, "Truck": gdjs.CityCode.GDTruckObjects1, "Ambulance": gdjs.CityCode.GDAmbulanceObjects1, "DeliveryVan": gdjs.CityCode.GDDeliveryVanObjects1});
gdjs.CityCode.eventsList18 = function(runtimeScene) {

{


gdjs.CityCode.userFunc0xba3de0(runtimeScene);

}


{

gdjs.copyArray(runtimeScene.getObjects("Ambulance"), gdjs.CityCode.GDAmbulanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("DeliveryVan"), gdjs.CityCode.GDDeliveryVanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hatchback"), gdjs.CityCode.GDHatchbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("PedFemaleA"), gdjs.CityCode.GDPedFemaleAObjects1);
gdjs.copyArray(runtimeScene.getObjects("PedFemaleB"), gdjs.CityCode.GDPedFemaleBObjects1);
gdjs.copyArray(runtimeScene.getObjects("PedFemaleC"), gdjs.CityCode.GDPedFemaleCObjects1);
gdjs.copyArray(runtimeScene.getObjects("PedFemaleD"), gdjs.CityCode.GDPedFemaleDObjects1);
gdjs.copyArray(runtimeScene.getObjects("PedMaleB"), gdjs.CityCode.GDPedMaleBObjects1);
gdjs.copyArray(runtimeScene.getObjects("PedMaleC"), gdjs.CityCode.GDPedMaleCObjects1);
gdjs.copyArray(runtimeScene.getObjects("PedMaleD"), gdjs.CityCode.GDPedMaleDObjects1);
gdjs.copyArray(runtimeScene.getObjects("PedMaleE"), gdjs.CityCode.GDPedMaleEObjects1);
gdjs.copyArray(runtimeScene.getObjects("Police"), gdjs.CityCode.GDPoliceObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.CityCode.GDSedanObjects1);
gdjs.copyArray(runtimeScene.getObjects("SportsCar"), gdjs.CityCode.GDSportsCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Suv"), gdjs.CityCode.GDSuvObjects1);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.CityCode.GDTaxiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.CityCode.GDTruckObjects1);
gdjs.copyArray(runtimeScene.getObjects("Van"), gdjs.CityCode.GDVanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSedanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSedanObjects1[i].getVariableBoolean(gdjs.CityCode.GDSedanObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSedanObjects1[k] = gdjs.CityCode.GDSedanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSedanObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTaxiObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDTaxiObjects1[i].getVariableBoolean(gdjs.CityCode.GDTaxiObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTaxiObjects1[k] = gdjs.CityCode.GDTaxiObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDTaxiObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPoliceObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPoliceObjects1[i].getVariableBoolean(gdjs.CityCode.GDPoliceObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPoliceObjects1[k] = gdjs.CityCode.GDPoliceObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPoliceObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSuvObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSuvObjects1[i].getVariableBoolean(gdjs.CityCode.GDSuvObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSuvObjects1[k] = gdjs.CityCode.GDSuvObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSuvObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDVanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDVanObjects1[i].getVariableBoolean(gdjs.CityCode.GDVanObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDVanObjects1[k] = gdjs.CityCode.GDVanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDVanObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDHatchbackObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDHatchbackObjects1[i].getVariableBoolean(gdjs.CityCode.GDHatchbackObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDHatchbackObjects1[k] = gdjs.CityCode.GDHatchbackObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDHatchbackObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSportsCarObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSportsCarObjects1[i].getVariableBoolean(gdjs.CityCode.GDSportsCarObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSportsCarObjects1[k] = gdjs.CityCode.GDSportsCarObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSportsCarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTruckObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDTruckObjects1[i].getVariableBoolean(gdjs.CityCode.GDTruckObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTruckObjects1[k] = gdjs.CityCode.GDTruckObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDTruckObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDAmbulanceObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDAmbulanceObjects1[i].getVariableBoolean(gdjs.CityCode.GDAmbulanceObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDAmbulanceObjects1[k] = gdjs.CityCode.GDAmbulanceObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDAmbulanceObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDDeliveryVanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDDeliveryVanObjects1[i].getVariableBoolean(gdjs.CityCode.GDDeliveryVanObjects1[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDDeliveryVanObjects1[k] = gdjs.CityCode.GDDeliveryVanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDDeliveryVanObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSedanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSedanObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSedanObjects1[k] = gdjs.CityCode.GDSedanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSedanObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTaxiObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDTaxiObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTaxiObjects1[k] = gdjs.CityCode.GDTaxiObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDTaxiObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPoliceObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPoliceObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPoliceObjects1[k] = gdjs.CityCode.GDPoliceObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPoliceObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSuvObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSuvObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSuvObjects1[k] = gdjs.CityCode.GDSuvObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSuvObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDVanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDVanObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDVanObjects1[k] = gdjs.CityCode.GDVanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDVanObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDHatchbackObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDHatchbackObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDHatchbackObjects1[k] = gdjs.CityCode.GDHatchbackObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDHatchbackObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSportsCarObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDSportsCarObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSportsCarObjects1[k] = gdjs.CityCode.GDSportsCarObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDSportsCarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTruckObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDTruckObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTruckObjects1[k] = gdjs.CityCode.GDTruckObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDTruckObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDAmbulanceObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDAmbulanceObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDAmbulanceObjects1[k] = gdjs.CityCode.GDAmbulanceObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDAmbulanceObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDDeliveryVanObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDDeliveryVanObjects1[i].getBehavior("Physics3D").getLinearVelocityLength() > 160 ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDDeliveryVanObjects1[k] = gdjs.CityCode.GDDeliveryVanObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDDeliveryVanObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPedFemaleAObjects1ObjectsGDgdjs_9546CityCode_9546GDPedFemaleBObjects1ObjectsGDgdjs_9546CityCode_9546GDPedFemaleCObjects1ObjectsGDgdjs_9546CityCode_9546GDPedFemaleDObjects1ObjectsGDgdjs_9546CityCode_9546GDPedMaleBObjects1ObjectsGDgdjs_9546CityCode_9546GDPedMaleCObjects1ObjectsGDgdjs_9546CityCode_9546GDPedMaleDObjects1ObjectsGDgdjs_9546CityCode_9546GDPedMaleEObjects1Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects1ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects1ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects1ObjectsGDgdjs_9546CityCode_9546GDSuvObjects1ObjectsGDgdjs_9546CityCode_9546GDVanObjects1ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects1ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects1ObjectsGDgdjs_9546CityCode_9546GDTruckObjects1ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects1ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects1Objects, 120, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedFemaleAObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedFemaleAObjects1[i].getVariableBoolean(gdjs.CityCode.GDPedFemaleAObjects1[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedFemaleAObjects1[k] = gdjs.CityCode.GDPedFemaleAObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPedFemaleAObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedFemaleBObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedFemaleBObjects1[i].getVariableBoolean(gdjs.CityCode.GDPedFemaleBObjects1[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedFemaleBObjects1[k] = gdjs.CityCode.GDPedFemaleBObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPedFemaleBObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedFemaleCObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedFemaleCObjects1[i].getVariableBoolean(gdjs.CityCode.GDPedFemaleCObjects1[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedFemaleCObjects1[k] = gdjs.CityCode.GDPedFemaleCObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPedFemaleCObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedFemaleDObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedFemaleDObjects1[i].getVariableBoolean(gdjs.CityCode.GDPedFemaleDObjects1[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedFemaleDObjects1[k] = gdjs.CityCode.GDPedFemaleDObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPedFemaleDObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedMaleBObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedMaleBObjects1[i].getVariableBoolean(gdjs.CityCode.GDPedMaleBObjects1[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedMaleBObjects1[k] = gdjs.CityCode.GDPedMaleBObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPedMaleBObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedMaleCObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedMaleCObjects1[i].getVariableBoolean(gdjs.CityCode.GDPedMaleCObjects1[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedMaleCObjects1[k] = gdjs.CityCode.GDPedMaleCObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPedMaleCObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedMaleDObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedMaleDObjects1[i].getVariableBoolean(gdjs.CityCode.GDPedMaleDObjects1[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedMaleDObjects1[k] = gdjs.CityCode.GDPedMaleDObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPedMaleDObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPedMaleEObjects1.length;i<l;++i) {
    if ( gdjs.CityCode.GDPedMaleEObjects1[i].getVariableBoolean(gdjs.CityCode.GDPedMaleEObjects1[i].getVariables().get("Down"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPedMaleEObjects1[k] = gdjs.CityCode.GDPedMaleEObjects1[i];
        ++k;
    }
}
gdjs.CityCode.GDPedMaleEObjects1.length = k;
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDPedFemaleAObjects1 */
/* Reuse gdjs.CityCode.GDPedFemaleBObjects1 */
/* Reuse gdjs.CityCode.GDPedFemaleCObjects1 */
/* Reuse gdjs.CityCode.GDPedFemaleDObjects1 */
/* Reuse gdjs.CityCode.GDPedMaleBObjects1 */
/* Reuse gdjs.CityCode.GDPedMaleCObjects1 */
/* Reuse gdjs.CityCode.GDPedMaleDObjects1 */
/* Reuse gdjs.CityCode.GDPedMaleEObjects1 */
{for(var i = 0, len = gdjs.CityCode.GDPedFemaleAObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleAObjects1[i].returnVariable(gdjs.CityCode.GDPedFemaleAObjects1[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleBObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleBObjects1[i].returnVariable(gdjs.CityCode.GDPedFemaleBObjects1[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleCObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleCObjects1[i].returnVariable(gdjs.CityCode.GDPedFemaleCObjects1[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleDObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleDObjects1[i].returnVariable(gdjs.CityCode.GDPedFemaleDObjects1[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleBObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleBObjects1[i].returnVariable(gdjs.CityCode.GDPedMaleBObjects1[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleCObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleCObjects1[i].returnVariable(gdjs.CityCode.GDPedMaleCObjects1[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleDObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleDObjects1[i].returnVariable(gdjs.CityCode.GDPedMaleDObjects1[i].getVariables().get("Down")).setBoolean(true);
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleEObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleEObjects1[i].returnVariable(gdjs.CityCode.GDPedMaleEObjects1[i].getVariables().get("Down")).setBoolean(true);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPedFemaleAObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleAObjects1[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleBObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleBObjects1[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleCObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleCObjects1[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedFemaleDObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedFemaleDObjects1[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleBObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleBObjects1[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleCObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleCObjects1[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleDObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleDObjects1[i].getBehavior("Animation").setAnimationName("die");
}
for(var i = 0, len = gdjs.CityCode.GDPedMaleEObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDPedMaleEObjects1[i].getBehavior("Animation").setAnimationName("die");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/crash.ogg", false, 70, 1);
}
}

}


};gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDCashObjects2Objects = Hashtable.newFrom({"Cash": gdjs.CityCode.GDCashObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.CityCode.GDPlayerObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDCashObjects2Objects = Hashtable.newFrom({"Cash": gdjs.CityCode.GDCashObjects2});
gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects2ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects2ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects2ObjectsGDgdjs_9546CityCode_9546GDSuvObjects2ObjectsGDgdjs_9546CityCode_9546GDVanObjects2ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects2ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects2ObjectsGDgdjs_9546CityCode_9546GDTruckObjects2ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects2ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects2Objects = Hashtable.newFrom({"Sedan": gdjs.CityCode.GDSedanObjects2, "Taxi": gdjs.CityCode.GDTaxiObjects2, "Police": gdjs.CityCode.GDPoliceObjects2, "Suv": gdjs.CityCode.GDSuvObjects2, "Van": gdjs.CityCode.GDVanObjects2, "Hatchback": gdjs.CityCode.GDHatchbackObjects2, "SportsCar": gdjs.CityCode.GDSportsCarObjects2, "Truck": gdjs.CityCode.GDTruckObjects2, "Ambulance": gdjs.CityCode.GDAmbulanceObjects2, "DeliveryVan": gdjs.CityCode.GDDeliveryVanObjects2});
gdjs.CityCode.mapOfEmptyGDCashObjects = Hashtable.newFrom({"Cash": []});
gdjs.CityCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cash"), gdjs.CityCode.GDCashObjects2);
{for(var i = 0, len = gdjs.CityCode.GDCashObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCashObjects2[i].getBehavior("Object3D").turnAroundZ(120 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{for(var i = 0, len = gdjs.CityCode.GDCashObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCashObjects2[i].getBehavior("Object3D").setZ(14 + 4 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 3));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cash"), gdjs.CityCode.GDCashObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.CityCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDCashObjects2Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDPlayerObjects2Objects, 80, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDCashObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDCashObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCashObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/pickup.ogg", false, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ambulance"), gdjs.CityCode.GDAmbulanceObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cash"), gdjs.CityCode.GDCashObjects2);
gdjs.copyArray(runtimeScene.getObjects("DeliveryVan"), gdjs.CityCode.GDDeliveryVanObjects2);
gdjs.copyArray(runtimeScene.getObjects("Hatchback"), gdjs.CityCode.GDHatchbackObjects2);
gdjs.copyArray(runtimeScene.getObjects("Police"), gdjs.CityCode.GDPoliceObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sedan"), gdjs.CityCode.GDSedanObjects2);
gdjs.copyArray(runtimeScene.getObjects("SportsCar"), gdjs.CityCode.GDSportsCarObjects2);
gdjs.copyArray(runtimeScene.getObjects("Suv"), gdjs.CityCode.GDSuvObjects2);
gdjs.copyArray(runtimeScene.getObjects("Taxi"), gdjs.CityCode.GDTaxiObjects2);
gdjs.copyArray(runtimeScene.getObjects("Truck"), gdjs.CityCode.GDTruckObjects2);
gdjs.copyArray(runtimeScene.getObjects("Van"), gdjs.CityCode.GDVanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSedanObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSedanObjects2[i].getVariableBoolean(gdjs.CityCode.GDSedanObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSedanObjects2[k] = gdjs.CityCode.GDSedanObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSedanObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTaxiObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDTaxiObjects2[i].getVariableBoolean(gdjs.CityCode.GDTaxiObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTaxiObjects2[k] = gdjs.CityCode.GDTaxiObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDTaxiObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDPoliceObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDPoliceObjects2[i].getVariableBoolean(gdjs.CityCode.GDPoliceObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDPoliceObjects2[k] = gdjs.CityCode.GDPoliceObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDPoliceObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSuvObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSuvObjects2[i].getVariableBoolean(gdjs.CityCode.GDSuvObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSuvObjects2[k] = gdjs.CityCode.GDSuvObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSuvObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDVanObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDVanObjects2[i].getVariableBoolean(gdjs.CityCode.GDVanObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDVanObjects2[k] = gdjs.CityCode.GDVanObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDVanObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDHatchbackObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDHatchbackObjects2[i].getVariableBoolean(gdjs.CityCode.GDHatchbackObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDHatchbackObjects2[k] = gdjs.CityCode.GDHatchbackObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDHatchbackObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDSportsCarObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDSportsCarObjects2[i].getVariableBoolean(gdjs.CityCode.GDSportsCarObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDSportsCarObjects2[k] = gdjs.CityCode.GDSportsCarObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDSportsCarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDTruckObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDTruckObjects2[i].getVariableBoolean(gdjs.CityCode.GDTruckObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDTruckObjects2[k] = gdjs.CityCode.GDTruckObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDTruckObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDAmbulanceObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDAmbulanceObjects2[i].getVariableBoolean(gdjs.CityCode.GDAmbulanceObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDAmbulanceObjects2[k] = gdjs.CityCode.GDAmbulanceObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDAmbulanceObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CityCode.GDDeliveryVanObjects2.length;i<l;++i) {
    if ( gdjs.CityCode.GDDeliveryVanObjects2[i].getVariableBoolean(gdjs.CityCode.GDDeliveryVanObjects2[i].getVariables().get("Driven"), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CityCode.GDDeliveryVanObjects2[k] = gdjs.CityCode.GDDeliveryVanObjects2[i];
        ++k;
    }
}
gdjs.CityCode.GDDeliveryVanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDCashObjects2Objects, gdjs.CityCode.mapOfGDgdjs_9546CityCode_9546GDSedanObjects2ObjectsGDgdjs_9546CityCode_9546GDTaxiObjects2ObjectsGDgdjs_9546CityCode_9546GDPoliceObjects2ObjectsGDgdjs_9546CityCode_9546GDSuvObjects2ObjectsGDgdjs_9546CityCode_9546GDVanObjects2ObjectsGDgdjs_9546CityCode_9546GDHatchbackObjects2ObjectsGDgdjs_9546CityCode_9546GDSportsCarObjects2ObjectsGDgdjs_9546CityCode_9546GDTruckObjects2ObjectsGDgdjs_9546CityCode_9546GDAmbulanceObjects2ObjectsGDgdjs_9546CityCode_9546GDDeliveryVanObjects2Objects, 150, false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CityCode.GDCashObjects2 */
{for(var i = 0, len = gdjs.CityCode.GDCashObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCashObjects2[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/pickup.ogg", false, 60, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.CityCode.mapOfEmptyGDCashObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15959284);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/all_cash.ogg", false, 80, 1);
}
}

}


};gdjs.CityCode.mapOfEmptyGDCashObjects = Hashtable.newFrom({"Cash": []});
gdjs.CityCode.mapOfEmptyGDCashObjects = Hashtable.newFrom({"Cash": []});
gdjs.CityCode.mapOfEmptyGDCashObjects = Hashtable.newFrom({"Cash": []});
gdjs.CityCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MoneyText"), gdjs.CityCode.GDMoneyTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.CityCode.GDPromptTextObjects2);
{for(var i = 0, len = gdjs.CityCode.GDMoneyTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMoneyTextObjects2[i].getBehavior("Text").setText("$" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.CityCode.GDMoneyTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDMoneyTextObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CityCode.GDMoneyTextObjects2[i].getWidth()) - 28,20);
}
}
{for(var i = 0, len = gdjs.CityCode.GDPromptTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDPromptTextObjects2[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CityCode.GDPromptTextObjects2[i].getWidth())) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 120);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.CityCode.mapOfEmptyGDCashObjects) > 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CashLeftText"), gdjs.CityCode.GDCashLeftTextObjects2);
{for(var i = 0, len = gdjs.CityCode.GDCashLeftTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCashLeftTextObjects2[i].getBehavior("Text").setText("Cash left: " + gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.CityCode.mapOfEmptyGDCashObjects)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.CityCode.mapOfEmptyGDCashObjects) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CashLeftText"), gdjs.CityCode.GDCashLeftTextObjects2);
{for(var i = 0, len = gdjs.CityCode.GDCashLeftTextObjects2.length ;i < len;++i) {
    gdjs.CityCode.GDCashLeftTextObjects2[i].getBehavior("Text").setText("All cash collected!");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CashLeftText"), gdjs.CityCode.GDCashLeftTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpeedText"), gdjs.CityCode.GDSpeedTextObjects1);
{for(var i = 0, len = gdjs.CityCode.GDCashLeftTextObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDCashLeftTextObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CityCode.GDCashLeftTextObjects1[i].getWidth()) - 28,72);
}
}
{for(var i = 0, len = gdjs.CityCode.GDSpeedTextObjects1.length ;i < len;++i) {
    gdjs.CityCode.GDSpeedTextObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.CityCode.GDSpeedTextObjects1[i].getWidth()) - 28,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 64);
}
}
}

}


};gdjs.CityCode.eventsList21 = function(runtimeScene) {

{


gdjs.CityCode.eventsList1(runtimeScene);
}


{


gdjs.CityCode.eventsList2(runtimeScene);
}


{


gdjs.CityCode.eventsList4(runtimeScene);
}


{


gdjs.CityCode.eventsList11(runtimeScene);
}


{


gdjs.CityCode.eventsList16(runtimeScene);
}


{


gdjs.CityCode.eventsList17(runtimeScene);
}


{


gdjs.CityCode.eventsList18(runtimeScene);
}


{


gdjs.CityCode.eventsList19(runtimeScene);
}


{


gdjs.CityCode.eventsList20(runtimeScene);
}


};

gdjs.CityCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CityCode.GDGroundObjects1.length = 0;
gdjs.CityCode.GDGroundObjects2.length = 0;
gdjs.CityCode.GDGroundObjects3.length = 0;
gdjs.CityCode.GDGroundObjects4.length = 0;
gdjs.CityCode.GDGroundObjects5.length = 0;
gdjs.CityCode.GDPavementObjects1.length = 0;
gdjs.CityCode.GDPavementObjects2.length = 0;
gdjs.CityCode.GDPavementObjects3.length = 0;
gdjs.CityCode.GDPavementObjects4.length = 0;
gdjs.CityCode.GDPavementObjects5.length = 0;
gdjs.CityCode.GDWallObjects1.length = 0;
gdjs.CityCode.GDWallObjects2.length = 0;
gdjs.CityCode.GDWallObjects3.length = 0;
gdjs.CityCode.GDWallObjects4.length = 0;
gdjs.CityCode.GDWallObjects5.length = 0;
gdjs.CityCode.GDDoorZoneObjects1.length = 0;
gdjs.CityCode.GDDoorZoneObjects2.length = 0;
gdjs.CityCode.GDDoorZoneObjects3.length = 0;
gdjs.CityCode.GDDoorZoneObjects4.length = 0;
gdjs.CityCode.GDDoorZoneObjects5.length = 0;
gdjs.CityCode.GDRoadStraightObjects1.length = 0;
gdjs.CityCode.GDRoadStraightObjects2.length = 0;
gdjs.CityCode.GDRoadStraightObjects3.length = 0;
gdjs.CityCode.GDRoadStraightObjects4.length = 0;
gdjs.CityCode.GDRoadStraightObjects5.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects1.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects2.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects3.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects4.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects5.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects1.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects2.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects3.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects4.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects5.length = 0;
gdjs.CityCode.GDRoadBendObjects1.length = 0;
gdjs.CityCode.GDRoadBendObjects2.length = 0;
gdjs.CityCode.GDRoadBendObjects3.length = 0;
gdjs.CityCode.GDRoadBendObjects4.length = 0;
gdjs.CityCode.GDRoadBendObjects5.length = 0;
gdjs.CityCode.GDBuildingAObjects1.length = 0;
gdjs.CityCode.GDBuildingAObjects2.length = 0;
gdjs.CityCode.GDBuildingAObjects3.length = 0;
gdjs.CityCode.GDBuildingAObjects4.length = 0;
gdjs.CityCode.GDBuildingAObjects5.length = 0;
gdjs.CityCode.GDBuildingBObjects1.length = 0;
gdjs.CityCode.GDBuildingBObjects2.length = 0;
gdjs.CityCode.GDBuildingBObjects3.length = 0;
gdjs.CityCode.GDBuildingBObjects4.length = 0;
gdjs.CityCode.GDBuildingBObjects5.length = 0;
gdjs.CityCode.GDBuildingCObjects1.length = 0;
gdjs.CityCode.GDBuildingCObjects2.length = 0;
gdjs.CityCode.GDBuildingCObjects3.length = 0;
gdjs.CityCode.GDBuildingCObjects4.length = 0;
gdjs.CityCode.GDBuildingCObjects5.length = 0;
gdjs.CityCode.GDBuildingDObjects1.length = 0;
gdjs.CityCode.GDBuildingDObjects2.length = 0;
gdjs.CityCode.GDBuildingDObjects3.length = 0;
gdjs.CityCode.GDBuildingDObjects4.length = 0;
gdjs.CityCode.GDBuildingDObjects5.length = 0;
gdjs.CityCode.GDBuildingFObjects1.length = 0;
gdjs.CityCode.GDBuildingFObjects2.length = 0;
gdjs.CityCode.GDBuildingFObjects3.length = 0;
gdjs.CityCode.GDBuildingFObjects4.length = 0;
gdjs.CityCode.GDBuildingFObjects5.length = 0;
gdjs.CityCode.GDBuildingGObjects1.length = 0;
gdjs.CityCode.GDBuildingGObjects2.length = 0;
gdjs.CityCode.GDBuildingGObjects3.length = 0;
gdjs.CityCode.GDBuildingGObjects4.length = 0;
gdjs.CityCode.GDBuildingGObjects5.length = 0;
gdjs.CityCode.GDBuildingHObjects1.length = 0;
gdjs.CityCode.GDBuildingHObjects2.length = 0;
gdjs.CityCode.GDBuildingHObjects3.length = 0;
gdjs.CityCode.GDBuildingHObjects4.length = 0;
gdjs.CityCode.GDBuildingHObjects5.length = 0;
gdjs.CityCode.GDBuildingIObjects1.length = 0;
gdjs.CityCode.GDBuildingIObjects2.length = 0;
gdjs.CityCode.GDBuildingIObjects3.length = 0;
gdjs.CityCode.GDBuildingIObjects4.length = 0;
gdjs.CityCode.GDBuildingIObjects5.length = 0;
gdjs.CityCode.GDBuildingLObjects1.length = 0;
gdjs.CityCode.GDBuildingLObjects2.length = 0;
gdjs.CityCode.GDBuildingLObjects3.length = 0;
gdjs.CityCode.GDBuildingLObjects4.length = 0;
gdjs.CityCode.GDBuildingLObjects5.length = 0;
gdjs.CityCode.GDBuildingMObjects1.length = 0;
gdjs.CityCode.GDBuildingMObjects2.length = 0;
gdjs.CityCode.GDBuildingMObjects3.length = 0;
gdjs.CityCode.GDBuildingMObjects4.length = 0;
gdjs.CityCode.GDBuildingMObjects5.length = 0;
gdjs.CityCode.GDSkyscraperAObjects1.length = 0;
gdjs.CityCode.GDSkyscraperAObjects2.length = 0;
gdjs.CityCode.GDSkyscraperAObjects3.length = 0;
gdjs.CityCode.GDSkyscraperAObjects4.length = 0;
gdjs.CityCode.GDSkyscraperAObjects5.length = 0;
gdjs.CityCode.GDSkyscraperBObjects1.length = 0;
gdjs.CityCode.GDSkyscraperBObjects2.length = 0;
gdjs.CityCode.GDSkyscraperBObjects3.length = 0;
gdjs.CityCode.GDSkyscraperBObjects4.length = 0;
gdjs.CityCode.GDSkyscraperBObjects5.length = 0;
gdjs.CityCode.GDSkyscraperCObjects1.length = 0;
gdjs.CityCode.GDSkyscraperCObjects2.length = 0;
gdjs.CityCode.GDSkyscraperCObjects3.length = 0;
gdjs.CityCode.GDSkyscraperCObjects4.length = 0;
gdjs.CityCode.GDSkyscraperCObjects5.length = 0;
gdjs.CityCode.GDSkyscraperDObjects1.length = 0;
gdjs.CityCode.GDSkyscraperDObjects2.length = 0;
gdjs.CityCode.GDSkyscraperDObjects3.length = 0;
gdjs.CityCode.GDSkyscraperDObjects4.length = 0;
gdjs.CityCode.GDSkyscraperDObjects5.length = 0;
gdjs.CityCode.GDSkyscraperEObjects1.length = 0;
gdjs.CityCode.GDSkyscraperEObjects2.length = 0;
gdjs.CityCode.GDSkyscraperEObjects3.length = 0;
gdjs.CityCode.GDSkyscraperEObjects4.length = 0;
gdjs.CityCode.GDSkyscraperEObjects5.length = 0;
gdjs.CityCode.GDHouseAObjects1.length = 0;
gdjs.CityCode.GDHouseAObjects2.length = 0;
gdjs.CityCode.GDHouseAObjects3.length = 0;
gdjs.CityCode.GDHouseAObjects4.length = 0;
gdjs.CityCode.GDHouseAObjects5.length = 0;
gdjs.CityCode.GDHouseBObjects1.length = 0;
gdjs.CityCode.GDHouseBObjects2.length = 0;
gdjs.CityCode.GDHouseBObjects3.length = 0;
gdjs.CityCode.GDHouseBObjects4.length = 0;
gdjs.CityCode.GDHouseBObjects5.length = 0;
gdjs.CityCode.GDHouseCObjects1.length = 0;
gdjs.CityCode.GDHouseCObjects2.length = 0;
gdjs.CityCode.GDHouseCObjects3.length = 0;
gdjs.CityCode.GDHouseCObjects4.length = 0;
gdjs.CityCode.GDHouseCObjects5.length = 0;
gdjs.CityCode.GDHouseDObjects1.length = 0;
gdjs.CityCode.GDHouseDObjects2.length = 0;
gdjs.CityCode.GDHouseDObjects3.length = 0;
gdjs.CityCode.GDHouseDObjects4.length = 0;
gdjs.CityCode.GDHouseDObjects5.length = 0;
gdjs.CityCode.GDHouseEObjects1.length = 0;
gdjs.CityCode.GDHouseEObjects2.length = 0;
gdjs.CityCode.GDHouseEObjects3.length = 0;
gdjs.CityCode.GDHouseEObjects4.length = 0;
gdjs.CityCode.GDHouseEObjects5.length = 0;
gdjs.CityCode.GDHouseFObjects1.length = 0;
gdjs.CityCode.GDHouseFObjects2.length = 0;
gdjs.CityCode.GDHouseFObjects3.length = 0;
gdjs.CityCode.GDHouseFObjects4.length = 0;
gdjs.CityCode.GDHouseFObjects5.length = 0;
gdjs.CityCode.GDHouseGObjects1.length = 0;
gdjs.CityCode.GDHouseGObjects2.length = 0;
gdjs.CityCode.GDHouseGObjects3.length = 0;
gdjs.CityCode.GDHouseGObjects4.length = 0;
gdjs.CityCode.GDHouseGObjects5.length = 0;
gdjs.CityCode.GDHouseHObjects1.length = 0;
gdjs.CityCode.GDHouseHObjects2.length = 0;
gdjs.CityCode.GDHouseHObjects3.length = 0;
gdjs.CityCode.GDHouseHObjects4.length = 0;
gdjs.CityCode.GDHouseHObjects5.length = 0;
gdjs.CityCode.GDTreeLargeObjects1.length = 0;
gdjs.CityCode.GDTreeLargeObjects2.length = 0;
gdjs.CityCode.GDTreeLargeObjects3.length = 0;
gdjs.CityCode.GDTreeLargeObjects4.length = 0;
gdjs.CityCode.GDTreeLargeObjects5.length = 0;
gdjs.CityCode.GDTreeSmallObjects1.length = 0;
gdjs.CityCode.GDTreeSmallObjects2.length = 0;
gdjs.CityCode.GDTreeSmallObjects3.length = 0;
gdjs.CityCode.GDTreeSmallObjects4.length = 0;
gdjs.CityCode.GDTreeSmallObjects5.length = 0;
gdjs.CityCode.GDStreetLightObjects1.length = 0;
gdjs.CityCode.GDStreetLightObjects2.length = 0;
gdjs.CityCode.GDStreetLightObjects3.length = 0;
gdjs.CityCode.GDStreetLightObjects4.length = 0;
gdjs.CityCode.GDStreetLightObjects5.length = 0;
gdjs.CityCode.GDTrafficLightObjects1.length = 0;
gdjs.CityCode.GDTrafficLightObjects2.length = 0;
gdjs.CityCode.GDTrafficLightObjects3.length = 0;
gdjs.CityCode.GDTrafficLightObjects4.length = 0;
gdjs.CityCode.GDTrafficLightObjects5.length = 0;
gdjs.CityCode.GDDumpsterObjects1.length = 0;
gdjs.CityCode.GDDumpsterObjects2.length = 0;
gdjs.CityCode.GDDumpsterObjects3.length = 0;
gdjs.CityCode.GDDumpsterObjects4.length = 0;
gdjs.CityCode.GDDumpsterObjects5.length = 0;
gdjs.CityCode.GDPlanterObjects1.length = 0;
gdjs.CityCode.GDPlanterObjects2.length = 0;
gdjs.CityCode.GDPlanterObjects3.length = 0;
gdjs.CityCode.GDPlanterObjects4.length = 0;
gdjs.CityCode.GDPlanterObjects5.length = 0;
gdjs.CityCode.GDSedanObjects1.length = 0;
gdjs.CityCode.GDSedanObjects2.length = 0;
gdjs.CityCode.GDSedanObjects3.length = 0;
gdjs.CityCode.GDSedanObjects4.length = 0;
gdjs.CityCode.GDSedanObjects5.length = 0;
gdjs.CityCode.GDTaxiObjects1.length = 0;
gdjs.CityCode.GDTaxiObjects2.length = 0;
gdjs.CityCode.GDTaxiObjects3.length = 0;
gdjs.CityCode.GDTaxiObjects4.length = 0;
gdjs.CityCode.GDTaxiObjects5.length = 0;
gdjs.CityCode.GDPoliceObjects1.length = 0;
gdjs.CityCode.GDPoliceObjects2.length = 0;
gdjs.CityCode.GDPoliceObjects3.length = 0;
gdjs.CityCode.GDPoliceObjects4.length = 0;
gdjs.CityCode.GDPoliceObjects5.length = 0;
gdjs.CityCode.GDSuvObjects1.length = 0;
gdjs.CityCode.GDSuvObjects2.length = 0;
gdjs.CityCode.GDSuvObjects3.length = 0;
gdjs.CityCode.GDSuvObjects4.length = 0;
gdjs.CityCode.GDSuvObjects5.length = 0;
gdjs.CityCode.GDVanObjects1.length = 0;
gdjs.CityCode.GDVanObjects2.length = 0;
gdjs.CityCode.GDVanObjects3.length = 0;
gdjs.CityCode.GDVanObjects4.length = 0;
gdjs.CityCode.GDVanObjects5.length = 0;
gdjs.CityCode.GDHatchbackObjects1.length = 0;
gdjs.CityCode.GDHatchbackObjects2.length = 0;
gdjs.CityCode.GDHatchbackObjects3.length = 0;
gdjs.CityCode.GDHatchbackObjects4.length = 0;
gdjs.CityCode.GDHatchbackObjects5.length = 0;
gdjs.CityCode.GDSportsCarObjects1.length = 0;
gdjs.CityCode.GDSportsCarObjects2.length = 0;
gdjs.CityCode.GDSportsCarObjects3.length = 0;
gdjs.CityCode.GDSportsCarObjects4.length = 0;
gdjs.CityCode.GDSportsCarObjects5.length = 0;
gdjs.CityCode.GDTruckObjects1.length = 0;
gdjs.CityCode.GDTruckObjects2.length = 0;
gdjs.CityCode.GDTruckObjects3.length = 0;
gdjs.CityCode.GDTruckObjects4.length = 0;
gdjs.CityCode.GDTruckObjects5.length = 0;
gdjs.CityCode.GDAmbulanceObjects1.length = 0;
gdjs.CityCode.GDAmbulanceObjects2.length = 0;
gdjs.CityCode.GDAmbulanceObjects3.length = 0;
gdjs.CityCode.GDAmbulanceObjects4.length = 0;
gdjs.CityCode.GDAmbulanceObjects5.length = 0;
gdjs.CityCode.GDDeliveryVanObjects1.length = 0;
gdjs.CityCode.GDDeliveryVanObjects2.length = 0;
gdjs.CityCode.GDDeliveryVanObjects3.length = 0;
gdjs.CityCode.GDDeliveryVanObjects4.length = 0;
gdjs.CityCode.GDDeliveryVanObjects5.length = 0;
gdjs.CityCode.GDPedFemaleAObjects1.length = 0;
gdjs.CityCode.GDPedFemaleAObjects2.length = 0;
gdjs.CityCode.GDPedFemaleAObjects3.length = 0;
gdjs.CityCode.GDPedFemaleAObjects4.length = 0;
gdjs.CityCode.GDPedFemaleAObjects5.length = 0;
gdjs.CityCode.GDPedFemaleBObjects1.length = 0;
gdjs.CityCode.GDPedFemaleBObjects2.length = 0;
gdjs.CityCode.GDPedFemaleBObjects3.length = 0;
gdjs.CityCode.GDPedFemaleBObjects4.length = 0;
gdjs.CityCode.GDPedFemaleBObjects5.length = 0;
gdjs.CityCode.GDPedFemaleCObjects1.length = 0;
gdjs.CityCode.GDPedFemaleCObjects2.length = 0;
gdjs.CityCode.GDPedFemaleCObjects3.length = 0;
gdjs.CityCode.GDPedFemaleCObjects4.length = 0;
gdjs.CityCode.GDPedFemaleCObjects5.length = 0;
gdjs.CityCode.GDPedFemaleDObjects1.length = 0;
gdjs.CityCode.GDPedFemaleDObjects2.length = 0;
gdjs.CityCode.GDPedFemaleDObjects3.length = 0;
gdjs.CityCode.GDPedFemaleDObjects4.length = 0;
gdjs.CityCode.GDPedFemaleDObjects5.length = 0;
gdjs.CityCode.GDPedMaleBObjects1.length = 0;
gdjs.CityCode.GDPedMaleBObjects2.length = 0;
gdjs.CityCode.GDPedMaleBObjects3.length = 0;
gdjs.CityCode.GDPedMaleBObjects4.length = 0;
gdjs.CityCode.GDPedMaleBObjects5.length = 0;
gdjs.CityCode.GDPedMaleCObjects1.length = 0;
gdjs.CityCode.GDPedMaleCObjects2.length = 0;
gdjs.CityCode.GDPedMaleCObjects3.length = 0;
gdjs.CityCode.GDPedMaleCObjects4.length = 0;
gdjs.CityCode.GDPedMaleCObjects5.length = 0;
gdjs.CityCode.GDPedMaleDObjects1.length = 0;
gdjs.CityCode.GDPedMaleDObjects2.length = 0;
gdjs.CityCode.GDPedMaleDObjects3.length = 0;
gdjs.CityCode.GDPedMaleDObjects4.length = 0;
gdjs.CityCode.GDPedMaleDObjects5.length = 0;
gdjs.CityCode.GDPedMaleEObjects1.length = 0;
gdjs.CityCode.GDPedMaleEObjects2.length = 0;
gdjs.CityCode.GDPedMaleEObjects3.length = 0;
gdjs.CityCode.GDPedMaleEObjects4.length = 0;
gdjs.CityCode.GDPedMaleEObjects5.length = 0;
gdjs.CityCode.GDCashLeftTextObjects1.length = 0;
gdjs.CityCode.GDCashLeftTextObjects2.length = 0;
gdjs.CityCode.GDCashLeftTextObjects3.length = 0;
gdjs.CityCode.GDCashLeftTextObjects4.length = 0;
gdjs.CityCode.GDCashLeftTextObjects5.length = 0;
gdjs.CityCode.GDSpeedTextObjects1.length = 0;
gdjs.CityCode.GDSpeedTextObjects2.length = 0;
gdjs.CityCode.GDSpeedTextObjects3.length = 0;
gdjs.CityCode.GDSpeedTextObjects4.length = 0;
gdjs.CityCode.GDSpeedTextObjects5.length = 0;
gdjs.CityCode.GDPistolObjects1.length = 0;
gdjs.CityCode.GDPistolObjects2.length = 0;
gdjs.CityCode.GDPistolObjects3.length = 0;
gdjs.CityCode.GDPistolObjects4.length = 0;
gdjs.CityCode.GDPistolObjects5.length = 0;
gdjs.CityCode.GDRifleObjects1.length = 0;
gdjs.CityCode.GDRifleObjects2.length = 0;
gdjs.CityCode.GDRifleObjects3.length = 0;
gdjs.CityCode.GDRifleObjects4.length = 0;
gdjs.CityCode.GDRifleObjects5.length = 0;
gdjs.CityCode.GDCannonObjects1.length = 0;
gdjs.CityCode.GDCannonObjects2.length = 0;
gdjs.CityCode.GDCannonObjects3.length = 0;
gdjs.CityCode.GDCannonObjects4.length = 0;
gdjs.CityCode.GDCannonObjects5.length = 0;
gdjs.CityCode.GDBulletObjects1.length = 0;
gdjs.CityCode.GDBulletObjects2.length = 0;
gdjs.CityCode.GDBulletObjects3.length = 0;
gdjs.CityCode.GDBulletObjects4.length = 0;
gdjs.CityCode.GDBulletObjects5.length = 0;
gdjs.CityCode.GDShotgunObjects1.length = 0;
gdjs.CityCode.GDShotgunObjects2.length = 0;
gdjs.CityCode.GDShotgunObjects3.length = 0;
gdjs.CityCode.GDShotgunObjects4.length = 0;
gdjs.CityCode.GDShotgunObjects5.length = 0;
gdjs.CityCode.GDSniperObjects1.length = 0;
gdjs.CityCode.GDSniperObjects2.length = 0;
gdjs.CityCode.GDSniperObjects3.length = 0;
gdjs.CityCode.GDSniperObjects4.length = 0;
gdjs.CityCode.GDSniperObjects5.length = 0;
gdjs.CityCode.GDMinigunObjects1.length = 0;
gdjs.CityCode.GDMinigunObjects2.length = 0;
gdjs.CityCode.GDMinigunObjects3.length = 0;
gdjs.CityCode.GDMinigunObjects4.length = 0;
gdjs.CityCode.GDMinigunObjects5.length = 0;
gdjs.CityCode.GDWeaponIconObjects1.length = 0;
gdjs.CityCode.GDWeaponIconObjects2.length = 0;
gdjs.CityCode.GDWeaponIconObjects3.length = 0;
gdjs.CityCode.GDWeaponIconObjects4.length = 0;
gdjs.CityCode.GDWeaponIconObjects5.length = 0;
gdjs.CityCode.GDPlayerObjects1.length = 0;
gdjs.CityCode.GDPlayerObjects2.length = 0;
gdjs.CityCode.GDPlayerObjects3.length = 0;
gdjs.CityCode.GDPlayerObjects4.length = 0;
gdjs.CityCode.GDPlayerObjects5.length = 0;
gdjs.CityCode.GDCashObjects1.length = 0;
gdjs.CityCode.GDCashObjects2.length = 0;
gdjs.CityCode.GDCashObjects3.length = 0;
gdjs.CityCode.GDCashObjects4.length = 0;
gdjs.CityCode.GDCashObjects5.length = 0;
gdjs.CityCode.GDMoneyTextObjects1.length = 0;
gdjs.CityCode.GDMoneyTextObjects2.length = 0;
gdjs.CityCode.GDMoneyTextObjects3.length = 0;
gdjs.CityCode.GDMoneyTextObjects4.length = 0;
gdjs.CityCode.GDMoneyTextObjects5.length = 0;
gdjs.CityCode.GDPromptTextObjects1.length = 0;
gdjs.CityCode.GDPromptTextObjects2.length = 0;
gdjs.CityCode.GDPromptTextObjects3.length = 0;
gdjs.CityCode.GDPromptTextObjects4.length = 0;
gdjs.CityCode.GDPromptTextObjects5.length = 0;

gdjs.CityCode.eventsList21(runtimeScene);
gdjs.CityCode.GDGroundObjects1.length = 0;
gdjs.CityCode.GDGroundObjects2.length = 0;
gdjs.CityCode.GDGroundObjects3.length = 0;
gdjs.CityCode.GDGroundObjects4.length = 0;
gdjs.CityCode.GDGroundObjects5.length = 0;
gdjs.CityCode.GDPavementObjects1.length = 0;
gdjs.CityCode.GDPavementObjects2.length = 0;
gdjs.CityCode.GDPavementObjects3.length = 0;
gdjs.CityCode.GDPavementObjects4.length = 0;
gdjs.CityCode.GDPavementObjects5.length = 0;
gdjs.CityCode.GDWallObjects1.length = 0;
gdjs.CityCode.GDWallObjects2.length = 0;
gdjs.CityCode.GDWallObjects3.length = 0;
gdjs.CityCode.GDWallObjects4.length = 0;
gdjs.CityCode.GDWallObjects5.length = 0;
gdjs.CityCode.GDDoorZoneObjects1.length = 0;
gdjs.CityCode.GDDoorZoneObjects2.length = 0;
gdjs.CityCode.GDDoorZoneObjects3.length = 0;
gdjs.CityCode.GDDoorZoneObjects4.length = 0;
gdjs.CityCode.GDDoorZoneObjects5.length = 0;
gdjs.CityCode.GDRoadStraightObjects1.length = 0;
gdjs.CityCode.GDRoadStraightObjects2.length = 0;
gdjs.CityCode.GDRoadStraightObjects3.length = 0;
gdjs.CityCode.GDRoadStraightObjects4.length = 0;
gdjs.CityCode.GDRoadStraightObjects5.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects1.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects2.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects3.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects4.length = 0;
gdjs.CityCode.GDRoadCrossroadObjects5.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects1.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects2.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects3.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects4.length = 0;
gdjs.CityCode.GDRoadIntersectionObjects5.length = 0;
gdjs.CityCode.GDRoadBendObjects1.length = 0;
gdjs.CityCode.GDRoadBendObjects2.length = 0;
gdjs.CityCode.GDRoadBendObjects3.length = 0;
gdjs.CityCode.GDRoadBendObjects4.length = 0;
gdjs.CityCode.GDRoadBendObjects5.length = 0;
gdjs.CityCode.GDBuildingAObjects1.length = 0;
gdjs.CityCode.GDBuildingAObjects2.length = 0;
gdjs.CityCode.GDBuildingAObjects3.length = 0;
gdjs.CityCode.GDBuildingAObjects4.length = 0;
gdjs.CityCode.GDBuildingAObjects5.length = 0;
gdjs.CityCode.GDBuildingBObjects1.length = 0;
gdjs.CityCode.GDBuildingBObjects2.length = 0;
gdjs.CityCode.GDBuildingBObjects3.length = 0;
gdjs.CityCode.GDBuildingBObjects4.length = 0;
gdjs.CityCode.GDBuildingBObjects5.length = 0;
gdjs.CityCode.GDBuildingCObjects1.length = 0;
gdjs.CityCode.GDBuildingCObjects2.length = 0;
gdjs.CityCode.GDBuildingCObjects3.length = 0;
gdjs.CityCode.GDBuildingCObjects4.length = 0;
gdjs.CityCode.GDBuildingCObjects5.length = 0;
gdjs.CityCode.GDBuildingDObjects1.length = 0;
gdjs.CityCode.GDBuildingDObjects2.length = 0;
gdjs.CityCode.GDBuildingDObjects3.length = 0;
gdjs.CityCode.GDBuildingDObjects4.length = 0;
gdjs.CityCode.GDBuildingDObjects5.length = 0;
gdjs.CityCode.GDBuildingFObjects1.length = 0;
gdjs.CityCode.GDBuildingFObjects2.length = 0;
gdjs.CityCode.GDBuildingFObjects3.length = 0;
gdjs.CityCode.GDBuildingFObjects4.length = 0;
gdjs.CityCode.GDBuildingFObjects5.length = 0;
gdjs.CityCode.GDBuildingGObjects1.length = 0;
gdjs.CityCode.GDBuildingGObjects2.length = 0;
gdjs.CityCode.GDBuildingGObjects3.length = 0;
gdjs.CityCode.GDBuildingGObjects4.length = 0;
gdjs.CityCode.GDBuildingGObjects5.length = 0;
gdjs.CityCode.GDBuildingHObjects1.length = 0;
gdjs.CityCode.GDBuildingHObjects2.length = 0;
gdjs.CityCode.GDBuildingHObjects3.length = 0;
gdjs.CityCode.GDBuildingHObjects4.length = 0;
gdjs.CityCode.GDBuildingHObjects5.length = 0;
gdjs.CityCode.GDBuildingIObjects1.length = 0;
gdjs.CityCode.GDBuildingIObjects2.length = 0;
gdjs.CityCode.GDBuildingIObjects3.length = 0;
gdjs.CityCode.GDBuildingIObjects4.length = 0;
gdjs.CityCode.GDBuildingIObjects5.length = 0;
gdjs.CityCode.GDBuildingLObjects1.length = 0;
gdjs.CityCode.GDBuildingLObjects2.length = 0;
gdjs.CityCode.GDBuildingLObjects3.length = 0;
gdjs.CityCode.GDBuildingLObjects4.length = 0;
gdjs.CityCode.GDBuildingLObjects5.length = 0;
gdjs.CityCode.GDBuildingMObjects1.length = 0;
gdjs.CityCode.GDBuildingMObjects2.length = 0;
gdjs.CityCode.GDBuildingMObjects3.length = 0;
gdjs.CityCode.GDBuildingMObjects4.length = 0;
gdjs.CityCode.GDBuildingMObjects5.length = 0;
gdjs.CityCode.GDSkyscraperAObjects1.length = 0;
gdjs.CityCode.GDSkyscraperAObjects2.length = 0;
gdjs.CityCode.GDSkyscraperAObjects3.length = 0;
gdjs.CityCode.GDSkyscraperAObjects4.length = 0;
gdjs.CityCode.GDSkyscraperAObjects5.length = 0;
gdjs.CityCode.GDSkyscraperBObjects1.length = 0;
gdjs.CityCode.GDSkyscraperBObjects2.length = 0;
gdjs.CityCode.GDSkyscraperBObjects3.length = 0;
gdjs.CityCode.GDSkyscraperBObjects4.length = 0;
gdjs.CityCode.GDSkyscraperBObjects5.length = 0;
gdjs.CityCode.GDSkyscraperCObjects1.length = 0;
gdjs.CityCode.GDSkyscraperCObjects2.length = 0;
gdjs.CityCode.GDSkyscraperCObjects3.length = 0;
gdjs.CityCode.GDSkyscraperCObjects4.length = 0;
gdjs.CityCode.GDSkyscraperCObjects5.length = 0;
gdjs.CityCode.GDSkyscraperDObjects1.length = 0;
gdjs.CityCode.GDSkyscraperDObjects2.length = 0;
gdjs.CityCode.GDSkyscraperDObjects3.length = 0;
gdjs.CityCode.GDSkyscraperDObjects4.length = 0;
gdjs.CityCode.GDSkyscraperDObjects5.length = 0;
gdjs.CityCode.GDSkyscraperEObjects1.length = 0;
gdjs.CityCode.GDSkyscraperEObjects2.length = 0;
gdjs.CityCode.GDSkyscraperEObjects3.length = 0;
gdjs.CityCode.GDSkyscraperEObjects4.length = 0;
gdjs.CityCode.GDSkyscraperEObjects5.length = 0;
gdjs.CityCode.GDHouseAObjects1.length = 0;
gdjs.CityCode.GDHouseAObjects2.length = 0;
gdjs.CityCode.GDHouseAObjects3.length = 0;
gdjs.CityCode.GDHouseAObjects4.length = 0;
gdjs.CityCode.GDHouseAObjects5.length = 0;
gdjs.CityCode.GDHouseBObjects1.length = 0;
gdjs.CityCode.GDHouseBObjects2.length = 0;
gdjs.CityCode.GDHouseBObjects3.length = 0;
gdjs.CityCode.GDHouseBObjects4.length = 0;
gdjs.CityCode.GDHouseBObjects5.length = 0;
gdjs.CityCode.GDHouseCObjects1.length = 0;
gdjs.CityCode.GDHouseCObjects2.length = 0;
gdjs.CityCode.GDHouseCObjects3.length = 0;
gdjs.CityCode.GDHouseCObjects4.length = 0;
gdjs.CityCode.GDHouseCObjects5.length = 0;
gdjs.CityCode.GDHouseDObjects1.length = 0;
gdjs.CityCode.GDHouseDObjects2.length = 0;
gdjs.CityCode.GDHouseDObjects3.length = 0;
gdjs.CityCode.GDHouseDObjects4.length = 0;
gdjs.CityCode.GDHouseDObjects5.length = 0;
gdjs.CityCode.GDHouseEObjects1.length = 0;
gdjs.CityCode.GDHouseEObjects2.length = 0;
gdjs.CityCode.GDHouseEObjects3.length = 0;
gdjs.CityCode.GDHouseEObjects4.length = 0;
gdjs.CityCode.GDHouseEObjects5.length = 0;
gdjs.CityCode.GDHouseFObjects1.length = 0;
gdjs.CityCode.GDHouseFObjects2.length = 0;
gdjs.CityCode.GDHouseFObjects3.length = 0;
gdjs.CityCode.GDHouseFObjects4.length = 0;
gdjs.CityCode.GDHouseFObjects5.length = 0;
gdjs.CityCode.GDHouseGObjects1.length = 0;
gdjs.CityCode.GDHouseGObjects2.length = 0;
gdjs.CityCode.GDHouseGObjects3.length = 0;
gdjs.CityCode.GDHouseGObjects4.length = 0;
gdjs.CityCode.GDHouseGObjects5.length = 0;
gdjs.CityCode.GDHouseHObjects1.length = 0;
gdjs.CityCode.GDHouseHObjects2.length = 0;
gdjs.CityCode.GDHouseHObjects3.length = 0;
gdjs.CityCode.GDHouseHObjects4.length = 0;
gdjs.CityCode.GDHouseHObjects5.length = 0;
gdjs.CityCode.GDTreeLargeObjects1.length = 0;
gdjs.CityCode.GDTreeLargeObjects2.length = 0;
gdjs.CityCode.GDTreeLargeObjects3.length = 0;
gdjs.CityCode.GDTreeLargeObjects4.length = 0;
gdjs.CityCode.GDTreeLargeObjects5.length = 0;
gdjs.CityCode.GDTreeSmallObjects1.length = 0;
gdjs.CityCode.GDTreeSmallObjects2.length = 0;
gdjs.CityCode.GDTreeSmallObjects3.length = 0;
gdjs.CityCode.GDTreeSmallObjects4.length = 0;
gdjs.CityCode.GDTreeSmallObjects5.length = 0;
gdjs.CityCode.GDStreetLightObjects1.length = 0;
gdjs.CityCode.GDStreetLightObjects2.length = 0;
gdjs.CityCode.GDStreetLightObjects3.length = 0;
gdjs.CityCode.GDStreetLightObjects4.length = 0;
gdjs.CityCode.GDStreetLightObjects5.length = 0;
gdjs.CityCode.GDTrafficLightObjects1.length = 0;
gdjs.CityCode.GDTrafficLightObjects2.length = 0;
gdjs.CityCode.GDTrafficLightObjects3.length = 0;
gdjs.CityCode.GDTrafficLightObjects4.length = 0;
gdjs.CityCode.GDTrafficLightObjects5.length = 0;
gdjs.CityCode.GDDumpsterObjects1.length = 0;
gdjs.CityCode.GDDumpsterObjects2.length = 0;
gdjs.CityCode.GDDumpsterObjects3.length = 0;
gdjs.CityCode.GDDumpsterObjects4.length = 0;
gdjs.CityCode.GDDumpsterObjects5.length = 0;
gdjs.CityCode.GDPlanterObjects1.length = 0;
gdjs.CityCode.GDPlanterObjects2.length = 0;
gdjs.CityCode.GDPlanterObjects3.length = 0;
gdjs.CityCode.GDPlanterObjects4.length = 0;
gdjs.CityCode.GDPlanterObjects5.length = 0;
gdjs.CityCode.GDSedanObjects1.length = 0;
gdjs.CityCode.GDSedanObjects2.length = 0;
gdjs.CityCode.GDSedanObjects3.length = 0;
gdjs.CityCode.GDSedanObjects4.length = 0;
gdjs.CityCode.GDSedanObjects5.length = 0;
gdjs.CityCode.GDTaxiObjects1.length = 0;
gdjs.CityCode.GDTaxiObjects2.length = 0;
gdjs.CityCode.GDTaxiObjects3.length = 0;
gdjs.CityCode.GDTaxiObjects4.length = 0;
gdjs.CityCode.GDTaxiObjects5.length = 0;
gdjs.CityCode.GDPoliceObjects1.length = 0;
gdjs.CityCode.GDPoliceObjects2.length = 0;
gdjs.CityCode.GDPoliceObjects3.length = 0;
gdjs.CityCode.GDPoliceObjects4.length = 0;
gdjs.CityCode.GDPoliceObjects5.length = 0;
gdjs.CityCode.GDSuvObjects1.length = 0;
gdjs.CityCode.GDSuvObjects2.length = 0;
gdjs.CityCode.GDSuvObjects3.length = 0;
gdjs.CityCode.GDSuvObjects4.length = 0;
gdjs.CityCode.GDSuvObjects5.length = 0;
gdjs.CityCode.GDVanObjects1.length = 0;
gdjs.CityCode.GDVanObjects2.length = 0;
gdjs.CityCode.GDVanObjects3.length = 0;
gdjs.CityCode.GDVanObjects4.length = 0;
gdjs.CityCode.GDVanObjects5.length = 0;
gdjs.CityCode.GDHatchbackObjects1.length = 0;
gdjs.CityCode.GDHatchbackObjects2.length = 0;
gdjs.CityCode.GDHatchbackObjects3.length = 0;
gdjs.CityCode.GDHatchbackObjects4.length = 0;
gdjs.CityCode.GDHatchbackObjects5.length = 0;
gdjs.CityCode.GDSportsCarObjects1.length = 0;
gdjs.CityCode.GDSportsCarObjects2.length = 0;
gdjs.CityCode.GDSportsCarObjects3.length = 0;
gdjs.CityCode.GDSportsCarObjects4.length = 0;
gdjs.CityCode.GDSportsCarObjects5.length = 0;
gdjs.CityCode.GDTruckObjects1.length = 0;
gdjs.CityCode.GDTruckObjects2.length = 0;
gdjs.CityCode.GDTruckObjects3.length = 0;
gdjs.CityCode.GDTruckObjects4.length = 0;
gdjs.CityCode.GDTruckObjects5.length = 0;
gdjs.CityCode.GDAmbulanceObjects1.length = 0;
gdjs.CityCode.GDAmbulanceObjects2.length = 0;
gdjs.CityCode.GDAmbulanceObjects3.length = 0;
gdjs.CityCode.GDAmbulanceObjects4.length = 0;
gdjs.CityCode.GDAmbulanceObjects5.length = 0;
gdjs.CityCode.GDDeliveryVanObjects1.length = 0;
gdjs.CityCode.GDDeliveryVanObjects2.length = 0;
gdjs.CityCode.GDDeliveryVanObjects3.length = 0;
gdjs.CityCode.GDDeliveryVanObjects4.length = 0;
gdjs.CityCode.GDDeliveryVanObjects5.length = 0;
gdjs.CityCode.GDPedFemaleAObjects1.length = 0;
gdjs.CityCode.GDPedFemaleAObjects2.length = 0;
gdjs.CityCode.GDPedFemaleAObjects3.length = 0;
gdjs.CityCode.GDPedFemaleAObjects4.length = 0;
gdjs.CityCode.GDPedFemaleAObjects5.length = 0;
gdjs.CityCode.GDPedFemaleBObjects1.length = 0;
gdjs.CityCode.GDPedFemaleBObjects2.length = 0;
gdjs.CityCode.GDPedFemaleBObjects3.length = 0;
gdjs.CityCode.GDPedFemaleBObjects4.length = 0;
gdjs.CityCode.GDPedFemaleBObjects5.length = 0;
gdjs.CityCode.GDPedFemaleCObjects1.length = 0;
gdjs.CityCode.GDPedFemaleCObjects2.length = 0;
gdjs.CityCode.GDPedFemaleCObjects3.length = 0;
gdjs.CityCode.GDPedFemaleCObjects4.length = 0;
gdjs.CityCode.GDPedFemaleCObjects5.length = 0;
gdjs.CityCode.GDPedFemaleDObjects1.length = 0;
gdjs.CityCode.GDPedFemaleDObjects2.length = 0;
gdjs.CityCode.GDPedFemaleDObjects3.length = 0;
gdjs.CityCode.GDPedFemaleDObjects4.length = 0;
gdjs.CityCode.GDPedFemaleDObjects5.length = 0;
gdjs.CityCode.GDPedMaleBObjects1.length = 0;
gdjs.CityCode.GDPedMaleBObjects2.length = 0;
gdjs.CityCode.GDPedMaleBObjects3.length = 0;
gdjs.CityCode.GDPedMaleBObjects4.length = 0;
gdjs.CityCode.GDPedMaleBObjects5.length = 0;
gdjs.CityCode.GDPedMaleCObjects1.length = 0;
gdjs.CityCode.GDPedMaleCObjects2.length = 0;
gdjs.CityCode.GDPedMaleCObjects3.length = 0;
gdjs.CityCode.GDPedMaleCObjects4.length = 0;
gdjs.CityCode.GDPedMaleCObjects5.length = 0;
gdjs.CityCode.GDPedMaleDObjects1.length = 0;
gdjs.CityCode.GDPedMaleDObjects2.length = 0;
gdjs.CityCode.GDPedMaleDObjects3.length = 0;
gdjs.CityCode.GDPedMaleDObjects4.length = 0;
gdjs.CityCode.GDPedMaleDObjects5.length = 0;
gdjs.CityCode.GDPedMaleEObjects1.length = 0;
gdjs.CityCode.GDPedMaleEObjects2.length = 0;
gdjs.CityCode.GDPedMaleEObjects3.length = 0;
gdjs.CityCode.GDPedMaleEObjects4.length = 0;
gdjs.CityCode.GDPedMaleEObjects5.length = 0;
gdjs.CityCode.GDCashLeftTextObjects1.length = 0;
gdjs.CityCode.GDCashLeftTextObjects2.length = 0;
gdjs.CityCode.GDCashLeftTextObjects3.length = 0;
gdjs.CityCode.GDCashLeftTextObjects4.length = 0;
gdjs.CityCode.GDCashLeftTextObjects5.length = 0;
gdjs.CityCode.GDSpeedTextObjects1.length = 0;
gdjs.CityCode.GDSpeedTextObjects2.length = 0;
gdjs.CityCode.GDSpeedTextObjects3.length = 0;
gdjs.CityCode.GDSpeedTextObjects4.length = 0;
gdjs.CityCode.GDSpeedTextObjects5.length = 0;
gdjs.CityCode.GDPistolObjects1.length = 0;
gdjs.CityCode.GDPistolObjects2.length = 0;
gdjs.CityCode.GDPistolObjects3.length = 0;
gdjs.CityCode.GDPistolObjects4.length = 0;
gdjs.CityCode.GDPistolObjects5.length = 0;
gdjs.CityCode.GDRifleObjects1.length = 0;
gdjs.CityCode.GDRifleObjects2.length = 0;
gdjs.CityCode.GDRifleObjects3.length = 0;
gdjs.CityCode.GDRifleObjects4.length = 0;
gdjs.CityCode.GDRifleObjects5.length = 0;
gdjs.CityCode.GDCannonObjects1.length = 0;
gdjs.CityCode.GDCannonObjects2.length = 0;
gdjs.CityCode.GDCannonObjects3.length = 0;
gdjs.CityCode.GDCannonObjects4.length = 0;
gdjs.CityCode.GDCannonObjects5.length = 0;
gdjs.CityCode.GDBulletObjects1.length = 0;
gdjs.CityCode.GDBulletObjects2.length = 0;
gdjs.CityCode.GDBulletObjects3.length = 0;
gdjs.CityCode.GDBulletObjects4.length = 0;
gdjs.CityCode.GDBulletObjects5.length = 0;
gdjs.CityCode.GDShotgunObjects1.length = 0;
gdjs.CityCode.GDShotgunObjects2.length = 0;
gdjs.CityCode.GDShotgunObjects3.length = 0;
gdjs.CityCode.GDShotgunObjects4.length = 0;
gdjs.CityCode.GDShotgunObjects5.length = 0;
gdjs.CityCode.GDSniperObjects1.length = 0;
gdjs.CityCode.GDSniperObjects2.length = 0;
gdjs.CityCode.GDSniperObjects3.length = 0;
gdjs.CityCode.GDSniperObjects4.length = 0;
gdjs.CityCode.GDSniperObjects5.length = 0;
gdjs.CityCode.GDMinigunObjects1.length = 0;
gdjs.CityCode.GDMinigunObjects2.length = 0;
gdjs.CityCode.GDMinigunObjects3.length = 0;
gdjs.CityCode.GDMinigunObjects4.length = 0;
gdjs.CityCode.GDMinigunObjects5.length = 0;
gdjs.CityCode.GDWeaponIconObjects1.length = 0;
gdjs.CityCode.GDWeaponIconObjects2.length = 0;
gdjs.CityCode.GDWeaponIconObjects3.length = 0;
gdjs.CityCode.GDWeaponIconObjects4.length = 0;
gdjs.CityCode.GDWeaponIconObjects5.length = 0;
gdjs.CityCode.GDPlayerObjects1.length = 0;
gdjs.CityCode.GDPlayerObjects2.length = 0;
gdjs.CityCode.GDPlayerObjects3.length = 0;
gdjs.CityCode.GDPlayerObjects4.length = 0;
gdjs.CityCode.GDPlayerObjects5.length = 0;
gdjs.CityCode.GDCashObjects1.length = 0;
gdjs.CityCode.GDCashObjects2.length = 0;
gdjs.CityCode.GDCashObjects3.length = 0;
gdjs.CityCode.GDCashObjects4.length = 0;
gdjs.CityCode.GDCashObjects5.length = 0;
gdjs.CityCode.GDMoneyTextObjects1.length = 0;
gdjs.CityCode.GDMoneyTextObjects2.length = 0;
gdjs.CityCode.GDMoneyTextObjects3.length = 0;
gdjs.CityCode.GDMoneyTextObjects4.length = 0;
gdjs.CityCode.GDMoneyTextObjects5.length = 0;
gdjs.CityCode.GDPromptTextObjects1.length = 0;
gdjs.CityCode.GDPromptTextObjects2.length = 0;
gdjs.CityCode.GDPromptTextObjects3.length = 0;
gdjs.CityCode.GDPromptTextObjects4.length = 0;
gdjs.CityCode.GDPromptTextObjects5.length = 0;


return;

}

gdjs['CityCode'] = gdjs.CityCode;
