const fs = require('fs');

fs.readdir(`${__dirname}/articles`, (err, files) => {
  const blogList = [];
  if (err) {
    console.log(err);
  } else {
    files.forEach(file => {
      let blogInfo = file.slice(0, -3).split('-');
      blogList.push({
        time: `${blogInfo[0].substring(0, 4)}-${blogInfo[0].substring(4, 6)}-${blogInfo[0].substring(6)}`,
        title: blogInfo[1],
        tags: blogInfo.slice(2),
      });
    });
  }
  const jsonString = JSON.stringify(blogList);
  fs.writeFile(`${__dirname}/blogList.json`, jsonString, err => {console.log(err);});
});
