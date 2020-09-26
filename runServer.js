const { setupExpressServer } = require("./app");

const PORT = process.env.PORT || 9007;
const app = setupExpressServer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
