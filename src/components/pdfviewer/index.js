import { Modal, Button } from 'antd';
import React, { Component } from 'react'
import {pdfhideAction,pdfShowAction,createPdfchangeurlAction}from '../../store/action/pdfviewer'
// import {store} from '../../store/store'
import {connect} from 'react-redux'
import {baseurl} from '../../api/baseurl'
class ModalCom extends React.Component {
//   state = { visible: false };
  showModal = () => {
    // this.setState({
    //   visible: true,
    // });
    this.prop.showPDF && this.props.showPDF();
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.hidePDF && this.props.hidePDF();
  };

  handleCancel = e => {
    console.log(e);
    // this.setState({
    //   visible: false,
    // });
    this.props.hidePDF && this.props.hidePDF();
  };

  render() {
    const height = document.documentElement.clientHeight;
    const baseurlDev = `${baseurl}/web/viewer.html?file=../file`
    // /home/gumeik/桌面/uploadAndDowload/public/file/edu.pdf
    console.log(`${baseurlDev}${this.props.pdfurl}222`)
    console.log(this.props.pdfurl)
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button> */}
        <Modal
          title="PDF文档预览-gumeik"
          visible={this.props.isShowPDF}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="85%"
          height={700}
          footer={null}
          bodyStyle={{
              padding:0,
              marginTop:0
          }}
        >
          <iframe                 
                src={`${baseurlDev}${this.props.pdfurl}`}
                style={{width:"100%",height:height*0.7}}
             ></iframe>
        </Modal>
      </div>
    );
  }
}


function mapStateToProps(state){
    return{
        isShowPDF:state.pdfcontrol.show,
        pdfurl:state.pdfcontrol.url
    }
  }
  function mapDispatchToProps(dispatch){
    return {
        showPDF(){
            dispatch(pdfShowAction);
        },
        hidePDF(){
            dispatch(pdfhideAction);
        }
    }
  }

  const hoc = connect(mapStateToProps,mapDispatchToProps);
  export default hoc(ModalCom)