export const time = {
  /**
   * 时间相关计算
   */
  stempDiff(oldTime, newTime = new Date().getTime()) {
    const stemp = newTime - oldTime;
    var days = parseInt(stemp / (1000 * 60 * 60 * 24));
    if (days > 365) {
      return parseInt(days / 365) + " 年前";
    }
    if (days > 30) {
      return parseInt(days / 30) + " 月前";
    }
    if (days > 0) {
      return days + " 天前";
    }
    var hours = parseInt((stemp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours > 0) {
      return hours + " 小时前 ";
    }
    var minutes = parseInt((stemp % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes > 0) {
      return minutes + " 分钟前 ";
    }
    var seconds = (stemp % (1000 * 60)) / 1000;
    return "刚刚 ";
  },
};

export const RouterPath = {
  goPath(path, params = {}) {
    this.$router.push({
      name: path,
      params,
    });
  },
};
