const router = require("express").Router();
const Invoice = require("../models/invoice");

//generate Invoice ID
const generateInvoiceID = () => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 2; i++) {
    result += characters
      .charAt(Math.floor(Math.random() * characters.length))
      .toUpperCase();
  }
  return result + Math.floor(Math.random() * 10000);
};
const getTotalInvoicePrice = (listOfItems) => {
  let totalPrice = 0;
  listOfItems.map((item) => {
    totalPrice += item.total;
  });
  return totalPrice;
};
const calculatePaymentDueDate = (invoiceDate, paymentTerms) => {
  let date = new Date(invoiceDate);
  date.setDate(date.getDate() + paymentTerms);
  return new Date(date);
};
//insert many docs in invoices
router.post("/many", (req, res) => {
  Invoice.insertMany(req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});
//get all invoices list
router.get("/", (req, res) => {
  Invoice.find()
    .then((invoices) => res.status(200).json(invoices))
    .catch((err) => res.status(500).json(err.message));
});

//filter invoices by status
router.post("/filter", (req, res) => {
  const { body } = req;
  const { status } = body;
  let query = {};
  if (status < 4 && status > 0) {
    query = { ...query, status: status };
  } else {
    query = {};
  }
  // if (senderAddress) {
  //   query = { ...query, senderAddress: senderAddress };
  // }
  // if (clientName) {
  //   query = { ...query, "billingClient.name": clientName };
  // }

  Invoice.find(query)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json(err.message));
});
//get invoice details by id
router.get("/:id", (req, res) => {
  Invoice.findById(req.params.id)
    .then((invoice) => {
      res.status(200).json(invoice);
    })
    .catch((err) => res.status(500).json(err.message));
});
//create new invoice
router.post("/create", async (req, res) => {
  if (req) {
    const { body } = req;
    const totalInvoicePrice = getTotalInvoicePrice([...body.items]);
    const { items } = body;
    const newInvoice = new Invoice({
      invoiceID: generateInvoiceID(),
      senderAddress: body.senderAddress,
      invoiceDate: new Date(body.invoiceDate),
      paymentTerms: body.paymentTerms,
      description: body.description,
      billingClient: body.billingClient,
      items: items,
      paymentDue: calculatePaymentDueDate(body.invoiceDate, body.paymentTerms),
      status: body.status,
      totalInvoicePrice: totalInvoicePrice,
    });
    newInvoice
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(500).json(err.message);
      });
  } else {
    res.status(403).json("Bad request!");
  }
});

//change invoice payment status (mark invoice as paid | save a draft version)
router.post("/changeStatus", (req, res) => {
  const { body } = req;
  console.log(body);
  if (req.body.status && req.body.id) {
    Invoice.findByIdAndUpdate(
      req.body.id,
      { $set: { status: req.body.status } },
      { new: true }
    )
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => res.status(500).json(err.message));
  } else {
    res.status(403).json("Bad Request!!");
  }
});

//edit invoice
router.post("/:id", (req, res) => {
  let updatedInvoice = req.body;
  if (updatedInvoice.items) {
    const totalInvoicePrice = getTotalInvoicePrice([...updatedInvoice.items]);
    updatedInvoice = {
      ...updatedInvoice,
      totalInvoicePrice: totalInvoicePrice,
    };
  }
  if (updatedInvoice.invoiceDate || updatedInvoice.paymentTerms) {
    const paymentDue = calculatePaymentDueDate(
      updatedInvoice.invoiceDate,
      updatedInvoice.paymentTerms
    );
    updatedInvoice = {
      ...updatedInvoice,
      paymentDue: paymentDue,
    };
  }

  Invoice.findByIdAndUpdate(
    req.params.id,
    { $set: updatedInvoice },
    { new: true }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json(err.message));
});

//delete invoice
router.delete("/:id", (req, res) => {
  Invoice.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json("This invoice is successfully deleted!");
    })
    .catch((err) => res.status(500).json(err.message));
});

module.exports = router;
