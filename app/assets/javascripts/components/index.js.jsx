Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() };
  },

  _onChange: function() {
    this.setState( {benches: BenchStore.all()} );
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div className="index" id="index">
        <h3>Benches ({this.state.benches.length})</h3>
        <ul>
            { this.state.benches.map(function(bench){
                  return (<ul className="bench" key={bench.id}>
                            <label className="benchlabel">Description</label>
                              <li className="benchdetail">{bench.description}</li>
                            <label className="benchlabel">Location</label>
                              <li className="benchdetail">{bench.lat + ", " + bench.lng}</li>
                         </ul>);
              })
            }
        </ul>
      </div>
    );
  }
});
