import React from "react";
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionOverview from "../../components/collection-overview/collectionoverview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
state = {
  loading : true
};

  unsubscribeFromSnaphot = null;

  componentDidMount(){
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render(){
    const { match } = this.props;
    const { loading } = this.state;
    return(
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={ (props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } />
        <Route path={`${match.path}/:collection`} render={ (props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> } />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);
