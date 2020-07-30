const fs = require('fs');

fs.readdir(`${__dirname}/articles`, (err, files) => {
  const blogList = [];
  const tags = {};
  if (err) {
    console.log(err);
  } else {
    files.forEach(file => {
      let blogInfo = file.slice(0, -3).split('-');
      blogList.push({
        fileName: file,
        time: `${blogInfo[0].substring(0, 4)}-${blogInfo[0].substring(4, 6)}-${blogInfo[0].substring(6)}`,
        title: blogInfo[1],
        tags: blogInfo.slice(2),
      });
      blogInfo.slice(2).forEach(tag => {
        if (!tags[tag]) {
          tags[tag] = true;
        }
      })
    });
  }
  const jsonString = JSON.stringify({
    blogList,
    tags: Object.keys(tags),
  });
  fs.writeFile(`${__dirname}/siteData.json`, jsonString, err => {console.log(err);});
});
