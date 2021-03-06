import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'Nodejs',
    educator: 'PV',
    duration: 22
  });

  CreateCourseService.execute({
    name: 'TypeScript',
    educator: 'Paulo',
  });

  return response.send();
};