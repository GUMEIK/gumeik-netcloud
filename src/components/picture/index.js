import { Modal } from 'antd';
import React from 'react'
import {store} from '../../store/store'
import {pictureShowAction,pictureHideAction} from '../../store/action/picture'
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
    return (
      <div>
        <Modal
          title="谷美-图片查看页"
          visible={this.props.isShowModal}
          // visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: true }}
          cancelButtonProps={{ disabled: true }}
          width="80%"
        footer={null}
        >
              <img
                src={this.props.source}
                controls
                style={{
                    width:"100%"
              }}
            ></img>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      isShowModal:state.pictureControl.isShowModal,
      source:state.pictureControl.url
  }
}
function mapDispatchToProps(dispatch){
  return {
      show(){
          dispatch(pictureShowAction);
      },
      hide(){
          dispatch(pictureHideAction);
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


