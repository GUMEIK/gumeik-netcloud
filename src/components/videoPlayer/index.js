import { Modal } from 'antd';
import React from 'react'
import {store} from '../../store/store'
import {videoHideAction,videoShowAction} from '../../store/action/videoplayer'
class ModalCom extends React.Component {
//   state = { visible: true };
  showModal = () => {
    // this.setState({
    //   visible: true,
    // });
    this.props.show && this.props.show();
  };

  handleOk = e => {
    // console.log(e);
    // this.setState({
    //   visible: false,
    // });
    this.props.hide && this.props.hide();
  };

  handleCancel = e => {
    // console.log(e);
    // this.setState({
    //   visible: false,
    // });
    // store.dispatch({
    //   type:"hide"
    // })
    this.props.hide && this.props.hide();
  };

  render() {
      let height = document.documentElement.clientHeight;
    return (
      <div>
        <Modal
          title="谷美-视频播放页"
          visible={this.props.isShowModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
          width="80%"
        footer={null}
        // 关闭窗口时销毁子元素
        destroyOnClose={true}
        >
              <video
                src={this.props.source}
                controls
                style={{
                    width:"100%",
                    height:height*0.85
              }}
            ></video>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      isShowModal:state.videoControl.isShowModal,
      source:state.videoControl.url
  }
}
function mapDispatchToProps(dispatch){
  return {
      show(){
          dispatch(videoShowAction);
      },
      hide(){
          dispatch(videoHideAction);
      }
  }
}

export default class ModalComWrapper extends React.Component{
  state = mapStateToProps(store.getState())
  constructor(props){
      super(props);
      store.subscribe(()=>{
          console.log(store.getState())
          this.setState(mapStateToProps(store.getState()));
      })
  }
  render(){
      const event = mapDispatchToProps(store.dispatch)
      return (
              <ModalCom  {...this.state} {...event}/>
      )
  }
}


