# Hello there

Blogpost github graph — is small react component for rendering your blog articles on graph à la Github contribution chart.

![basic component view](https://github.com/zlydenko/blogpost-github-graph/blob/master/screenshots/basic.png "basic component view")

Just install component via npm:

```
npm install blogpost-github-graph
```

and import in your existing React application:

```javascript
import PostsGraph from "blogpost-github-graph";
```

## Configuration

For making it works you need to pass down to component your data. Fetch your articles data outside of component, next you need to map through your JSON response and clean all unnecessary stuff. PostsGraph need array of objects with a timestamp for each post:

```javascript
[
  {
    postId: 1,
    timestamp: 1523739600000
  },
  {
    postId: 2,
    timestamp: 1523739600000
  },
  {
    postId: 3,
    timestamp: 1523826000000
  },
  {
    postId: 4,
    timestamp: 1524258000000
  },
  {
    postId: 5,
    timestamp: 1524258000000
  }
];
```

Next, pass this data to PostsGraph component via prop data:

```
<PostsCalendar data={posts} />
```

You need specify which key is a timestamp, so tell this to component too:

```
<PostsCalendar data={posts} timestampId={"timestamp"}/>
```

## Customize colors

![wowmuchstyle](https://github.com/zlydenko/blogpost-github-graph/blob/master/screenshots/wowmuchstyle.png "wowmuchstyle")

If you want to customize graph colors, you need to pass config to your component:

```javascript
const colorsConfig = {
  none: "navy", //no posts in this day
  one: "red", //1 post in this day
  few: "yellow", //less than 3 posts this day
  alot: "lightgreen", //more than 3 posts
  border: true, //border outside graph
  font: "cyan", //main font color
  "border-color": "magenta", //color of border
  bg: "gold" //background of element
};
```

Provide only those properties, which you want to change!
