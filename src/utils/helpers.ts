export const bytesToGigabytes = (bytes: any) => {
    return Math.round(bytes / (1024 * 1024 * 1024));
};


export const bytesToMegabytes = (bytes: number) => {
  return (bytes / (1024 * 1024)).toFixed(1);
};


export const calculateTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    }
    const hours = Math.floor(minutes / 60);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  };

    
 export  function capitalizeFirstLetter(str: string) {
    return str.replace(/\b\w/g, function (l: string) {
      return l.toUpperCase();
    });
  }

  export function generateDayWiseTimeSeries(baseval: any, count: any, yrange: { min: any; max: any; }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }