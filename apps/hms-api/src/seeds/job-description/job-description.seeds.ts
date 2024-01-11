import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { CreateJobDescriptionCommand } from '../../modules/job-description/commands/create-job-description/create-job-description.command';
import { DeleteJobDescriptionCommand } from '../../modules/job-description/commands/delete-job-description/delete-job-description.command';
import { UpdateJobDescriptionCommand } from '../../modules/job-description/commands/update-job-description/update-job-description.command';
import { CreateJobDescriptionInput } from '../../modules/job-description/inputs/create-job-description.input';
import { SeedType } from '../seeds.type';
import { applySeeds } from '../util/util';

export const jobDescriptionSeeds: SeedType<CreateJobDescriptionInput> = {
  upsert: [
    {
      id: '1eb77b9c-d267-4656-aa0d-7ebde1b4d12a',
      classification_id: '343fb017-e759-4e43-9438-6c0576600a7a',
      e_class_id: undefined,
      name: 'Dev Ops Specialist',
    }, // 27
    {
      id: '241f285d-807b-4d0c-91ec-096b1a99a421',
      classification_id: '7e2a2c26-7a77-4dbe-8d9c-eafa37ebbeb7',
      e_class_id: undefined,
      name: 'Full Stack Developer 18',
    }, // 18
    {
      id: '65675ed4-2897-49a4-b6f5-a774295d3044',
      classification_id: 'a07800b6-db39-4bc1-94f6-996c7d05e938',
      e_class_id: undefined,
      name: 'Full Stack Developer 21',
    }, // 21
    {
      id: '67331a2e-76a3-49b5-8aa0-60f7e6444de3',
      classification_id: '8c771981-8e49-401d-887d-542dcc64451c',
      e_class_id: undefined,
      name: 'Full Stack Developer 24',
    }, // 24
    {
      id: '09ab8e7d-9cc1-4993-8d53-14095dd00e81',
      classification_id: '343fb017-e759-4e43-9438-6c0576600a7a',
      e_class_id: undefined,
      name: 'Full Stack Developer 27',
    }, // 27
    {
      id: 'cd9053ac-737f-4295-b059-7893abc6dc82',
      classification_id: '28bf5d98-d737-485c-b1bd-00a84900e8fe',
      e_class_id: undefined,
      name: 'Full Stack Developer 30',
    }, // 30
    {
      id: 'fcb381fd-4013-4706-b01d-3edf52d7100b',
      classification_id: '28bf5d98-d737-485c-b1bd-00a84900e8fe',
      e_class_id: undefined,
      name: 'Product Manager',
    }, // 30
    {
      id: '8c7c08fa-87d5-4836-b7bf-ba396930e9ba',
      classification_id: '6c19f536-b8ab-4e2c-9e94-f20cd550a7ba',
      e_class_id: undefined,
      name: 'Senior Product Manager',
    }, // Band 3
    {
      id: '764f0a06-185f-4e28-bc89-2b327377766f',
      classification_id: '8c771981-8e49-401d-887d-542dcc64451c',
      e_class_id: undefined,
      name: 'Scrum Master Technical',
    }, // 24
    {
      id: '193670cc-c74b-4fe3-9158-8175e907e29f',
      classification_id: '343fb017-e759-4e43-9438-6c0576600a7a',
      e_class_id: undefined,
      name: 'Senior Scrum Master Technical',
    }, // 27
    {
      id: '535ceb03-17ab-4d75-9d20-f97a11ab2540',
      classification_id: '343fb017-e759-4e43-9438-6c0576600a7a',
      e_class_id: undefined,
      name: 'Site Reliability Specialist',
    }, // 27
    {
      id: 'bcf7c957-fe9a-45bd-948d-68dcfbd43594',
      classification_id: '28bf5d98-d737-485c-b1bd-00a84900e8fe',
      e_class_id: undefined,
      name: 'Site Reliability Specialist Lead',
    }, // 30
    {
      id: '8f4e792b-8e4a-42b9-8c9f-a6466a469a35',
      classification_id: '2e1b710b-b04f-4430-a045-9afd89d01593',
      e_class_id: undefined,
      name: 'User Experience Researcher',
    }, // AO 24
    {
      id: '473ba2c4-d19d-45ab-8fc5-97be4e634aa5',
      classification_id: '74b07121-e910-473f-b0d7-2fbf292c7a1d',
      e_class_id: undefined,
      name: 'Senior User Experience Researcher',
    }, // AO 27
    {
      id: 'aa9dc2f9-5e69-418d-b43a-fab9310ccfc0',
      classification_id: '8c771981-8e49-401d-887d-542dcc64451c',
      e_class_id: undefined,
      name: 'User Experience Designer',
    }, // 24
    {
      id: 'ef0d1292-6576-4d00-aed4-1b427c5fc119',
      classification_id: '343fb017-e759-4e43-9438-6c0576600a7a',
      e_class_id: undefined,
      name: 'Senior User Experience Designer',
    }, // 27
  ],
  remove: [],
};

export const applyJobDescriptionSeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  await applySeeds(
    jobDescriptionSeeds,
    commandBus,
    eventStore,
    CreateJobDescriptionInput,
    CreateJobDescriptionCommand,
    UpdateJobDescriptionCommand,
    DeleteJobDescriptionCommand,
    'job-description',
  );
};
