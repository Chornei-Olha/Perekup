import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import cors from "cors";
import path from "path";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// ========== 1. AutoRia scraping ==========
app.get("/api/autorias", async (req, res) => {
  try {
    const url =
      "https://auto.ria.com/uk/search/?indexName=auto&country.import.usa.not=-1";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const cars = [];

    $(".ticket-item").each((_, el) => {
      const title = $(el).find(".address").text().trim();
      const price = $(el).find(".price-ticket").text().trim();
      const link = $(el).find(".address").attr("href");
      const image = $(el).find("img").attr("src");
      if (title && price && link && image) {
        cars.push({ title, price, link, image, source: "AutoRia" });
      }
    });

    res.json(cars);
  } catch (e) {
    console.error("AutoRia error:", e);
    res.status(500).send("Помилка AutoRia");
  }
});

// ========== 2. OLX scraping ==========
app.get("/api/olx", async (req, res) => {
  try {
    const url = "https://www.olx.ua/uk/transport/legkovye-avtomobili/";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const cars = [];

    $('div[data-cy="l-card"]').each((_, el) => {
      const title = $(el).find("h6").text().trim();
      const price = $(el).find('p[data-testid="ad-price"]').text().trim();
      const link = "https://www.olx.ua" + $(el).find("a").attr("href");
      const image = $(el).find("img").attr("src");
      if (title && price && link) {
        cars.push({ title, price, link, image, source: "OLX" });
      }
    });

    res.json(cars);
  } catch (e) {
    console.error("OLX error:", e);
    res.status(500).send("Помилка OLX");
  }
});

// ========== 3. Bazar scraping ==========
app.get("/api/bazar", async (req, res) => {
  try {
    const url = "https://bazar.ua/uk/transport/legkovye-avto";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const cars = [];

    $(".product-card").each((_, el) => {
      const title = $(el).find(".product-card__title").text().trim();
      const price = $(el).find(".product-card__price").text().trim();
      const link = "https://bazar.ua" + $(el).find("a").attr("href");
      const image = $(el).find("img").attr("src");
      if (title && price && link) {
        cars.push({ title, price, link, image, source: "Bazar" });
      }
    });

    res.json(cars);
  } catch (e) {
    console.error("Bazar error:", e);
    res.status(500).send("Помилка Bazar");
  }
});

// ========== 4. Об'єднаний API ==========
app.get("/api/all", async (req, res) => {
  try {
    const [ria, olx, bazar] = await Promise.all([
      axios.get(`http://localhost:${PORT}/api/autorias`),
      axios.get(`http://localhost:${PORT}/api/olx`),
      axios.get(`http://localhost:${PORT}/api/bazar`),
    ]);
    res.json([...ria.data, ...olx.data, ...bazar.data]);
  } catch (e) {
    console.error("API ALL error:", e);
    res.status(500).send("Помилка збирання всіх даних");
  }
});

// ========== Запуск сервера ==========
app.listen(PORT, () =>
  console.log(`✅ Сервер працює на http://localhost:${PORT}`)
);
