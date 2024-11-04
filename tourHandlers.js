const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    res.json(Tour.getAll())
};

const createTour = (req, res) => {
    const {name, info, image, price} = req.body
    const newTour = Tour.addOne(name, info, image, price)
    if (newTour){
        res.status(201).json(newTour)
    } else {
        res.status(400).json("Failed to create tour")
    }
};

const getTourById = (req, res) => {
    const tourId = req.params.tourId
    const tour = Tour.findById(tourId)
    if (tour){
        res.json(tour)
    } else {
        res.status(404).json("Failed to find tour")
    }
};

const updateTour = (req, res) => {
    const tourId = req.params.tourId
    const {name, info, image, price} = req.body
    const updatedTour = Tour.updateOneById(tourId, {name, info, image, price})
    if (updatedTour){
        res.json(updatedTour)
    } else {
        res.json("Failed to update tour")
    }
};

const deleteTour = (req, res) => {
    const tourId = req.params.tourId;
    const isDeleted = Tour.deleteOneById(tourId);
    if (isDeleted){
        res.status(204).json(`Tour with id of ${tourId} deleted `)
    } else {
        res.status(404).json("Failed to delete tour")
    }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};