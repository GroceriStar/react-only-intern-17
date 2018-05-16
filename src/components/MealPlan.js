import React, { Component } from 'react';
import _ from 'lodash';

class MealPlan extends Component {
  state = {
    meal: {},
    meals: [],
    showAddMealMessage: false
  };

  renderMeals() {
        return _.map(this.state.meals, meal => <div><li><h4>Meal:</h4>{meal.theMeal}<h4>Recipe:</h4>{meal.recipe}<br></br>{meal.image}</li></div>);
  }

  componentWillMount() {
   this.setState({meals: [
     {
       theMeal:  "Chicken Alfredo",
       recipe:  "Linguini with Alfredo sauce topped with grilled chicken",
       image:  "<img src='https://hips.hearstapps.com/del.h-cdn.co/assets/18/05/1517437033-delish-instant-pot-chicken-alfredo-still001.jpg' alt='Chicken Alredo' width='150' height='100'>",
     }
   ]});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.meals.length < this.state.meals.length) {
      this.setState({showAddMealMessage: true});
      setTimeout(() => this.setState({showAddMealMessage: false}), 1000);
    }
  }

  render() {
    return(
      <div>
        <h2>Today you should eat this</h2>
        <input
          onChange={e => this.setState({meal: e.target.value})}
          value={this.state.meal.meal}
          type="text"
        />
        <button
          onClick={() => this.setState({meals: [...this.state.meals, this.state.meal]})}>
          Add meal</button>
	{this.state.showAddMealMessage ? <p>New meal added</p> : null}
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}

export default MealPlan;
