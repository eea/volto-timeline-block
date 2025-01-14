import React from 'react';
import { compose } from 'redux';
import cx from 'classnames';
import { Grid, Card, Label, Icon } from 'semantic-ui-react';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  addTimelineItem: {
    id: 'Add Timeline items',
    defaultMessage: 'Add Timeline items',
  },
});

function Timeline({ children, reversed }) {
  return (
    <div className="eea timeline">
      <Grid className={cx({ 'any reversed': reversed })}>
        <Grid.Row>{children}</Grid.Row>
      </Grid>
    </div>
  );
}

Timeline.Content = (args) => (
  <Grid.Column width={10}>
    <Card fluid raised color={args.color}>
      <Card.Content>
        <Label
          pointing={args.pointing}
          attached="top"
          style={{ marginLeft: '0' }}
          color={args.color}
        >
          {args.time}
        </Label>
        <Card.Header>{args.title}</Card.Header>
        <Card.Description>{args.description}</Card.Description>
        {/* <Label.Group>
          {tags.map((tag, i) => (
            <Label key={i.toString()}>{tag}</Label>
          ))}
        </Label.Group> */}
      </Card.Content>
    </Card>
  </Grid.Column>
);

Timeline.Icon = (args) => (
  <Grid.Column width={2} className="line">
    <Icon className={args.icon} color={args.color} inverted circular />
  </Grid.Column>
);

const View = ({ data, mode, moment }) => {
  const intl = useIntl();
  const { items = [], reversed, hideTime } = data;

  if (!items.length && mode === 'edit')
    return <p>{intl.formatMessage(messages.addTimelineItem)}</p>;
  return (
    <React.Fragment>
      {items.map((item, index) => {
        const datetime = moment.default(item.datetime);
        return (
          <Timeline
            key={`timeline-item-${index}-${item.title}`}
            reversed={reversed}
          >
            <Timeline.Content
              pointing={reversed ? 'left' : 'right'}
              time={hideTime ? datetime.format('ll') : datetime.format('lll')}
              title={item.title}
              description={item.description}
              color={item.color || 'blue'}
            ></Timeline.Content>
            <Timeline.Icon
              icon={item.icon}
              color={item.color || 'blue'}
            ></Timeline.Icon>
          </Timeline>
        );
      })}
    </React.Fragment>
  );
};

export default compose(injectLazyLibs(['moment']))(View);
