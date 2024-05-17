import { Request, Response } from 'express';
import { StudentServices } from './student.service';
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await StudentServices.createStudentIntoDB(student);
    return res.status(200).json({
      message: 'Student Created Successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    // return res.status(500).json({
    //     message: "Student Created UnSuccessfully",
    //     success: false,
    //     data: err
    // })
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Unknown Error Found',
      success: true,
      data: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);
    return res.status(200).json({
      message: 'Student found Successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Unknown Error Found',
      success: true,
      data: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
