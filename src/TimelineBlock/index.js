import iconSVG from '@plone/volto/icons/calendar.svg';
import TimelineBlockEdit from './Edit';
import TimelineBlockView from './View';

const applyConfig = (config) => {
  config.blocks.blocksConfig.timeline_block = {
    id: 'timeline_block',
    title: 'Timeline',
    icon: iconSVG,
    group: 'common',
    view: TimelineBlockView,
    edit: TimelineBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };
  return config;
};

export default applyConfig;
