//declaring the module 'mongoose'
var mongoose=require('mongoose');
//creating an instance of mongoose
var Schema=mongoose.Schema;

//defining schema for comments...
var Comments = new Schema({
    commenterName     :  {type:String,default:''}, 
    commentBody       :  {type:String,default:''},
    commented_on      :  {type:Date},
    commentTime		  :  {type:String,default:''} 
});
//end of defining schema for comments...


//defining an Schema for blog...
var blogSchema=new Schema({
	blogTitle        :     {type:String,default:'',required:true},
	authorName 		 :     {type:String,default:'',required:true},
	blogBody         :     {type:String,default:'',required:true},
	created_on       :     {type:Date},
	updated_on       :     {type:Date},
	comments         :     [Comments],
	aboutAuthor      :     {type:String,default:''}

});
//end of defining schema for blog...


mongoose.model('blog',blogSchema);