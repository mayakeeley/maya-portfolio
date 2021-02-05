import { ProjectModel } from './project.model';
import { ProfileModel } from './profile.model';

export interface SectionModel {
  id: string;
  title: string;
  info: ProjectModel[] | ProfileModel[];
}
