import { EventStoreDBClient } from '@eventstore/db-client';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { CreateMinistryCommand } from '../../modules/ministry/commands/create-ministry/create-ministry.command';
import { DeleteMinistryCommand } from '../../modules/ministry/commands/delete-ministry/delete-ministry.command';
import { UpdateMinistryCommand } from '../../modules/ministry/commands/update-ministry/update-ministry.command';
import { CreateMinistryInput } from '../../modules/ministry/inputs/create-ministry.input';
import { SeedType } from '../seeds.type';
import { applySeeds } from '../util/util';

export const ministrySeeds: SeedType<CreateMinistryInput> = {
  upsert: [
    { id: 'a583cf18-885f-4b7a-b3f0-d755063f28dd', deltek_id: '101', name: 'Agriculture and Food' },
    { id: 'b204a31c-caa4-42a2-bde9-0e683e392036', deltek_id: '87', name: 'Attorney General' },
    { id: '5cb811fa-8154-416f-b255-11cf884a3b8f', deltek_id: '113', name: 'BC Financial Services Authority' },
    { id: '028e7422-2805-4594-b3c1-5504c1c1cd16', deltek_id: '77', name: 'BC Pension Corp' },
    { id: '0a37c4aa-9987-49e7-8dc1-ecfa58f1a98d', deltek_id: '85', name: 'BC Public Service Agency' },
    { id: 'a082d8fe-bfec-48a9-92d2-224a036c78ed', deltek_id: '90', name: 'BC Rep for Children & Youth' },
    { id: 'e8b27b24-9463-469f-82bb-1690a5fa0129', deltek_id: '60', name: 'Children & Family Development' },
    { id: '077dab13-fee9-4354-a59a-160ceb1470be', deltek_id: '92', name: "Citizens' Services" },
    { id: '1927dfcf-59df-448d-b409-597ebaf9b23e', deltek_id: '42', name: "Conflict of Interest Commiss'r" },
    { id: 'fbb79821-e991-4440-8b18-a5e2e90e6988', deltek_id: '110', name: 'Destination BC Corp' },
    { id: '37f97dec-af05-4d30-a168-320c5900cc57', deltek_id: '69', name: 'Education and Child Care' },
    { id: '6fc57378-4ece-4d81-a814-ca5b5f5812e5', deltek_id: '47', name: 'Elections BC' },
    { id: '37cb78b3-c60a-4c47-87fd-157db092ee75', deltek_id: '117', name: 'Emerg Mgt, Climate Readiness (EMCR)' },
    { id: 'b54fbe02-3afc-43a2-9ec5-faf76441f4d4', deltek_id: '66', name: 'Energy, Mines & Low Carb Inn' },
    { id: '5a6f12fb-19e6-45d9-a711-4a3b41126964', deltek_id: '63', name: 'Env & Climate Change Strategy' },
    { id: '579b0a79-19e4-44c2-9cef-614cd9cd2160', deltek_id: '93', name: 'Env Assessment Office' },
    { id: '314630de-a324-489b-b6ee-8c1092088b10', deltek_id: '26', name: 'Forest Practices Board' },
    {
      id: 'e161ba5b-9ebf-4b0a-a633-b3600345a55c',
      deltek_id: '112',
      name: 'Government Communication and Public Engagement',
    },
    { id: '66b6e050-6ff2-45c3-8ae6-257fed1aae0e', deltek_id: '54', name: 'Health' },
    { id: '31ea5946-3107-4ba9-8a23-bf15f6591490', deltek_id: '94', name: 'Indigenous Relations & Recon' },
    { id: '79f6aebd-d944-4470-9ed8-0f4e76fdfff1', deltek_id: '28', name: 'Islands Trust' },
    { id: 'b77fc715-c423-4f3b-8d33-93503a9e7a80', deltek_id: '96', name: 'Jobs, Econom Dev & Innovation' },
    { id: '8727cfb2-c89e-4c74-bfe2-9d3b29dbf296', deltek_id: '29', name: 'Liquor Distribution Branch' },
    { id: '83cbf311-f6f3-42a4-a91c-d724b373f61b', deltek_id: '56', name: 'Mental Health & Addictions' },
    { id: '8654c7b4-4390-4685-ae49-de9787c16fd3', deltek_id: '58', name: 'Min of Trans & Infrastructure' },
    { id: '46178bb4-25b3-4d6b-b99d-c928cc5a0ed8', deltek_id: '50', name: 'Ministry of Finance' },
    { id: '790fec22-4040-4de3-8bc1-0d7dc3eef38e', deltek_id: '99', name: 'Ministry of Forests' },
    { id: 'cdf49322-6609-45e0-854e-aede1f606bf1', deltek_id: '102', name: 'Ministry of Housing' },
    { id: '451cb4dd-0a16-4c21-8ff3-f497bb79986d', deltek_id: '98', name: 'Ministry of Labour' },
    { id: '955e0bb4-1e10-4dfe-858a-2287d95a6e65', deltek_id: '68', name: 'Municipal Affairs' },
    { id: 'b05e83d5-9b03-4a5d-b584-57b1dd329249', deltek_id: '88', name: 'Off of the Merit Commissioner' },
    { id: '3b1cc203-e3b4-410e-83c9-6365299238eb', deltek_id: '53', name: 'Off of the Police Complaint Co' },
    { id: 'bb6c1958-f8d7-4af0-a002-eb841e38f6af', deltek_id: '44', name: 'Office of Info & Priv Comm' },
    { id: '535927cd-f4b7-42a1-aec5-57283ea9b1fd', deltek_id: '30', name: 'Office of the Auditor General' },
    {
      id: '7be7beb8-1e24-4204-8029-3a79ee7fc798',
      deltek_id: '114',
      name: 'Office of the Human Rights Commissioner for British Columbia',
    },
    { id: '1d1880c6-0cad-4c07-b4df-efa6941a85c8', deltek_id: '33', name: 'Office of the Ombudsperson' },
    { id: '97788574-53b1-4c04-91bb-0647e903603e', deltek_id: '41', name: 'Office of the Premier' },
    { id: 'c06d535a-9802-4dfc-b2dc-00a67b97814e', deltek_id: '36', name: 'Other Public Sector' },
    { id: '446f7cb4-c1ab-4137-a635-36eb700b6ae4', deltek_id: '48', name: 'Post-Sec Ed & Future Skills' },
    { id: '908ebf5d-d962-48e9-8815-f732ee5563eb', deltek_id: '72', name: 'Product Services' },
    { id: '9f6a1b99-b487-450b-8def-806bb2da0283', deltek_id: '86', name: 'Public Guardian and Trustee' },
    { id: '2ee16b8d-66a6-47f4-9528-6c4180abb3b2', deltek_id: '45', name: 'Public Safety & Sol General' },
    { id: 'bd94b4eb-d4af-4d35-bedf-f70db20cb010', deltek_id: '38', name: 'Royal BC Museum' },
    { id: 'e17534a5-9914-4935-93d5-2af31a2185fc', deltek_id: '57', name: 'Social Dev & Poverty Reduction' },
    { id: '1eb73bf2-5552-470e-b594-109b845ba993', deltek_id: '70', name: 'Teachers Act Special Account' },
    { id: '01f6b859-d510-4345-9d53-f39b3d52e7a9', deltek_id: '97', name: 'Tourism, Arts, Culture & Sport' },
    { id: '347862da-8de4-4ccc-a1f8-c52ea197c742', deltek_id: '116', name: 'Water, Land, Resource Stewardship' },
  ],
  remove: [],
};

export const applyMinistrySeeds = async (commandBus: CommandBus<ICommand>, eventStore: EventStoreDBClient) => {
  await applySeeds(
    ministrySeeds,
    commandBus,
    eventStore,
    CreateMinistryInput,
    CreateMinistryCommand,
    UpdateMinistryCommand,
    DeleteMinistryCommand,
    'ministry',
  );
};
