import React from 'react'
import { Button, Card, Image, Icon, Item, Segment } from 'semantic-ui-react'

const FoodTabContent = (props) => (
  <Segment.Group>
    {props.restaurantList.map((restaurant, index) => {
      return (
      <Card fluid key={restaurant.id}>
        <Item.Group>
          <Item>
            <Item.Image className='restaurant-image'
              size='small'
              src={ restaurant.image_url }
              style={ {margin: 15} }
            />
            <Item.Content>
              <Item.Header style={ {marginTop: 20} } className='restaurant-name'>{ `${index + 1}. ${restaurant.name}` }</Item.Header>
              <Item.Image>
                <span className='restaurant-rating'>
                  <Image 
                    src={`/media/yelp_stars/regular_${(restaurant.rating).toString().replace('.5', '_half')}.png`} 
                  />
                </span>
                <span style={ {marginLeft: 5} } > {restaurant.review_count} reviews</span>
              </Item.Image>
              <Item.Description>
                { restaurant.location.display_address.map(address => { 
                   return address
                }).join(', ') } 
              </Item.Description>
              <Item.Extra>
                { restaurant.price ? 
                  ( <span>{restaurant.price }</span> ) : '---'
                }
                <span style={ {paddingLeft: 5}}>{` ● `}</span>
                <Icon name='food' fitted style={ {paddingLeft: 10}}/> {restaurant.categories.map(category => { 
                  return category.title
                }).join(', ')}
                <Button icon floated='right' basic color='red' style={ {marginRight: 20} } >
                  <Icon style={ {color: 'red'} } name="empty heart" />
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Card>
      )
    })}
  </Segment.Group>
)

export default FoodTabContent;
