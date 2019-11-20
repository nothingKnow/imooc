import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';

//state最小化的好处？
//searchList 和 productList 哪个更快。应该是 productList，那为什么呢
//


class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('SearchInputInit');
    return (
      <div>
        <input type="text" placeholder="search..."
               className={"search-input"}
               onChange={(e) => this.props.onInputChange(e.target.value)}/>
        <label>
          <input type="checkbox" onChange={(e) => this.props.onCheckBoxChange(e.target.checked)}/>
          only show products in stock
        </label>
      </div>
    )
  }
}

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('SearchListInit');
    const list = this.props.list;
    let obj = {};
    list.forEach(item => {
      if(obj[item.category]) {
        obj[item.category].push(item);
      }else {
        obj[item.category] = [item];
      }
    });
   return (
     Object.keys(obj).map(key => {
         const list = obj[key];
         const item = list.map(item =>
           <li key={item.name}><span className={item.stocked ? '': 'light'}>{item.name}</span><span>{item.price}</span></li>
         );
         return (
           <ul>
             <li key={key} className={"title"}>{key}</li>
             {item}</ul>
         );
       })
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allList: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ],
      list: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ],
    }
  }
  hanleInputChange(value) {
    const list = this.state.allList.filter(item =>
      item.name.includes(value)
    );
    this.setState({
      list: list
    });
  }
  handleCheckboxChange(checked) {
    if(checked) {
      this.setState({
        list: this.state.allList.filter(item => item.stocked)
      })
    }else {
      this.setState((state) => ({
          list: state.allList
      }))
    }
  }
  render() {
    return (
      <div className={"list-wrap"}>
        <SearchInput
          onInputChange={(value) => this.hanleInputChange(value)}
          onCheckBoxChange={(checked) => this.handleCheckboxChange(checked)}/>
        <SearchList list={this.state.list}/>
      </div>
    )
  }
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
