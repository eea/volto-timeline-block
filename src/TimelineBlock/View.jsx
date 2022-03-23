import React from 'react';
import { compose } from 'redux';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { Timeline } from '@eeacms/volto-eea-design-system/ui';

const View = ({ data, mode, moment }) => {
  const { items = [], reversed, hideTime } = data;

  if (!items.length && mode === 'edit') return <p>Add Timeline items</p>;
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
