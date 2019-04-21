import React from 'react';

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSchoolsThisWeek } from "../../redux/actions/scoreActions";

class TopSchools extends React.Component {


  componentWillMount() {
    this.props.getSchoolsThisWeek()
  }


  render() {

    const top = this.props.popularSchools.slice(0,this.props.limit)

  
    return(
      <div className="card bg-light mb-3">
      <div className="card-body">
        <h4 className="card-title">Top {this.props.limit} etablissments cette semaine</h4>
        <div className="card-text">
        <table className="table table-striped">

  <tbody>
    {top.map((score,index) => {return <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{score.school.name}</td>
      <td>{score.total_score} points</td>
    </tr>})}
    
  </tbody>
</table>
        
        </div>
      </div>
    </div>
    )

  }}

  TopSchools.propTypes = {
    popularSchools: PropTypes.array.isRequired,
    getSchoolsThisWeek: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    popularSchools: state.score.popularSchools
  });
  
  export default connect(
    mapStateToProps,
    { getSchoolsThisWeek }
  )(TopSchools);
  