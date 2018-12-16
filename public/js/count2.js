(function()
{

    var DLTTimer = function(countDivId, year, month, day, hour, minute, second, type)
    {
        this.countDiv = document.getElementById(countDivId);
        this.year     = year;
        this.month    = month;
        this.day      = day;
        this.hour     = hour;
        this.minute   = minute;
        this.second   = second;
        this.type   = type;

        this.from = new Date(year, month, day, hour, minute, second);

    }

    DLTTimer.prototype = {
        format: {
          'day': '日<br />',
          'hour': '時間',
          'minute': '分<br />',
          'second': '秒'
        },

        setFormat: function(key, value)
        {
          this.format[key] = value;
        },

        stop: function(message)
        {
            this.countDiv.innerHTML = message;
            clearInterval(this.intervalId);
        },
        run : function()
        {
            var local = this;
            this.intervalId = setInterval(function()
            {
                var to = new Date();
                //var to = new Date(2010, 4, 18, 15, 0, 0);
                if (local.type == 'down' && to.getTime() > local.from.getTime()) {
                    local.stop('音展当日！！');
                    return 0;
                }
                else if (local.type == 'up' && to.getTime() < local.from.getTime()){
                    alert(to.getTime());
                    alert(local.from.getTime());
                    local.stop('まだカウント開始していません...！');
                    return 0;
                }

                var ts = Math.floor(to.getTime() / 1000);
                var ts_diff = Math.floor(local.from.getTime() / 1000) - ts;
                if (local.type == 'up') {
                  ts_diff = ts - Math.floor(local.from.getTime() / 1000);
                }

                var d = Math.floor(ts_diff / (24*60*60));
                var h = Math.floor(ts_diff % (24*60*60) / (60*60));
                var m = (Math.floor(ts_diff % (24*60*60) / 60) % 60);
                var s = (Math.floor(ts_diff % (24*60*60)) % 60 % 60);
                var ms = Math.floor((1000 - to.getMilliseconds()) / 100);
                if (local.type == 'up') ms = Math.floor((to.getMilliseconds()) / 100);

                m = m.toString();
                s = s.toString();
                ms = ms.toString();


                local.countDiv.innerHTML = '<strong><font size="6">音楽と展覧の会まで</font><br><font size="7">' + d.toString() +' days '+ h.toString() +' h</font></strong>';
            }, 100);
        }
    }

    var name = "平成32年度センター試験（2020年1月11・12日）";
    var url  = "http://deadlinetimer.com/timer/136382";

        document.write('<div style="text-align: center;">'
        + '<div id="dlt-blogparts-count-136382"></div>'
        + '</div><br><br>');


    var Dlt = new DLTTimer("dlt-blogparts-count-136382", 2018, 8, 23, 09, 00, 00, 'down');
    Dlt.run();

})();
<!-- page was processed in 0.0166 seconds -->
