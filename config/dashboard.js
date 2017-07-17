import Axios from 'axios';

const config = {
  dataSource: 'https://bertha.ig.ft.com/view/publish/gss/1xFgTur9VO9IUw2yUL_13s1FqFynGzXN_Pc1URYFvE40/countries,indicators',
};

export default async () => (
  Axios.get(config.dataSource)
);
