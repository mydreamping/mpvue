
//封装请求
const https = {
    request(options = {}){
        const {url,method,header,data} = options;

        //加载动画
        wx.showLoading({
            title:'加载中...'
        });

        return new Promise((resolve,reject) =>{
            //发起 HTTPS 网络请求
            wx.request({
                url,
                method,
                data,
                // header: {
                //     'content-type': 'application/x-www-form-urlencoded' // 默认值
                // },
                header,
                success:function(res){
                    //隐藏加载
                    wx.hideLoading();

                    //判断网络
                    if(res.statusCode == 404){
                        reject();
                        return false;
                    }else if(res.statusCode != 200){
                        wx.showToast({
                            title:'网络出错，稍后在试！',
                            icon:'none'
                        })
                        return false
                    }

                    //成功返回数据
                    resolve(res.data);
                },
                fail:function(error){
                    //失败
                    wx.hideLoading();
                    reject(error);
                },
                complete:function(){
                    wx.hideLoading();
                }
            })
        })
    }
}

export default https;