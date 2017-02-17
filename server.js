var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    
     'article-one' : {
     title: "articleOne|ankita chavan",
     heading:"articleone",
     date:"sept 5 2016",
     content: `
     <p> 
                this is the content for my first article.this is the content for my first article
                this is the content for my first articlethis is the content for my first article
                this is the content for my first article.this is the content for my first article
                </p>
                <p>
                    this is the content for my first article.this is the content for my first article.
                    this is the content for my first article.this is the content for my first article.
                    this is the content for my first article.this is the content for my first article
                </p>
                `,
     
    },
     'article-two' :{
         title: "articleTwo|ankita chavan",
     heading:"articletwo",
     date:"sept 5 2016",
     content: `
     <p> 
                this is the content for my second article.this is the content for my article
                this is the content for my second articlethis is the content for my article
                this is the content for my second article.this is the content for my article
                </p>
                <p>
                    this is the content for my second article.this is the content for my article.
                    this is the content for my second article.this is the content for my article.
                    this is the content for my second article.this is the content for my article
                </p>
                `,
         
     },
     'article-three' :{
         title: "articleThree|ankita chavan",
     heading:"articlethree",
     date:"sept 5 2016",
     content: `
     <p> 
                this is the content for my third article.this is the content for my article
                this is the content for my third articlethis is the content for my article
                this is the content for my third article.this is the content for my article
                </p>
                <p>
                    this is the content for my third article.this is the content for my article.
                    this is the content for my third article.this is the content for my article.
                    this is the content for my third article.this is the content for my article
                </p>
                `,
         
     },
};


function createTemplate(data){
    var title =data.title;
    var date =data.date;
    var heading =data.heading;
    var content =data.content;
    

var htmlTemplate =`
    <html>
    <head>
        <title> $(titlw)</title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>$(heading)</h3>
        <div>
            $(date)
        </div>
        <div>
            $(content)
        </div>
        </div>
    </body>
    
</html>
    
`;
return htmlTemplate;
    
}

    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articlename = req.params.articlename;
   res.sendFile(createTemplate([articleName]));
});

app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
