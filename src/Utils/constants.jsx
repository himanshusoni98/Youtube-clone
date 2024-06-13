export const GOOGLE_API = "AIzaSyCUiucOTsY9SgTbWAHzUCJPxkXkjIG0YBA";

export const CHANNEL_API = "https://www.googleapis.com/youtube/v3/channels"+GOOGLE_API;

export const YOUTUBE_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key="+GOOGLE_API;

export const COMMENTS_API = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Ib7bmm-PiaU&key='+GOOGLE_API

//export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png";

export const HAMBURGER_MENU = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";

export const DARK_BTN = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1bi1tb29uIj48cGF0aCBkPSJNMTIgOGEyLjgzIDIuODMgMCAwIDAgNCA0IDQgNCAwIDEgMS00LTQiLz48cGF0aCBkPSJNMTIgMnYyIi8+PHBhdGggZD0iTTEyIDIwdjIiLz48cGF0aCBkPSJtNC45IDQuOSAxLjQgMS40Ii8+PHBhdGggZD0ibTE3LjcgMTcuNyAxLjQgMS40Ii8+PHBhdGggZD0iTTIgMTJoMiIvPjxwYXRoIGQ9Ik0yMCAxMmgyIi8+PHBhdGggZD0ibTYuMyAxNy43LTEuNCAxLjQiLz48cGF0aCBkPSJtMTkuMSA0LjktMS40IDEuNCIvPjwvc3ZnPg==";

export const LIGHT_BTN = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1biI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIvPjxwYXRoIGQ9Ik0xMiAydjIiLz48cGF0aCBkPSJNMTIgMjB2MiIvPjxwYXRoIGQ9Im00LjkzIDQuOTMgMS40MSAxLjQxIi8+PHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIvPjxwYXRoIGQ9Ik0yIDEyaDIiLz48cGF0aCBkPSJNMjAgMTJoMiIvPjxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIvPjxwYXRoIGQ9Im0xOS4wNyA0LjkzLTEuNDEgMS40MSIvPjwvc3ZnPg==";

export const USER_LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzdC8tyLdAaX5o6jygK9y6ruUdNcAyNqLjZTW1XuN6w&s";

export const LIVE_CHAT_COUNT = 25;

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const BTN_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtApJEhlj1cbLj4q-t9o1SewMsJ9JuZnExpG6ypDTHi1qdKuOBr_GUEqmlRjhkXWWVA&usqp=CAU";

export const UPDATE_API = "https://www.googleapis.com/youtube/v3/videos"+GOOGLE_API

export const YOUTUBE_video_ID="https://www.googleapis.com/youtube/v3/videos?id=VIDEO_ID&key="+GOOGLE_API+"&part=snippet&part=statistics"

export const YOUTUBE_CATEGORIES="https://www.googleapis.com/youtube/v3/search?part=snippet?part=statistics&type=video&videoCategoryId=Your_Category_ID_Here&key="

export const YOUTUBE_SEARCH_SUGGEST="https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q="+GOOGLE_API

export const YOUTUBE_LIVE_videoS="https://www.googleapis.com/youtube/v3/search?key="+GOOGLE_API+"&part=snippet&type=video&q=live&eventType=live";

export const YOUTUBE_SEARCH_QUERY="https://www.googleapis.com/youtube/v3/search?part=snippet&q={SEARCH_QUERY}&key="+GOOGLE_API

export const YOUTUBE_SHORTS_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=short&maxResults=100&key='+GOOGLE_API;

export const YOUTUBE_SEARCH_API = (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${GOOGLE_API}`;

export const SUGGESTION_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=dQw4w9WgXcQ&type=video&key="+GOOGLE_API