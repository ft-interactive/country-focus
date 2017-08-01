import axios from 'axios';

import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';

const countryName = 'Russia';

export default async () => {
  const d = await article();
  const flags = await getFlags();
  const onwardJourney = await getOnwardJourney();
  const dashboardData = (await axios('https://bertha.ig.ft.com/view/publish/gss/1xFgTur9VO9IUw2yUL_13s1FqFynGzXN_Pc1URYFvE40/countries,indicators')).data;

  const dashboard = {};

  dashboard.indicators = dashboardData.indicators
    .filter(indicator => indicator.country === countryName);
  dashboard.country = dashboardData.countries
    .find(country => country.country === countryName);

  d.headline = dashboard.country.headline;
  d.summary = dashboard.country.standfirst;

  d.topic = {
    name: dashboard.country.sectionname,
    url: dashboard.country.stream,
  };

  /*
  An experimental demo that gets content from the API
  and overwrites some model values. This requires the Link File
  to have been published. Also next-es-interface.ft.com probably
  isn't a reliable source. Also this has no way to prevent development
  values being seen in productions... use with care.

  try {
    const a = (await axios(`https://next-es-interface.ft.com/content/${d.id}`)).data;
    d.headline = a.title;
    d.byline = a.byline;
    d.summary = a.summaries[0];
    d.title = d.title || a.title;
    d.description = d.description || a.summaries[1] || a.summaries[0];
    d.publishedDate = new Date(a.publishedDate);
    f.comments = a.comments;
  } catch (e) {
    console.log('Error getting content from content API');
  }

  */

  return {
    ...d,
    flags,
    onwardJourney,
    dashboard,
  };
};
