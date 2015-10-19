'use strict';

onmessage = function(msg) {
  let data = msg.data;

  if (data.event === 'calculateTotals') {
    let logData = data.payload;
    let logCounter = new LogCounter(logData);
    let logTotals = logCounter.getStats();

    postMessage({
      event: 'updateTotals',
      payload: logTotals
    });
  }
};

class LogCounter {
  constructor(logs) {
    this.logs = logs;
    this.response = {};
  }

  getStats() {
    this.response = {};

    this.logs.forEach((log) => {
      let userId = log.user_id;
      this.response[userId] = this.response[userId] || LogCounter.getNewUserLog();

      if (log.type === 'impression') {
        this.response[userId].impressions++;
      }

      if (log.type === 'conversion') {
        this.response[userId].conversions++;
      }

      this.response[userId].revenue += log.revenue;
    });

    return this.response;
  }

  static getNewUserLog() {
    return {
      impressions: 0,
      conversions: 0,
      revenue: 0.0
    };
  }
}
