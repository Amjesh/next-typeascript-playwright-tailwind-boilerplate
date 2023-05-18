export interface IAuthState {
  email: string;
  token: string;
}

export interface IAuth {
  token: string;
  email: string;
}

export interface ISocialConnection {
  sub?: string;
  name?: string;
}

export interface IProfile {
  username?: string;
  avatar?: string;
  bio?: string;
  lastLogin?: Date;
  cvFilesUrl?: Array<object>;
  totalTrailUsed?: number;
}

export interface IMetadata {
  histories?: any;
}

export interface IUser {
  _id?: any;
  email?: string;
  auth0Id?: string;
  profile?: IProfile;
  userMeta?: IMetadata;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserState {
  user: IUser;
  currentHistoryId: string;
  isFeedbackDone: boolean;
}

export interface IDashboardState {
  dashboard?: any;
}

export interface IRequestData {
  action: string;
  section?: string;
  job_description?: string;
  resume_file: string;
  jobseeker_question?: string;
}
