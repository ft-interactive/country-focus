import Axios from 'axios';

class Dashboard {

  constructor(config) {
    this.dataUrl = config.dataUrl;
    this.container = config.container;
    this.data = null;
    console.log('bla')
  }

  async loadData() {
    return Axios.get(this.dataUrl);
  }

  async render() {
    console.log(this);

    if (!this.data) {
      this.data = await this.loadData();
    }

    console.log('render with data', this.data);
  }
}

export default Dashboard;
