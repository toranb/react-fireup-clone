var Link = ReactRouter.Link;

var Tables = React.createClass({
    indexTemplate: function() {
      return <h2>Please select a table</h2>
    },
    render: function() {
        var links = tables.map(function(table) {
          return <Link to="table" table_id={table.id} className="panel six columns">{table.id}</Link>
        });
        return (
          <div className="row">
            <div className="twelve rows">
              <h1>Ordr</h1>
              <hr />
              <div className="row">
                <div id="tables" className="four columns">
                  <h2>Tables</h2>
                  {links}
                </div>
                <div id="order" className="eight columns">
                  {this.props.activeRouteHandler() || this.indexTemplate()}
                </div>
              </div>
            </div>
          </div>
        )
    }
});

export default Tables;
