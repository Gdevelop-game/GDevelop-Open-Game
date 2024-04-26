#
#   Declan Reid 2024
#
#   This is a simple script to collect all the data from a
#   layout file in a format usable in scripts.
#
#   To run this script, invoke it from the root of the repo as such:
#   $ python3 scripts/collect-layout-data.py src/layouts/{scene}.json
#   For example:
#   $ python3 scripts/collect-layout-data.py src/layouts/city.json
#   This will generate a new version of the file in the root of the repo.
#   You can then open this file and use the data to your heart's content.
#


#
#   THIS SCRIPT IS NOT COMPLETE, BUT IS FUNCTIONAL IN SOME FORM
#

import sys
import json

if len(sys.argv) < 2:
    print("There's not enough arguments!")
    exit()

filePath = sys.argv[1]

print("Opening "+str(filePath)+"...")

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
    objects = fileJSON["instances"]
    print("Success!")
except KeyError:
    print("Failed! The objects section (instances) was unable to be found!")
    exit()

print("Time to iterate!")

object_names = [

]

for object in objects:
    if object["name"] not in object_names:
        object_names.append(object["name"])

print(object_names)

# print('{')
# for name in sorted(object_names):
#     print('"'+name+'": 1,')
# print('}')