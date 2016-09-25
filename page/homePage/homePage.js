
Page( {

    request: function() {
        var that = this;
        wx.request( {
            url: 'http://apis.baidu.com/apistore/iplookupservice/iplookup',
            data: {
                ip: '117.89.35.58',
            },
            header: {
                "Content-Type": "application/json",
                "apikey": 'bd33b6904ba95924bdd23a920b5e9132'
            },
            success: function( res ) {
                var data = res.data;
                console.log( res );
                that.setData( {
                    result: data.retData.country,
                });

            }
        });
    },

})