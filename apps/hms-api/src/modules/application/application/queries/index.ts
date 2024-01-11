import { GetApplicationHandler } from './get-application/get-application.handler';
import { GetApplicationsHandler } from './get-applications/get-applications.handler';

export const ApplicationQueryHandlers = [GetApplicationHandler, GetApplicationsHandler];
