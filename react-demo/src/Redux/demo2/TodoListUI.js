import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';


export const TodoListUI = (props) => {
    return (
      <div style={{margin: '10px'}}>
        <div>
          <Input
            placeholder={props.inputValue}
            style={{width: '250px', marginRight: '10px'}}
            onChange={props.changeInputValue}
            value={props.inputValue}
          />
          <Button type="primary" onClick={() => props.onAdd()}>增加</Button>
        </div>
        <div style={{marginTop: '10px', width: '500px'}}>
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => props.deleItem(index)}
              >{item}</List.Item>
            )
            }
          />
        </div>
      </div>
    );
}
// class TodoListUI extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div style={{margin: '10px'}}>
//         <div>
//           <Input
//             placeholder={this.props.inputValue}
//             style={{width: '250px', marginRight: '10px'}}
//             onChange={this.props.changeInputValue}
//             value={this.props.inputValue}
//           />
//           <Button type="primary" onClick={() => this.props.onAdd()}>增加</Button>
//         </div>
//         <div style={{marginTop: '10px', width: '500px'}}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item
//                 onClick={() => this.props.deleItem(index)}
//               >{item}</List.Item>
//             )
//             }
//           />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default TodoListUI
