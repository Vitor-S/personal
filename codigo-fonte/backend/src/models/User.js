const mongoose = require("../database/conn");
 
const { Schema } = mongoose;
 
const userSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["admin", "aluno"],
      required: true,
      default: "",
    },
    adminId: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      default: "",
    },
    avatar: {
      type: String,
    },
    historicos: [
      {
        id: {
          type: Schema.Types.ObjectId, 
          required: true,
          unique: true 
        },
        workoutId: {
          type: String,
          required: true,
        },
        data: {
          type: Date,
          default: Date.now, // Define a data atual como padrão
        },
      },
    ],
    programs: [
      {
        id: {
          type: Schema.Types.ObjectId, 
          required: true,
          unique: true 
        },
        name: {
          type: String,
        },
        workouts: [
          {
            id: {
              type: Schema.Types.ObjectId, 
              required: true,
              unique: true 
            },
            name: {
              type: String,
              required: true,
            },
            exercises: [
              {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Exercise",
              },
            ],
          },
        ],
      },
    ],
  },
  { timestamps: true }
);
 
const User = mongoose.model("User", userSchema);
 
module.exports = User;