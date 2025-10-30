# alx-project-0x14

# MoviesDatabase Project

## API Overview

This project uses the **MoviesDatabase API** to fetch rich metadata about movies, TV shows, actors, images, and related content. The API allows you to search by title or ID, retrieve details, credits, popular lists, discover content via filters, and work with images and videos.

## Version

The API version in use is **v3** of The Movie Database API :contentReference[oaicite:0]{index=0}

## Available Endpoints

Here are some of the main endpoints you can use:

| Endpoint                    | HTTP Method | Description                                                     |
| --------------------------- | ----------- | --------------------------------------------------------------- |
| `/movie/{movie_id}`         | GET         | Get full details for a specific movie                           |
| `/movie/{movie_id}/credits` | GET         | Get cast & crew information for a specific movie                |
| `/movie/popular`            | GET         | List currently popular movies                                   |
| `/movie/top_rated`          | GET         | List top rated movies                                           |
| `/movie/now_playing`        | GET         | Movies currently in theaters                                    |
| `/search/movie`             | GET         | Search movies by title (partial matches)                        |
| `/genre/movie/list`         | GET         | List all movie genres                                           |
| `/discover/movie`           | GET         | Find movies by filter criteria (e.g. year, genre, sort options) |
| `/tv/{tv_id}`               | GET         | Get details of a TV show                                        |
| `/person/{person_id}`       | GET         | Get details about an actor / person                             |
| `/search/person`            | GET         | Search for people by name                                       |

_(Note: This is not the full list — the API offers many more, including image operations, account & lists, and more.)_ :contentReference[oaicite:1]{index=1}

### Example Endpoint Detail

**Search Movies**

- **Path:** `/search/movie`
- **Method:** GET
- **Query Parameters (some):**  
  • `api_key` _(required)_ — your API key  
  • `query` _(required)_ — the title search string  
  • `page` — page number for pagination  
  • `language` — language for results (e.g. `en-US`)
- **Sample Request:**

```text
GET https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=Inception&page=1&language=en-US
```
