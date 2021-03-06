/**
 * @file RESTful Web service API interface for section resource
 */
import Section from "../mongoose/sections/Section";

/**
 * @file Declares API for section related data access object methods
 */
export default interface SectionDao {
    findSectionById(sid: string): Promise<Section>;
    findSectionByIdDeep(sid: string): Promise<Section>;
    findAllSections(): Promise<Section[]>;
    findAllSectionsDeep(): Promise<Section[]>;
    findAllSectionsForCourse(cid: string): Promise<Section[]>;
    findAllSectionsForCourseDeep(cid: string): Promise<Section[]>;
    createSectionForCourse(cid: string, section: Section): Promise<Section>;
    deleteSection(sid: string): Promise<any>;
    updateSection(sid: string, section: Section): Promise<any>;
}
