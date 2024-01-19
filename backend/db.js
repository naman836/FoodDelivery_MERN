const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://namanpandey:naman123@cluster0.rtvfepn.mongodb.net/?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');  

    const foodItemsCollection = mongoose.connection.db.collection("food_items");
    const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

    const foodItemsData = await foodItemsCollection.find({}).toArray();
    const foodCategoryData = await foodCategoryCollection.find({}).toArray();
 
    global.food_items = foodItemsData;
    global.foodCategory = foodCategoryData;

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToMongoDB;
