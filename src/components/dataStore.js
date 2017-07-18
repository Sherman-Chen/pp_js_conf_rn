let visit = [];
let notVisit = [];
let counts = {
  visited: 0,
  notVisited: 0
};
let observers = [];
const listData = {
  addVisit(item) {
    item.key = visit.length;
    visit[visit.length] = item;
    counts.visit = visit.length;
    this.notify();
  },
  addNotVisit(item) {
    item.key = notVisit.length;
    notVisit[notVisit.length] = item;
    counts.notVisit = notVisit.length;
    this.notify();
  },
  getCounts() {
    return counts;
  },
  getVisit() {
    return visit;
  },
  deleteItem: function(id) {
    // console.log(id);
    visit = visit.filter(function(obj) {
      return obj.key !== id;
    });
    this.notify();
  },
  getNotVisit() {
    return notVisit;
  },
  resetList() {
    visit = [];
    notVisit = [];
    this.notify();
  },
  subscribe(observer) {
    observers[observers.length] = observer;
  },
  notify() {
    observers.forEach(observer => {
      observer();
    });
  }
};

module.exports = listData;
