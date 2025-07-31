export async function handleScheduleAfterCreation(event, services) {
  const { id, payload, context, meta } = event;

  console.log("Id destructured: ", id);

  if (!id) {
    console.log("No ID found in destructuring.");
    return;
  }

  const { ItemsService } = services;
  const scheduleService = new ItemsService("schedule", context);
  try {
    await scheduleService.updateOne(id, {
      conflicts: [2],
    });

    console.log("Conflicts updated for schedule item:", createdItemId);
  } catch (error) {
    console.log("Schedule service error:", error);
  }
}
