import { ProjectModel } from './project.model';
import { ProfileModel } from './profile.model';

export interface SectionModel {
  title: string;
  id: string;
  info: ProjectModel[] | ProfileModel[];
  isProject: boolean;
}
