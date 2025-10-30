import { MoviesProps } from "@/interfaces";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    try {
      const { year, page, genre } = request.body;
      const date = new Date();

      const params = new URLSearchParams({
        year: String(year || date.getFullYear()),
        sort: "year.decr",
        limit: "12",
        page: String(page),
      });

      if (genre && genre !== "All") params.append("genre", genre);

      const url = `https://moviesdatabase.p.rapidapi.com/titles?${params.toString()}`;

      const resp = await fetch(url, {
        headers: {
          "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
          "x-rapidapi-key": process.env.MOVIE_API_KEY as string,
        },
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        console.error("Fetch error:", resp.status, errorText);
        return response.status(resp.status).json({ error: errorText });
      }

      const moviesResponse = await resp.json();
      const movies: MoviesProps[] = moviesResponse.results;

      return response.status(200).json({ movies });
    } catch (error) {
      console.error("Server error:", error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    response.setHeader("Allow", ["POST"]);
    return response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
