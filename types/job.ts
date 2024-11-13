// Enum correspondant à DurationTypeEnum
export enum DurationType {
  DAYS = "DAYS",
  WEEKS = "WEEKS",
  MONTHS = "MONTHS",
  YEARS = "YEARS",
}

// Interface pour Skill
export interface ISkill {
  id: number;
  name: string;
  jobs?: IJob[];
}

// Interface pour Company
export interface ICompany {
  id: number;
  name?: string;
  logo?: string;
  description: string;
  jobs?: IJob[];
  locality?: string;
  country?: string;
}

// Interface pour Location
export interface ILocation {
  id: number;
  region?: string;
  postalcode?: string;
  shortlabel?: string;
  label?: string;
  jobs?: IJob[];
  country?: string;
  city?: string;
}

// Interface pour JobData
export interface IJobData {
  id: number;
  jobs?: IJob[];
}

// Interface principale pour Job
export interface IJob {
  id: number;
  idsource?: number;
  source?: string;
  title?: string;
  slug?: string;
  description?: string;
  sourceurl?: string;
  currency?: string;
  mindailypay?: number;
  maxdailypay?: number;
  minannualpay?: number;
  maxannualpay?: number;
  remotemode?: string;
  createdat?: string;
  updatedat?: string;
  publishedat?: string;
  archivedat?: string;
  jobtype?: string;
  experience?: string;
  renewable?: boolean;
  startsat?: Date;
  annualsalary?: string;
  dailysalary?: string;
  isactive?: boolean;
  softskills?: Record<string, unknown>;
  expiredat?: Date;
  durationtype?: DurationType;
  duration?: number;
  analyzedat?: Date;

  // Foreign keys
  companyid?: number;
  locationid?: number;
  jobdataid?: number;

  // Relations
  company?: ICompany;
  location?: ILocation;
  job_data?: IJobData;
  skills?: ISkill[];
}

// Type pour la création d'un nouveau job (sans id)
export type CreateJobDto = Omit<IJob, "id">;

// Type pour la mise à jour d'un job (tous les champs optionnels)
export type UpdateJobDto = Partial<IJob>;
