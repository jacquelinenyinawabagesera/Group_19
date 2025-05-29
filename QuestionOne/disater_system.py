

def disaster_planning(disaster):
   key="emergency"
   disasters=["fire","earthquake","floods"]
   agencies={"fire":"Fire department","earthquake":"Earthquake agency","floods":"Flood department","emergency":"Emergency department"}
   supplies={"fire":"Extinguishers","earthquake":"First-aid","floods":"Life Jackets","emergency":"Oxygen masks"}
   if disaster in disasters:
       print(f"The disaster is {disaster} and agency is {agencies.get(disaster.lower())} and supplies are {supplies.get(disaster.lower())}")
   else:
       print(f"The disaster is {disaster} and agency is {agencies.get(key)} and supplies are {supplies.get(key)}")


disaster_planning("fire")
disaster_planning("Eruption")