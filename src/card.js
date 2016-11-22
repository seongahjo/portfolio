import React from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
const style={
  marginTop:'7px'
}
class CardExampleWithAvatar extends React.Component {
    render(){
        return (
            <Card style={style}>

              <CardTitle title={this.props.project.name} subtitle={this.props.project.description}/>
                <CardText>
                    {this.props.text}
                </CardText>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        )
    }
}

export default CardExampleWithAvatar;
