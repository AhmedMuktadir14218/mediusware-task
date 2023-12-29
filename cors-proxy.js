import cors_anywhere from "cors-anywhere";

const PORT = process.env.PORT || 8080;

cors_anywhere
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeaders: [],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(PORT, () => {
    console.log(`CORS Anywhere server started on port ${PORT}`);
  });
