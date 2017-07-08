var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		name: "Desert Mesa",
		image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		name: "Canyon Floor",
		image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}			
]

function seedDb(){
	//Remove all campgrounds
	Campground.remove({},function(err, campground){
		// if(err){
		// 	console.log(err);
		// }else{
		// 	console.log("Removed campgrounds!");
		// 	//add a few campgrounds
		// 	data.forEach(function(seed){
		// 		Campground.create(seed, function(err, campground){
		// 			if(err){
		// 				console.log(err);
		// 			}else{
		// 				console.log("Added a campground!");
		// 				//add a comment
		// 				Comment.create(
		// 				{
		// 					text: "This place is great, but i wish there was internet",
		// 					author: "Homer"
		// 				},function(err, comment){
		// 					if(err){
		// 						console.log(err);
		// 					}else{
		// 						campground.comments.push(comment);
		// 						campground.save();
		// 						console.log("Created a new comment");
		// 					}
		// 				});
		// 			}
		// 		});
		// 	});
		// }
	});
}

module.exports = seedDb;