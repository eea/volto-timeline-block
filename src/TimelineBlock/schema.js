const timelineSchema = {
  title: 'Timeline item',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['datetime', 'title', 'description', 'icon', 'color'],
    },
  ],
  properties: {
    datetime: {
      title: 'Date and time',
      widget: 'datetime',
    },
    title: {
      title: 'Title',
    },
    description: {
      title: 'Description',
    },
    icon: {
      title: 'Icon',
      description: (
        <>
          Check <a href="https://react.semantic-ui.com/elements/icon/">here</a>{' '}
          for a list with all the icons
        </>
      ),
    },
    color: {
      title: 'Color',
      defaultValue: 'blue',
      choices: [
        ['red', 'Red'],
        ['orange', 'Orange'],
        ['yellow', 'Yellow'],
        ['olive', 'Olive'],
        ['green', 'Green'],
        ['teal', 'Teal'],
        ['blue', 'Blue'],
        ['violet', 'Violet'],
        ['purple', 'Purple'],
        ['pink', 'Pink'],
        ['brown', 'Brown'],
        ['grey', 'Grey'],
        ['black', 'Black'],
      ],
    },
  },
  required: [],
};

const schema = {
  title: 'Timeline block',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['reversed', 'hideTime', 'items'],
    },
  ],

  properties: {
    reversed: {
      title: 'Reversed',
      type: 'boolean',
    },
    hideTime: {
      title: 'Hide time',
      type: 'boolean',
    },
    items: {
      title: 'Timeline items',
      widget: 'object_list',
      schema: timelineSchema,
    },
  },

  required: [],
};

export default schema;
