window.onload=function(){
  var nav1 = document.getElementById('nav1');
	var style_title = document.getElementsByClassName('title');
		for(var i=0;i<style_title.length;i++){
			style_title[i].onmouseover = function(){
			this.children[1].style.display='block';
		}
		    style_title[i].onmouseout = function(){
			this.children[1].style.display='none';
		}
		  
		}

   
// ·································································
// 底部表单注册
       var form = document.querySelector('form');
       var username= document.querySelector('#username');
       var tel = document.querySelector('#tel');
       var email = document.querySelector('#email');
       var address = document.querySelector('#address');
       var span = document.querySelectorAll('span');
       console.log(span)

       // onsubmit事件
//     form.onsubmit = function(e){
//     //      // var tel = checkTel();
//     //      //     if(!tel){
//     //      //         return false;
//     //      //     }
//     //      // return true;
//    }
  // onblur失去焦点
         tel.onblur=function(e){
          checkTel();
          // span[0].style.display="block";
      }
          username.onblur=function(e){
          checkUser();
      }
         email.onblur=function(e){
          checkEmail();
      }
        address.onblur = function(e){
          checkAddress();
          
      }
//验证手机
      function checkTel(e){
          if(tel.value.length==0){
              span[1].style.display="block";
              span[1].style.color="#e00000";
              span[1].innerText="手机号为空!";
              // span[0].className='danger';
              return false;
          }
          var partner=/^1[345678]\d{9}$/;
          if(!partner.test(tel.value)){
              span[1].style.display="block";
              span[1].style.color="#e00000";
              span[1].innerText='手机号格式错误，请重新输入 !';
              // span[0].className='danger';
              return false;
          }
          span[1].innerText='格式正确 !';
          span[1].style.color="green";
          span[1].style.padding="0 0 0.2rem 0";
          span[1].style.display="block";
          return true;
      }
      // 验证用户名
      function checkUser(e){
        if(username.value.length==0){
          span[0].style.color="#e00000";
          span[0].innerText="用户名为空";
          return false;
        }
      }
      // 验证邮箱
      function checkEmail(e){
        if(email.value.length == 0){
              span[2].style.color="#e00000";
              span[2].innerText="邮箱为空 !";
              return false;
          }
        if(!/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(email.value)){
          span[2].style.display="block";
          span[2].style.color="#e00000";
          span[2].innerText='邮箱格式有误!';
          return false;
        }
      }
      function checkAddress(e){
         if(address.value.length == 0){
          span[3].style.display = "block";
          span[3].style.color="#e00000";
          span[3].innerText = "地址为空!";
          return false;

      }
    }
  }
    

   
  