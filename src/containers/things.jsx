import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
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
  _onStatsClick = () => {
    this.props.history.push("/stats");
  };
  render() {
    const { isLoading, things, selectedThing } = this.props;
    if (isLoading && things.length === 0) {
      return <Loader />;
    }
    return (
      <div className="container is-fluid section">
        <div className="columns">
          <div className="column is-one-quarter">
            {things.map(thing => (
              <ThingItem
                key={btoa(thing.name)}
                name={thing.name}
                isSelected={this._isSelected(thing)}
                onClick={() => this._onThingItemClick(thing)}
              />
            ))}
          </div>
          {selectedThing && (
            <div className="column is-three-quarters">
              <ThingDetail thing={selectedThing} onStatsClick={this._onStatsClick} />
            </div>
          )}
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Things.defaultProps = {
  selectedThing: null,
  things: [],
};

const withConnect = connect(
  state => ({
    isLoading: reducerHelpers.isLoading(state),
    things: state.things.loadedThings,
    selectedThing: state.things.selectedThing,
  }),
  {
    getThings: thingActions.getThings,
    selectThing: thingActions.selectThing,
  },
);

export default compose(
  withRouter,
  withConnect,
)(Things);
