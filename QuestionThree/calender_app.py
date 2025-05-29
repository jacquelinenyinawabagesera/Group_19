class Calendar_app:
   def __init__(self):
       self.events = ["Wedding", "Funeral"]
  
   def add(self, event):
       self.events.append(event)
       return self.events

   def delete(self, index):
       if 0 <= index < len(self.events):
           self.events.pop(index)
           return self.events

   def retrieve(self):
       return self.events[0] if self.events else None


calendar = Calendar_app()
print(calendar.add("Birthday"))
print(calendar.delete(1))
print(calendar.retrieve())