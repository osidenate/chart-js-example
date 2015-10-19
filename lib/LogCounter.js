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
      let userLog = this.response[userId] || LogCounter.getNewUserLog();

      if (log.type === 'impression') {
        userLog.impressions++;
      }

      if (log.type === 'conversion') {
        userLog.conversions++;

        // Formats date as YYYY-MM-DD
        let dateId = new Date(log.time).toISOString().slice(0, 10);

        if (userLog.chartData[dateId]) {
          userLog.chartData[dateId]++;
        }
        else {
          userLog.chartData[dateId] = 1;
        }
      }

      userLog.revenue += log.revenue;
      this.response[userId] = userLog;
    });

    return this.response;
  }

  static getNewUserLog() {
    return {
      impressions: 0,
      conversions: 0,
      revenue: 0.0,
      chartData: {}
    };
  }
}
