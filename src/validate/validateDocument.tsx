import validator from "../jsonValidator";

const documentScheme = {
  type: "object",
  required: ["title", "cells"],
  properties: {
    title: { type: "string" },
    cells: {
      type: "array",
      items: {
        anyOf: [
          {
            type: "object",
            properties: {
              type: { enum: ["MATH"] },
              uuid: { type: "string" },
              input: { type: "string" },
              output: { type: "string" },
            },
          },
          {
            type: "object",
            properties: {
              type: { enum: ["TEXT"] },
              uuid: { type: "string" },
              content: { type: "string" },
            },
          },
        ],
      },
    },
  },
};

const validateDocument = (userData: any) =>
  validator.validate(documentScheme, userData);
export default validateDocument;
