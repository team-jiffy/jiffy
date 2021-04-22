# Jiffy

<img src="https://github.com/team-jiffy/pic/blob/main/jiffy-demo.gif" width=1000>

  
## Router file loading completed
Routes shows in ReactRouter.js
Please use < Link to="/page"> </ Link> to connect the target page.



## React-router-demo
a demo about page switch
+ Set < BrowserRoutr> in index.js, and import a routes control file.

+ Set < Switch> in the routes files to define every path and related page file.

    + exact: boolean  
    When true, will only match if the path matches the location.pathname exactly.

    + component:  
    A React component to render only when the location matches. It will be rendered with route props.

+ Set < Link> in every page, which has buttons or others to switch to another page.
