import React, { useEffect, useState } from "react";
import LogItem from "./LogItem";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

// after bring the action in the component, it acts as a props
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

// anything want to bring from state to components
const mapStateToProps = (state) => ({
  // log is the prop, state.log is the log state, log is specified in combinedReducer
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
