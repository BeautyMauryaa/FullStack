import Note from "../models/Note.js";

//1.All user notes
export const getAllusernotes = async (req, res) => {
  try {
    const notes = await Note.find({ author: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json({
      status: true,
      count: notes.length,
      message: "all notes fetched successfully",
      data: notes,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "server error ",
      error: err.message,
    });
  }
};
//find : return an array and findone: return single object



//2. fetch single user note using id
export const getusernotebyId = async (req, res) => {
  try {
    const notes = await Note.findOne({ _id: req.params.id, author: req.user.id });
    if (!notes) {
      return res.status(400).json({
        status: false,
        message:"note not found",
        error:err.message
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "failed to fetch the user note",
      error: err.message,
    });
  }
};


//3. create notes
export const Createnote = async (req, res) => {
  try {
    const { title, content } = req.body;
    //C= Create(POST)

    if (!title || !content) {
      return res.status(400).json({
        status: false,
        message: "title and content required",
      });
    }
    const newNote = new Note({
      title,
      content,
      author: req.user.id, //extract from auth middleware
    });

    const savedNote = await newNote.save();
    return res.status(201).json({
      status: true,
      message: "Note created successfully",
      data: savedNote,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "failed to create message",
      error: err.message,
    });
  }
};
