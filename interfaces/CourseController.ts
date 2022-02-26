/**
 * @file Controller RESTful Web service API interface for course resource
 */
import {Request, Response} from "express";


/**
 * This interface implements CourseControllerI
 */
export default interface CourseController {
    findAllCourses(req: Request, res: Response): Promise<any>;
    findAllCoursesDeep(req: Request, res: Response): Promise<any>;
    findCourseById(req: Request, res: Response): Promise<any>;
    findCourseByIdDeep(req: Request, res: Response): Promise<any>;
    createCourse(req: Request, res: Response): Promise<any>;
    deleteCourse(req: Request, res: Response): Promise<any>;
    updateCourse(req: Request, res: Response): Promise<any>;
    addSectionToCourse(req: Request, res: Response): Promise<any>;
    removeSectionFromCourse(req: Request, res: Response): Promise<any>;
};
