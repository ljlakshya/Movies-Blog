var bodyParser = require('body-parser');
var fl2=0;
var data = [{id :'abc',pass :'abb'},{id :'xyz',pass :'xyy'}];
var movies =[{mov:'ghajini',details:'Film released in 2008'},{mov:'sanam',details:'Film released in 2016'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(blog){

  blog.get('/',function(req,res){
    res.render('login');
    fl2=0;
  });

blog.post('/',urlencodedParser,function(req,res){
  var i=0; var fl1=0;
  for(i=0;i<data.length;i++)
  {
    if(data[i].id == req.body.id && data[i].pass == req.body.pass )
    {
      console.log(req.body.pass);
      fl1=1;
      fl2=1;
        res.redirect('/blogs');
      break;
    }
  }
if(fl1==0)
{
  console.log("login failed");
}
});

blog.get('/blogs',function(req,res){
  if(fl2==1){
  res.render('allblogs', {movie : movies});
}

else{
  res.end("You are not logged in");
}
});

blog.post('/blogs',urlencodedParser,function(req,res){
movies.push(req.body);
console.log(req.body);
console.log(movies);
res.redirect('/blogs');
});

blog.delete('/blogs/:movv',function(req,res){
console.log(movies);
 movies = movies.filter(function(blogs){
  return blogs.mov.replace(/ /g,'-') !== req.params.movv;
});

});

}
