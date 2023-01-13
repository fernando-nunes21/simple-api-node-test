const router = require("express").Router();
const page1 = {
    name: "page1 test",
    url: "test/page1",
    title: "Teste 1"
}

const page2 = {
    name: "page2 test",
    url: "test/page2",
    title: "Teste 2"
}

const page3 = {
    name: "page3 test",
    url: "test/page3",
    title: "Teste 3"
}

const page4 = {
    name: "page4 test",
    url: "test/page4",
    title: "Teste 4"
}

const page5 = {
    name: "page5 test",
    url: "test/page5",
    title: "Teste 5"
}

router.get("/page1", async function (req, res) {
  res.json(page1);
});

router.get("/page2", async function (req, res) {
  res.json(page2);
});

router.get("/page3", async function (req, res) {
  res.json(page3);
});

router.get("/page4", async function (req, res) {
  res.json(page4);
});

router.get("/page5", async function (req, res) {
  res.json(page5);
});

module.exports = router;