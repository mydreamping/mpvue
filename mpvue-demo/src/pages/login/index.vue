<template>
  <div class="container">
    
  </div>
</template>

<script>
import md5 from "js-md5";
import qs from "qs";
export default {
  data(){
    return {
    
    }
  },
 
  methods:{
      // 调用方法
      // this.$https
      //   .request({
      //     // url: 'http://10.10.10.176/login/login.do',
      //     url:this.$interfaces.login,
      //     method: "post",
      //     header: {
      //         'content-type': 'application/x-www-form-urlencoded' // 默认值
      //     },
      //     data:qs.stringify(postData)
      //   })
      //   .then(res => {
      //     console.log(res)
      //     wx.showToast({
      //       title:res.msg,
      //       icon:'none'
      //     });
      //     if(res.msg == '用户登录成功'){
      //       wx.setStorage({
      //         key: 'user',
      //         data: JSON.stringify(res.data)
      //       })
      //       wx.reLaunch({
      //         url: '../index/main'
      //       })   
      //     }
      //   })
      //   .catch(error => {
                
      // });
     
    
  },
  mounted(){
    this.code()
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login{
  width: 100%;
  height: 100%;
  position: relative;
}
.login>img{
  display: inline-block;
  width: 100%;
  height: 100%;
}

.loginBox{
  width: 86%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loginBox .logo{
  text-align: center;
}
.loginBox .logo img{
  width: 200px;
  height: 50px;
}
.fromBox{
  background-color:yellow;
}
.fromBox div {
  background-color:#fff;
  margin: 10px 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.fromBox div span{
  padding:10px;
}
.fromBox div span img{
  width: 25px;
  height: 25px;
}
.fromBox div input{
  display: inline-block;
  height: 50px;
}
.code{
    display: inline-block;
    width: 100px;
}
.code img{
    width: 100%!important;
}
.submit{
    margin-top: 20px;
    width: 100%;
}
.submit button{
    width: 100%;
    border: none;
    outline: none;
    background: #198BFF;
    color: #fff;
    text-align: center;
    height: 50px;
    border-radius: 6px;
    font-size: 17px;
}
.footer{
    font-size: 14px;
    font-weight: normal;
    color: #198BFF;
    position: fixed;
    bottom: 1%;
    left: 50%;
    transform: translate(-50%);
}
</style>
