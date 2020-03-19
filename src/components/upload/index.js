import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import React, { Component } from 'react'
import {store} from '../../store/store'
import {getFileInfo} from '../../store/action/fileinfo'
import {baseurl} from '../../api/baseurl'
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  director:true,
  showUploadList:true,//是否显示上传文件列表
  action: `${baseurl}/upload`,//请求接口地址
  name:"fileName",//表单域名称(与后台配合)
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} 文件上传成功！.`);
      store.dispatch(getFileInfo());
    } else if (status === 'error') {
      message.error(`${info.file.name} 文件上传失败.`);
    }
    // console.log(info)
  },
};
export default class UploadCom extends Component {
    render() {
        return (
            <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击上传或将文件拖放到该区域上传</p>
            <p className="ant-upload-hint">
              双击可预览该行的文件，目前仅支持<strong> PDF</strong> 格式的文档预览
            </p>
          </Dragger>
        )
    }
}




