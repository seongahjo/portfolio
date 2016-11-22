import React from 'react'
import MyFloatingButton from './MyFloatingButton'
import Card from './card'
class Content extends React.Component {

    render() {
      let projects=[
        {name : 'Teamkerbell', description : '대학생들을 위한 조별과제 서포트 애플리케이션'},
        {name : 'Clicker', description: '간단한 터치를 통한 게임'}
      ]
      var project=projects.map((project)=>{
          return (
            <Card project={project} text="test" />
          )
      })
      return (
          <div>
            {project}
            <MyFloatingButton / >
          </div>
        )
    }
}
export default Content;
