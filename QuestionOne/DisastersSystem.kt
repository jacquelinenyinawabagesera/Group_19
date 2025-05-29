fun disasterPlanning(disaster: String) {
    val key = "emergency"
    val disasters = listOf("fire", "earthquake", "floods")
    val agencies = mapOf(
        "fire" to "Fire department",
        "earthquake" to "Earthquake agency",
        "floods" to "Flood department",
        "emergency" to "Emergency department"
    )
    val supplies = mapOf(
        "fire" to "Extinguishers",
        "earthquake" to "First-aid",
        "floods" to "Life Jackets",
        "emergency" to "Oxygen masks"
    )

    val disasterLower = disaster.toLowerCase()
    if (disasters.contains(disasterLower)) {
        println("The disaster is $disaster and agency is ${agencies[disasterLower]} and supplies are ${supplies[disasterLower]}")
    } else {
        println("The disaster is $disaster and agency is ${agencies[key]} and supplies are ${supplies[key]}")
    }
}

fun main() {
    disasterPlanning("fire")
    disasterPlanning("Eruption")
}