import bodyParser from "body-parser";
import cors from "cors";
import express, { request, response } from "express";
import fs from "fs";
import { error } from "console";

const port = 8888;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get("/", (request, response) => {
  response.send("hey tanii huselt irle");
});
app.get("/product", (request, response) => {
  fs.readFile("./data/product.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }
    let dbdata = data ? JSON.parse(data) : [];

    response.json({
      success: true,
      product: dbdata,
    });
  });
});

app.post("/product", (request, response) => {
  const { productName, catagory, price } = request.body;
  fs.readFile("./data/product.json", "utf-8", (readFile, data) => {
    let dbdata = data ? JSON.parse(data) : [];
    if (readFile) {
      response.json({
        success: false,
        error: readError.message,
      });
    }

    const newProduct = {
      id: Date.now().toString(),
      productName: productName,
      catagory: catagory,
      price: price,
    };

    dbdata.push(newProduct);
    fs.writeFile("./data/product.json", JSON.stringify(dbdata), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          product: newProduct,
        });
      }
    });
  });
});
app.delete("/product", (request, response) => {
  const { productId } = request.body;
  fs.readFile("./data/product.json", "utf-8", (readError, data) => {
    let dbdata = data ? JSON.parse(data) : [];
    if (readError) {
      response.json({
        success: false,
        error: readError.message,
      });
    }
    const filteredData = dbdata.filter((data) => data?.id !== productId);
    if (filteredData.length === dbdata.length) {
      response.json({
        success: false,
        error: "not found id",
      });
    }
    fs.writeFile(
      "./data/product.json",

      JSON.stringify(filteredData),
      (error) => {
        if (error) {
          response.json({
            success: false,
            error: error,
          });
        } else {
          response.json({
            success: true,
          });
        }
      }
    );
  });
});
app.put("/product", (request, response) => {
  const { productId, productName, catagory, price } = request.body;
  fs.readFile("./data/product.json", "utf-8", (readError, data) => {
    let dbdata = data ? JSON.parse(data) : [];
    if (readError) {
      response.json({
        success: false,
        error: readError.message,
      });
    }
    const edithData = dbdata.map((data) => {
      if (data?.id === productId) {
        return {
          productId: productId,
          productName: productName,
          catagory: catagory,
          price: price,
        };
      }
      return data;
    });

    fs.writeFile("./data/product.json", JSON.stringify(edithData), (error) => {
      if (error) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          product: edithData,
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`server ajilah baina http://localhost:${port}`);
});
