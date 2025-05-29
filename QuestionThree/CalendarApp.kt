fun main(){
 val event=StoreEvents()
 println(event.add("Birthday"))
 println(event.delete())
 println(event.retrieve())
}
class StoreEvents(){
 var events=mutableListOf<String>("Wedding","Funeral")
 fun add(event:String): MutableList<String> {
   events.add(event)
   return events
 }
 fun delete(): MutableList<String>{
   events.removeAt(1)
   return events
 }
 fun retrieve(): String{
   return events[0]
 }
}
