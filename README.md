presentation https://docs.google.com/presentation/d/1oinLmplCEw_zNcolTltn1gSCX6exBLSucOoXjYfxS4Y/

1. Demonstrate the different components (`MyList`, `MovieList`, `MovieDetail`) by manually rendering them

2. Create a Router

   `index.js`

   ```jsx
   import { BrowserRouter } from 'react-router-dom';
   ...
   <BrowserRouter>
       <App />
   </BrowserRouter>), document.getElementById('root'));
   ...
   ```

3. Add a route to `mylist`

   `App.js`

   ```jsx
   import {Route} from "react-router-dom";
   ...
   <Route path="/mylist" component={MyList}/>
   ```

4. Change the link in the navbar to a `Link` then to a `NavLink`

   `Navbar.js`

   ```jsx
   <a className="nav-item nav-link text-light" href="/mylist">
     My List
   </a>
   ```

   to

   ```jsx
   import {Link} from "react-router-dom";
   ...
   <Link className="nav-item nav-link text-light" to="/mylist">My List</Link>
   ```

   to

   ```jsx
   import {NavLink} from "react-router-dom";
   ...
   <NavLink className="nav-item nav-Nav text-light" to="/mylist">My List</NavLink>
   ```

5. change the brand to a regular `Link`
   `Navbar.js`

   ```jsx
   <Link className="navbar-brand" to="/">
     Not IMDB
   </Link>
   ```

6. Add the switch and the route to home. Explain `render`. Explain the order in a switch. Explain `exact`.

   `App.js`

   ```jsx
   import { Route, Switch } from "react-router-dom";
   ...
   <Switch>
     <Route path="/mylist" component={MyList} />
     <Route path="/" render={props => <MoviesList movies={movies} />} />
   </Switch>;
   ```

7. Change the link on the card. Show what it's doing (changing the address and show the anchor tag reloading ).

   `MovieCard.js`

   ```jsx
   <a href={`/movies/${movie.id}`} className="btn btn-outline-info">
     More Details
   </a>
   ```

   to

   ```jsx
   import {Link} from 'react-router-dom';
   ...

   <Link to={`/movies/${movie.id}`} className="btn btn-outline-info">More Details</Link>
   ```

8. Add a parametrized route

   `App.js`

   ```jsx
   <Switch>
     <Route path="/mylist" component={MyList} />
     <Route path="/movies/:movieId" render={MovieDetails} />
     <Route path="/" render={props => <MoviesList movies={movies} />} />
   </Switch>
   ```

9. Use the param in the detail page. Explain that we need the `+` in `movie.id === +movieId` because `movieId` coming from the url is a string but `movie.id` is a number.

   `MovieDetail.js`

   ```jsx
   ...
   function MovieDetail(props)
   ...
   const movieId = props.match.params.movieId;
   const movie = movies.find(movie=> movie.id === +movieId)
   ```

10. Add a redirect if the page is not found (mention that if `path="/"` is not exact it will never go to redirect

    `App.js`

    ```jsx
    import { Route, Switch, Redirect } from "react-router-dom";
    ...

    <Switch>
        <Route path="/mylist" component={MyList}/>
        <Route path="/movies/:movieId" render={props => <MovieDetails {...props}/>} />
        <Route path="/not-found" render={props => <h1>Not found</h1>} />
        <Route path="/" render={props => <MoviesList movies={data} />} />
        <Redirect to="/not-found" />
    </Switch>
    ```
