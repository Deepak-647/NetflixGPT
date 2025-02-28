export const PHOTO_URL =
  "https://avatars.githubusercontent.com/u/82494501?v=4&size=64";
export const BODY_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg";
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};


export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGE = [
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"},
  {identifier:"marathi",name:"Marathi"},
  {identifier:"bangla",name:"Bangla"},
  {identifier:"odia",name:"Odia"},
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;