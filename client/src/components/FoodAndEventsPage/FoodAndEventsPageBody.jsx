import React from 'react';
import FoodTabContent from './FoodTabContent.jsx';
import EventsTabContent from './EventsTabContent.jsx';
import { Tab } from 'semantic-ui-react';
import $ from 'jquery';


class FoodAndEventsPageBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantList: [],
      location: 'San Francisco'
    };
  }

  componentDidMount() {
    this.getRestaurantsByLocaton(this.state.location);
  }

  getRestaurantsByLocaton(location) {
    console.log('test!!')
    $.ajax({
      type: 'GET',
      url: `/restaurants/${location}`,
      success: result => {
        console.log('result', result);
        this.setState({
          restaurantList: result.businesses
        }
      );    
      }
    });
  }


  render() {
    const panes = [
      { menuItem: 'Restaurants', render: () => 
        <Tab.Pane>
          <FoodTabContent 
            restaurantList = {this.state.restaurantList}
          />
        </Tab.Pane> },
      { menuItem: 'Events', render: () => <Tab.Pane><EventsTabContent /></Tab.Pane> }
    ]
    return (
      <div>
        <Tab panes={panes} />
      </div>
    );
  }
}

export default FoodAndEventsPageBody
