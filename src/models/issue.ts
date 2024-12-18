import { Schema, model, Document } from "mongoose";

export interface IIssue extends Document {
  title: string;
  description: string;
  created_by: string;
  updated_by: string;
  created_at: Date;
  updated_at: Date;
}

const issueSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    created_by: {
      type: String,
      default: "unknown",
    },
    updated_by: {
      type: String,
      default: "unknown",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const Issue = model<IIssue>("Issue", issueSchema);
