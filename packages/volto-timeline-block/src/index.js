import installTimelineBlock from './TimelineBlock';

const applyConfig = (config) => {
  return [installTimelineBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
