export function download(path,filename){
    console.log("我要下载咯")
    fetch(`http://localhost:12306/download?path=${path}`).then(res=>res.blob()).then(blob=>{
      if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, filename);  //兼容ie10
      } else {
          var a = document.createElement('a');
          document.body.appendChild(a) //兼容火狐，将a标签添加到body当中
          var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
          a.href = url;
          a.download = filename;
          a.target='_blank'  // a标签增加target属性
          a.click();
          a.remove()  //移除a标签
          window.URL.revokeObjectURL(url);
      }
    });
  }