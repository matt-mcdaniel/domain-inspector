import React from 'react';
import {connect} from 'react-redux';
import Filterable from './Filterable';

import domains from '../../reducers/domain';
import { getVisibleDomains } from '../../reducers/domain';

const mapStateToProps = (state) => {
    return {
        domains: getVisibleDomains(state),
        popular: getVisibleDomains(state, 'popular'),
        novelty: getVisibleDomains(state, 'novelty')
    }
};

const FilterableContainer = connect(
    mapStateToProps
)(Filterable);

export default FilterableContainer;



