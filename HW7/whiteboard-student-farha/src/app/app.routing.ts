import { Routes, RouterModule } from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full'},
  { path: 'course', component: WhiteBoardComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: 'course/:courseId/module', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: CourseViewerComponent},
  { path: '**', component: WhiteBoardComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
