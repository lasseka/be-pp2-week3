let tourArray = [];
let nextId = 1;

function getAll(){
    return tourArray
}

function addOne(name, info, image, price){
    if (!name || !info || !image || !price){
        return false;
    }
    const newTour = {
        id: nextId++,
        name,
        info,
        image,
        price,
       };
       tourArray.push(newTour)
       return newTour;
}

function findById(id){
    const tour = tourArray.find(tour => tour.id == id)
    if (tour){
        return tour;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData){
    const tour = findById(id)
    if (tour){
        if (updatedData.name){
            tour.name = updatedData.name
        }
        if (updatedData.info){
            tour.info = updatedData.info
        }
        if (updatedData.image){
            tour.image = updatedData.image
        }
        if (updatedData.price){
            tour.price = updatedData.price
        }
        return tour;
    }
    return false;
}

function deleteOneById(id){
    const tour = findById(id)
    if (tour){
        const initialLength = tourArray.length;
        tourArray = tourArray.filter(tour => tour.id != id);
        return tourArray.length < initialLength
    }
    return false;
}


if (require.main === module) {
    let result = addOne("7 Days Tour"," Join us for the Best of Helsinki!","https://www.course-api.com/images/tours/tour-x.jpeg", "1,495");
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    console.log("updateOne called:", updateOneById(1, {name: jabba, price:3000}))
    console.log("findById after updating: ", findById(1))
    console.log("deleteOneById: ", deleteOneById(1))
   }

module.exports = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
}
