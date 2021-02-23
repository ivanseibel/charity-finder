# 2021-02-21 Ivan L. Seibel
# Adapted from: https://linuxhint.com/python_xml_to_json/
# xmltodict must be installed: sudo apt install python3-xmltodict

# Importing the modules
import json
import xmltodict
import sys
import collections

# Ensure correct usage
if len(sys.argv) != 2:
    sys.exit("Usage: python xml2json.py FILENAME")

filename = sys.argv[1]

# Opening the xml file
with open(filename,"r") as xmlfileObj:
    # Converting xml data to dictionary
    data_dict = xmltodict.parse(xmlfileObj.read())
    xmlfileObj.close()

    # Removing unnecessary data
    new_data_dict = [];
    for org in data_dict["organizations"]["organization"]:
      new_data_dict.append({
        "name": org["name"],
        "id": org["id"]
      })

    # custom functions to get organizations info
    def get_name(new_data_dict):
      return new_data_dict.get('name')

    # Change to an ordered dict
    new_data_dict.sort(key=get_name)

    # Creating JSON object using dictionary object
    # jsonObj = json.dumps(data_dict)
    jsonObj = json.dumps(new_data_dict)

    # Create json filename
    jsonFilename = filename.split('.')

    # Storing json data to json file
    with open(jsonFilename[0] + ".json", "w") as jsonfileObj:
        jsonfileObj.write(jsonObj)
        jsonfileObj.close()
