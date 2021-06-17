import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  searchName: {
    first: String,
    last: String,
  },
  gender: {
    type: String,
    require: true,
  },
  location: {
    street: {
      name: {
        type: String,
        require: true,
      },
      number: {
        type: String,
        require: true,
      },
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    postcode: {
      type: Number,
      require: true,
    },
  },
  locationForSearch: {
    city: String,
    state: String,
    country: String,
  },
  email: {
    type: String,
    require: true,
  },
  login: {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  dob: {
    date: Date,
    age: Number,
  },
  registered: {
    date: {
      type: Date,
      default: Date.now,
    },
    age: Number,
  },
  phone: String,
  cell: {
    type: String,
    required: true,
  },
  picture: String,
  nationality: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model('users', userSchema);

export { userModel };
