import Axios from 'axios';

const config = {
  dataSource: 'https://bertha.ig.ft.com/view/publish/gss/1xFgTur9VO9IUw2yUL_13s1FqFynGzXN_Pc1URYFvE40/countries,indicators',
  countryName: 'Russia',
};

export default async () => {
  Axios({
    url: config.dataSource,
    method: 'get',
    responseType: 'json',
    transformResponse: (data) => {
      const result = Object.assign({}, data);

      result.indicators = result.indicators.filter(d => d.country === config.countryName);
      result.countries = result.countries.find(d => d.country === config.countryName);

      return result;
    },
  })
};
