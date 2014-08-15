var Table = React.createClass({
  getInitialState: function() {
    var table;
    var table_id = this.props.params.table_id;
    tables.forEach(function(model) {
      if(model.id == table_id) {
        table = model;
      }
    });
    return {
      table: table
    }
  },
  addFood: function(id) {
    var food;
    foods.forEach(function(model) {
      if(model.id == id) {
        food = model;
      }
    });
    var table = this.state.table;
    table.foods.push(food);
    this.setState({table: table});
  },
  getTotal: function() {
    return this.state.table.foods.reduce(function(total, food) {
      return total + food.cost;
    }, 0);
  },
  render: function() {
    var links = foods.map(function(food) {
      return <li><a onClick={this.addFood.bind(this, food.id)}><img src={food.image_url} /><p>{food.name}</p></a></li>
    }.bind(this));
    var selected;
    if (this.state.table.foods.length > 0) {
      selected = this.state.table.foods.map(function(item) {
        return <li><h3>{item.name} <span className="right">{item.cost}</span></h3></li>
      });
    }else{
      selected = <h2>Please select a food</h2>
    }
    return (
      <div className="row">
        <div className="three columns">
          <ul id="menu">
            {links}
          </ul>
        </div>
        <div className="nine columns">
          <h2>Table <span className="identifier">{this.props.params.table_id}</span></h2>
          <ul id="customer-tab">
            {selected}
            <li id="total"><h3>Total <span className="right">${this.getTotal()}</span></h3></li>
          </ul>
        </div>
      </div>
    )
  }
});

export default Table;
