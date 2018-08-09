import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import ThingItem from "components/thingItem";
import ThingDetail from "components/thingDetail";
import Loader from "components/loader";
import * as thingActions from "actions/things";
import * as reducerHelpers from "reducers";

class Things extends React.Component {
  componentDidMount() {
    this.props.getThings();
  }
  _isSelected = thing => this.props.selectedThing !== null && this.props.selectedThing.name === thing.name;
  _onThingItemClick = thing => {
    this.props.selectThing(thing);
  };
  render() {
    const { isLoading, things, selectedThing } = this.props;
    if (isLoading && things.length === 0 && selectedThing === null) {
      return <Loader />;
    }
    let thingItems;
    if (isLoading && things.length === 0) {
      thingItems = <Loader />;
    } else {
      thingItems = things.map(thing => (
        <ThingItem
          key={btoa(thing.name)}
          name={thing.name}
          isSelected={this._isSelected(thing)}
          onClick={() => this._onThingItemClick(thing)}
        />
      ));
    }
    const thingDetail = selectedThing && <ThingDetail thing={selectedThing} />;
    return (
      <div className="container is-fluid section">
        <div className="columns">
          <div className="column is-one-quarter">{thingItems}</div>
          <div className="column is-three-quarters">{thingDetail}</div>
        </div>
      </div>
    );
  }
}

Things.propTypes = {
  getThings: PropTypes.func.isRequired,
  selectThing: PropTypes.func.isRequired,
  selectedThing: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
  things: PropTypes.arrayOf(PropTypes.shape({})),
};

Things.defaultProps = {
  selectedThing: null,
  things: [],
};

export default withRouter(
  connect(
    state => ({
      isLoading: reducerHelpers.isLoading(state),
      things: state.things.loadedThings,
      selectedThing: state.things.selectedThing,
    }),
    thingActions,
  )(Things),
);
