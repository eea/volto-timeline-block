import { defineMessages } from 'react-intl';

const messages = defineMessages({
  timelineBlockTitle: {
    id: 'timelineBlock',
    defaultMessage: 'Timeline block',
  },
  reversedTitle: {
    id: 'reversedTitle',
    defaultMessage: 'Reversed',
  },
  hideTimeTitle: {
    id: 'hideTime',
    defaultMessage: 'Hide time',
  },
  timelineItemsTitle: {
    id: 'timelineItems',
    defaultMessage: 'Timeline items',
  },
  timelineItemTitle: {
    id: 'timelineItem',
    defaultMessage: 'Timeline item',
  },
  dateTimeTitle: {
    id: 'dateAndTime',
    defaultMessage: 'Date and time',
  },
  title: {
    id: 'title',
    defaultMessage: 'Title',
  },
  descriptionTitle: {
    id: 'timelineItemDescription',
    defaultMessage: 'Description',
  },
  iconTitle: {
    id: 'icon',
    defaultMessage: 'Icon',
  },
  iconDescription: {
    id: 'iconDescription',
    defaultMessage: 'Check here for a list with all the icons',
  },
  colorTitle: {
    id: 'timelineColor',
    defaultMessage: 'Color',
  },
  colorRed: {
    id: 'timelineItem.color.red',
    defaultMessage: 'Red',
  },
  colorOrange: {
    id: 'timelineItem.color.orange',
    defaultMessage: 'Orange',
  },
  colorYellow: {
    id: 'timelineItem.color.yellow',
    defaultMessage: 'Yellow',
  },
  colorOlive: {
    id: 'timelineItem.color.olive',
    defaultMessage: 'Olive',
  },
  colorGreen: {
    id: 'timelineItem.color.green',
    defaultMessage: 'Green',
  },
  colorTeal: {
    id: 'timelineItem.color.teal',
    defaultMessage: 'Teal',
  },
  colorBlue: {
    id: 'timelineItem.color.blue',
    defaultMessage: 'Blue',
  },
  colorViolet: {
    id: 'timelineItem.color.violet',
    defaultMessage: 'Violet',
  },
  colorPurple: {
    id: 'timelineItem.color.purple',
    defaultMessage: 'Purple',
  },
  colorPink: {
    id: 'timelineItem.color.pink',
    defaultMessage: 'Pink',
  },
  colorBrown: {
    id: 'timelineItem.color.brown',
    defaultMessage: 'Brown',
  },
  colorGrey: {
    id: 'timelineItem.color.grey',
    defaultMessage: 'Grey',
  },
  colorBlack: {
    id: 'timelineItem.color.black',
    defaultMessage: 'Black',
  },
});

const timelineSchema = (intl) => ({
  title: intl.formatMessage(messages.timelineItemTitle),
  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.timelineItemTitle),
      fields: ['datetime', 'title', 'description', 'icon', 'color'],
    },
  ],
  properties: {
    datetime: {
      title: intl.formatMessage(messages.dateTimeTitle),
      widget: 'datetime',
    },
    title: {
      title: intl.formatMessage(messages.title),
    },
    description: {
      title: intl.formatMessage(messages.descriptionTitle),
    },
    icon: {
      title: intl.formatMessage(messages.iconTitle),
      description: (
        <>
          {intl.formatMessage(messages.iconDescription)}{' '}
          <a href="https://react.semantic-ui.com/elements/icon/">here</a>
        </>
      ),
    },
    color: {
      title: intl.formatMessage(messages.colorTitle),
      defaultValue: 'blue',
      choices: [
        ['red', intl.formatMessage(messages.colorRed)],
        ['orange', intl.formatMessage(messages.colorOrange)],
        ['yellow', intl.formatMessage(messages.colorYellow)],
        ['olive', intl.formatMessage(messages.colorOlive)],
        ['green', intl.formatMessage(messages.colorGreen)],
        ['teal', intl.formatMessage(messages.colorTeal)],
        ['blue', intl.formatMessage(messages.colorBlue)],
        ['violet', intl.formatMessage(messages.colorViolet)],
        ['purple', intl.formatMessage(messages.colorPurple)],
        ['pink', intl.formatMessage(messages.colorPink)],
        ['brown', intl.formatMessage(messages.colorBrown)],
        ['grey', intl.formatMessage(messages.colorGrey)],
        ['black', intl.formatMessage(messages.colorBlack)],
      ],
    },
  },
  required: [],
});

const schema = (intl) => ({
  title: intl.formatMessage(messages.timelineBlockTitle),

  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.timelineBlockTitle),
      fields: ['reversed', 'hideTime', 'items'],
    },
  ],

  properties: {
    reversed: {
      title: intl.formatMessage(messages.reversedTitle),
      type: 'boolean',
    },
    hideTime: {
      title: intl.formatMessage(messages.hideTimeTitle),
      type: 'boolean',
    },
    items: {
      title: intl.formatMessage(messages.timelineItemsTitle),
      widget: 'object_list',
      schema: timelineSchema(intl),
    },
  },

  required: [],
});

export default schema;
