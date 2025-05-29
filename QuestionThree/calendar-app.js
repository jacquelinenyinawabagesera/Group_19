const calendarData = {};

function addEvent(userId, event) {
    if (!calendarData[userId]) {
        calendarData[userId] = [];
    }
    calendarData[userId].push(event);
    console.log(`Event added for user ${userId}:`, event);
}

function deleteEvent(userId, eventTitle) {
    if (!calendarData[userId]) {
        console.log(`No events found for user ${userId}`);
        return;
    }
    const originalLength = calendarData[userId].length;
    calendarData[userId] = calendarData[userId].filter(event => event.title !== eventTitle);
    if (calendarData[userId].length < originalLength) {
        console.log(`Event "${eventTitle}" deleted for user ${userId}`);
    } else {
        console.log(`Event "${eventTitle}" not found for user ${userId}`);
    }
}

function getEvents(userId) {
    if (!calendarData[userId]) {
        console.log(`No events found for user ${userId}`);
        return [];
    }
    return calendarData[userId];
}


addEvent("user1", { title: "Doctor Appointment", date: "2025-06-10", description: "Annual check-up" });
addEvent("user1", { title: "Meeting", date: "2025-06-11", description: "Project meeting at 10 AM" });
addEvent("user2", { title: "Birthday Party", date: "2025-06-15", description: "Friend's birthday" });

console.log("Events for user1:", getEvents("user1"));
console.log("Events for user2:", getEvents("user2"));

deleteEvent("user1", "Meeting");

console.log("Events for user1 after deletion:", getEvents("user1"));
