const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    invoiceID: { type: String, required: true, unique: true },
    senderAddress: { type: String },
    invoiceDate: { type: Date },
    paymentDue: { type: Date },
    paymentTerms: { type: Number },
    status: { type: Number },
    description: { type: String },
    billingClient: {
      clientName: { type: String },
      clientEmail: { type: String },
      clientAddress: { type: String },
    },
    items: { type: mongoose.Schema.Types.Array },
    totalInvoicePrice: { trype: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("invoices", InvoiceSchema);
