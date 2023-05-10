import { makeAutoObservable, runInAction } from 'mobx';

class List {
  list = [];

  pageNumber = 0;
  pageSize = 10;
  totalPage = 5;

  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPageNumber(pageNumber) {
    this.pageNumber = pageNumber;
  }

  async getList(pageNumber) {
    if (pageNumber !== 0 && pageNumber >= this.totalPage) {
      return;
    }

    try {
      const res = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            pageNumber,
            totalPage: 5,
            list: Array.from(Array(this.pageSize).keys()).map(
              (i, index) => `${pageNumber} - ${index}`,
            ),
          });
        }, 1000);
      });

      runInAction(() => {
        this.setPageNumber(pageNumber);
        this.totalPage = res.totalPage;
        this.list = this.list.concat(res?.list || []);
      });
    } catch (err) {
      runInAction(() => {
        this.error = err;
      });
    }
  }

  reset() {
    this.list = [];
    this.pageNumber = 0;
    this.totalPage = 0;
  }
}

export default new List();
