#
#   Declan Reid 2024
#
#   This is a simple script to fix z-layers on objects.
#   This will set all objects to an established "correct" height,
#   ensuring that we aren't getting objects with a Z Order of 12643524.
#
#   To run this script, invoke it from the root of the repo as such:
#   $ python3 scripts/layer-correction.py src/layouts/{scene}.json
#   For example:
#   $ python3 scripts/layer-correction.py src/layouts/city.json
#   This will generate a new version of the file in the root of the repo.
#   You can then copy this file into the layouts folder.
#

values = {
    "AmmoText":     98, # How much ammo you have
    "Fences":       5, # Fences
    "Health":       98, # Health
    "Niko":         50, # Player
    "Placeholder":  49, # This acts as the player collision
    "Transitions":  1, # Fading into rooms
    "Water":        0, # This is water
    "Water_cover":  0, # This is non-swimmable water, used under sand edges
    "Wheel_info":   98, # Which weapon is being used
    "You_lose":     99, # WASTED
    "ammo":         45, # Ammo found that you can reload with
    "beach_sand_1": 1, # The main sand on a beach
    "beach_sand_2": 1, # The outer sand on a beach
    "bridge":       10, # The frame above the bridge
    "concrete_1":   1, # Pathing on the side of the bridge
    "crossair":     100, # Crosshair
    "deco":         55, # Things like umbrellas
    "door":         1, # Door trigger
    "energy":       45, # Ammo for taser
    "flame_thrower_fire":           53, # Fire from the flamethrower
    "flame_thrower_fire_collision": 53, # Collision for the fire from the flamethrower
    "foliage":                      54, # Trees
    "grass_tiled":                  1, # Grass
    "green_leaves_particle":        48, # Particles from walking into a tree
    "ground_1":                     1, # The basketball ground
    "ground_elements":              1, # Lines on the court
    "gun1":             1, # Pistol
    "gun2":             1, # Rifle
    "gun3":             1, # Flamethrower
    "gun4":             1, # Sniper
    "gun5":             1, # Rocket Launcher
    "hidden_separate":  1, # Used as bridge border
    "mele1":            1, # Taser
    "mele2":            1, # Knife
    "mouse_point":      100, # Little black square. Perhaps the old crosshair
    "reloading":        1, # "Reloading" text
    "road":             1, # This is all forms of the road
    "road_1":           1, # This is an extra version of the road, used in the lower map.
    "road_2":           1, # This is an extra version of the road, used in the lower map.
    "road_3":           1, # This is an extra version of the road, used in the lower map.
    "road_4":           1, # This is an extra version of the road, used in the lower map.
    "road_block":       4, # Temp road barriers
    "roof_tops":        60, # Roof
    "sand":             1, # This is all forms of sand
    "sand_1":           1, # This is an extra version of the sand, used in the lower map.
    "sand_2":           1, # This is an extra version of the sand, used in the lower map.
    "sports_equipments":            6, # Basketball hoop
    "sports_equipments_movable":    6, # Basketball
    "trash_movable":    6, # The pushable boxes
    "weapon_icons":     98, # Weapon icons
    "weaponholding":    98, # Name of held weapon
}




import sys
import json

if len(sys.argv) < 2:
    print("There's not enough arguments!")
    exit()

filePath = sys.argv[1]

print("Opening %s..." % filePath)

try:
    fileToConvert = open(filePath, 'r')
    print("Success!")
except FileNotFoundError:
    print("Failed! That file doesn't seem to exist!")
    exit()

print("Converting the file to JSON type...")

try:
    fileJSON = json.loads(fileToConvert.read())
    fileToConvert.close()
    print("Success!")
except json.decoder.JSONDecodeError:
    print("Failed! Something about that JSON isn't right!")
    exit()

print("Collecting objects...")

try:
    instances = fileJSON["instances"]
    print("Success!")
except KeyError:
    print("Failed! The objects section (instances) was unable to be found!")
    exit()

print("Time to iterate!")

try:
    for instance in instances:
        if instance["name"] in values:
            instance["zOrder"] = values[instance["name"]]
            print('Changed the zOrder of %s with uuid %s to %s' % (instance["name"], instance["persistentUuid"], values[instance["name"]]))
        else:
            print('Instance of %s and uuid %s did not have a set value and was not changed.' % (instance["name"], instance["persistentUuid"]))
    

except Exception as e:
    print('An exception occured while iterating through instances.')
    print(e)
    exit()

print('Saving instances list back to json')
fileJSON["instances"] = instances

fileName = filePath.split('/')[-1]
print("Saving json to file %s" % fileName)

try:
    file = open(fileName, 'w')
    file.write(str(fileJSON).replace('\'', '"').replace('True', 'true').replace('False', 'false'))
    file.close()
except Exception as e:
    print('Some went wrong while saving to %s' % fileName)
    print(e)
    exit()

print('Done!')