import Table from 'app/table';
import Tables from 'app/tables';

var Route = ReactRouter.Route;
var Routes = ReactRouter.Routes;

var NotFound = React.createClass({
    render: function() {
        return <div>404 son!</div>
    }
});

var Router = (
  <Routes>
    <Route handler={Tables}>
      <Route name="table" path="/table/:table_id" handler={Table}/>
    </Route>
    <Route path="*" handler={NotFound}/>
  </Routes>
)

export default Router;
