import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const postList = [
  {
    id: 'react', title: '标题1', author: '张三',
  },
  {
    id: 'vue', title: '标题2', author: '张四',
  },{
    id: 'dom', title: '标题3', author: '张五',
  }
];

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {...props.post},
      isEdit: false,
    }
  }
  handleEditPost() {
    if(this.state.isEdit) {
      this.props.onSave(this.state.post)
    }
    this.setState(state => (
      {
        isEdit: !state.isEdit
      }
    ));
  }
  handleTitleChange(value) {
    this.setState((state) => ({
      post: {...state.post, title: value}
    }))
  }
  render() {
    const post = this.state.post;
    return (
      <li className="item">
        <div className="title">
          {this.state.isEdit
            ? <textarea
                value={post.title}
                onChange={(e) => this.handleTitleChange(e.target.value)}
              />
            : post.title}
        </div>
        <div>
          创建人：<span>{post.author}</span>
        </div>
        <div>
          <button onClick={() => this.handleEditPost()}>
            {this.state.isEdit ? "保存" : "编辑"}
          </button>
        </div>
      </li>
    )
  }
}
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: postList,
    }
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(post) {
    const posts = this.state.list.map(item => {
      const newItem = item.id === post.id ? post : item;
      return newItem;
    })
    this.setState({
      list: posts
    });
  }
  render() {
    console.table(this.state.list)
    return (
      <div className='container'>
        <h2>帖子列表</h2>
        <ul>
          {this.state.list.map(item =>
            <PostItem
              key = {item.id}
              post={item}
              onSave = {this.handleSave}
            />
          )}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<PostList />, document.getElementById('root'));
