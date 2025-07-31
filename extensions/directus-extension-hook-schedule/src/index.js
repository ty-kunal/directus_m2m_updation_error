import * as controller from "./controller";

export default ({ filter, action }, { services }) => {
  filter('items.create', async (meta, payload, context) => {
    console.log('Creating Item!');
  });

  action('items.create', async (meta, context) => {
    console.log('Item created!');

    if (meta.collection === "schedule") {
      const event = {
		id: meta.key,
        meta,
        payload: meta.payload,
        context
      };

      await controller.handleScheduleAfterCreation(event, services);
    }
  });
};
