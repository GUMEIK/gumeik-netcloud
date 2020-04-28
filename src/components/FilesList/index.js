import { Table, Tag } from 'antd';
import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Modal, Spin} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import {getFileInfo,deleteFIle} from '../../store/action/fileinfo'
import {store} from '../../store/store'
import {baseurl} from '../../api/baseurl'
import {createPdfchangeurlAction} from '../../store/action/pdfviewer'
import {createVideoUrlSourceAction} from '../../store/action/videoplayer'
import {createPictureUrlSourceAction} from '../../store/action/picture'
const { confirm } = Modal;
function showConfirm(key,path) {
  confirm({
    title: '你确定你想要删除这个文件吗?',
    icon: <ExclamationCircleOutlined />,
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      store.dispatch(deleteFIle(key,path));
    },
    onCancel() {},
  });
}

function download(path,filename){
  fetch(`${baseurl}/download?path=${path}`).then(res=>res.blob()).then(blob=>{
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

const columns = [
  {
    title: '文件名',
    dataIndex: 'filename',
    key: 'filename',
    render: text => <a>{text}</a>,
  },
  {
    title: '文件大小',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: '上传日期',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => {
      // console.log(a,b);
      return a.date- b.date;
    }
  },
  {
    title: '文件类型',
    key: 'tags',
    dataIndex: 'tags',
    render: tag => (
      <span>
        {
            <Tag color="volcano">
              {tag}
            </Tag>
        }
      </span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => {
      // console.log(text,record)
      return (
        <span>
          <a style={{ marginRight: 16 }}
          onClick={()=>{
            showConfirm(record.key,record.path);
          }}
          >删除</a>
          <a onClick={()=>{
            download(record.path,record.filename);
          }}>下载</a>
        </span>
      )
    },
  },
];
/**
 * filename  文件名称
 * size  文件大小
 * date 上传日期
 * tags 文件类型
 * action 操作
 */



class FileList extends Component {
  state = {
    data:[],
    curKey:0,
    isLoading:true
  }
  componentDidMount(){
    this.props.getFileInfo();
    this.setState({
      isLoading:false
    })
  }
    render() {
        return (
          <Spin tip="Loading..."
          spinning={this.state.isLoading}
          >
            <Table columns={columns} 
            style={{
              marginTop:20
            }}
            dataSource={this.props.fileinfo} 
            onRow={record => {
              return {
                onDoubleClick: event => {
                  if(record.tags==="pdf"){
                    const pathstr = record.path;
                    const index = pathstr.lastIndexOf("/");
                    console.log(pathstr[index])
                    let path = pathstr.substring(index);
                    console.log(path)
                    store.dispatch(createPdfchangeurlAction(path));
                  }else if(record.tags === "mp4"){
                    const videourl = `${baseurl}/preview?path=${record.path}`
                    store.dispatch(createVideoUrlSourceAction(videourl));
                  }else if(record.tags === "png" || record.tags === "jpeg" || record.tags === "jpg" || record.tags==="gig"){
                    const pictureUrl = `${baseurl}/preview?path=${record.path}`
                    store.dispatch(createPictureUrlSourceAction(pictureUrl));

                  }
                }, // 点击行
                onClick: event => {

                },
                onContextMenu: event => {},
                onMouseEnter: event => {}, // 鼠标移入行
                onMouseLeave: event => {},
              };
            }}
            />
          </Spin>
        )
    }
}

function mapStateToProps(state){
  return {
    fileinfo:state.fileinfo
  }
}

function mapDispatchToProps(dispatch){
  return {
    getFileInfo(){
      dispatch(getFileInfo())
    },
    deleteFIle(key,path){
      dispatch(deleteFIle(key,path))
    },
    changePDFUrl(url){
      dispatch(createPdfchangeurlAction(url));
    }
  }
}

const hoc = connect(mapStateToProps,mapDispatchToProps);
export default hoc(FileList);

