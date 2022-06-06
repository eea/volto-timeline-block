import worldSVG from '@plone/volto/icons/world.svg';
import TimelineBlockEdit from './Edit';
import TimelineBlockView from './View';

export default (config) => {
  config.blocks.blocksConfig.timeline_block = {
    id: 'timeline_block',
    title: 'Timeline',
    icon: worldSVG,
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
