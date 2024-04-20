gdjs.EntradaCode = {};
gdjs.EntradaCode.GDBackgroundBlueGrassObjects1= [];
gdjs.EntradaCode.GDBackgroundBlueGrassObjects2= [];
gdjs.EntradaCode.GDStartButtonObjects1= [];
gdjs.EntradaCode.GDStartButtonObjects2= [];
gdjs.EntradaCode.GDCharacterNameObjects1= [];
gdjs.EntradaCode.GDCharacterNameObjects2= [];


gdjs.EntradaCode.mapOfGDgdjs_46EntradaCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.EntradaCode.GDStartButtonObjects1});
gdjs.EntradaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "door.aac", false, 10, 1);
}{
    const player = parent.window.GetPlayer()
    const gender = player.GetVar("Character")
    runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gender);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.EntradaCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EntradaCode.mapOfGDgdjs_46EntradaCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level2");
}}

}


};

gdjs.EntradaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EntradaCode.GDBackgroundBlueGrassObjects1.length = 0;
gdjs.EntradaCode.GDBackgroundBlueGrassObjects2.length = 0;
gdjs.EntradaCode.GDStartButtonObjects1.length = 0;
gdjs.EntradaCode.GDStartButtonObjects2.length = 0;
gdjs.EntradaCode.GDCharacterNameObjects1.length = 0;
gdjs.EntradaCode.GDCharacterNameObjects2.length = 0;

gdjs.EntradaCode.eventsList0(runtimeScene);

gdjs.EntradaCode.setCharacter = (n) => setCharacter(n);


function setCharacter(n){
    runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(n);
}

return;

}

gdjs['EntradaCode'] = gdjs.EntradaCode;
