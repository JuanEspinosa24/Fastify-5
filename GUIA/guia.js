import mongoose from "mongoose";

const { Schema, model } = mongoose;

const creditSchema = new Schema({
  product: {
    type: String,
    required: [true, "el campo product es requerido"],
    enum: [
      "viviendas",
      "tarjeta de credito",
      "educacion",
      "viajes",
      "libre inversion",
    ],
  },

  nameProduct: {
    type: String,
    required: [true, "el campo nameProduct es requerido"],
  },

  client: {
    type: Schema.Types.ObjectId,
    ref: "client",
    required: [true, "el campo client es requerido"],
  },

  fiador: {
    type: String,
    required: [true, "el campo fiador es requerido"],
  },

  cuotas: {
    type: Number,
  },

  montoAPagar: {
    type: Number,
    default: 0,
  },

  porcentajeIva: {
    type: Number,
    default: 19,
  },
},{timestamps:true},{versionKey:false});

export const creditModel = model("credit",creditSchema);



