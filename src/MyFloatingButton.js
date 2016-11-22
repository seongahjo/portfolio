import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
const style ={
  position : 'fixed',
  bottom: '20px',
  right: '20px',
}
  class MyFloatingButton extends React.Component{
    render(){
      return(
    <FloatingActionButton style={style}>
      <ContentAdd/>
    </FloatingActionButton>
  )
}
}
export default MyFloatingButton;
