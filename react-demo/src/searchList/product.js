import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';

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
               value={this.props.filterText}
               onChange={(e) => this.props.onInputChange(e.target.value)}/>
        <label>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={(e) => this.props.onCheckBoxChange(e.target.checked)}/>
          only show products in stock
        </label>
      </div>
    )
  }
}

class ListName extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.name + 'init');
    return (
      <li className={"title"}>{this.props.name}</li>
    )
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.name + 'init');
    let name = this.props.isStocked ? <span>{this.props.name}</span> : <span className={"light"}>{this.props.name}</span>
    return (
      <li>{ name }<span>{this.props.price}</span></li>
    )
  }
}

class SearchList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const value = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    const rows = [];
    let lastCategory = null;
    this.props.products.forEach(item => {
      if(!item.name.includes(value)) {
        return;
      }
      if(inStockOnly && !item.stocked) {
        return;
      }
      if(item.category !== lastCategory) {
        rows.push(
          <ListName name={item.category} key={item.category}/>
        )
      }
      rows.push(
        <ListItem
          name={item.name}
          price={item.price}
          isStocked={item.stocked}
          key={item.name}
        />
      );
      lastCategory = item.category;
    });
    console.log('searchListInit');
    return (
      <ul>
        <li><span>name</span><span>price</span></li>
        { rows }
      </ul>
    )
  }
}


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: 'h',
      inStockOnly: false,
    }
  }
  hanleInputChange(value) {
    this.setState({
      filterText: value
    })
  }
  handleCheckboxChange(checked) {
    this.setState({
      inStockOnly: checked
    })
  }
  render() {
    return (
      <div className={"list-wrap"}>
        <SearchInput
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onInputChange={(value) => this.hanleInputChange(value)}
          onCheckBoxChange={(checked) => this.handleCheckboxChange(checked)}/>
        <SearchList
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }

}

const Products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
ReactDOM.render(
  <Main products={Products}/>,
  document.getElementById('root')
)

