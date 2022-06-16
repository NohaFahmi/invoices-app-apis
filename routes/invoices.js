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
//get all invoices
router.get("/", (req, res) => {
  Invoice.find()
    .then((invoices) => res.status(200).json(invoices))
    .catch((err) => res.status(500).json(err.message));
});

//get invoice details by id
router.get("/:id", (req, res) => {
  Invoice.findById(req.params.id)
    .then((invoice) => res.status(200).json(invoice))
    .catch((err) => res.status(500).json(err.message));
});
//create new invoice
router.post("/create", async (req, res) => {
  if (req) {
    const { body } = req;
    if (body.invoiceId) {
      Invoice.findById(body.invoiceId)
        .then((invoice) => {
          if (invoice && !body.isDraft) {
            Invoice.updateOne(
              { _id: body.invoiceId },
              { $set: { isDraftVersion: false } },
              { new: true }
            )
              .then(() => {
                res.status(200).json("Updated");
              })
              .catch((err) => res.status(500).json(err.message));
          } else {
            res.status(404).json("can't find invoice with this id");
          }
        })
        .catch((err) => res.status(500).json(err.message));
    } else {
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
        paymentDue: calculatePaymentDueDate(
          body.invoiceDate,
          body.paymentTerms
        ),
        status: 1,
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
    }
  } else {
    res.status(403).json("Bad request!");
  }
});

//edit invoice
router.put("/:id", (req, res) => {
  Invoice.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
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

//change invoice payment status (mark invoice as paid | save a draft version)
router.put("/changeStatus", (req, res) => {
  if (req.body.status && req.body.id) {
    Invoice.findByIdAndUpdate(
      req.body.id,
      { status: req.body.status },
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

// filter invoices by status
router.post("/filter", (req, res) => {
  const { filterOptions } = req.body;
  // {status: 2, status: 1, status: 3}
  Invoice.find(filterOptions)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(500).json(err.message));
});

module.exports = router;
